/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    trailingSlash: true, // Ensures URLs have trailing slashes (important for static hosting)
    images: {
      unoptimized: true, // Disables image optimization for static exports
    },
  };
  
  export default nextConfig;
  