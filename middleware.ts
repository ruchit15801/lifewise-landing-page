import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") || "";
  const pathname = request.nextUrl.pathname;

  // 1. Markdown for Agents Content Negotiation
  // Trigger when client sends Accept: text/markdown or format=markdown query param
  const hasMarkdownAccept =
    accept.includes("text/markdown") &&
    (!accept.includes("text/html") || accept.indexOf("text/markdown") < accept.indexOf("text/html"));

  const hasMarkdownParam = request.nextUrl.searchParams.get("format") === "markdown";

  if (hasMarkdownAccept || hasMarkdownParam) {
    const url = request.nextUrl.clone();
    url.pathname = "/api/markdown";
    url.searchParams.set("path", pathname);
    return NextResponse.rewrite(url);
  }

  // 2. Normal request flow with enhanced Link & Content-Signal headers
  const response = NextResponse.next();

  response.headers.set(
    "Link",
    '</.well-known/api-catalog>; rel="api-catalog", </openapi.json>; rel="service-desc"; type="application/openapi+json", </docs>; rel="service-doc", </llms.txt>; rel="describedby"'
  );
  response.headers.set("Content-Signal", "ai-train=no, search=yes, ai-input=no");
  response.headers.set("Vary", "Accept");

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api routes (unless markdown is targeted)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - files with extensions (e.g. .png, .ico, .txt, .json, .xml)
     */
    "/((?!api|_next/static|_next/image|.*\\.[a-zA-Z0-9]+$).*)"
  ]
};

