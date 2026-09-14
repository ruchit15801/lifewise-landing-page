"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import { FAQ_ITEMS, type FaqItem } from "@/lib/faqs";

export function FAQSection({
  items = FAQ_ITEMS,
  eyebrow = "FAQ",
  title = "What LifeWise actually is",
  subtitle = "What LifeWise is, why Family Hub is unique, Family Ledger, location, wearables, WiseAI, Free limits, and Starter, Family, and Pro plans. Support contact lives on the Support page.",
  footerHref = "#support",
  footerLabel = "Need help? Contact support",
  footerNote = "Download, billing, and contact questions are answered in Support."
}: {
  items?: FaqItem[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  footerHref?: string;
  footerLabel?: string;
  footerNote?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionShell
      id="faq"
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
    >
      <Reveal>
        <div className="mx-auto max-w-4xl space-y-2.5">
          {items.map((faq, i) => {
            const open = openIndex === i;
            const num = String(i + 1).padStart(2, "0");

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: Math.min(i * 0.03, 0.35),
                  type: "spring",
                  stiffness: 320,
                  damping: 28
                }}
                className={cn(
                  "group overflow-hidden rounded-2xl border transition-all duration-300",
                  open
                    ? "border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-violet-50 shadow-md shadow-indigo-500/10 dark:border-indigo-500/30 dark:from-indigo-950/50 dark:via-slate-800 dark:to-violet-950/40"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm dark:border-slate-800/80 dark:bg-slate-800/90 dark:hover:border-slate-600"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                >
                  <span
                    className={cn(
                      "grid h-9 w-9 shrink-0 place-items-center rounded-xl font-display text-[12px] font-bold transition-colors sm:h-10 sm:w-10 sm:text-[13px]",
                      open
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/30"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200/80"
                    )}
                  >
                    {num}
                  </span>

                  <span
                    className={cn(
                      "min-w-0 flex-1 font-display text-[14px] font-semibold leading-snug transition-colors sm:text-[16px]",
                      open ? "text-indigo-800 dark:text-indigo-200" : "text-slate-900 dark:text-white"
                    )}
                  >
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors sm:h-9 sm:w-9",
                      open
                        ? "border-indigo-300 bg-indigo-100 text-indigo-700"
                        : "border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/70 text-slate-500 dark:text-slate-400 group-hover:border-slate-300"
                    )}
                  >
                    <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
                  </motion.span>
                </button>

                <div
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="min-h-0">
                    <div className="border-t border-indigo-100/80 px-4 pb-5 pt-3 sm:px-6 sm:pb-6 sm:pl-[4.5rem]">
                      <p className="faq-answer max-w-3xl text-[14px] leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/60 px-5 py-4 sm:flex-row sm:px-6">
            <p className="text-center text-sm font-medium text-slate-600 dark:text-slate-400 sm:text-left">
              {footerNote}
            </p>
            <a
              href={footerHref}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-indigo-600 px-4 py-2.5 font-display text-sm font-bold text-white shadow-md shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:bg-indigo-500"
            >
              {footerLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
