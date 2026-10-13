import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/about-shore-saves", destination: "/about", permanent: true },
      {
        source: "/adopt/adoption-application",
        destination: "/adopt/apply",
        permanent: true,
      },
      {
        source: "/adopt/adoption-process",
        destination: "/adopt/process",
        permanent: true,
      },
      {
        source: "/shop/donate-supplies",
        destination: "/donate/supplies",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
