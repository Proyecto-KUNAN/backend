/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? 'https://devphp7.democrm.com.ar/crminstalacionpaquetes/ipet' : 'http://localhost:3000',

  publicRuntimeConfig: {
    basePath: isProd ? 'https://devphp7.democrm.com.ar/crminstalacionpaquetes/ipet' : 'http://localhost:3000',
  },

  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
