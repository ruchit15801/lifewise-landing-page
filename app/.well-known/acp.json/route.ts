import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const data = {
    protocol: {
      name: "acp",
      version: "1.0.0"
    },
    api_base_url: "https://www.lifewiseee.com/api",
    transports: ["https", "http"],
    capabilities: {
      services: [
        "subscription_checkout",
        "plan_inquiry",
        "order_status",
        "payments"
      ]
    }
  };

  return NextResponse.json(data, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

