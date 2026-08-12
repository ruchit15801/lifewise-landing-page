"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion, ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import { FAQ_ITEMS } from "@/lib/faqs";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionShell
      id="faq"
      eyebrow="FAQ"
      title="Real Questions About LifeWise, India's Family App"
      subtitle="Answers about Papa medicine reminders, electricity bills, Hindi support, Premium Rs. 199, Family Hub, and how to contact our India support team."
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left: Visual sticky card */}
        <Reveal className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 rounded-2xl border border-slate-200 bg-slate-50 p-8 overflow-hidden transition-colors dark:border-slate-800/60 dark:bg-[#0a0a12]">
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)", backgroundSize: "22px 22px" }}
            />
            {/* Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-blue-500/10 blur-[50px] pointer-events-none dark:bg-blue-600/20" />

            <div className="relative z-10">
              <div className="h-12 w-12 rounded-xl bg-blue-100 border border-blue-200 grid place-items-center mb-5 dark:bg-blue-500/20 dark:border-blue-500/30">
                <MessageCircleQuestion className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>

              <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">Got questions?</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Most answers are right here. If not, our India support team is ready in English & Hindi.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800/60 space-y-4">
                {[
                  { q: `${FAQ_ITEMS.length}+`, label: "FAQs answered" },
                  { q: "24h", label: "Reply time (IST)" },
                  { q: "🇮🇳", label: "India-first product" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <div className="text-lg font-black text-slate-900 dark:text-white w-12 shrink-0">{s.q}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="/support"
                className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
              >
                Contact Support
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right: Accordion list */}
        <Reveal delay={0.08} className="lg:col-span-2">
          <div className="space-y-2">
            {FAQ_ITEMS.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, type: "spring", stiffness: 300, damping: 25 }}
                className={cn(
                  "rounded-2xl border overflow-hidden transition-all",
                  openIndex === i
                    ? "border-blue-200 bg-blue-50 dark:border-blue-500/30 dark:bg-blue-950/30"
                    : "border-slate-200 bg-white dark:border-slate-800/60 dark:bg-slate-950"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={cn(
                    "text-[15px] font-bold leading-snug transition-colors",
                    openIndex === i ? "text-blue-700 dark:text-blue-300" : "text-slate-900 dark:text-white"
                  )}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "h-7 w-7 rounded-full flex-shrink-0 grid place-items-center border transition-colors",
                      openIndex === i
                        ? "border-blue-300 bg-blue-100 text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/20 dark:text-blue-400"
                        : "border-slate-200 bg-slate-100 text-slate-500 dark:border-slate-700 dark:bg-slate-800"
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300 border-t border-blue-200 dark:border-blue-500/10 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
