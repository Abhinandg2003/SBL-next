/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/SBL-next",
  assetPrefix: "/SBL-next/",
};

module.exports = nextConfig;