/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@next-kit/tailwind-config"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
