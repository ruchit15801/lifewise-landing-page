"use client";

import { motion } from "framer-motion";
import { CheckCircle2, HeartPulse, ReceiptIndianRupee } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";

function ProgressRing({ value }: { value: number }) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  const dash = (pct / 100) * c;

  return (
    <div className="relative grid place-items-center">
      <svg width="140" height="140" viewBox="0 0 140 140" className="rotate-[-90deg]">
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="rgba(2,6,23,0.08)"
          strokeWidth="10"
          className="dark:hidden"
        />
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="10"
          className="hidden dark:block"
        />
        <motion.circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="url(#grad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c - dash}`}
          initial={{ strokeDasharray: `0 ${c}` }}
          whileInView={{ strokeDasharray: `${dash} ${c - dash}` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6D5DF6" />
            <stop offset="100%" stopColor="#22C55E" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
          Life Score
        </div>
        <div className="mt-1 text-3xl font-semibold tracking-tight">{pct}</div>
      </div>
    </div>
  );
}

export function LifeScore() {
  return (
    <SectionShell
      id="life-score"
      eyebrow="Life Score"
      title="Your Daily Life Score"
      subtitle="A simple signal that improves when your life runs smoothly: bills paid on time, medicines taken, spending controlled."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass p-6 sm:p-8 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
            <div className="ring-glow rounded-3xl p-5 bg-white/50 dark:bg-white/5">
              <ProgressRing value={78} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold">What improves your score</div>
              <div className="mt-5 grid gap-3">
                {[
                  { icon: ReceiptIndianRupee, t: "Bills paid on time", d: "No late fees, no stress." },
                  { icon: HeartPulse, t: "Medicines taken", d: "Consistency = better outcomes." },
                  { icon: CheckCircle2, t: "Spending controlled", d: "Stay within your plan effortlessly." }
                ].map((x) => {
                  const Icon = x.icon;
                  return (
                    <motion.div
                      key={x.t}
                      whileHover={{ y: -4 }}
                      className={cn(
                        "rounded-2xl border border-slate-200/70 bg-white/55 p-5 shadow-premium backdrop-blur-xl",
                        "dark:border-white/10 dark:bg-white/5"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-premium">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{x.t}</div>
                          <div className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                            {x.d}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="glass p-6 sm:p-8">
            <div className="text-sm font-semibold">Daily summary</div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              The assistant focuses on high-impact actions — and keeps everything else quiet.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                { k: "Bills", v: "2 paid • 0 overdue" },
                { k: "Medicines", v: "1 taken • 1 scheduled" },
                { k: "Spending", v: "₹420 today • on track" }
              ].map((x) => (
                <motion.div
                  key={x.k}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200/70 bg-white/55 p-5 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-semibold">{x.k}</div>
                    <div className="text-sm text-slate-700 dark:text-slate-300">{x.v}</div>
                  </div>
                  <div className="mt-3 h-px w-full bg-gradient-to-r from-primary/40 via-transparent to-accent/40 opacity-70" />
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

