import type { NextApiRequest, NextApiResponse } from 'next';
import { addSubscriber, isEmailRegistered } from '../../lib/db';
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
  console.log('Newsletter subscription endpoint called');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { email, nombre, captchaValue } = req.body;
  
  console.log('Datos recibidos:', { email, nombre, captchaValue: captchaValue ? 'Presente' : 'No presente' });

  // Verificar que se proporcionó un email
  if (!email) {
    return res.status(400).json({ 
      success: false, 
      message: 'El correo electrónico es obligatorio.' 
    });
  }

  // Verificar el captcha
  if (captchaValue) {
    const isCaptchaValid = await verifyCaptcha(captchaValue);
    console.log('Resultado de verificación de captcha:', isCaptchaValid);
    
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

  try {
    // Verificar si el correo ya está registrado
    const emailExists = await isEmailRegistered(email);
    console.log('¿El email ya existe?', emailExists);
    
    if (emailExists) {
      return res.status(200).json({ 
        success: true, 
        message: 'Ya estás suscrito a nuestro newsletter.' 
      });
    }

    // Guardar el suscriptor en la base de datos
    const result = await addSubscriber(email, nombre || 'Suscriptor al Newsletter');
    console.log('Resultado de añadir suscriptor:', result);

    if (!result.success) {
      throw new Error(result.error || 'Error al registrar suscriptor');
    }

    res.status(200).json({ 
      success: true, 
      message: '¡Gracias por suscribirte a nuestro newsletter!' 
    });
  } catch (error: any) {
    console.error('Error al procesar la suscripción:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al procesar la suscripción. Por favor, inténtelo de nuevo.' 
    });
  }
}