/** @type {import('next').NextConfig} */
const nextConfig = {
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
