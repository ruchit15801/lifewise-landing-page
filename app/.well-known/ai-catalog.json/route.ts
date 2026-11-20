import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const catalog = {
    specVersion: "1.0",
    host: {
      displayName: "LifeWise Systems",
      identifier: "did:web:lifewiseee.com"
    },
    entries: [
      {
        identifier: "urn:air:lifewiseee.com:server:mcp",
        displayName: "LifeWise MCP Server",
        type: "application/mcp-server-card+json",
        url: "https://www.lifewiseee.com/.well-known/mcp/server-card.json",
        representativeQueries: [
          "organize family health and reminders",
          "manage medicine schedules and appointments",
          "track household shared expenses"
        ]
      },
      {
        identifier: "urn:air:lifewiseee.com:agent:family",
        displayName: "LifeWise Family Agent",
        type: "application/a2a-agent-card+json",
        url: "https://www.lifewiseee.com/.well-known/agent-card.json",
        representativeQueries: [
          "LifeWise family hub agent",
          "AI family operating system assistant"
        ]
      }
    ]
  };

  return NextResponse.json(catalog, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
