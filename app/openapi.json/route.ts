import { readFileSync } from "fs";
import { join } from "path";

export const dynamic = "force-static";

export function GET() {
  const filePath = join(process.cwd(), "public", "openapi.json");
  let content = "{}";
  try {
    content = readFileSync(filePath, "utf-8");
  } catch {
    content = `{"openapi":"3.1.0","info":{"title":"LifeWise API","version":"1.0.0"}}`;
  }

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/openapi+json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

