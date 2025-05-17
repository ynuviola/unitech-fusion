import { getSubscribers } from '../src/lib/db';
import fs from 'fs';
import path from 'path';

// Función para exportar suscriptores
async function exportSubscribersToCSV() {
  try {
    // Obtener todos los suscriptores
    // Asumiendo que la función getSubscribers devuelve un QueryResult
    const subscribers = await getSubscribers();
    
    // Verificamos si subscribers es un array o si necesitamos extraer los datos
    const subscribersArray = Array.isArray(subscribers) 
      ? subscribers 
      : (subscribers as any)[0]; // Muchas veces los resultados vienen en la primera posición del array
    
    // Ahora creamos el CSV
    const csvContent = [
      // Cabecera
      ['ID', 'Email', 'Nombre', 'Fecha de registro'].join(','),
      // Datos
      ...subscribersArray.map((sub: any) =>
        [sub.id, sub.email, sub.name, sub.created_at].join(',')
      )
    ].join('\n');

    // Guardar en un archivo
    const exportDir = path.join(process.cwd(), 'exports');
    if (!fs.existsSync(exportDir)) {
      fs.mkdirSync(exportDir, { recursive: true });
    }

    const filePath = path.join(exportDir, `subscribers_${new Date().toISOString().split('T')[0]}.csv`);
    fs.writeFileSync(filePath, csvContent);

    console.log(`Exportación completada: ${filePath}`);
    console.log(`Total de suscriptores: ${subscribersArray.length}`);
  } catch (error) {
    console.error('Error al exportar suscriptores:', error);
  } finally {
    process.exit();
  }
}

// Ejecutar la exportación
exportSubscribersToCSV();