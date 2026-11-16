import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const data = {
    status: 402,
    title: "Payment Required",
    detail: "Payment required to access agentic subscription execution via x402 protocol",
    payment: {
      version: "1.0.0",
      network: "base",
      currency: "USDC",
      recipient: "0x0000000000000000000000000000000000000000",
      amount: "1.00",
      facilitator: "https://x402.org/facilitator"
    }
  };

  return NextResponse.json(data, {
    status: 402,
    headers: {
      "WWW-Authenticate": 'x402 realm="LifeWise Agent Payments", token="base:usdc"',
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

