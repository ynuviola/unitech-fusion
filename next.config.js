/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'www.unitechfusion.com',
      'unitechfusion.com',
      'jsofkoyudgrjwksgdinq.supabase.co',
    ],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,
  // ❌ Eliminar esta parte ↓
  // ...(process.env.EXPORT_STATIC === 'true' ? { output: 'export' } : {}),
};

module.exports = nextConfig;
