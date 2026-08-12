import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const disallowApi = ["/api/"];

const aiAgents = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "Googlebot",
  "Bingbot",
  "PerplexityBot",
  "ClaudeBot",
  "Anthropic-AI",
  "Applebot",
  "Applebot-Extended",
  "meta-externalagent",
  "FacebookBot",
  "Bytespider",
  "Amazonbot",
  "CCBot",
  "Diffbot",
  "YouBot",
  "cohere-ai"
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowApi
      },
      ...aiAgents.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: disallowApi
      }))
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL
  };
}
