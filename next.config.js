/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Optional: forces static HTML export
  images: {
    unoptimized: true, // Required for static exports
  },
};

module.exports = nextConfig;