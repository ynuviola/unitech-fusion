import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
import { addSubscriber } from '../../lib/db';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Función para verificar el captcha con Google
async function verifyCaptcha(captchaValue: string) {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'; // Clave de prueba
    
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaValue}`,
      {
        method: 'POST',
      }
    );
    
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error verificando captcha:', error);
    return false;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('API endpoint called');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    nombre,
    email,
    telefono,
    empresa,
    servicio,
    mensaje,
    destinationEmail,
    subject,
    captchaValue,
    isEbookRequest
  } = req.body;

  // Verificar el captcha
  if (captchaValue) {
    const isCaptchaValid = await verifyCaptcha(captchaValue);
    
    if (!isCaptchaValid) {
      return res.status(400).json({ 
        success: false, 
        message: 'Verificación de captcha fallida. Por favor, inténtelo de nuevo.' 
      });
    }
  } else {
    return res.status(400).json({ 
      success: false, 
      message: 'Se requiere verificación de captcha.' 
    });
  }

  // Configurar el transporter de nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'unitechfusion41@gmail.com',
      pass: process.env.EMAIL_PASSWORD,
    },
    // Configuración para manejar certificados SSL
    tls: {
      // En desarrollo, no verificar certificados
      // En producción, esto debería ser true
      rejectUnauthorized: process.env.NODE_ENV === 'production'
    }
  });

  try {
    // Si es una solicitud de e-book, guardar en la base de datos
    if (isEbookRequest && email) {
      try {
        const result = await addSubscriber(email, nombre || 'Suscriptor al E-book');
        console.log('Subscriber result:', result);
      } catch (error) {
        console.error('Error saving to database:', error);
        // Continuamos con el envío del correo aunque haya error en la BD
      }
    }

    // Preparar el correo para el administrador
    const adminMailOptions = {
      from: process.env.EMAIL_FROM || 'unitechfusion41@gmail.com',
      to: destinationEmail || 'unitechfusion41@gmail.com',
      subject: subject || 'Nuevo mensaje desde el sitio web',
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre || 'No proporcionado'}</p>
        <p><strong>Email:</strong> ${email || 'No proporcionado'}</p>
        ${telefono ? `<p><strong>Teléfono:</strong> ${telefono}</p>` : ''}
        ${empresa ? `<p><strong>Empresa:</strong> ${empresa}</p>` : ''}
        ${servicio ? `<p><strong>Servicio de interés:</strong> ${servicio}</p>` : ''}
        <p><strong>Mensaje:</strong> ${mensaje || 'No proporcionado'}</p>
      `,
    };

    // Enviar correo al administrador
    await transporter.sendMail(adminMailOptions);
    console.log('Email sent to admin successfully');

    // Si es una solicitud de e-book, enviar correo al usuario con el libro adjunto
    if (isEbookRequest && email) {
      // Ruta al archivo PDF del libro
      const bookPath = path.join(process.cwd(), 'public', 'Libro', 'IA para PyMEs y medianas empresas (UTF).pdf');
      
      // Verificar si el archivo existe
      if (!fs.existsSync(bookPath)) {
        console.error('Book file not found:', bookPath);
        return res.status(500).json({ 
          success: false, 
          message: 'Error al enviar el libro. Archivo no encontrado.' 
        });
      }

      // Preparar el correo para el usuario con el libro adjunto
      const userMailOptions = {
        from: process.env.EMAIL_FROM || 'unitechfusion41@gmail.com',
        to: email,
        subject: '¡Tu E-book de IA para PyMEs está listo!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2b7aec;">¡Gracias por suscribirte!</h2>
            <p>Estimado/a ${nombre || 'Suscriptor/a'},</p>
            <p>Nos complace enviarte tu copia del e-book <strong>"IA para PyMEs: Guía Práctica para Implementar Inteligencia Artificial en tu Negocio"</strong>.</p>
            <p>En este libro encontrarás información valiosa sobre cómo implementar soluciones de IA en tu empresa sin necesidad de grandes inversiones.</p>
            <p>Si tienes alguna pregunta o necesitas asesoramiento personalizado, no dudes en contactarnos.</p>
            <p>¡Esperamos que disfrutes la lectura!</p>
            <p style="margin-top: 30px;">Saludos cordiales,</p>
            <p><strong>El equipo de Unitech Fusion</strong></p>
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
              <p>Este correo fue enviado porque solicitaste el e-book desde nuestro sitio web. Si no solicitaste esta información, puedes ignorar este mensaje.</p>
            </div>
          </div>
        `,
        attachments: [
          {
            filename: 'IA para PyMEs - Unitech Fusion.pdf',
            path: bookPath
          }
        ]
      };

      // Enviar correo al usuario
      await transporter.sendMail(userMailOptions);
      console.log('Email with book sent to user successfully');
    }

    res.status(200).json({ success: true, message: 'Mensaje enviado correctamente' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error al enviar el mensaje. Por favor, inténtelo de nuevo.' });
  }
}