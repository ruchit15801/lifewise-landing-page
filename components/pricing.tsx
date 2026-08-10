"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import { FREE_PLAN, PREMIUM_PLAN, YEARLY_TIERS } from "@/lib/landing-data";

export function Pricing() {
  return (
    <SectionShell
      id="pricing"
      eyebrow="Pricing"
      title="Freemium — Free vs Premium"
      subtitle="Start free with essentials. Upgrade to Premium for all 20 modules, WiseAI, voice reminders, and full family management."
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {[FREE_PLAN, PREMIUM_PLAN].map((p, i) => {
          const highlight = "period" in p && p.name === "Premium";
          return (
            <Reveal key={p.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -8 }}
                className={cn(
                  "glass p-6 sm:p-7 relative overflow-hidden h-full",
                  highlight && "ring-glow"
                )}
              >
                {highlight ? (
                  <div className="absolute right-5 top-5 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent border border-accent/20">
                    Recommended
                  </div>
                ) : null}

                <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {p.name}
                </div>
                <div className="mt-3 flex items-end gap-1">
                  <div className="text-3xl font-semibold tracking-tight">
                    {p.price}
                  </div>
                  {"period" in p && p.period ? (
                    <div className="pb-1 text-sm font-semibold text-slate-600 dark:text-slate-400">
                      {p.period}
                    </div>
                  ) : null}
                </div>
                <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  {p.desc}
                </div>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/40 via-transparent to-accent/40 opacity-70" />

                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary/10 text-primary border border-primary/20">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-slate-700 dark:text-slate-300">{f}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  href="#download"
                  className={cn("mt-8 w-full", highlight ? "btn-primary" : "btn-secondary")}
                >
                  {highlight ? "Upgrade to Premium" : "Get started free"}
                </motion.a>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {YEARLY_TIERS.map((tier, i) => (
          <Reveal key={tier.name} delay={0.1 + i * 0.05}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass p-5 sm:p-6"
            >
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {tier.name}
              </div>
              <div className="mt-2 flex items-end gap-1">
                <div className="text-2xl font-semibold tracking-tight">
                  {tier.price}
                </div>
                <div className="pb-0.5 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {tier.period}
                </div>
              </div>
              <div className="mt-2 text-sm text-accent font-semibold">{tier.note}</div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
