"use client";

import dynamic from "next/dynamic";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { StoreDownloadButtons } from "@/components/StoreDownloadButtons";
import { PRODUCT_DESCRIPTION, PRODUCT_TAGLINE } from "@/lib/landing-data";

const PhoneMock = dynamic(
  () => import("@/components/PhoneMock").then((m) => m.PhoneMock),
  {
    loading: () => (
      <div
        className="mx-auto aspect-[78/163.4] w-full max-w-[22rem] animate-pulse rounded-[3rem] bg-slate-100 border-8 border-slate-200 dark:bg-slate-900 dark:border-slate-800"
        aria-hidden
      />
    )
  }
);

const heroHighlights = [
  "Family Hub (hero feature)",
  "20 modules per member",
  "WiseAI assistant",
  "Voice + Bill Scan"
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-50 dark:bg-[#050508] transition-colors duration-500">
      
      {/* Light modern grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
        style={{
          backgroundImage: "linear-gradient(to right, #4f46e5 1px, transparent 1px), linear-gradient(to bottom, #4f46e5 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      
      {/* Fading gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/80 to-slate-50 dark:via-[#050508]/80 dark:to-[#050508]" />

      {/* Glows */}
      <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[120px] pointer-events-none dark:bg-indigo-600/20" />
      <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/15 blur-[100px] pointer-events-none dark:bg-blue-600/10" />

      <div className="section-max relative z-10 grid min-h-[calc(82vh-4rem)] grid-cols-1 items-center gap-7 pt-24 pb-12 lg:min-h-[calc(88vh-4rem)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-6 lg:pt-28 lg:pb-14">
        
        {/* Left Content */}
        <div className="max-w-[42rem]">
          <Reveal blur={false}>
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1.5 text-xs font-bold text-indigo-700 backdrop-blur-xl mb-2 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-400">
              <Sparkles className="h-4 w-4" />
              {PRODUCT_TAGLINE}
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400">
                Android & iOS
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05} blur={false}>
            <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-[4.2rem] leading-[1.05] dark:text-white">
              One App to Manage
              <br />
              <span className="text-indigo-600 dark:text-indigo-400">Your Entire Family.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1} blur={false}>
            <p className="mt-6 text-[17px] leading-relaxed text-slate-600 sm:text-lg font-medium max-w-[90%] dark:text-slate-400">
              {PRODUCT_DESCRIPTION}
            </p>
          </Reveal>

          <Reveal delay={0.15} blur={false}>
            <div className="mt-10 flex flex-col gap-5">
              <StoreDownloadButtons className="justify-start" />
              <div>
                <a
                  href="#family"
                  className="inline-flex h-[48px] items-center justify-center gap-2 rounded-xl bg-indigo-50 border border-indigo-100 px-6 text-sm font-bold text-indigo-700 transition-all hover:bg-indigo-100 hover:-translate-y-0.5 shadow-sm dark:bg-indigo-500/10 dark:border-indigo-500/20 dark:text-indigo-400 dark:hover:bg-indigo-500/20 w-full sm:w-auto"
                >
                  Explore Family Hub
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} blur={false}>
            <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              {heroHighlights.map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-indigo-500" />
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right Phone Mockup */}
        <div className="relative justify-self-center lg:justify-self-center w-full max-w-[22rem] sm:max-w-[24rem] lg:max-w-[22rem] mt-12 lg:mt-0">
          {/* Backing glow for phone */}
          <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none dark:bg-indigo-500/20 dark:blur-[100px]" />
          <PhoneMock className="relative z-10 w-full drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
