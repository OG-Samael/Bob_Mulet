import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: process.env.BASEPATH,
  experimental: {
    turbopackUseSystemTlsCerts: true
  },
  images: {
    unoptimized: true
  }
}

export default nextConfig
