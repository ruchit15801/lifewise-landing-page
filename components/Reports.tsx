"use client";

import { motion } from "framer-motion";
import { LineChart, Search, FileDown, ShieldAlert } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { EXPENSE_CATEGORIES } from "@/lib/landing-data";

export function Reports() {
  return (
    <SectionShell
      id="reports"
      eyebrow="Insights & Reports"
      title="Understand where the money goes."
      subtitle="Auto-categorize family expenses, track month-over-month trends, and get alerted to unusual spending or 'Money Leaks'."
    >
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        
        {/* Left: Monthly Expenses Mockup */}
        <Reveal delay={0.1}>
          <div className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-8 lg:p-10 transition-colors dark:border-slate-800/60 dark:bg-slate-800/90">
            <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            
            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">August Expenses</h3>
                  <div className="text-[13px] font-medium text-slate-500 mt-1 dark:text-slate-400">Total: ₹42,500</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                  <LineChart className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-5">
                {EXPENSE_CATEGORIES.map((cat, i) => (
                  <div key={cat.name}>
                    <div className="mb-2 flex items-center justify-between text-[13px]">
                      <span className="font-bold text-slate-700 dark:text-slate-300">{cat.name}</span>
                      <span className="font-medium text-slate-500 dark:text-slate-400">{cat.amount}</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${cat.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.2, duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full bg-blue-500 dark:bg-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 py-3 text-[13px] font-bold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                  <Search className="h-4 w-4" />
                  View Details
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 py-3 text-[13px] font-bold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                  <FileDown className="h-4 w-4" />
                  Export PDF
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: Money Leak Alert Mockup */}
        <Reveal delay={0.2}>
          <div className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-8 lg:p-10 transition-colors dark:border-slate-800/60 dark:bg-slate-800/90">
            <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle, #ef4444 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-rose-500/10 blur-[60px] pointer-events-none dark:bg-rose-600/10" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-rose-700 w-fit dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-400">
                <ShieldAlert className="h-4 w-4" />
                Smart Alerts
              </div>

              <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Money Leak Detected</h3>
              <p className="text-[14px] leading-relaxed text-slate-600 dark:text-slate-400">
                LifeWise AI constantly monitors family expenses against historical patterns and alerts caregivers of unusual spikes.
              </p>

              <div className="mt-auto pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="rounded-2xl border border-rose-200 bg-white p-5 shadow-xl dark:border-rose-500/30 dark:bg-slate-900/90 dark:shadow-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">
                      <ShieldAlert className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-slate-900 dark:text-white">Unusual Pharmacy Bill</h4>
                      <p className="mt-1 text-xs font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                        A bill of ₹4,500 was logged for Papa. This is 3x higher than his usual monthly pharmacy expense of ₹1,500.
                      </p>
                      <div className="mt-4 flex gap-3">
                        <button className="rounded-lg bg-rose-600 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-rose-700">
                          Review Bill
                        </button>
                        <button className="rounded-lg bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
