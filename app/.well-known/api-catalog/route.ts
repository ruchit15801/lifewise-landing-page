export const dynamic = "force-static";

export function GET() {
  const data = {
    linkset: [
      {
        anchor: "https://www.lifewiseee.com/api",
        "service-desc": [
          {
            href: "https://www.lifewiseee.com/openapi.json",
            type: "application/openapi+json"
          }
        ],
        "service-doc": [
          {
            href: "https://www.lifewiseee.com/docs",
            type: "text/html"
          }
        ],
        status: [
          {
            href: "https://www.lifewiseee.com/api/health",
            type: "application/json"
          }
        ]
      },
      {
        anchor: "https://lifewiseee.com/api",
        "service-desc": [
          {
            href: "https://lifewiseee.com/openapi.json",
            type: "application/openapi+json"
          }
        ],
        "service-doc": [
          {
            href: "https://lifewiseee.com/docs",
            type: "text/html"
          }
        ],
        status: [
          {
            href: "https://lifewiseee.com/api/health",
            type: "application/json"
          }
        ]
      }
    ]
  };

  return new Response(JSON.stringify(data, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/linkset+json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

