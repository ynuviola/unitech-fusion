import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

type ResponseData = {
  success: boolean;
  message: string;
  token?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log('API login endpoint called');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método no permitido' });
  }

  try {
    const { email, password } = req.body;

    // Verificar que se proporcionaron email y password
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email y contraseña son requeridos' 
      });
    }

    // Verificar si el usuario está autorizado
    const authorizedUsers = process.env.BLOG_ADMIN_USERS?.split(',') || [];
    
    if (!authorizedUsers.includes(email)) {
      return res.status(401).json({ 
        success: false, 
        message: 'Usuario no autorizado' 
      });
    }

    // Verificar la contraseña
    const correctPassword = process.env[`BLOG_ADMIN_PASSWORD_${email.split('@')[0]}`];
    
    if (password !== correctPassword) {
      return res.status(401).json({ 
        success: false, 
        message: 'Credenciales incorrectas' 
      });
    }

    // Generar token JWT
    const token = jwt.sign(
      { email, role: 'admin' },
      process.env.JWT_SECRET || 'default_secret_key',
      { expiresIn: '1h' }
    );

    return res.status(200).json({
      success: true,
      message: 'Enlace de acceso enviado correctamente',
      token
    });
  } catch (error: any) {
    console.error('Error en login API:', error);
    return res.status(500).json({ 
      success: false, 
      message: `Error del servidor: ${error.message}` 
    });
  }
}