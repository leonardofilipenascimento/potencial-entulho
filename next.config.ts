import type { NextConfig } from "next";

// Exportação estática (output: "export") — publicada no Cloudflare Pages.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
