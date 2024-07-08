/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/davedawson_co", // <=== enables base path for the app
  output: "export", // <=== enables static exports
  images: {
    unoptimized: true,
  },
  reactStrictMode: true, // <== allow export
};

export default nextConfig;