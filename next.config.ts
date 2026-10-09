import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  env: {
    BUILD_DATE: new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Colombo" }),
  },
  async redirects() {
    return [
      { source: "/research", destination: "/domain", permanent: true },
      { source: "/methodology", destination: "/domain#methodology", permanent: true },
      { source: "/timeline", destination: "/milestones", permanent: true },
      { source: "/downloads", destination: "/documents", permanent: true },
      { source: "/achievements", destination: "/about#achievements", permanent: true },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
