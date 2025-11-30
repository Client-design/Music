/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // IMPORTANT: The 'distDir: 'dist',' line was removed to fix the Vercel build error.
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true, 
  },
};

module.exports = nextConfig;
