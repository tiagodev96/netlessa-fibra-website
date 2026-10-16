import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: "/indicar", destination: "/indique", permanent: true },
      { source: "/indique-um-amigo", destination: "/indique", permanent: true },
    ];
  },
};

export default nextConfig;
