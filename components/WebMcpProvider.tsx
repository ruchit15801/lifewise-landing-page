"use client";

import { useEffect } from "react";

interface ModelContextTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (args: Record<string, unknown>) => Promise<Record<string, unknown>> | Record<string, unknown>;
  signal?: AbortSignal;
}

interface ModelContextNavigator {
  registerTool?: (tool: ModelContextTool) => void;
  provideContext?: (context: unknown) => void;
}

export function WebMcpProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const nav = navigator as unknown as { modelContext?: ModelContextNavigator };
    const modelContext = nav.modelContext;

    if (!modelContext || typeof modelContext.registerTool !== "function") {
      return;
    }

    const controller = new AbortController();

    try {
      // 1. Search tool
      modelContext.registerTool({
        name: "search_lifewise_features",
        description:
          "Search LifeWise features including Family Hub, Medicine Reminders, Family Ledger, Bills, Documents, and WiseAI.",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "Search keyword or question about LifeWise features or guides"
            }
          },
          required: ["query"]
        },
        execute: async (args: Record<string, unknown>) => {
          const query = String(args.query || "").toLowerCase();
          return {
            query,
            summary:
              "LifeWise is an AI-powered Family Operating System for Indian and global families. Key modules: Family Hub, Medicine & Health Reminders, Family Ledger (finances & UPI bills), Safe Places & Location Sharing, and WiseAI.",
            relevantModules: [
              "Family Hub",
              "Medicine Reminders & Health Sync",
              "Family Money & Bill Reminders",
              "Documents Vault",
              "WiseAI Assistant"
            ]
          };
        },
        signal: controller.signal
      });

      // 2. Pricing & Subscriptions tool
      modelContext.registerTool({
        name: "get_subscription_pricing",
        description:
          "Retrieve LifeWise subscription plan prices (Free, Starter, Family, and Pro) and payment information.",
        inputSchema: {
          type: "object",
          properties: {
            plan: {
              type: "string",
              description: "Optional plan name: starter, family, pro, or all"
            }
          }
        },
        execute: async (args: Record<string, unknown>) => {
          const requested = String(args.plan || "all").toLowerCase();
          const plans = {
            free: { name: "Free", priceINR: 0, billing: "Always free" },
            starter: { name: "Starter", priceINR: 99, billing: "Rs. 99/month or Rs. 799/year" },
            family: {
              name: "Family (Recommended)",
              priceINR: 199,
              billing: "Rs. 199/month or Rs. 1,499/year"
            },
            pro: { name: "Pro", priceINR: 499, billing: "Rs. 499/month or Rs. 3,999/year" }
          };
          return { requested, plans, currency: "INR" };
        },
        signal: controller.signal
      });

      // 3. Navigation tool
      modelContext.registerTool({
        name: "navigate_site",
        description: "Get navigation links and canonical URLs for LifeWise pages.",
        inputSchema: {
          type: "object",
          properties: {
            page: {
              type: "string",
              description: "Target page: home, pricing, terms, privacy, support, get"
            }
          }
        },
        execute: async (args: Record<string, unknown>) => {
          const page = String(args.page || "home").toLowerCase();
          const siteMap: Record<string, string> = {
            home: "https://www.lifewiseee.com/",
            pricing: "https://www.lifewiseee.com/#pricing",
            terms: "https://www.lifewiseee.com/terms-and-conditions",
            privacy: "https://www.lifewiseee.com/privacy-policy",
            support: "https://www.lifewiseee.com/support",
            get: "https://www.lifewiseee.com/get"
          };
          return { page, url: siteMap[page] || siteMap.home };
        },
        signal: controller.signal
      });
    } catch {
      // Graceful fallback for non-supporting browsers
    }

    return () => {
      controller.abort();
    };
  }, []);

  return null;
}

