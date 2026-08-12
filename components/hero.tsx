"use client";

import dynamic from "next/dynamic";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Reveal } from "@/components/Reveal";
import { StoreDownloadButtons } from "@/components/StoreDownloadButtons";
import { PRODUCT_DESCRIPTION, PRODUCT_TAGLINE } from "@/lib/landing-data";

const PhoneMock = dynamic(
  () => import("@/components/PhoneMock").then((m) => m.PhoneMock),
  {
    loading: () => (
      <div
        className="mx-auto aspect-[78/163.4] w-full max-w-[22rem] animate-pulse rounded-[3rem] bg-slate-200/40 dark:bg-white/5"
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
    <section id="top" className="relative overflow-hidden">
      <AnimatedBackground />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] dark:opacity-[0.22]"
      />

      <div className="w-full max-w-[98rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative grid min-h-[calc(82vh-4rem)] grid-cols-1 items-center gap-7 pt-24 pb-12 lg:min-h-[calc(88vh-4rem)] lg:grid-cols-[1fr_1.2fr] lg:gap-10 lg:pt-28 lg:pb-14">
        <div className="max-w-[38rem] xl:max-w-[44rem]">
          <Reveal blur={false}>
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-slate-200/70 bg-white/60 px-3 py-1 text-xs font-semibold text-slate-700 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              <Sparkles className="h-4 w-4 text-primary" />
              {PRODUCT_TAGLINE}
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold tracking-wide text-accent border border-accent/20">
                Android + iOS
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05} blur={false}>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-slate-50">
              <span className="gradient-text">LifeWise</span>: One App to
              Manage Your{" "}
              <span className="text-slate-950 dark:text-slate-50">Entire Family</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1} blur={false}>
            <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-200/90">
              {PRODUCT_DESCRIPTION}
            </p>
          </Reveal>

          <Reveal delay={0.15} blur={false}>
            <div className="mt-7">
              <StoreDownloadButtons variant="light" />
              <a
                href="#family"
                className="btn-secondary mt-4 inline-flex w-full sm:w-auto"
              >
                Explore Family Hub
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2} blur={false}>
            <div className="mt-8 flex flex-wrap gap-3 text-xs text-slate-600 dark:text-slate-400">
              {heroHighlights.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200/70 bg-white/55 px-3 py-1 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative noise justify-self-center lg:justify-self-center">
          <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-white/30 blur-3xl dark:bg-white/5" />
          <PhoneMock className="max-w-[min(92vw,24rem)] sm:max-w-[28rem] lg:max-w-[30rem]" />
        </div>
      </div>
    </section>
  );
}
