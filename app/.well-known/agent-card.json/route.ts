import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const data = {
    $schema: "https://a2a-protocol.org/latest/schemas/agent-card.json",
    name: "LifeWise Agent",
    version: "1.0.0",
    description:
      "LifeWise AI Family Operating System autonomous agent for family health, bill tracking, finances, schedules, and subscription management.",
    supportedInterfaces: [
      {
        url: "https://www.lifewiseee.com/api/agent",
        transport: "http",
        protocol: "a2a/1.0"
      },
      {
        url: "https://www.lifewiseee.com/api/mcp",
        transport: "sse",
        protocol: "mcp/1.0"
      }
    ],
    capabilities: [
      "family_management",
      "medicine_reminders",
      "bill_tracking",
      "expense_logging",
      "agentic_commerce",
      "payments"
    ],
    skills: [
      {
        id: "family-management",
        name: "LifeWise Family Management",
        description:
          "Organize family hub, medicine reminders, routine notifications, and safety features."
      },
      {
        id: "subscription-purchase",
        name: "LifeWise Subscription Checkout",
        description:
          "Purchase or renew LifeWise Starter, Family, and Pro subscription plans via Agent Payments Protocol."
      }
    ],
    extensions: [
      {
        uri: "https://github.com/google-agentic-commerce/AP2/tree/v0.1.0",
        required: true,
        params: {
          roles: ["merchant"]
        }
      }
    ]
  };

  return NextResponse.json(data, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

