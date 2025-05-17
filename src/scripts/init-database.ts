import { initDatabase } from '../lib/db';

// Inicializar la base de datos
(async () => {
  try {
    await initDatabase();
    console.log('Base de datos inicializada correctamente');
    process.exit(0);
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
    process.exit(1);
  }
})();