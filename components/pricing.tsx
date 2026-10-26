"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, ChevronDown, Sparkles } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import {
  PRICING_FEATURES,
  SUBSCRIPTION_PLANS,
  type PlanTier
} from "@/lib/landing-data";
import {
  DISPLAY_CURRENCIES,
  fetchInrRates,
  formatPlanPrice,
  INR_ONLY_RATES,
  type DisplayCurrency,
  type InrRates
} from "@/lib/pricing-currency";

type BillingCycle = "monthly" | "yearly";

const PLAN_SUMMARY: Record<PlanTier, { bestFor: string; points: readonly string[] }> = {
  free: {
    bestFor: "Try it with one parent",
    points: [
      "2 family members",
      "10 reminders",
      "Bill scan and WiseAI to try",
      "No ads, no card needed"
    ]
  },
  starter: {
    bestFor: "A couple or small family",
    points: [
      "4 family members",
      "50 reminders",
      "3 months of expense history",
      "1 caregiver per member"
    ]
  },
  family: {
    bestFor: "Most families: parents, kids, grandparents",
    points: [
      "Unlimited members and reminders",
      "All modules for every member",
      "Unlimited voice reminders and bill scans",
      "SOS, family location and PDF reports"
    ]
  },
  pro: {
    bestFor: "Big joint families and power users",
    points: [
      "Everything in Family",
      "Unlimited documents",
      "300 WiseAI messages a month",
      "Medicine interaction checker"
    ]
  }
};

export function Pricing() {
  const [currency, setCurrency] = useState<DisplayCurrency>("INR");
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const [rates, setRates] = useState<InrRates>(INR_ONLY_RATES);
  const [fxReady, setFxReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchInrRates()
      .then(({ rates: next }) => {
        if (cancelled) return;
        setRates(next);
        setFxReady(true);
      })
      .catch(() => {
        if (cancelled) return;
        setFxReady(false);
        setCurrency("INR");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const price = (amountInr: number) => formatPlanPrice(amountInr, currency, rates);

  return (
    <SectionShell
      id="pricing"
      eyebrow="Pricing"
      title="Start free. Upgrade when your family needs more."
      subtitle="No card needed for Free. Cancel a paid plan anytime from the app."
    >
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div
          className="inline-flex rounded-full border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900/60"
          role="group"
          aria-label="Billing cycle"
        >
          {(["monthly", "yearly"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCycle(item)}
              aria-pressed={cycle === item}
              className={cn(
                "inline-flex min-h-[40px] items-center gap-1.5 rounded-full px-4 font-display text-[13px] font-bold transition",
                cycle === item
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              )}
            >
              {item === "yearly" ? "Yearly" : "Monthly"}
              {item === "yearly" ? (
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-[10px]",
                    cycle === "yearly"
                      ? "bg-white/20 text-white"
                      : "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300"
                  )}
                >
                  Save up to 37%
                </span>
              ) : null}
            </button>
          ))}
        </div>

        {fxReady ? (
          <div
            className="inline-flex gap-1 rounded-full border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900/60"
            role="group"
            aria-label="Show prices in"
          >
            {DISPLAY_CURRENCIES.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => setCurrency(item.code)}
                aria-pressed={currency === item.code}
                className={cn(
                  "min-h-[40px] rounded-full px-3 font-display text-[12px] font-bold transition",
                  currency === item.code
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {SUBSCRIPTION_PLANS.map((plan, index) => {
          const isFamily = plan.id === "family";
          const isFree = plan.id === "free";
          const yearly = cycle === "yearly" && !isFree;
          const summary = PLAN_SUMMARY[plan.id];

          return (
            <Reveal
              key={plan.id}
              delay={index * 0.05}
              className={cn(isFamily && "order-first md:order-none")}
            >
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-6",
                  isFamily
                    ? "border-indigo-300 bg-indigo-50 shadow-xl ring-2 ring-indigo-500/20 dark:border-indigo-500/40 dark:bg-slate-950"
                    : "border-slate-200 bg-white dark:border-slate-800/60 dark:bg-slate-800/90"
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    {plan.name}
                  </h3>
                  {plan.recommended ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      <Sparkles className="h-3 w-3" />
                      Recommended
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-[13px] text-slate-600 dark:text-slate-400">
                  {summary.bestFor}
                </p>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                    {price(yearly ? plan.yearlyInr : plan.monthlyInr)}
                  </span>
                  <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
                    {isFree ? "forever" : yearly ? "/ year" : "/ month"}
                  </span>
                </div>
                <p className="mt-1 min-h-[1.25rem] text-[12px] font-semibold text-emerald-700 dark:text-emerald-400">
                  {yearly ? `Just ${price(Math.round(plan.yearlyInr / 12))} a month` : null}
                </p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {summary.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          isFamily ? "text-indigo-600 dark:text-indigo-400" : "text-emerald-500"
                        )}
                      />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#download"
                  className={cn(
                    "mt-6 block w-full rounded-xl py-3.5 text-center text-sm font-bold transition-colors",
                    isFamily
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-500"
                      : "border border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white dark:hover:bg-slate-800"
                  )}
                >
                  {isFree ? "Start free" : `Get ${plan.name}`}
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>

      <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
        {currency === "INR"
          ? "Prices in Indian Rupees."
          : "Approximate prices, converted from Indian Rupees."}{" "}
        Google Play and the App Store charge in your local currency.
      </p>

      <details className="group mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800/60 dark:bg-slate-800/90">
        <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between gap-3 px-6 py-4 font-display text-sm font-bold text-slate-900 dark:text-white [&::-webkit-details-marker]:hidden">
          Compare all features and limits
          <ChevronDown className="h-5 w-5 text-slate-400 transition group-open:rotate-180" />
        </summary>
        <div className="overflow-x-auto border-t border-slate-200 dark:border-slate-800/60">
          <div className="hidden min-w-[720px] grid-cols-5 gap-3 border-b border-slate-100 px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 sm:grid dark:border-slate-800/60">
            <div>Feature</div>
            <div>Free</div>
            <div>Starter</div>
            <div>Family</div>
            <div>Pro</div>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {PRICING_FEATURES.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-1 gap-2 px-6 py-3.5 sm:min-w-[720px] sm:grid-cols-5 sm:items-center sm:gap-3"
              >
                <div className="text-[13px] font-bold text-slate-900 dark:text-slate-200">
                  {item.name}
                </div>
                <ComparisonCell label="Free" value={item.free} />
                <ComparisonCell label="Starter" value={item.starter} />
                <ComparisonCell label="Family" value={item.family} emphasize />
                <ComparisonCell label="Pro" value={item.pro} />
              </div>
            ))}
          </div>
        </div>
      </details>
    </SectionShell>
  );
}

function ComparisonCell({
  label,
  value,
  emphasize
}: {
  label: string;
  value: string;
  emphasize?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-baseline justify-between gap-3 text-[13px] font-medium sm:block",
        emphasize
          ? "font-bold text-indigo-600 dark:text-indigo-400"
          : "text-slate-600 dark:text-slate-400"
      )}
    >
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:hidden">
        {label}
      </span>
      {value}
    </div>
  );
}
