// @ts-check

import path from 'node:path';


/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('./src'), // Ensure the alias points correctly to `src`
    };
    return config;
  },
  transpilePackages: ['next-mdx-remote'],
  images: {
    unoptimized: true, // TODO! Presumably better for static
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        hostname: 'img.shields.io'
      }
    ]
  }
}

export default nextConfig 
