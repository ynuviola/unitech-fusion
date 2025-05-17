/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'www.unitechfusion.com', 'unitechfusion.com'],
    unoptimized: true, // Necesario para la exportación estática
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  output: 'export', // Habilitar exportación estática
  trailingSlash: true, // Recomendado para hosting compartido
};

module.exports = nextConfig