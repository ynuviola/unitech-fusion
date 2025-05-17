import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { blogPosts } from '../../data/blogPosts';
// Importar el componente ImageUploader al inicio del archivo
import ImageUploader from '../../components/ui/ImageUploader';

// Import the rich text editor with dynamic import to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

// Define author information based on email
// The authorInfo object is correctly defined with the right image path for Yasel Nuviola
const authorInfo = {
  'lisileye1988@gmail.com': {
    name: 'Lisandra Leyé',
    role: 'Máster en marketing y ventas con basta experiencia en desarrollo de negocios digitales',
    image: '/images/team/team-2.jpg'
  },
  'nuviola86@gmail.com': {
    name: 'Yasel Nuviola',
    role: 'Ingeniero en Sistemas con más de 15 años de experiencia en el sector tecnológico. Especialista en transformación digital y estrategia de TI',
    image: '/images/team/team-1.jpg'
  }
};

// Define blog post type
type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorRole: string;
  category: string;
  image: string;
  readTime: string;
  content: string;
};

export default function AdminBlog() {
  const router = useRouter();
  const { token } = router.query;
  
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [view, setView] = useState<'list' | 'edit' | 'create'>('list');
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [notification, setNotification] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null); // Token para autenticación de carga de imágenes
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  // Form state for editing/creating
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    category: '',
    content: '',
    image: '',
    readTime: ''
  });

  // Verify token and load posts
  useEffect(() => {
    const verifyToken = async () => {
      if (!token) return;

      try {
        const response = await fetch('/api/admin/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });

        if (!response.ok) {
          throw new Error('Token inválido o expirado');
        }

        const data = await response.json();
        setUserEmail(data.email);
        setAuthToken(token as string); // Guardar el token para usarlo en la carga de imágenes
        
        // Load posts
        setPosts(blogPosts);
      } catch (error) {
        console.error('Error de autenticación:', error);
        router.push('/admin/login');
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [token, router]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Auto-generate slug from title if slug field is empty
    if (name === 'title' && (!formData.slug || formData.slug === '')) {
      const slug = value
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-');
      
      setFormData(prev => ({
        ...prev,
        title: value,
        slug
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Handle rich text editor content change
  const handleContentChange = (content: string) => {
    setFormData(prev => ({
      ...prev,
      content
    }));
  };

  // Edit post
  const handleEditPost = (post: BlogPost) => {
    setCurrentPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      category: post.category,
      content: post.content,
      image: post.image,
      readTime: post.readTime
    });
    setView('edit');
  };

  // Create new post
  const handleCreatePost = () => {
    setCurrentPost(null);
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      category: '',
      content: '',
      image: '',
      readTime: '5 min'
    });
    setView('create');
  };

  // Delete post
  const handleDeletePost = async (postId: number) => {
    try {
      console.log('Intentando eliminar post con ID:', postId);
      
      // Asegurarse de que el token esté disponible
      if (!token) {
        throw new Error('No hay token de autenticación disponible');
      }
      
      // Modificar la forma en que se envía la solicitud DELETE
      const response = await fetch(`/api/admin/posts?id=${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
        // No enviamos body en la solicitud DELETE, usamos query params
      });
  
      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Respuesta de error:', errorText);
        throw new Error(`Error al eliminar: ${response.status} ${response.statusText}`);
      }
  
      // Intentar parsear la respuesta como JSON
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error('Error al parsear JSON:', jsonError);
        // Si no podemos parsear JSON, pero la respuesta fue exitosa, continuamos
        if (response.ok) {
          console.log('La eliminación fue exitosa pero no se recibió JSON válido');
        } else {
          throw new Error('Error al procesar la respuesta del servidor');
        }
      }
  
      console.log('Respuesta del servidor:', data);
  
      // Actualizar el estado local eliminando el post
      setPosts(prev => prev.filter(post => post.id !== postId));
      
      setShowDeleteConfirm(false);
      setNotification({
        type: 'success',
        message: 'Artículo eliminado correctamente'
      });
  
      // Clear notification after 3 seconds
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    } catch (error: any) {
      console.error('Error al eliminar:', error);
      setNotification({
        type: 'error',
        message: error.message || 'Error al eliminar el artículo'
      });
    }
  };

  // Save post (create or update)
  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userEmail) return;

    try {
      // Prepare post data
      const postData = {
        ...formData,
        author: authorInfo[userEmail as keyof typeof authorInfo].name,
        authorRole: authorInfo[userEmail as keyof typeof authorInfo].role,
        date: new Date().toLocaleDateString('es-ES', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        id: currentPost ? currentPost.id : Date.now()
      };

      const method = currentPost ? 'PUT' : 'POST';
      const isNewPost = !currentPost;
      
      const response = await fetch('/api/admin/posts', {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error(`Error al ${currentPost ? 'actualizar' : 'crear'} el artículo`);
      }

      const savedPost = await response.json();

      // Update local state
      if (currentPost) {
        setPosts(prev => prev.map(post => post.id === currentPost.id ? savedPost.data : post));
      } else {
        setPosts(prev => [...prev, savedPost.data]);
        
        // Solo enviar notificación por correo cuando se crea un nuevo artículo
        if (!currentPost) {
          try {
            console.log('Enviando notificación a suscriptores...');
            const notifyResponse = await fetch('/api/admin/notify-subscribers', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Usar el token JWT que ya tienes
              },
              body: JSON.stringify({
                articleTitle: postData.title,
                articleSlug: postData.slug,
                articleExcerpt: postData.excerpt,
                articleImage: postData.image
              }),
            });
            
            const notifyResult = await notifyResponse.json();
            
            if (notifyResponse.ok) {
              console.log('Notificación enviada:', notifyResult.message);
            } else {
              console.error('Error al enviar notificaciones:', notifyResult.message);
            }
          } catch (notifyError) {
            console.error('Error al enviar notificaciones:', notifyError);
            // No interrumpimos el flujo principal si falla la notificación
          }
        }
      }

      setView('list');
      setNotification({
        type: 'success',
        message: `Artículo ${currentPost ? 'actualizado' : 'creado'} correctamente`
      });

      // Clear notification after 3 seconds
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    } catch (error: any) {
      setNotification({
        type: 'error',
        message: error.message
      });
    }
  };

  // If loading or not authenticated
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!userEmail) {
    router.push('/admin/login');
    return null;
  }

  return (
    <>
      <Head>
        <title>Administración del Blog | Unitech Fusion</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/images/utf-logo.jpg" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        {/* Header con botón de cierre de sesión */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Unitech Fusion"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
              <h1 className="ml-4 text-xl font-montserrat font-bold text-gray-900">
                Administración del Blog
              </h1>
            </div>
            <div className="flex items-center">
              <div className="mr-4 text-right">
                <p className="text-sm font-medium text-gray-900">{authorInfo[userEmail as keyof typeof authorInfo]?.name}</p>
                <p className="text-xs text-gray-500">{userEmail}</p>
              </div>
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src={authorInfo[userEmail as keyof typeof authorInfo]?.image}
                  alt={authorInfo[userEmail as keyof typeof authorInfo]?.name}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Reemplazar botón de cierre de sesión por icono */}
              <button
                onClick={handleLogout}
                className="ml-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                title="Cerrar sesión"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Notification */}
          {notification && (
            <div className={`mb-6 p-4 rounded-md ${notification.type === 'success' ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className="flex">
                <div className="flex-shrink-0">
                  {notification.type === 'success' ? (
                    <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${notification.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                    {notification.message}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* List View */}
          {view === 'list' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-montserrat font-bold text-gray-900">
                  Artículos del Blog
                </h2>
                <button
                  onClick={handleCreatePost}
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Nuevo Artículo
                </button>
              </div>

              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {posts.map((post) => (
                    <li key={post.id}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12 rounded-md overflow-hidden">
                              <Image
                                src={post.image}
                                alt={post.title}
                                width={48}
                                height={48}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900">{post.title}</h3>
                              <div className="flex items-center text-sm text-gray-500">
                                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-2">
                                  {post.category}
                                </span>
                                <span>{post.date}</span>
                                <span className="mx-2">•</span>
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEditPost(post)}
                              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm flex items-center"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                              </svg>
                              Editar
                            </button>
                            <button
                              onClick={() => {
                                setCurrentPost(post);
                                setShowDeleteConfirm(true);
                              }}
                              className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded-md text-sm flex items-center"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              Eliminar
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Edit/Create View */}
          {(view === 'edit' || view === 'create') && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-montserrat font-bold text-gray-900">
                  {view === 'edit' ? 'Editar Artículo' : 'Crear Nuevo Artículo'}
                </h2>
                <button
                  onClick={() => setView('list')}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Volver a la lista
                </button>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6">
                <form onSubmit={handleSavePost}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Título del artículo *
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        placeholder="Ej: Cómo implementar IA en PyMEs sin grandes inversiones"
                      />
                    </div>

                    <div>
                      <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                        Slug (URL) *
                      </label>
                      <input
                        type="text"
                        id="slug"
                        name="slug"
                        required
                        value={formData.slug}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        placeholder="Ej: implementacion-ia-pymes"
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        El slug se genera automáticamente a partir del título, pero puedes personalizarlo.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Categoría *
                      </label>
                      <input
                        type="text"
                        id="category"
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        placeholder="Ej: Transformación Digital"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                        Extracto *
                      </label>
                      <textarea
                        id="excerpt"
                        name="excerpt"
                        required
                        value={formData.excerpt}
                        onChange={handleInputChange}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        placeholder="Breve descripción del artículo (aparecerá en las tarjetas de vista previa)"
                      />
                    </div>

                    {/* Reemplazar el campo de URL de imagen por el componente ImageUploader */}
                    <div>
                      <ImageUploader 
                        currentImage={formData.image}
                        onImageChange={(imageUrl) => setFormData(prev => ({ ...prev, image: imageUrl }))}
                        token={authToken || ''}
                      />
                    </div>

                    <div>
                      <label htmlFor="readTime" className="block text-sm font-medium text-gray-700 mb-1">
                        Tiempo de lectura *
                      </label>
                      <input
                        type="text"
                        id="readTime"
                        name="readTime"
                        required
                        value={formData.readTime}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        placeholder="Ej: 5 min"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                        Contenido del artículo *
                      </label>
                      <div className="mt-1 border border-gray-300 rounded-md overflow-hidden">
                        {typeof window !== 'undefined' && (
                          <ReactQuill
                            theme="snow"
                            value={formData.content}
                            onChange={handleContentChange}
                            modules={{
                              toolbar: [
                                [{ 'header': [1, 2, 3, false] }],
                                ['bold', 'italic', 'underline', 'strike'],
                                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                ['link'],
                                ['clean'],
                                [{ 'align': [] }],
                              ],
                            }}
                            formats={[
                              'header',
                              'bold', 'italic', 'underline', 'strike',
                              'list', 'bullet',
                              'link',
                              'align'
                            ]}
                            style={{ height: '300px' }}
                          />
                        )}
                      </div>
                      <p className="mt-1 text-xs text-gray-500">
                        Utiliza el editor para dar formato al contenido. Para mantener la consistencia con el diseño del sitio, se recomienda usar párrafos con la clase "text-justify mb-4".
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setView('list')}
                      className="mr-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      {view === 'edit' ? 'Actualizar artículo' : 'Publicar artículo'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Delete Confirmation Modal */}
          {showDeleteConfirm && currentPost && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Confirmar eliminación</h3>
                <p className="text-gray-500 mb-6">
                  ¿Estás seguro de que deseas eliminar el artículo "{currentPost.title}"? Esta acción no se puede deshacer.
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="mr-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => handleDeletePost(currentPost.id)}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Diálogo de confirmación para cerrar sesión */}
        {showLogoutConfirm && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Confirmar cierre de sesión</h3>
              <p className="text-gray-500 mb-6">
                ¿Estás seguro de que deseas cerrar la sesión de administración? Tendrás que iniciar sesión nuevamente para acceder.
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="mr-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    router.push('/admin/login');
                    setShowLogoutConfirm(false);
                  }}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}