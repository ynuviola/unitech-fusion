import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import formidable from 'formidable';
import { verifyToken } from '../../../lib/auth';

export const config = {
  api: {
    bodyParser: false,
  },
};

type ResponseData = {
  success: boolean;
  message?: string;
  imageUrl?: string;
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

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método no permitido' });
  }

  try {
    // Asegurarse de que el directorio existe
    const uploadDir = path.join(process.cwd(), 'public/images/blog');
    try {
      await fs.access(uploadDir);
    } catch (error) {
      await fs.mkdir(uploadDir, { recursive: true });
    }

    const form = formidable({
      uploadDir,
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024, // 5MB
      filter: (part) => {
        return part.name === 'image' && (part.mimetype?.includes('jpeg') || part.mimetype?.includes('jpg'));
      },
      filename: (name, ext, part, form) => {
        // Generar un nombre único basado en timestamp
        return `blog-${Date.now()}${ext}`;
      }
    });

    return new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error('Error al procesar la imagen:', err);
          return res.status(500).json({ 
            success: false, 
            message: `Error al procesar la imagen: ${err.message}` 
          });
        }

        const file = Array.isArray(files.image) ? files.image[0] : files.image;
        
        if (!file) {
          return res.status(400).json({ 
            success: false, 
            message: 'No se ha proporcionado una imagen válida o el formato no es JPG' 
          });
        }

        // Obtener la ruta relativa para usar en el frontend
        const relativePath = `/images/blog/${path.basename(file.filepath)}`;
        
        return res.status(200).json({ 
          success: true, 
          message: 'Imagen subida correctamente',
          imageUrl: relativePath
        });
      });
    });
  } catch (error: any) {
    console.error('Error al subir la imagen:', error);
    return res.status(500).json({ 
      success: false, 
      message: `Error al subir la imagen: ${error.message}` 
    });
  }
}