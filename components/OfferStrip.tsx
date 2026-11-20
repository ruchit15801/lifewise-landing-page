"use client";

import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SmartInstallCTA } from "@/components/SmartInstallCTA";

const steps = [
  { n: "1", title: "Install", body: "Free on Play & App Store" },
  { n: "2", title: "Add Papa + 1 medicine", body: "About 2 minutes" },
  { n: "3", title: "First alert today", body: "Reminder + missed-dose ping" }
] as const;

export function OfferStrip() {
  return (
    <section id="offer" className="scroll-mt-24 py-4 sm:py-5">
      <div className="section-max">
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] border border-indigo-200/80 bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 p-4 shadow-xl shadow-indigo-500/20 sm:p-5 dark:border-indigo-400/20">
            <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-6">
              <div>
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-100">
                  Start today · No card needed
                </p>
                <h2 className="mt-1.5 font-display text-xl font-bold leading-snug text-white sm:text-2xl">
                  First month: Family plan features free.
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-indigo-100">
                  After that: keep the Free plan or upgrade from{" "}
                  <strong className="font-semibold text-white">
                    Rs. 99/month
                  </strong>
                  .
                </p>

                <ol className="mt-3 grid gap-2 sm:grid-cols-3">
                  {steps.map((step) => (
                    <li
                      key={step.n}
                      className="flex items-start gap-2.5 rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 backdrop-blur-sm"
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white text-[12px] font-bold text-indigo-700">
                        {step.n}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[13px] font-semibold text-white">
                          {step.title}
                        </span>
                        <span className="mt-0.5 block text-[11px] leading-snug text-indigo-100">
                          {step.body}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white p-4 shadow-lg dark:bg-slate-950">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Install Free
                    </p>
                    <p className="mt-1 text-[12px] leading-snug text-slate-600 dark:text-slate-300">
                      1st month all features · Android & iPhone
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <SmartInstallCTA
                    location="offer"
                    label="Install Free"
                    showDesktopStores
                    size="md"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
