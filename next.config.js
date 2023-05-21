/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'primefaces.org',
      },
      {
        protocol: 'https',
        hostname: 'blocks.primereact.org',
      },
    ],
  },
};

module.exports = nextConfig;
