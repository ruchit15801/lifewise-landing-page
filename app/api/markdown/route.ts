import { readFileSync } from "fs";
import { join } from "path";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const targetPath = searchParams.get("path") || "/";

  let markdown = "";

  if (targetPath.includes("terms")) {
    markdown = `# LifeWise Terms of Service & Trader Disclosure

**Effective Date:** November 5, 2026
**Last Updated:** November 5, 2026
**Trader / Operating Entity:** Axoryte Infosoft (Surat, Gujarat, India)
**Official Support:** support@lifewiseee.com | +91 63538 91986
**Product Website:** https://www.lifewiseee.com
**Terms URL:** https://www.lifewiseee.com/terms-and-conditions

LifeWise is an AI-powered Family Operating System for Indian and global families.

## Key Sections
1. **About LifeWise:** Family Hub, medicine reminders, bill & UPI tracking, document vault, safe places & location sharing, WiseAI assistant.
2. **Subscriptions & Pricing:**
   - Free: Rs. 0
   - Starter: Rs. 99/month (Rs. 799/year)
   - Family (Recommended): Rs. 199/month (Rs. 1,499/year)
   - Pro: Rs. 499/month (Rs. 3,999/year)
3. **Statutory Right of Withdrawal (EU / EEA):** 14-day statutory withdrawal period under EU Consumer Rights Directive (2011/83/EU). In-app subscriptions managed via Google Play Store / Apple App Store.
4. **Governing Law & Disputes:** Laws of India, competent courts in Surat, Gujarat, India. European Commission Online Dispute Resolution (ODR): https://ec.europa.eu/consumers/odr.
`;
  } else if (targetPath.includes("privacy")) {
    markdown = `# LifeWise Privacy Policy

**Effective Date:** November 5, 2026
**Developer:** Axoryte Infosoft (Surat, Gujarat, India)
**Contact:** support@lifewiseee.com
**Policy URL:** https://www.lifewiseee.com/privacy-policy

## Overview
LifeWise is built with privacy-by-design principles adhering to India's DPDP Act 2023 and the EU GDPR.

### Data Collection & Usage:
- **Location Data:** Strict explicit opt-in only. Used for Family Location & Safe Places. Can be paused or stopped in one tap.
- **Health Data:** Medicine schedules, adherence logs, health vitals sync (Apple Health & Android Health Connect). Encrypted in transit and at rest.
- **Financial Data:** Family Ledger & bill reminders. Read-only permissions for Gmail transaction reminders where explicitly authorized.
- **Advertising:** We never sell personal data and never use it for advertising.
`;
  } else if (targetPath.includes("docs")) {
    markdown = `# LifeWise API & Agent Discovery Documentation

LifeWise provides standard machine-readable protocols for AI agents:

- **API Catalog (RFC 9727):** https://www.lifewiseee.com/.well-known/api-catalog
- **OpenAPI 3.1 Spec:** https://www.lifewiseee.com/openapi.json
- **A2A Agent Card & AP2 Extension:** https://www.lifewiseee.com/.well-known/agent-card.json
- **Agent Skills (RFC v0.2.0):** https://www.lifewiseee.com/.well-known/agent-skills/index.json
- **Auth.md Protocol:** https://www.lifewiseee.com/auth.md
- **MCP Server Card (SEP-1649):** https://www.lifewiseee.com/.well-known/mcp/server-card.json
- **Agentic Commerce Protocol (ACP):** https://www.lifewiseee.com/.well-known/acp.json
- **Universal Commerce Protocol (UCP):** https://www.lifewiseee.com/.well-known/ucp
- **x402 Payment Protocol:** https://www.lifewiseee.com/.well-known/x402
`;
  } else {
    // Default to the comprehensive llms-full.txt or llms.txt
    try {
      const fullPath = join(process.cwd(), "public", "llms-full.txt");
      markdown = readFileSync(fullPath, "utf-8");
    } catch {
      try {
        const shortPath = join(process.cwd(), "public", "llms.txt");
        markdown = readFileSync(shortPath, "utf-8");
      } catch {
        markdown = `# LifeWise - AI Family Operating System\n\nOfficial website: https://www.lifewiseee.com\nOrganize family health, bills, reminders, documents, and safety.`;
      }
    }
  }

  return new Response(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Vary": "Accept",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400"
    }
  });
}

