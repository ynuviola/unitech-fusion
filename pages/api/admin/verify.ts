import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

type ResponseData = {
  success: boolean;
  message?: string;
  email?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ 
      success: false, 
      message: 'Token no proporcionado' 
    });
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret') as { email: string };
    
    // Verificar si el usuario está autorizado
    const authorizedUsers = process.env.BLOG_ADMIN_USERS?.split(',') || [];
    
    if (!authorizedUsers.includes(decoded.email)) {
      return res.status(401).json({ 
        success: false, 
        message: 'Usuario no autorizado' 
      });
    }

    return res.status(200).json({ 
      success: true, 
      email: decoded.email 
    });
  } catch (error) {
    return res.status(401).json({ 
      success: false, 
      message: 'Token inválido o expirado' 
    });
  }
}