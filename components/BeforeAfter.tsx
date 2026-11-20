"use client";

import { motion } from "framer-motion";
import { ArrowRight, Pill, Receipt, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";

const rows: {
  before: string;
  after: string;
  icon: LucideIcon;
}[] = [
  {
    before: "Papa forgot his BP tablet again",
    after:
      "He gets a reminder. If he misses it, you get an alert in 30 minutes.",
    icon: Pill
  },
  {
    before: "Late fee on the electricity bill",
    after:
      "Scan the bill, LifeWise reads amount + due date and reminds you.",
    icon: Receipt
  },
  {
    before: '"Did anyone call Mummy?" in the family group',
    after: "Everyone sees who did what, in real time.",
    icon: Users
  }
];

export function BeforeAfter() {
  return (
    <SectionShell
      id="problems"
      eyebrow="Before vs With LifeWise"
      title="The same day, without the WhatsApp guessing."
      subtitle="Three problems Indian families hit every week — and what changes when LifeWise is on."
      className="py-5 sm:py-7"
    >
      <div className="space-y-3">
        {rows.map((row, i) => {
          const Icon = row.icon;
          return (
            <Reveal key={row.before} delay={i * 0.06}>
              <article className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-premium dark:border-white/10 dark:bg-slate-900/70">
                <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5 dark:border-white/5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-200">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[12px] font-semibold text-slate-500 dark:text-slate-300">
                    Everyday family problem #{i + 1}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]">
                  <div className="bg-rose-50/90 p-4 sm:p-5 dark:bg-rose-500/10">
                    <p className="text-[11px] font-bold uppercase tracking-wide text-rose-600 dark:text-rose-300">
                      Before
                    </p>
                    <p className="mt-1.5 text-sm font-semibold leading-snug text-slate-900 dark:text-white sm:text-[15px]">
                      {row.before}
                    </p>
                  </div>

                  <div
                    aria-hidden
                    className="flex items-center justify-center bg-slate-50 px-3 py-2 md:px-2 dark:bg-slate-800/60"
                  >
                    <motion.span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-600 shadow-sm dark:border-emerald-400/30 dark:bg-slate-900 dark:text-emerald-300"
                      animate={{ x: [0, 5, 0], scale: [1, 1.06, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.15
                      }}
                    >
                      <ArrowRight className="h-4 w-4 max-md:rotate-90" />
                    </motion.span>
                  </div>

                  <div className="bg-emerald-50/90 p-4 sm:p-5 dark:bg-emerald-500/10">
                    <p className="text-[11px] font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                      With LifeWise
                    </p>
                    <p className="mt-1.5 text-sm font-semibold leading-snug text-slate-900 dark:text-white sm:text-[15px]">
                      {row.after}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
