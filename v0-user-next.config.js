/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placeholder.com"],
  },
  env: {
    // Add any environment variables here
  },
  // Ensure we're exporting a configuration object
  webpack: (config, { isServer }) => {
    // Custom webpack config if needed
    return config
  },
}

module.exports = nextConfig

