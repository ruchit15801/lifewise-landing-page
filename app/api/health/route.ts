import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(
    {
      status: "ok",
      service: "LifeWise API",
      version: "1.0.0",
      timestamp: new Date().toISOString()
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=60"
      }
    }
  );
}

