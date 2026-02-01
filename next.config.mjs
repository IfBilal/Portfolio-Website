
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  typescript: {
    // Allows production builds to successfully complete even if the project has type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Allows production builds to successfully complete even if the project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
