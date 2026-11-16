import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const data = {
    ucp: {
      version: "1.0.0",
      services: [
        {
          id: "lifewise-subscriptions",
          name: "LifeWise Plan Subscriptions",
          description:
            "Digital subscription checkout for LifeWise Family Operating System (Starter, Family, and Pro tiers)",
          type: "digital_service"
        }
      ],
      capabilities: ["cart", "checkout", "subscription", "instant_payment"],
      endpoints: {
        catalog: "https://www.lifewiseee.com/.well-known/api-catalog",
        checkout: "https://www.lifewiseee.com/api/checkout",
        orders: "https://www.lifewiseee.com/api/orders"
      }
    },
    protocol_version: "1.0.0",
    services: [
      {
        id: "lifewise-subscriptions",
        name: "LifeWise Plan Subscriptions",
        description:
          "Digital subscription checkout for LifeWise Family Operating System (Starter, Family, and Pro tiers)",
        type: "digital_service"
      }
    ],
    capabilities: ["cart", "checkout", "subscription", "instant_payment"],
    endpoints: {
      catalog: "https://www.lifewiseee.com/.well-known/api-catalog",
      checkout: "https://www.lifewiseee.com/api/checkout",
      orders: "https://www.lifewiseee.com/api/orders"
    }
  };

  return NextResponse.json(data, {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
