import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '../../../lib/auth';
import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Verificar método
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Método no permitido' 
    });
  }

  // Verificar autenticación usando la función verifyToken
  const auth = verifyToken(req);
  
  if (!auth.valid) {
    console.error('Error de autenticación: Token inválido o no proporcionado');
    return res.status(401).json({ 
      success: false, 
      message: 'No autorizado' 
    });
  }

  try {
    const { articleTitle, articleSlug, articleExcerpt, articleImage } = req.body;

    if (!articleTitle || !articleSlug || !articleExcerpt) {
      return res.status(400).json({
        success: false,
        message: 'Faltan datos del artículo'
      });
    }

    // Determinar el entorno
// Remove this line as it's already declared below
    
    // Configurar conexión a la base de datos con opciones adecuadas
    const isProduction = process.env.NODE_ENV === 'production';
    const host = isProduction ? process.env.DB_HOST_PROD : process.env.DB_HOST_DEV;
    const user = isProduction ? process.env.DB_USER_PROD : process.env.DB_USER_DEV;
    const password = isProduction ? process.env.DB_PASSWORD_PROD : process.env.DB_PASSWORD_DEV;
    const database = isProduction ? process.env.DB_NAME_PROD : process.env.DB_NAME_DEV;
    
    // Extraer el puerto si está incluido en el host
    let port = 3306;
    const hostParts = host?.split(':');
    if (hostParts && hostParts.length > 1) {
      const parsedPort = parseInt(hostParts[1], 10);
      if (!isNaN(parsedPort)) {
        port = parsedPort;
      }
    }
    
    const connection = await mysql.createConnection({
      host: hostParts ? hostParts[0] : host,
      port: port,
      user,
      password,
      database
    });
    
    console.log('Conexión a la base de datos establecida correctamente');

    // Obtener todos los suscriptores
    const [subscribers] = await connection.execute(
      'SELECT email, name FROM subscribers'
    );
    
    console.log('Suscriptores encontrados:', (subscribers as any[]).length);
    
    await connection.end();

    if (!Array.isArray(subscribers) || subscribers.length === 0) {
      return res.status(200).json({
        success: true,
        message: 'No hay suscriptores activos para notificar'
      });
    }

    // Construir la URL completa del artículo
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.unitechfusion.com';
    const articleUrl = `${baseUrl}/blog/${articleSlug}`;

    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'unitechfusion41@gmail.com',
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: process.env.NODE_ENV === 'production'
      }
    });

    // Enviar correo a cada suscriptor
    const emailPromises = (subscribers as any[]).map(async (subscriber) => {
      try {
        // Crear la plantilla HTML del correo
        const htmlContent = getEmailTemplate({
          name: subscriber.name || 'Estimado/a',
          articleTitle,
          articleUrl,
          articleExcerpt,
          articleImage,
          email: subscriber.email
        });

        // Enviar el correo
        await transporter.sendMail({
          from: `"Unitech Fusion" <${process.env.EMAIL_USER || 'unitechfusion41@gmail.com'}>`,
          to: subscriber.email,
          subject: `Nuevo artículo: ${articleTitle} | Unitech Fusion`,
          html: htmlContent,
        });
        
        return true;
      } catch (error) {
        console.error(`Error al enviar correo a ${subscriber.email}:`, error);
        return false;
      }
    });

    const results = await Promise.all(emailPromises);
    const successCount = results.filter(Boolean).length;

    return res.status(200).json({
      success: true,
      message: `Notificación enviada a ${successCount} de ${subscribers.length} suscriptores`
    });
  } catch (error) {
    console.error('Error al notificar a los suscriptores:', error);
    return res.status(500).json({
      success: false,
      message: 'Error al enviar las notificaciones: ' + (error instanceof Error ? error.message : 'Error desconocido')
    });
  }
}

// Función para generar la plantilla de correo
function getEmailTemplate({
  name,
  articleTitle,
  articleUrl,
  articleExcerpt,
  articleImage,
  email
}: {
  name: string;
  articleTitle: string;
  articleUrl: string;
  articleExcerpt: string;
  articleImage: string;
  email: string;
}) {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo artículo en el blog de Unitech Fusion</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          text-align: center;
          padding: 20px 0;
          background: linear-gradient(to right, #0056b3, #00a0e9);
          color: white;
        }
        .logo {
          max-width: 150px;
          height: auto;
        }
        .content {
          padding: 20px;
          background-color: #ffffff;
        }
        .article-image {
          width: 100%;
          max-width: 560px;
          height: auto;
          border-radius: 8px;
          margin: 0 auto 20px auto;
          display: block;
        }
        .article-title {
          font-size: 24px;
          font-weight: bold;
          color: #0056b3;
          margin-bottom: 10px;
        }
        .article-excerpt {
          margin-bottom: 20px;
          color: #555;
        }
        .cta-button {
          display: inline-block;
          background-color: #0056b3;
          color: white !important;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 4px;
          font-weight: bold;
          margin: 20px 0;
        }
        .footer {
          text-align: center;
          padding: 20px;
          font-size: 12px;
          color: #666;
          background-color: #f5f5f5;
        }
        .social-links {
          margin: 15px 0;
        }
        .social-link {
          display: inline-block;
          margin: 0 10px;
          color: #0056b3;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://www.unitechfusion.com/images/logo.png" alt="Unitech Fusion" class="logo">
          <h1>Nuevo Artículo en Nuestro Blog</h1>
        </div>
        
        <div class="content">
          <p>Hola ${name},</p>
          
          <p>Hemos publicado un nuevo artículo en nuestro blog que podría interesarte:</p>
          
          ${articleImage ? `<img src="${articleImage}" alt="${articleTitle}" class="article-image" style="width: 100%; max-width: 560px; height: auto; display: block; margin: 0 auto 20px auto; border-radius: 8px;">` : ''}
          
          <div class="article-title">${articleTitle}</div>
          
          <div class="article-excerpt">
            ${articleExcerpt}
          </div>
          
          <a href="${articleUrl}" class="cta-button" style="color: white !important; background-color: #0056b3; display: inline-block; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Leer el artículo completo</a>
          
          <p>Si tienes alguna pregunta o necesitas más información sobre nuestros servicios, no dudes en contactarnos.</p>
          
          <a href="mailto:unitechfusion41@gmail.com" class="cta-button" style="background-color: #28a745; color: white !important; display: inline-block; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Contactar con Unitech Fusion</a>
        </div>
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} Unitech Fusion. Todos los derechos reservados.</p>
          
          <div class="social-links">
            <a href="https://www.facebook.com/people/Unitech-Fusion/61576363103622/" class="social-link" target="_blank">Facebook</a>
            <a href="https://www.linkedin.com/company/unitech-fusion/posts/?feedView=all" class="social-link" target="_blank">LinkedIn</a>
            <a href="https://www.instagram.com/unitech_fusion/" class="social-link" target="_blank">Instagram</a>
          </div>
          
          <p>
            Si no deseas recibir más correos como este, puedes 
            <a href="https://www.unitechfusion.com/unsubscribe?email=${encodeURIComponent(email)}">darte de baja aquí</a>.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}