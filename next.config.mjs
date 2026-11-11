import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true, // Prevents sharp/libvips worker crashes and heavy memory spikes on Windows
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { dev }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    // Memory cache in dev prevents OneDrive file-lock (EBUSY/EPERM) crashes on Windows
    if (dev) {
      config.cache = {
        type: "memory",
      };
    }
    return config;
  },
};

export default nextConfig;
