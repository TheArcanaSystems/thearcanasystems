import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so Cloudflare Pages can serve this from dashboard/out —
  // every route is statically generated already (mocked data, no API routes).
  output: "export",
};

export default nextConfig;
