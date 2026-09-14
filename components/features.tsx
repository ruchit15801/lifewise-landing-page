"use client";

import { Mic, ScanLine, Bot, CheckCircle2 } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { UNIQUENESS_OFFERS } from "@/lib/landing-data";

export function Features() {
  return (
    <SectionShell
      id="features"
      eyebrow="What we offer"
      title="What makes LifeWise unique"
      subtitle="Most apps serve one person: a medicine list, a bill due date, or a personal health chart. LifeWise is a Family Operating System. Every module hangs off a family member, caregivers stay in sync, and Family Hub is the source of truth."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {UNIQUENESS_OFFERS.map((item, i) => (
          <Reveal key={item.title} delay={Math.min(i * 0.05, 0.25)}>
            <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 transition-colors dark:border-slate-800/60 dark:bg-slate-800/90 sm:p-7">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">
                vs {item.vs}
              </p>
              <h3 className="mt-2 font-display text-[17px] font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                {item.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Reveal delay={0.1}>
          <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-colors dark:border-slate-800/60 dark:bg-slate-800/90">
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
              style={{
                backgroundImage: "radial-gradient(circle, #8b5cf6 1px, transparent 1px)",
                backgroundSize: "24px 24px"
              }}
            />
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-[60px] transition-colors group-hover:bg-violet-500/20" />

            <div className="relative z-10 flex-1">
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-violet-100 bg-violet-50 text-violet-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400">
                <Mic className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                Speak to log
              </h3>
              <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                &quot;Papa&apos;s BP is 120/80&quot; or &quot;Mummy took her medicine.&quot; Voice
                understands natural Hindi and English and updates that member&apos;s Family Hub card.
              </p>
            </div>

            <div className="relative z-10 mt-8 border-t border-slate-100 pt-8 dark:border-slate-800/60">
              <div className="mx-auto w-full max-w-[240px] rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm dark:border-slate-700/50 dark:bg-slate-900/60">
                <div className="mb-3 flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 animate-ping rounded-full bg-violet-500 opacity-20" />
                    <div className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-violet-200 bg-violet-100 text-violet-600 dark:border-violet-500/30 dark:bg-violet-500/20 dark:text-violet-400">
                      <Mic className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="h-2 w-24 rounded-full bg-slate-200 dark:bg-slate-700/50" />
                </div>
                <div className="flex gap-2 rounded-xl border border-slate-100 bg-white p-3 dark:border-slate-700/50 dark:bg-slate-800/50">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                  <div className="text-[11px] font-medium text-slate-600 dark:text-slate-300">
                    Logged BP 120/80 for Papa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-colors dark:border-slate-800/60 dark:bg-slate-800/90">
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
              style={{
                backgroundImage: "radial-gradient(circle, #0ea5e9 1px, transparent 1px)",
                backgroundSize: "24px 24px"
              }}
            />
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-[60px] transition-colors group-hover:bg-sky-500/20" />

            <div className="relative z-10 flex-1">
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-sky-100 bg-sky-50 text-sky-600 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-400">
                <ScanLine className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                Snap & Extract
              </h3>
              <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                Photograph an electricity bill, insurance paper, or lab report. Amounts and due dates
                fill the form, then sit on the right family member, not a generic inbox.
              </p>
            </div>

            <div className="relative z-10 mt-8 border-t border-slate-100 pt-8 dark:border-slate-800/60">
              <div className="mx-auto w-full max-w-[240px] rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm dark:border-slate-700/50 dark:bg-slate-900/60">
                <div className="relative mb-3 h-24 w-full overflow-hidden rounded-xl border border-slate-300 bg-slate-200 dark:border-slate-700 dark:bg-slate-800">
                  <div className="absolute left-0 top-0 h-1 w-full animate-[scan_2s_ease-in-out_infinite] bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.8)]" />
                  <div className="absolute inset-4 flex flex-col justify-center gap-2 rounded-lg border border-dashed border-slate-400 p-2 dark:border-slate-600">
                    <div className="h-2 w-full rounded bg-slate-300 dark:bg-slate-700" />
                    <div className="h-2 w-3/4 rounded bg-slate-300 dark:bg-slate-700" />
                    <div className="h-2 w-1/2 rounded bg-slate-300 dark:bg-slate-700" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-slate-500 dark:text-slate-400">Due: 15 Aug</span>
                  <span className="rounded bg-sky-100 px-2 py-0.5 text-sky-700 dark:bg-sky-500/20 dark:text-sky-400">
                    ₹2,450
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-colors dark:border-slate-800/60 dark:bg-slate-800/90">
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
              style={{
                backgroundImage: "radial-gradient(circle, #f43f5e 1px, transparent 1px)",
                backgroundSize: "24px 24px"
              }}
            />
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-500/10 blur-[60px] transition-colors group-hover:bg-rose-500/20" />

            <div className="relative z-10 flex-1">
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-rose-100 bg-rose-50 text-rose-600 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-400">
                <Bot className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                Ask WiseAI
              </h3>
              <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                Ask about the family, not a personal calendar. &quot;When is Papa&apos;s next doctor
                visit?&quot; or &quot;Show me last month&apos;s Family Ledger.&quot;
              </p>
            </div>

            <div className="relative z-10 mt-8 border-t border-slate-100 pt-8 dark:border-slate-800/60">
              <div className="mx-auto w-full max-w-[240px] space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm dark:border-slate-700/50 dark:bg-slate-900/60">
                <div className="flex justify-end">
                  <div className="rounded-xl rounded-tr-sm bg-slate-200 px-3 py-2 text-[10px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    Did Mummy take pills?
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-rose-200 bg-rose-100 text-rose-600 dark:border-rose-500/30 dark:bg-rose-500/20 dark:text-rose-400">
                    <Bot className="h-3 w-3" />
                  </div>
                  <div className="rounded-xl rounded-tl-sm border border-slate-200 bg-white px-3 py-2 text-[10px] font-medium text-slate-700 dark:border-slate-700/50 dark:bg-slate-800/80 dark:text-slate-300">
                    Yes, marked done at 9:00 AM by Rahul.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
