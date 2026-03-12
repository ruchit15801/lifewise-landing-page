"use client";

import { motion } from "framer-motion";
import { PieChart, TrendingUp } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";

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
      id="reports"
      eyebrow="Life Reports"
      title="Understand Your Life at a Glance"
      subtitle="Beautiful summaries of your month: spending trends, category breakdown, and savings momentum."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-premium">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Monthly spending</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    March • Last 30 days
                  </div>
                </div>
              </div>
              <div className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent border border-accent/20">
                +12% savings
              </div>
            </div>

            <div className="mt-7 grid grid-cols-12 gap-2 items-end h-40">
              {[30, 40, 32, 52, 45, 62, 55, 48, 66, 60, 72, 64].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0, opacity: 0.6 }}
                  whileInView={{ height: `${h}%`, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    delay: i * 0.03,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="col-span-1 rounded-full bg-gradient-to-t from-primary/25 to-primary"
                />
              ))}
            </div>

            <div className="mt-6 grid gap-3">
              <Bar label="Bills" value="₹4,200" pct={66} tone="primary" />
              <Bar label="Food" value="₹3,150" pct={52} tone="accent" />
              <Bar label="Subscriptions" value="₹799" pct={30} tone="primary" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="glass p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent to-emerald-500 text-white shadow-premium">
                <PieChart className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-semibold">Category breakdown</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  Premium visualization • privacy-first
                </div>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { t: "Essentials", p: "42%", c: "from-primary to-indigo-600" },
                { t: "Health", p: "18%", c: "from-accent to-emerald-500" },
                { t: "Family", p: "24%", c: "from-primary/70 to-indigo-400" },
                { t: "Lifestyle", p: "16%", c: "from-accent/70 to-emerald-400" }
              ].map((x, i) => (
                <motion.div
                  key={x.t}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200/70 bg-white/55 p-5 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-semibold">{x.t}</div>
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      {x.p}
                    </div>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-900/5 dark:bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: x.p }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: 0.05 + i * 0.05,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className={cn("h-full rounded-full bg-gradient-to-r", x.c)}
                    />
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

