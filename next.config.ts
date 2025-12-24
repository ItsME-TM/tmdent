import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
