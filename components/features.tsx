"use client";

import { motion } from "framer-motion";
import { Mic, ScanLine, Bot, CheckCircle2, Copy } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import { PRODUCT_FEATURES } from "@/lib/landing-data";

export function Features() {
  return (
    <SectionShell
      id="features"
      eyebrow="Core Capabilities"
      title="Everything You Need."
      subtitle="From recording health metrics via voice to scanning bills instantly, LifeWise replaces 5 different apps with one unified platform."
    >
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Feature 1: Voice */}
        <Reveal delay={0.1}>
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-colors dark:border-slate-800/60 dark:bg-[#0a0a12] h-full flex flex-col">
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle, #8b5cf6 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-[60px] pointer-events-none group-hover:bg-violet-500/20 transition-colors" />

            <div className="relative z-10 flex-1">
              <div className="h-14 w-14 rounded-2xl bg-violet-50 border border-violet-100 text-violet-600 grid place-items-center mb-6 dark:bg-violet-500/10 dark:border-violet-500/20 dark:text-violet-400">
                <Mic className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Speak to log</h3>
              <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                &quot;Papa&apos;s BP is 120/80&quot; or &quot;Mummy took her medicine.&quot; Our AI understands natural Hindi and English and updates the Family Hub instantly.
              </p>
            </div>

            {/* Voice Mockup */}
            <div className="relative mt-8 pt-8 border-t border-slate-100 dark:border-slate-800/60 z-10">
              <div className="mx-auto w-full max-w-[240px] rounded-2xl bg-slate-50 border border-slate-200 p-4 shadow-sm dark:bg-slate-900/60 dark:border-slate-700/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-violet-500 rounded-full animate-ping opacity-20" />
                    <div className="h-10 w-10 rounded-full bg-violet-100 text-violet-600 border border-violet-200 grid place-items-center relative z-10 dark:bg-violet-500/20 dark:text-violet-400 dark:border-violet-500/30">
                      <Mic className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="h-2 w-24 rounded-full bg-slate-200 dark:bg-slate-700/50" />
                </div>
                <div className="rounded-xl bg-white border border-slate-100 p-3 flex gap-2 dark:bg-slate-800/50 dark:border-slate-700/50">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <div className="text-[11px] font-medium text-slate-600 dark:text-slate-300">Logged BP 120/80 for Papa</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Feature 2: Bill Scan */}
        <Reveal delay={0.2}>
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-colors dark:border-slate-800/60 dark:bg-[#0a0a12] h-full flex flex-col">
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle, #0ea5e9 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-[60px] pointer-events-none group-hover:bg-sky-500/20 transition-colors" />

            <div className="relative z-10 flex-1">
              <div className="h-14 w-14 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 grid place-items-center mb-6 dark:bg-sky-500/10 dark:border-sky-500/20 dark:text-sky-400">
                <ScanLine className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Snap & Extract</h3>
              <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                Take a photo of any electricity bill, insurance paper, or lab report. We auto-extract amounts, due dates, and securely store the document.
              </p>
            </div>

            {/* Scan Mockup */}
            <div className="relative mt-8 pt-8 border-t border-slate-100 dark:border-slate-800/60 z-10">
              <div className="mx-auto w-full max-w-[240px] rounded-2xl bg-slate-50 border border-slate-200 p-4 shadow-sm dark:bg-slate-900/60 dark:border-slate-700/50">
                <div className="relative h-24 w-full rounded-xl bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3 border border-slate-300 dark:border-slate-700">
                  <div className="absolute top-0 left-0 w-full h-1 bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.8)] animate-[scan_2s_ease-in-out_infinite]" />
                  <div className="absolute inset-4 border border-dashed border-slate-400 dark:border-slate-600 rounded-lg flex flex-col justify-center gap-2 p-2">
                    <div className="h-2 w-full rounded bg-slate-300 dark:bg-slate-700" />
                    <div className="h-2 w-3/4 rounded bg-slate-300 dark:bg-slate-700" />
                    <div className="h-2 w-1/2 rounded bg-slate-300 dark:bg-slate-700" />
                  </div>
                </div>
                <div className="flex justify-between items-center text-[11px] font-bold">
                  <span className="text-slate-500 dark:text-slate-400">Due: 15 Aug</span>
                  <span className="text-slate-900 dark:text-white bg-sky-100 dark:bg-sky-500/20 px-2 py-0.5 rounded text-sky-700 dark:text-sky-400">₹2,450</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Feature 3: WiseAI */}
        <Reveal delay={0.3}>
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-colors dark:border-slate-800/60 dark:bg-[#0a0a12] h-full flex flex-col">
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle, #f43f5e 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-500/10 blur-[60px] pointer-events-none group-hover:bg-rose-500/20 transition-colors" />

            <div className="relative z-10 flex-1">
              <div className="h-14 w-14 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 grid place-items-center mb-6 dark:bg-rose-500/10 dark:border-rose-500/20 dark:text-rose-400">
                <Bot className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Ask WiseAI</h3>
              <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                Instantly query your family&apos;s data. &quot;When is Papa&apos;s next doctor visit?&quot; or &quot;Show me last month&apos;s expenses.&quot;
              </p>
            </div>

            {/* Chat Mockup */}
            <div className="relative mt-8 pt-8 border-t border-slate-100 dark:border-slate-800/60 z-10">
              <div className="mx-auto w-full max-w-[240px] rounded-2xl bg-slate-50 border border-slate-200 p-4 shadow-sm dark:bg-slate-900/60 dark:border-slate-700/50 space-y-3">
                <div className="flex justify-end">
                  <div className="rounded-xl rounded-tr-sm bg-slate-200 dark:bg-slate-800 px-3 py-2 text-[10px] font-medium text-slate-700 dark:text-slate-300">
                    Did Mummy take pills?
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-6 w-6 shrink-0 rounded-full bg-rose-100 text-rose-600 border border-rose-200 grid place-items-center dark:bg-rose-500/20 dark:text-rose-400 dark:border-rose-500/30">
                    <Bot className="h-3 w-3" />
                  </div>
                  <div className="rounded-xl rounded-tl-sm bg-white border border-slate-200 px-3 py-2 text-[10px] font-medium text-slate-700 dark:bg-slate-800/80 dark:border-slate-700/50 dark:text-slate-300">
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
