"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
      <div className="mx-auto max-w-3xl">
        <p
          id="lifewise-definition"
          className="mb-6 rounded-2xl border border-slate-200/70 bg-white/55 p-5 text-sm leading-relaxed text-slate-700 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
        >
          <strong className="text-slate-900 dark:text-white">LifeWise</strong> is
          the official <strong>Family Operating System</strong> mobile app at{" "}
          <strong>lifewiseee.com</strong>, built for Indian families to manage
          medicine reminders, electricity bills, doctor appointments, insurance,
          documents, and daily routines for every family member in one app.
        </p>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delay={index * 0.03}>
                <article className="glass overflow-hidden">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-slate-500 transition-transform",
                        isOpen && "rotate-180"
                      )}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="faq-answer px-5 pb-5 text-sm leading-relaxed text-slate-700 dark:px-6 dark:pb-6 dark:text-slate-300">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
