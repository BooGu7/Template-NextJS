const config = require('./src/config');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  env: config,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = withPlugins([], nextConfig);
