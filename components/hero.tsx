"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Users,
  LayoutGrid,
  Bot,
  Mic
} from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { DeferredPhoneMock } from "@/components/DeferredPhoneMock";
import { Reveal } from "@/components/Reveal";
import { StoreDownloadButtons } from "@/components/StoreDownloadButtons";
import { PRODUCT_DESCRIPTION, PRODUCT_TAGLINE } from "@/lib/landing-data";

const heroHighlights = [
  {
    label: "Family Hub",
    detail: "Hero feature",
    icon: Users,
    tint:
      "from-indigo-500/20 to-violet-500/10 text-indigo-600 ring-indigo-200/80 dark:from-indigo-400/25 dark:to-violet-500/10 dark:text-indigo-200 dark:ring-indigo-400/35 dark:bg-slate-800/50"
  },
  {
    label: "20 modules",
    detail: "Per member",
    icon: LayoutGrid,
    tint:
      "from-sky-500/20 to-cyan-500/10 text-sky-600 ring-sky-200/80 dark:from-sky-400/25 dark:to-cyan-500/10 dark:text-sky-200 dark:ring-sky-400/35 dark:bg-slate-800/50"
  },
  {
    label: "WiseAI",
    detail: "Family assistant",
    icon: Bot,
    tint:
      "from-fuchsia-500/20 to-rose-500/10 text-fuchsia-600 ring-fuchsia-200/80 dark:from-fuchsia-400/25 dark:to-rose-500/10 dark:text-fuchsia-200 dark:ring-fuchsia-400/35 dark:bg-slate-800/50"
  },
  {
    label: "Voice + OCR",
    detail: "Bill scan",
    icon: Mic,
    tint:
      "from-emerald-500/20 to-teal-500/10 text-emerald-600 ring-emerald-200/80 dark:from-emerald-400/25 dark:to-teal-500/10 dark:text-emerald-200 dark:ring-emerald-400/35 dark:bg-slate-800/50"
  }
] as const;

export function Hero() {
  const [storeVariant, setStoreVariant] = useState<"hero" | "light">("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("lifewise-theme");
    setStoreVariant(stored === "dark" ? "hero" : "light");
  }, []);

  return (
    <section id="top" className="relative overflow-hidden">
      <AnimatedBackground />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] dark:opacity-[0.18]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%] bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent dark:from-indigo-400/20"
      />

      <div className="relative mx-auto grid min-h-[calc(82vh-4rem)] w-full max-w-[98rem] grid-cols-1 items-center gap-7 px-4 pb-8 pt-24 sm:px-6 lg:min-h-[calc(88vh-4rem)] lg:grid-cols-[1fr_1.2fr] lg:gap-10 lg:px-8 lg:pb-10 lg:pt-28 xl:px-12">
        <div className="relative max-w-[38rem] xl:max-w-[44rem]">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 -top-8 hidden h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl dark:block"
          />

          <Reveal eager blur={false}>
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-slate-200/70 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-premium dark:border-indigo-400/25 dark:bg-slate-800 dark:text-slate-100 dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
              <Sparkles className="h-4 w-4 text-primary dark:text-indigo-300" />
              {PRODUCT_TAGLINE}
              <span className="inline-flex items-center gap-1 rounded-full border border-accent/25 bg-accent/15 px-2 py-0.5 text-[10px] font-bold tracking-wide text-accent dark:border-emerald-400/30 dark:bg-emerald-400/15 dark:text-emerald-300">
                Android
              </span>
            </div>
          </Reveal>

          <Reveal eager delay={0.05} blur={false}>
            <h1 className="mt-5 font-display text-[1.85rem] font-semibold leading-[1.15] tracking-tight text-slate-950 sm:mt-6 sm:text-5xl lg:text-6xl dark:text-white">
              <span className="gradient-text">LifeWise: Family OS</span>
              . One App to Manage Your{" "}
              <span className="text-slate-950 dark:text-white">Entire Family</span>
            </h1>
          </Reveal>

          <Reveal eager delay={0.1} blur={false}>
            <p
              id="lifewise-definition"
              className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-200"
            >
              <strong className="font-semibold text-slate-900 dark:text-white">
                LifeWise is India&apos;s Family Operating System (Family OS)
              </strong>
              . {PRODUCT_DESCRIPTION} Official app on Google Play (
              <span className="whitespace-nowrap">com.lifewise</span>) and the App Store.
            </p>
          </Reveal>

          <Reveal eager delay={0.15} blur={false}>
            <div className="mt-7">
              <StoreDownloadButtons variant={storeVariant} />
              <a
                href="#family"
                className="btn-secondary mt-4 inline-flex w-full dark:border-white/15 dark:bg-slate-800/80 dark:text-white dark:hover:bg-slate-700 sm:w-auto"
              >
                Explore Family Hub
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal eager delay={0.2}>
            <div className="mt-8 grid grid-cols-2 gap-2.5 sm:gap-3">
              {heroHighlights.map(({ label, detail, icon: Icon, tint }) => (
                <div
                  key={label}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${tint} p-3 ring-1 backdrop-blur-xl transition hover:-translate-y-0.5 sm:p-3.5`}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/50 blur-2xl transition group-hover:bg-white/70 dark:bg-white/10 dark:group-hover:bg-white/20"
                  />
                  <div className="relative z-10 flex items-center gap-2.5 sm:gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/90 shadow-sm ring-1 ring-black/5 dark:bg-slate-700/90 dark:ring-white/15 sm:h-10 sm:w-10">
                      <Icon
                        className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                        strokeWidth={2.4}
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-[12px] font-bold leading-tight text-slate-900 dark:text-white sm:text-[13px]">
                        {label}
                      </span>
                      <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300 sm:text-[11px]">
                        {detail}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative justify-self-center noise lg:justify-self-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-indigo-300/30 blur-3xl dark:bg-indigo-400/25"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-white/25 blur-2xl dark:bg-slate-200/10"
          />
          <DeferredPhoneMock className="relative z-10 max-w-[min(92vw,24rem)] sm:max-w-[28rem] lg:max-w-[30rem]" />
        </div>
      </div>
    </section>
  );
}
