import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
    turbopackFileSystemCacheForBuild: true,
  },
  allowedDevOrigins: ["http://localhost:3000", "http://192.168.1.60:3000"],
};

export default nextConfig;
