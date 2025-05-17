import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { getSubscribers } from '../../lib/db';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Verificar API key para seguridad
const verifyApiKey = (providedKey: string) => {
  const validKey = process.env.NEWSLETTER_API_KEY;
  return validKey && providedKey === validKey;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('Send newsletter endpoint called');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Verificar API key para seguridad
  const apiKey = req.headers['x-api-key'] as string;
  if (!verifyApiKey(apiKey)) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  const { subject, content, articleUrl, articleTitle, articleImage } = req.body;

  if (!subject || !content) {
    return res.status(400).json({ 
      success: false, 
      message: 'El asunto y contenido son obligatorios' 
    });
  }

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

  try {
    // Obtener todos los suscriptores
    const subscribers = await getSubscribers();

    // Corregir la verificación de subscribers
    if (!subscribers || !Array.isArray(subscribers) || subscribers.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No hay suscriptores registrados'
      });
    }

    console.log(`Enviando newsletter a ${subscribers.length} suscriptores`);

    // Preparar el HTML del correo
    const generateEmailHtml = (name: string) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2b7aec;">Unitech Fusion - Newsletter</h2>
        <p>Hola ${name},</p>
        
        ${content}
        
        ${articleTitle && articleUrl ? `
        <div style="margin: 30px 0; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          ${articleImage ? `<img src="${articleImage}" alt="${articleTitle}" style="max-width: 100%; height: auto; margin-bottom: 15px;">` : ''}
          <h3 style="margin-top: 0;">${articleTitle}</h3>
          <p><a href="${articleUrl}" style="color: #2b7aec; text-decoration: none; font-weight: bold;">Leer artículo completo →</a></p>
        </div>
        ` : ''}
        
        <p style="margin-top: 30px;">Saludos cordiales,</p>
        <p><strong>El equipo de Unitech Fusion</strong></p>
        
        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
          <p>Recibes este correo porque estás suscrito a nuestro newsletter. Si deseas darte de baja, responde a este correo con el asunto "CANCELAR SUSCRIPCIÓN".</p>
        </div>
      </div>
    `;

    // Enviar correos en lotes para evitar límites de envío
    const batchSize = 50;
    const totalBatches = Math.ceil(subscribers.length / batchSize);
    
    for (let i = 0; i < totalBatches; i++) {
      const batch = subscribers.slice(i * batchSize, (i + 1) * batchSize);
      
      // Enviar correos en paralelo dentro del lote
      await Promise.all(batch.map(async (subscriber) => {
        const mailOptions = {
          from: process.env.EMAIL_FROM || 'unitechfusion41@gmail.com',
          to: subscriber.email,
          subject: subject,
          html: generateEmailHtml(subscriber.name || 'Suscriptor'),
        };
        
        return transporter.sendMail(mailOptions);
      }));
      
      console.log(`Batch ${i + 1}/${totalBatches} enviado`);
      
      // Esperar un poco entre lotes para evitar límites de envío
      if (i < totalBatches - 1) {
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }

    res.status(200).json({ 
      success: true, 
      message: `Newsletter enviado a ${subscribers.length} suscriptores` 
    });
  } catch (error) {
    console.error('Error al enviar newsletter:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al enviar newsletter' 
    });
  }
}