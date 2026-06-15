/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/historia-aparatow',
  assetPrefix: '/historia-aparatow',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;