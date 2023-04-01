/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["resizer.otstatic.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
