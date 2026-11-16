/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      // Redirect bare domain → www
      {
        source: "/:path*",
        has: [{ type: "host", value: "lifewiseee.com" }],
        destination: "https://www.lifewiseee.com/:path*",
        permanent: true
      },
      // Alternate privacy policy routes → canonical
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true
      },
      {
        source: "/app/privacy-policy",
        destination: "/privacy-policy",
        permanent: true
      },
      {
        source: "/app/privacy",
        destination: "/privacy-policy",
        permanent: true
      },
      // Alternate terms of service routes → canonical
      {
        source: "/terms",
        destination: "/terms-and-conditions",
        permanent: true
      },
      {
        source: "/tos",
        destination: "/terms-and-conditions",
        permanent: true
      },
      {
        source: "/terms-of-service",
        destination: "/terms-and-conditions",
        permanent: true
      },
      {
        source: "/app/terms",
        destination: "/terms-and-conditions",
        permanent: true
      },
      {
        source: "/app/terms-and-conditions",
        destination: "/terms-and-conditions",
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
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Signal", value: "ai-train=no, search=yes, ai-input=no" },
          {
            key: "Link",
            value:
              '</.well-known/api-catalog>; rel="api-catalog", </openapi.json>; rel="service-desc"; type="application/openapi+json", </docs>; rel="service-doc", </llms.txt>; rel="describedby"'
          }
        ]
      },
      {
        source: "/.well-known/api-catalog",
        headers: [
          { key: "Content-Type", value: "application/linkset+json; charset=utf-8" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Cache-Control", value: "public, max-age=3600" }
        ]
      },
      {
        source: "/.well-known/ucp",
        headers: [
          { key: "Content-Type", value: "application/json; charset=utf-8" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Cache-Control", value: "public, max-age=3600" }
        ]
      },
      {
        source: "/.well-known/(.*)",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Cache-Control", value: "public, max-age=3600" }
        ]
      },
      {
        source: "/robots.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Content-Signal", value: "ai-train=no, search=yes, ai-input=no" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Cache-Control", value: "public, max-age=86400" }
        ]
      },
      {
        source: "/auth.md",
        headers: [
          { key: "Content-Type", value: "text/markdown; charset=utf-8" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Cache-Control", value: "public, max-age=3600" }
        ]
      },
      {
        source: "/openapi.json",
        headers: [
          { key: "Content-Type", value: "application/openapi+json; charset=utf-8" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Cache-Control", value: "public, max-age=3600" }
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
      },
      {
        source: "/apk/(.*)",
        headers: [
          { key: "Content-Disposition", value: "attachment" },
          { key: "Content-Type", value: "application/vnd.android.package-archive" }
        ]
      }
    ];
  }
};

export default nextConfig;
