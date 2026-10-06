import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecommerce.routemisr.com",

        pathname: "/Route-Academy-categories/**",
      },

      {
        protocol: "https",
        hostname: "ecommerce.routemisr.com",

        pathname: "/Route-Academy-products/**",
      },
      {
        protocol: "https",
        hostname: "ecommerce.routemisr.com",

        pathname: "/Route-Academy-brands/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      "react-hook-form",
      "tailwindcss",
      "next",
      "zod",
      "@hookform/resolvers",
      "",
    ],
  },
};

export default nextConfig;
