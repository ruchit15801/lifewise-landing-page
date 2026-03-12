"use client";

import { motion } from "framer-motion";
import { HeartPulse, Landmark, Users, Bell } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";

const blocks = [
  { icon: Landmark, t: "Money" },
  { icon: HeartPulse, t: "Health" },
  { icon: Users, t: "Family" },
  { icon: Bell, t: "Reminders" }
];

export function SeniorMode() {
  return (
    <SectionShell
      id="senior"
      eyebrow="Senior Mode"
      title="Designed for Everyone — Even Seniors"
      subtitle="Big buttons, clear typography, and a calm layout that feels familiar — without sacrificing modern luxury."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass p-6 sm:p-8">
            <div className="text-sm font-semibold">Big button mode</div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Toggle a simplified interface with extra spacing, larger tap targets, and clearer labels.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4">
              {blocks.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.t}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl border border-slate-200/70 bg-white/55 p-6 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-premium">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="mt-4 text-base font-semibold">{b.t}</div>
                    <div className="mt-2 h-2 w-full rounded-full bg-slate-900/5 dark:bg-white/10" />
                    <div className="mt-2 h-2 w-4/5 rounded-full bg-slate-900/5 dark:bg-white/10" />
                    <div className="mt-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                      Large tap target #{i + 1}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="glass p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/18 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <div className="text-sm font-semibold">Accessibility-first polish</div>
              <div className="mt-6 grid gap-3">
                {[
                  { t: "Readable", d: "High contrast, larger type, clean rhythm." },
                  { t: "Comfortable", d: "Reduced cognitive load and fewer controls." },
                  { t: "Confident", d: "Clear confirmations for critical reminders." }
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
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

