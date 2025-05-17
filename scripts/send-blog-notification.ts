import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Función para enviar notificación de nuevo artículo
async function sendBlogNotification(
  articleTitle: string,
  articleUrl: string,
  articleImage: string,
  articleSummary: string
) {
  try {
    const apiUrl = process.env.NODE_ENV === 'production'
      ? 'https://www.unitechfusion.com/api/send-newsletter'
      : 'http://localhost:3000/api/send-newsletter';
    
    const apiKey = process.env.NEWSLETTER_API_KEY;
    
    if (!apiKey) {
      throw new Error('NEWSLETTER_API_KEY no está definida en las variables de entorno');
    }

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey
      },
      body: JSON.stringify({
        subject: `Nuevo artículo: ${articleTitle}`,
        content: `
          <p>Hemos publicado un nuevo artículo en nuestro blog que podría interesarte:</p>
          <p>${articleSummary}</p>
        `,
        articleTitle,
        articleUrl,
        articleImage
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Error al enviar la notificación');
    }

    console.log('Notificación enviada correctamente:', data.message);
    return data;
  } catch (error) {
    console.error('Error al enviar la notificación:', error);
    throw error;
  }
}

// Ejecutar el script con los parámetros del artículo
// Ejemplo: node send-blog-notification.js "Título del artículo" "https://url-del-articulo" "https://url-de-la-imagen" "Resumen del artículo"
(async () => {
  try {
    const [articleTitle, articleUrl, articleImage, ...summaryParts] = process.argv.slice(2);
    const articleSummary = summaryParts.join(' ');
    
    if (!articleTitle || !articleUrl || !articleSummary) {
      console.error('Uso: node send-blog-notification.js "Título del artículo" "URL del artículo" "URL de la imagen" "Resumen del artículo"');
      process.exit(1);
    }
    
    await sendBlogNotification(articleTitle, articleUrl, articleImage, articleSummary);
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
})();