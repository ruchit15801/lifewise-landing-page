/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "lifewiseee.com" }],
        destination: "https://www.lifewiseee.com/:path*",
        permanent: true
      }
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }
        ]
      },
      {
        source: "/icon.png",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
        ]
      },
      {
        source: "/llms.txt",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, stale-while-revalidate=86400" },
          { key: "Content-Type", value: "text/plain; charset=utf-8" }
        ]
      },
      {
        source: "/llms-full.txt",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, stale-while-revalidate=86400" },
          { key: "Content-Type", value: "text/plain; charset=utf-8" }
        ]
      }
    ];
  }
};

export default nextConfig;
