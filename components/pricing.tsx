"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import {
  FAMILY_PLAN,
  FREE_PLAN,
  PRO_PLAN,
  PRICING_FEATURES,
  STARTER_PLAN,
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

const CARD_FEATURES: Record<PlanTier, readonly string[]> = {
  free: FREE_PLAN.features.slice(0, 10),
  starter: STARTER_PLAN.features.slice(0, 10),
  family: FAMILY_PLAN.features.slice(0, 12),
  pro: PRO_PLAN.features.slice(0, 10)
};

const CARD_WALLS: Record<PlanTier, readonly string[]> = {
  free: FREE_PLAN.walls.slice(0, 5),
  starter: STARTER_PLAN.walls.slice(0, 4),
  family: FAMILY_PLAN.walls,
  pro: PRO_PLAN.walls
};

export function Pricing() {
  const [currency, setCurrency] = useState<DisplayCurrency>("INR");
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const [rates, setRates] = useState<InrRates>(INR_ONLY_RATES);
  const [fxAsOf, setFxAsOf] = useState<string | null>(null);
  const [fxReady, setFxReady] = useState(false);
  const [fxError, setFxError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchInrRates()
      .then(({ rates: next, asOf }) => {
        if (cancelled) return;
        setRates(next);
        setFxAsOf(asOf);
        setFxReady(true);
        setFxError(false);
      })
      .catch(() => {
        if (cancelled) return;
        setFxReady(false);
        setFxError(true);
        setCurrency("INR");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const price = (amountInr: number) =>
    formatPlanPrice(amountInr, currency, rates);

  const fxNote = useMemo(() => {
    if (currency === "INR") {
      return "Prices are listed in Indian Rupees. Google Play and the App Store charge in your store currency.";
    }
    if (!fxReady || fxError) {
      return "Converted prices are unavailable right now. Showing Indian Rupees, the listed plan currency.";
    }
    return `Converted from INR using European Central Bank rates${fxAsOf ? ` (${fxAsOf})` : ""}. Stores still bill in your local currency.`;
  }, [currency, fxAsOf, fxReady, fxError]);

  return (
    <SectionShell
      id="pricing"
      eyebrow="Subscription plans"
      title="Three paid plans, plus Free."
      subtitle="Hard-limit freemium: Free is useful, then a clear wall. Starter, Family, and Pro each have monthly and yearly prices. Compare every limit below."
    >
      <div className="mb-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm leading-relaxed text-slate-600 dark:border-slate-800/60 dark:bg-slate-800/90 dark:text-slate-300">
        Free users get real value, no ads, and full iOS plus Android access. When you hit a limit (third member, extra module, 11th reminder), the app asks you to upgrade. It is meant to feel like you need more, not like the app is broken.
      </div>

      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div
          className="inline-flex w-fit rounded-full border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900/60"
          role="group"
          aria-label="Billing cycle"
        >
          {(["monthly", "yearly"] as const).map((item) => {
            const active = cycle === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCycle(item)}
                className={cn(
                  "rounded-full px-4 py-1.5 font-display text-[12px] font-bold capitalize transition",
                  active
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                )}
              >
                {item === "yearly" ? "Yearly" : "Monthly"}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Show prices in
          </p>
          <div
            className="inline-flex flex-wrap gap-1 rounded-full border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900/60"
            role="group"
            aria-label="Plan currency"
          >
            {DISPLAY_CURRENCIES.map((item) => {
              const disabled = item.code !== "INR" && !fxReady;
              const active = currency === item.code;
              return (
                <button
                  key={item.code}
                  type="button"
                  disabled={disabled}
                  onClick={() => setCurrency(item.code)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 font-display text-[12px] font-bold transition",
                    active
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                    disabled && "cursor-not-allowed opacity-40"
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <p className="mb-6 text-xs font-medium leading-relaxed text-slate-500 dark:text-slate-400">
        {fxNote}
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {SUBSCRIPTION_PLANS.map((plan, index) => {
          const isFamily = plan.id === "family";
          const isFree = plan.id === "free";
          const amountInr =
            isFree || cycle === "monthly" ? plan.monthlyInr : plan.yearlyInr;
          const period = isFree
            ? "/ month"
            : cycle === "yearly"
              ? "/ year"
              : "/ month";
          const yearlyLabel =
            cycle === "yearly" && "yearlyOffLabel" in plan ? plan.yearlyOffLabel : null;

          return (
            <Reveal key={plan.id} delay={index * 0.06}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-6 sm:p-7",
                  isFamily
                    ? "border-indigo-200 bg-indigo-50 shadow-2xl dark:border-indigo-500/30 dark:bg-slate-950 dark:shadow-indigo-500/10"
                    : "border-slate-200 bg-white dark:border-slate-800/60 dark:bg-slate-800/90"
                )}
              >
                {isFamily ? (
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                    <div className="absolute right-0 top-0 h-[320px] w-[320px] -translate-y-1/2 translate-x-1/3 rounded-full bg-indigo-500/20 blur-[100px] dark:bg-indigo-600/20" />
                  </div>
                ) : null}

                <div className="relative z-10 mb-6">
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={cn(
                        "inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest",
                        isFamily
                          ? "border border-indigo-200 bg-indigo-100 text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/20 dark:text-indigo-400"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                      )}
                    >
                      {plan.name}
                    </div>
                    {plan.recommended ? (
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400">
                        <Sparkles className="h-3 w-3" />
                        Recommended
                      </div>
                    ) : null}
                  </div>
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                      {price(amountInr)}
                    </span>
                    <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
                      {period}
                    </span>
                  </div>
                  {yearlyLabel ? (
                    <p className="mt-2 text-[12px] font-semibold text-emerald-700 dark:text-emerald-400">
                      {yearlyLabel}
                    </p>
                  ) : null}
                  {!isFree && cycle === "yearly" && plan.id === "pro" ? (
                    <p className="mt-2 text-[12px] font-semibold text-slate-500">
                      Versus {price(plan.monthlyInr * 12)} at the monthly rate
                    </p>
                  ) : null}
                  <p className="mt-3 text-[13px] font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                    {plan.tagline}
                  </p>
                </div>

                <ul className="relative z-10 mb-5 flex-1 space-y-3">
                  {CARD_FEATURES[plan.id].map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2
                        className={cn(
                          "h-5 w-5 shrink-0",
                          isFamily
                            ? "text-indigo-600 dark:text-indigo-400"
                            : "text-slate-400 dark:text-slate-500"
                        )}
                      />
                      <span
                        className={cn(
                          "text-[13px] font-medium",
                          isFamily
                            ? "font-bold text-slate-900 dark:text-white"
                            : "text-slate-700 dark:text-slate-300"
                        )}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="relative z-10 mb-6">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Hits a paywall
                  </p>
                  <ul className="space-y-2">
                    {CARD_WALLS[plan.id].map((f) => (
                      <li key={f} className="flex items-start gap-3 opacity-70">
                        <XCircle className="h-4 w-4 shrink-0 text-slate-300 dark:text-slate-600" />
                        <span className="text-[12px] font-medium text-slate-500 dark:text-slate-400">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#download"
                  className={cn(
                    "relative z-10 mt-auto block w-full rounded-xl py-4 text-center text-sm font-bold transition-colors",
                    isFamily
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-500"
                      : "border border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/50 dark:text-white dark:hover:bg-slate-800"
                  )}
                >
                  {plan.cta}
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>

      <p className="mt-5 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
        Listed prices: Free ₹0, Starter ₹99/month or ₹799/year, Family ₹199/month or ₹1,499/year, Pro ₹499/month or ₹3,999/year.
      </p>

      <Reveal delay={0.2}>
        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800/60 dark:bg-slate-800/90">
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800/60 dark:bg-slate-900/50">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Plan comparison: every limit
            </h3>
          </div>
          <div className="overflow-x-auto">
            <div className="hidden min-w-[720px] grid-cols-5 gap-3 border-b border-slate-100 px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 sm:grid dark:border-slate-800/60">
              <div>Feature / limit</div>
              <div>Free</div>
              <div>Starter ₹99</div>
              <div>Family ₹199</div>
              <div>Pro ₹499</div>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {PRICING_FEATURES.map((item) => (
                <div
                  key={item.name}
                  className="grid grid-cols-1 gap-3 px-6 py-4 sm:min-w-[720px] sm:grid-cols-5 sm:items-center sm:gap-3"
                >
                  <div className="text-[13px] font-bold text-slate-900 dark:text-slate-200">
                    {item.name}
                  </div>
                  <ComparisonCell label="Free" value={item.free} />
                  <ComparisonCell label="Starter" value={item.starter} />
                  <ComparisonCell
                    label="Family"
                    value={item.family}
                    emphasize
                  />
                  <ComparisonCell label="Pro" value={item.pro} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <p className="mt-6 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
        <a href="#faq" className="text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400">
          Plan questions are in the FAQ below
        </a>
      </p>
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
