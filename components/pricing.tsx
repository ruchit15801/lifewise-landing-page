"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Sparkles, Zap } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { StoreDownloadButtons } from "@/components/StoreDownloadButtons";
import { PRICING_FEATURES } from "@/lib/landing-data";

export function Pricing() {
  return (
    <SectionShell
      id="pricing"
      eyebrow="Simple Pricing"
      title="One plan for the whole family."
      subtitle="No per-user fees. One subscription covers your entire family with unlimited caregivers and 20+ modules."
    >
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        
        {/* FREE PLAN */}
        <Reveal>
          <div className="relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 transition-colors dark:border-slate-800/60 dark:bg-slate-800/90">
            <div className="mb-8">
              <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                FREE
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">₹0</span>
                <span className="text-sm font-bold text-slate-500">forever</span>
              </div>
              <p className="mt-4 text-[15px] font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                Start managing your family essentials.
              </p>
            </div>

            <ul className="mb-10 flex-1 space-y-4">
              {[
                "Up to 3 family members",
                "Medicine + Bills modules only",
                "Basic reminders",
                "1 caregiver per member",
                "7 days history",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-slate-400 dark:text-slate-500" />
                  <span className="text-[14px] font-medium text-slate-700 dark:text-slate-300">{f}</span>
                </li>
              ))}
              {[
                "No AI features",
                "No document storage"
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 opacity-60">
                  <XCircle className="h-5 w-5 shrink-0 text-slate-300 dark:text-slate-600" />
                  <span className="text-[14px] font-medium text-slate-500 dark:text-slate-400">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="mt-auto block w-full rounded-xl border border-slate-200 bg-slate-50 py-4 text-center text-sm font-bold text-slate-900 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/50 dark:text-white dark:hover:bg-slate-800"
            >
              Get started free
            </a>
          </div>
        </Reveal>

        {/* PREMIUM PLAN */}
        <Reveal delay={0.1}>
          <div className="relative flex h-full flex-col rounded-3xl border border-indigo-200 bg-indigo-50 p-8 sm:p-10 shadow-2xl transition-colors dark:border-indigo-500/30 dark:bg-slate-950 dark:shadow-indigo-500/10">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute top-0 right-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-indigo-500/20 blur-[100px] dark:bg-indigo-600/20" />
            </div>

            <div className="relative z-10 mb-8">
              <div className="flex items-center justify-between">
                <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/20 dark:text-indigo-400">
                  PREMIUM
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-700 shadow-sm dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400">
                  <Sparkles className="h-3 w-3" />
                  Most Popular
                </div>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">₹199</span>
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400">/ month</span>
              </div>
              <p className="mt-4 text-[15px] font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                Full Family Operating System with all modules and AI.
              </p>
            </div>

            <ul className="relative z-10 mb-10 flex-1 space-y-4">
              {[
                "Unlimited family members",
                "All 20 modules",
                "Unlimited caregivers",
                "Full history + export",
                "WiseAI chat",
                "Voice reminders",
                "Bill scan OCR",
                "Monthly PDF reports",
                "Money Leak detection",
                "1GB document storage",
                "Priority notifications"
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-indigo-200 p-0.5 dark:bg-indigo-500/20">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-700 dark:text-indigo-400" />
                  </div>
                  <span className="text-[14px] font-bold text-slate-900 dark:text-white">{f}</span>
                </li>
              ))}
            </ul>

            <div className="relative z-10 mt-auto">
              <a
                href="#download"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-0.5 hover:shadow-indigo-500/40"
              >
                <Zap className="h-4 w-4" />
                Start Premium (₹199/month)
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Feature Comparison Table */}
      <Reveal delay={0.2}>
        <div className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800/60 dark:bg-slate-800/90 transition-colors">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 dark:border-slate-800/60 dark:bg-slate-900/50">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Feature Comparison</h4>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {PRICING_FEATURES.map((item, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                <div className="text-[13px] font-bold text-slate-900 dark:text-slate-300">{item.name}</div>
                <div className="text-[13px] font-medium text-slate-600 dark:text-slate-500">{item.free}</div>
                <div className="text-[13px] font-bold text-indigo-600 dark:text-indigo-400">{item.premium}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
