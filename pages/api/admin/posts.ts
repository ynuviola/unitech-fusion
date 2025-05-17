import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { promises as fs } from 'fs';
import path from 'path';
import { BlogPost } from '../../../types/blog';

type ResponseData = {
  success: boolean;
  message?: string;
  data?: any;
};

// Ruta al archivo de datos del blog
const blogPostsFilePath = path.join(process.cwd(), 'src/data/blogPosts.ts');

// Función para verificar el token de autenticación
const verifyToken = (req: NextApiRequest): { valid: boolean; email?: string } => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { valid: false };
    }
    
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret') as { email: string };
    
    // Verificar si el usuario está autorizado
    const authorizedUsers = process.env.BLOG_ADMIN_USERS?.split(',') || [];
    
    if (!authorizedUsers.includes(decoded.email)) {
      return { valid: false };
    }
    
    return { valid: true, email: decoded.email };
  } catch (error) {
    return { valid: false };
  }
};

// Función para leer los artículos del blog
const readBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const fileContent = await fs.readFile(blogPostsFilePath, 'utf8');
    
    // Extraer el array de blogPosts del archivo
    const match = fileContent.match(/export const blogPosts = (\[[\s\S]*?\]);/);
    
    if (!match || !match[1]) {
      throw new Error('No se pudo extraer el array de blogPosts');
    }
    
    // Evaluar el string para convertirlo en un array de objetos
    // Nota: esto es seguro porque estamos controlando el contenido
    const blogPostsArray = eval(match[1]) as BlogPost[];
    
    return blogPostsArray;
  } catch (error) {
    console.error('Error al leer los artículos del blog:', error);
    return [];
  }
};

// Función para escribir los artículos del blog
const writeBlogPosts = async (posts: BlogPost[]): Promise<boolean> => {
  try {
    // Ordenar los posts por ID (descendente)
    const sortedPosts = [...posts].sort((a, b) => b.id - a.id);
    
    // Crear el contenido del archivo
    const fileContent = `// Datos completos de los artículos del blog
export const blogPosts = ${JSON.stringify(sortedPosts, null, 2)};

// Función para obtener artículos relacionados
export const getRelatedPosts = (currentSlug: string) => {
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, 2); // Obtener solo 2 artículos relacionados
};
`;
    
    // Escribir el archivo
    await fs.writeFile(blogPostsFilePath, fileContent, 'utf8');
    
    return true;
  } catch (error) {
    console.error('Error al escribir los artículos del blog:', error);
    return false;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Verificar autenticación
  const auth = verifyToken(req);
  
  if (!auth.valid) {
    return res.status(401).json({ 
      success: false, 
      message: 'No autorizado' 
    });
  }

  // GET - Obtener todos los artículos
  if (req.method === 'GET') {
    try {
      const posts = await readBlogPosts();
      return res.status(200).json({ 
        success: true, 
        data: posts 
      });
    } catch (error: any) {
      return res.status(500).json({ 
        success: false, 
        message: `Error al obtener los artículos: ${error.message}` 
      });
    }
  }
  
  // POST - Crear un nuevo artículo
  else if (req.method === 'POST') {
    try {
      const newPost = req.body as BlogPost;
      const posts = await readBlogPosts();
      
      // Asignar un nuevo ID (el mayor ID + 1)
      const maxId = posts.reduce((max, post) => Math.max(max, post.id), 0);
      newPost.id = maxId + 1;
      
      // Añadir el nuevo post
      posts.push(newPost);
      
      // Guardar los cambios
      const success = await writeBlogPosts(posts);
      
      if (!success) {
        throw new Error('Error al guardar el artículo');
      }
      
      return res.status(201).json({ 
        success: true, 
        data: newPost,
        message: 'Artículo creado correctamente'
      });
    } catch (error: any) {
      return res.status(500).json({ 
        success: false, 
        message: `Error al crear el artículo: ${error.message}` 
      });
    }
  }
  
  // PUT - Actualizar un artículo existente
  else if (req.method === 'PUT') {
    try {
      const updatedPost = req.body as BlogPost;
      const posts = await readBlogPosts();
      
      // Encontrar el índice del post a actualizar
      const index = posts.findIndex(post => post.id === updatedPost.id);
      
      if (index === -1) {
        return res.status(404).json({ 
          success: false, 
          message: 'Artículo no encontrado' 
        });
      }
      
      // Actualizar el post
      posts[index] = updatedPost;
      
      // Guardar los cambios
      const success = await writeBlogPosts(posts);
      
      if (!success) {
        throw new Error('Error al actualizar el artículo');
      }
      
      return res.status(200).json({ 
        success: true, 
        data: updatedPost,
        message: 'Artículo actualizado correctamente'
      });
    } catch (error: any) {
      return res.status(500).json({ 
        success: false, 
        message: `Error al actualizar el artículo: ${error.message}` 
      });
    }
  }
  
  // DELETE - Eliminar un artículo
  else if (req.method === 'DELETE') {
    try {
      // Obtener el ID del artículo de los parámetros de consulta
      const { id } = req.query;
      
      console.log('Solicitud de eliminación recibida para ID:', id);
      console.log('Tipo de ID:', typeof id);
      
      if (!id) {
        console.log('Error: ID no proporcionado');
        return res.status(400).json({ 
          success: false, 
          message: 'ID del artículo no proporcionado' 
        });
      }
      
      const posts = await readBlogPosts();
      console.log('Total de posts antes de eliminar:', posts.length);
      
      // Asegurarse de que estamos comparando el mismo tipo de datos
      // Convertir id a número si es necesario
      const postId = typeof id === 'string' ? parseInt(id, 10) : id;
      
      // Encontrar el índice del post a eliminar
      const index = posts.findIndex(post => post.id === postId);
      console.log('Índice del post a eliminar:', index);
      
      if (index === -1) {
        console.log('Error: Artículo no encontrado');
        return res.status(404).json({ 
          success: false, 
          message: 'Artículo no encontrado' 
        });
      }
      
      // Eliminar el post
      posts.splice(index, 1);
      console.log('Total de posts después de eliminar:', posts.length);
      
      // Guardar los cambios
      const success = await writeBlogPosts(posts);
      console.log('Resultado de escritura:', success);
      
      if (!success) {
        throw new Error('Error al eliminar el artículo');
      }
      
      console.log('Artículo eliminado correctamente');
      return res.status(200).json({ 
        success: true, 
        message: 'Artículo eliminado correctamente' 
      });
    } catch (error: any) {
      console.error('Error al eliminar artículo:', error);
      return res.status(500).json({ 
        success: false, 
        message: `Error al eliminar el artículo: ${error.message}` 
      });
    }
  }
  
  // Método no permitido
  else {
    return res.status(405).json({ 
      success: false, 
      message: 'Método no permitido' 
    });
  }
}