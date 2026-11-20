import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const poppy = {
    protocol_version: "0.1",
    organization: {
      name: "LifeWise",
      domain: "lifewiseee.com"
    },
    web: {}
  };

  return NextResponse.json(poppy, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
