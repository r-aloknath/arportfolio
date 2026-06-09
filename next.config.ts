import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // For static export (optional)
  },
  output: 'export',    // Optional: enables static HTML export
  trailingSlash: true,
};

export default nextConfig;