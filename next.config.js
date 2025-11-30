/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use the 'src' directory for all code files
  distDir: 'dist',
  reactStrictMode: true,
  // Recommended: Keep the build files minimal
  swcMinify: true,

  // Configuration for the Next.js Image Component
  // This is CRITICAL for external image URLs used in the GallerySection.jsx
  images: {
    // List domains that host your external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Disable static image optimization during development for faster build times 
    // when using the next/image component.
    // However, since we are using <img> tags with local files, this is mostly 
    // for the external gallery images.
    unoptimized: true, 
  },
};

module.exports = nextConfig;
