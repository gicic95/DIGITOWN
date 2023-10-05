// const path = require('path');

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   images: {
//     domains: ['api.jakov.rs', 'api.digitown.jakov.rs'],
//   },
// };

// module.exports = nextConfig;

const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
    domains: ['api.digitown.rs'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.digitown.rs',
      },
    ],
  },
};

module.exports = nextConfig;
