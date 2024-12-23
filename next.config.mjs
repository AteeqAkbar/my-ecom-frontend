/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**", // Allows all hostnames
      },
      {
        protocol: "https",
        hostname: "**", // Allows all hostnames
      },
    ],
  },
};

export default nextConfig;
