import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@sanity/client', '@sanity/image-url']
  },
  transpilePackages: ['sanity'],
  images: {
    domains: ['cdn.sanity.io'],
  },
};

export default nextConfig;
