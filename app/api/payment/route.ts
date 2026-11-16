import { NextResponse } from "next/server";

export function POST() {
  return NextResponse.json(
    {
      status: 402,
      title: "Payment Required",
      detail: "Agent payment required via x402 protocol or Agent Payments Protocol (AP2)",
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
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
}

export function GET() {
  return POST();
}

