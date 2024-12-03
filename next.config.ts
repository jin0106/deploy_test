import type { NextConfig } from "next";
import {version} from './package.json'
const PLATFORM_ENV = process.env.PLATFORM_ENV || 'local'

const nextConfig: NextConfig = {
  env:{
    PLATFORM_ENV,
  },
  /* config options here */
  reactStrictMode: true,
  publicRuntimeConfig: {
    version,
  },
};

export default nextConfig;
