import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
