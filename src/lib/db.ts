import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Determinar el entorno
const isProduction = process.env.NODE_ENV === 'production';

// Parse the port to ensure it's a number
const parsePort = (port: string | undefined): number => {
  if (!port) return 3306; // Default MySQL port
  const parsedPort = parseInt(port, 10);
  return isNaN(parsedPort) ? 3306 : parsedPort;
};

// Extract host and port from connection string (if in format host:port)
const getHostAndPort = (connectionString: string | undefined): { host: string, port: number } => {
  if (!connectionString) return { host: 'localhost', port: 3306 };
  
  const parts = connectionString.split(':');
  if (parts.length === 1) {
    return { host: parts[0], port: 3306 };
  } else {
    return { 
      host: parts[0], 
      port: parsePort(parts[1])
    };
  }
};

// Get connection details
const devConnection = getHostAndPort(process.env.DB_HOST_DEV);
const prodConnection = getHostAndPort(process.env.DB_HOST_PROD);

// Configuración de la base de datos según el entorno
const dbConfig = {
  host: isProduction ? prodConnection.host : devConnection.host,
  port: isProduction ? prodConnection.port : devConnection.port,
  user: isProduction ? process.env.DB_USER_PROD : process.env.DB_USER_DEV,
  password: isProduction ? process.env.DB_PASSWORD_PROD : process.env.DB_PASSWORD_DEV,
  database: isProduction ? process.env.DB_NAME_PROD : process.env.DB_NAME_DEV,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Crear pool de conexiones
const pool = mysql.createPool(dbConfig);

// Inicializar la base de datos
export async function initDatabase() {
  try {
    // Crear una conexión sin especificar la base de datos
    const tempConfig = { ...dbConfig };
    delete tempConfig.database;
    const tempPool = mysql.createPool(tempConfig);
    
    // Crear la base de datos si no existe
    await tempPool.query(`CREATE DATABASE IF NOT EXISTS ${dbConfig.database}`);
    console.log(`Base de datos '${dbConfig.database}' creada o verificada correctamente`);
    
    // Seleccionar la base de datos
    await tempPool.query(`USE ${dbConfig.database}`);
    
    // Crear tabla de suscriptores si no existe
    await tempPool.query(`
      CREATE TABLE IF NOT EXISTS subscribers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255) DEFAULT 'Suscriptor',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Cerrar la conexión temporal
    await tempPool.end();
    
    console.log('Base de datos inicializada correctamente');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
    throw error; // Re-lanzar el error para que se maneje en el script principal
  }
}

// Agregar un nuevo suscriptor
export async function addSubscriber(email: string, name: string = 'Suscriptor') {
  try {
    const [result] = await pool.query(
      'INSERT INTO subscribers (email, name) VALUES (?, ?)',
      [email, name]
    );
    // Fix the type issue with insertId
    return { success: true, id: (result as any).insertId };
  } catch (error) {
    // Si el correo ya existe, no es un error crítico
    if (error.code === 'ER_DUP_ENTRY') {
      return { success: false, error: 'El correo ya está registrado' };
    }
    console.error('Error al agregar suscriptor:', error);
    throw error;
  }
}

// Obtener todos los suscriptores
export async function getSubscribers() {
  try {
    const [rows] = await pool.query('SELECT * FROM subscribers ORDER BY created_at DESC');
    return rows;
  } catch (error) {
    console.error('Error al obtener suscriptores:', error);
    throw error;
  }
}

// Verificar si un correo ya está registrado
export async function isEmailRegistered(email: string) {
  try {
    const [rows] = await pool.query(
      'SELECT COUNT(*) as count FROM subscribers WHERE email = ?',
      [email]
    );
    return rows[0].count > 0;
  } catch (error) {
    console.error('Error al verificar email:', error);
    throw error;
  }
}

// Exportar el pool para uso en otros módulos
export default pool;