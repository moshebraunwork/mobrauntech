import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  async redirects() {
    return [
      // Payments are handled off-site for now — the site is marketing-only.
      {
        source: "/payments",
        destination: "/contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
