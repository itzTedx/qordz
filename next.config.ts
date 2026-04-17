import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  poweredByHeader: false,
  experimental: {
    turbopackFileSystemCacheForDev: true,
    turbopackFileSystemCacheForBuild: true,
  },
  allowedDevOrigins: ["http://localhost:3000", "http://192.168.1.60:3000"],
  async redirects() {
    return [
      {
        source: "/earbuds/:slug",
        destination: "/products/:slug",
        permanent: true,
      },
      {
        source: "/power-bank/:slug",
        destination: "/products/:slug",
        permanent: true,
      },
      {
        source: "/charging-cables/:slug",
        destination: "/products/:slug",
        permanent: true,
      },
      {
        source: "/adapters/:slug",
        destination: "/products/:slug",
        permanent: true,
      },
      {
        source: "/mobile-accessories/:slug",
        destination: "/products/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
