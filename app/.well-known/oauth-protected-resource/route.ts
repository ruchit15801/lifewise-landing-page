import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const data = {
    resource: "https://www.lifewiseee.com",
    authorization_servers: ["https://www.lifewiseee.com"],
    scopes_supported: [
      "openid",
      "profile",
      "email",
      "lifewise.family.read",
      "lifewise.family.write",
      "lifewise.bills.read",
      "lifewise.medicine.read"
    ],
    bearer_methods_supported: ["header"],
    resource_documentation: "https://www.lifewiseee.com/docs"
  };

  return NextResponse.json(data, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

