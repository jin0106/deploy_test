import type { NextConfig } from "next";
const PLATFORM_ENV = process.env.PLATFORM_ENV || 'local'

const nextConfig: NextConfig = {
  env:{
    PLATFORM_ENV,
  },
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
