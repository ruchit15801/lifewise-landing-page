import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const data = {
    $schema: "https://modelcontextprotocol.io/schemas/server-card.json",
    serverInfo: {
      name: "lifewise-mcp-server",
      version: "1.0.0",
      description: "Model Context Protocol server for LifeWise Family Hub, reminders, bills, and insights."
    },
    endpoint: "https://www.lifewiseee.com/api/mcp",
    capabilities: {
      tools: {
        listChanged: false
      },
      resources: {
        subscribe: false,
        listChanged: false
      },
      prompts: {
        listChanged: false
      }
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

