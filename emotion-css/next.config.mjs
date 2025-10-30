/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/web-app-styling-2025/emotion-css' : '';
const assetPrefix = isProd ? '/web-app-styling-2025/emotion-css' : '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  images: { unoptimized: true }
};

export default nextConfig;
