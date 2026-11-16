import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    {
      status: 402,
      title: "Payment Required",
      detail: "Payment required to access agentic API operations via x402 protocol",
      payment: {
        version: "1.0.0",
        network: "base",
        currency: "USDC",
        recipient: "0x0000000000000000000000000000000000000000",
        amount: "1.00",
        facilitator: "https://x402.org/facilitator"
      }
    },
    {
      status: 402,
      headers: {
        "WWW-Authenticate": 'x402 realm="LifeWise API", token="base:usdc"',
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-store"
      }
    }
  );
}

export function POST() {
  return GET();
}
