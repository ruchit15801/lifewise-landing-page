import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API & Agent Documentation | LifeWise",
  description: "Machine-readable discovery protocols, API catalog, and agent documentation for LifeWise."
};

export default function DocsPage() {
  return (
    <main className="section-max py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          LifeWise Developer &amp; Agent Documentation
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
          API &amp; Agent Discovery
        </h1>
        <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
          LifeWise exposes standardized machine-readable protocols for AI agents, commerce
          protocols, and developer integrations.
        </p>

        <div className="mt-8 space-y-6">
          <section className="glass p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Discovery Endpoints
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>
                <strong>API Catalog (RFC 9727):</strong>{" "}
                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                  /.well-known/api-catalog
                </code>
              </li>
              <li>
                <strong>OpenAPI Specification:</strong>{" "}
                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                  /openapi.json
                </code>
              </li>
              <li>
                <strong>A2A Agent Card &amp; AP2 Extension:</strong>{" "}
                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                  /.well-known/agent-card.json
                </code>
              </li>
              <li>
                <strong>Agent Skills Discovery:</strong>{" "}
                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                  /.well-known/agent-skills/index.json
                </code>
              </li>
              <li>
                <strong>Auth.md Protocol:</strong>{" "}
                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                  /auth.md
                </code>
              </li>
              <li>
                <strong>MCP Server Card (SEP-1649):</strong>{" "}
                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                  /.well-known/mcp/server-card.json
                </code>
              </li>
              <li>
                <strong>Agentic Commerce (ACP):</strong>{" "}
                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                  /.well-known/acp.json
                </code>
              </li>
              <li>
                <strong>Universal Commerce Protocol (UCP):</strong>{" "}
                <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                  /.well-known/ucp
                </code>
              </li>
            </ul>
          </section>

          <section className="glass p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              AI Content Negotiation
            </h2>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              LifeWise supports Markdown for Agents. Requesting any webpage with header{" "}
              <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                Accept: text/markdown
              </code>{" "}
              returns an LLM-optimized Markdown representation.
            </p>
          </section>
        </div>

        <div className="mt-8">
          <Link href="/" className="font-medium text-primary hover:underline text-sm">
            &larr; Back to LifeWise Home
          </Link>
        </div>
      </div>
    </main>
  );
}

