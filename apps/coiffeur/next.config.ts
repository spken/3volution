import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // 90 for the salon photos (upscaled 2x), 75 stays the default.
    qualities: [75, 90],
  },
  experimental: {
    // [lang] is the root layout, so unmatched URLs need a standalone 404
    globalNotFound: true,
  },
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
