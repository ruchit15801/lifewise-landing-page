import { readFileSync } from "fs";
import { join } from "path";

export const dynamic = "force-static";

export function GET() {
  const filePath = join(process.cwd(), "public", "auth.md");
  let content = "";
  try {
    content = readFileSync(filePath, "utf-8");
  } catch {
    content = `# LifeWise auth.md\n\nAgent Authentication and Registration Discovery protocol for LifeWise.`;
  }

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

