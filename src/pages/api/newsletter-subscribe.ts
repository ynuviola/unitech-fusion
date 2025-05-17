import type { NextApiRequest, NextApiResponse } from 'next';
import { isEmailRegisteredInSupabase, migrateSubscriberToSupabase } from '../../lib/supabase';
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
    console.error('Error al verificar captcha:', error);
    return false;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Solo permitir método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { email, nombre, captchaValue } = req.body;
    
    // Validar email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Por favor, introduce un correo electrónico válido.' 
      });
    }
    
    // Verificar captcha
    if (!captchaValue) {
      return res.status(400).json({ 
        success: false, 
        message: 'Por favor, complete el captcha para verificar que no es un robot.' 
      });
    }
    
    const isCaptchaValid = await verifyCaptcha(captchaValue);
    if (!isCaptchaValid) {
      return res.status(400).json({ 
        success: false, 
        message: 'Verificación de captcha fallida. Por favor, inténtelo de nuevo.' 
      });
    }
    
    // Verificar si el email ya está registrado
    const isRegistered = await isEmailRegisteredInSupabase(email);
    if (isRegistered) {
      return res.status(400).json({ 
        success: false, 
        message: 'Este correo electrónico ya está suscrito a nuestro newsletter.' 
      });
    }
    
    // Agregar suscriptor a la base de datos
    await migrateSubscriberToSupabase(email, nombre || '');
    
    // Responder con éxito
    return res.status(200).json({ 
      success: true, 
      message: '¡Gracias por suscribirte! Recibirás nuestras actualizaciones.' 
    });
    
  } catch (error) {
    console.error('Error al procesar la suscripción:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error al procesar la suscripción. Por favor, inténtelo de nuevo más tarde.' 
    });
  }
}