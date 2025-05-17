import jwt from 'jsonwebtoken';
import { NextApiRequest } from 'next';

export const verifyToken = (req: NextApiRequest): { valid: boolean; email?: string } => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { valid: false };
    }
    
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret') as { email: string };
    
    // Verificar si el usuario está autorizado
    const authorizedUsers = process.env.BLOG_ADMIN_USERS?.split(',') || [];
    
    if (authorizedUsers.length > 0 && !authorizedUsers.includes(decoded.email)) {
      return { valid: false };
    }
    
    return { valid: true, email: decoded.email };
  } catch (error) {
    console.error('Error al verificar token:', error);
    return { valid: false };
  }
};