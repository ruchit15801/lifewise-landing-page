"use client";

import { motion } from "framer-motion";
import { AlertTriangle, PieChart, TrendingUp } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import { MONEY_LEAK_EXAMPLE, PRD_EXAMPLE_DATE } from "@/lib/landing-data";

function Bar({
  label,
  value,
  pct,
  tone
}: {
  label: string;
  value: string;
  pct: number;
  tone: "primary" | "accent";
}) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/55 p-4 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-semibold">{label}</div>
        <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
          {value}
        </div>
      </div>
      <div className="mt-3 h-2 rounded-full bg-slate-900/5 dark:bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "h-full rounded-full",
            tone === "primary"
              ? "bg-gradient-to-r from-primary to-indigo-600"
              : "bg-gradient-to-r from-accent to-emerald-500"
          )}
        />
      </div>
    </div>
  );
}

export function Reports() {
  return (
    <SectionShell
      id="insights"
      eyebrow="Insights Tab"
      title="Analytics, Reports & Money Leak Detection"
      subtitle="Spending overview, bills tracker, health summary, family activity feed, and AI-driven savings alerts — all in one Insights tab."
    >
      <Reveal>
        <motion.div
          whileHover={{ y: -4 }}
          className="mb-6 glass p-5 sm:p-6 border border-amber-200/60 bg-amber-50/50 dark:border-amber-500/20 dark:bg-amber-500/5"
        >
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-500/15 text-amber-700 dark:text-amber-400">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">Money Leak Alert</div>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                {MONEY_LEAK_EXAMPLE}
              </p>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                Example: Netflix, Prime & Hotstar — potential saving Rs. 3,600/year if you cancel one.
              </p>
            </div>
          </div>
        </motion.div>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        <Reveal>
          <div className="glass p-6 sm:p-8 relative overflow-hidden">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/12 blur-3xl" />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-premium">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Spending overview</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    {PRD_EXAMPLE_DATE} • Last 30 days
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 grid gap-3">
              <Bar label="Food" value="₹8,450" pct={62} tone="accent" />
              <Bar label="Bills" value="₹4,200" pct={66} tone="primary" />
              <Bar label="Medical" value="₹2,100" pct={40} tone="accent" />
              <Bar label="Subscriptions" value="₹799" pct={30} tone="primary" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="glass p-6 sm:p-8 relative overflow-hidden">
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent to-emerald-500 text-white shadow-premium">
                <PieChart className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-semibold">Monthly PDF report</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  Premium • Auto-generated
                </div>
              </div>
            </div>

            <div className="mt-7 grid gap-3">
              {[
                { t: "Spending by category", d: "Pie chart + month-over-month comparison" },
                { t: "Bills tracker", d: "Paid, upcoming, overdue — full payment history" },
                { t: "Health summary", d: "Medicine compliance %, BP/sugar trends, appointments" },
                { t: "Family activity", d: "Son marked Papa's medicine as taken at 8:05 PM" }
              ].map((x) => (
                <motion.div
                  key={x.t}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200/70 bg-white/55 p-5 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                >
                  <div className="text-sm font-semibold">{x.t}</div>
                  <div className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                    {x.d}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
