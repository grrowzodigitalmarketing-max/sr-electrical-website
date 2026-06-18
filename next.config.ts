import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "nhgzymcxkzpuwzdgkjde.supabase.co",
      },
    ],
  },
};

export default nextConfig;