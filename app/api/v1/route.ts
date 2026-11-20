import { NextResponse } from "next/server";

export function GET() {
  const payload = {
    x402Version: 1,
    accepts: [
      {
        scheme: "exact",
        network: "base",
        currency: "USDC",
        amount: "10000",
        recipient: "0x2e9f1a2636a0E5728a38F3c3757C4c30c5123d6a",
        facilitator: "https://facilitator.x402.org"
      }
    ],
    resource: "https://www.lifewiseee.com/api/v1"
  };

  const payloadStr = JSON.stringify(payload);

  return NextResponse.json(payload, {
    status: 402,
    headers: {
      "payment-required": payloadStr,
      "WWW-Authenticate": 'x402 realm="LifeWise API", token="base:usdc"',
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-store"
    }
  });
}

export function POST() {
  return GET();
}
