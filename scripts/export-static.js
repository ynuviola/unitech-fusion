const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Crear un archivo .env.production temporal para la exportación estática
const envContent = fs.readFileSync(path.join(__dirname, '..', '.env'), 'utf8');
const updatedEnvContent = envContent + '\nEXPORT_STATIC=true\n';
fs.writeFileSync(path.join(__dirname, '..', '.env.production'), updatedEnvContent);

console.log('🚀 Iniciando exportación estática para Hostinger...');

try {
  // Ejecutar la compilación con la configuración de exportación estática
  execSync('npm run build', { stdio: 'inherit', env: { ...process.env, EXPORT_STATIC: 'true' } });
  
  console.log('✅ Exportación estática completada con éxito!');
  console.log('📁 Los archivos estáticos se encuentran en la carpeta "out"');
  console.log('🌐 Sube estos archivos a tu hosting en Hostinger');
  
  // Crear un archivo .htaccess para Hostinger
  const htaccessContent = `
# Redirigir todas las solicitudes a index.html para SPA
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Habilitar compresión
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript application/json
</IfModule>

# Establecer caché del navegador
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/x-javascript "access plus 1 month"
  ExpiresByType application/x-shockwave-flash "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
  ExpiresDefault "access plus 2 days"
</IfModule>
`;
  
  fs.writeFileSync(path.join(__dirname, '..', 'out', '.htaccess'), htaccessContent);
  console.log('✅ Archivo .htaccess creado para Hostinger');
  
} catch (error) {
  console.error('❌ Error durante la exportación:', error);
  process.exit(1);
} finally {
  // Eliminar el archivo .env.production temporal
  fs.unlinkSync(path.join(__dirname, '..', '.env.production'));
}