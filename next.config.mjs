/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  typescript: {
    // This allows the production build to finish even if there are type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // This allows the production build to finish even if there are linting errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;