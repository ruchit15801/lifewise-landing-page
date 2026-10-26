"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Pill,
  Receipt,
  Sparkles,
  Users
} from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { DeferredPhoneMock } from "@/components/DeferredPhoneMock";
import { Reveal } from "@/components/Reveal";
import { StoreDownloadButtons } from "@/components/StoreDownloadButtons";
import { APP_STORE_NAME } from "@/lib/stores";

const heroProblems = [
  {
    problem: "Papa forgot his BP tablet again",
    solution: "He gets a reminder, you get an alert if he misses it",
    icon: Pill
  },
  {
    problem: "Late fee on the electricity bill",
    solution: "Scan the bill once, get reminded before the due date",
    icon: Receipt
  },
  {
    problem: "\"Did anyone call Mummy?\" in the family group",
    solution: "Everyone sees the same updates in one Family Hub",
    icon: Users
  }
] as const;

export function Hero() {
  const [storeVariant, setStoreVariant] = useState<"hero" | "light">("light");
  const [openProblem, setOpenProblem] = useState(0);

  useEffect(() => {
    const stored = window.localStorage.getItem("lifewise-theme");
    setStoreVariant(stored === "dark" ? "hero" : "light");
  }, []);

  return (
    <section id="top" className="relative">
      <AnimatedBackground />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] dark:opacity-[0.18]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%] bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent dark:from-indigo-400/20"
      />

      <div className="relative mx-auto grid w-full max-w-[98rem] grid-cols-1 items-center gap-4 px-4 pb-4 pt-20 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-6 lg:px-8 lg:pb-6 lg:pt-20 xl:px-12">
        <div className="relative max-w-[38rem] xl:max-w-[44rem]">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 -top-8 hidden h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl dark:block"
          />

          <Reveal eager blur={false}>
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-slate-200/70 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-premium dark:border-indigo-400/25 dark:bg-slate-800 dark:text-slate-100 dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
              <Sparkles className="h-4 w-4 text-primary dark:text-indigo-300" />
              {APP_STORE_NAME}
              <span className="inline-flex items-center gap-1 rounded-full border border-accent/25 bg-accent/15 px-2 py-0.5 text-[10px] font-bold tracking-wide text-accent dark:border-emerald-400/30 dark:bg-emerald-400/15 dark:text-emerald-300">
                Android
              </span>
            </div>
          </Reveal>

          <Reveal eager delay={0.05} blur={false}>
            <h1 className="mt-4 font-display text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-slate-950 sm:mt-5 sm:text-4xl lg:text-[2.85rem] dark:text-white">
              Your family has too much to remember.{" "}
              <span className="text-indigo-600 dark:text-indigo-300 lg:gradient-text">
                LifeWise remembers it for you.
              </span>
            </h1>
          </Reveal>

          <Reveal eager delay={0.1} blur={false}>
            <p
              id="lifewise-definition"
              className="mt-3.5 text-base leading-relaxed text-slate-700 sm:text-[17px] dark:text-slate-200"
            >
              <strong className="font-semibold text-slate-900 dark:text-white">
                {APP_STORE_NAME}
              </strong>{" "}
              keeps medicines, bills, health and documents for every family member in one app,
              and alerts the right person when something is missed. Official app on Google Play (
              <span className="whitespace-nowrap">com.lifewise</span>) and the App Store.
            </p>
          </Reveal>

          <Reveal eager delay={0.15} blur={false}>
            <ul className="mt-4 space-y-2" aria-label="Problems LifeWise solves">
              {heroProblems.map(({ problem, solution, icon: Icon }, i) => {
                const open = openProblem === i;
                return (
                  <li key={problem}>
                    <button
                      type="button"
                      onClick={() => setOpenProblem(i)}
                      className={`flex w-full items-start gap-3 rounded-2xl border p-3 text-left shadow-sm transition ${
                        open
                          ? "border-emerald-300 bg-emerald-50/90 dark:border-emerald-400/30 dark:bg-emerald-400/10"
                          : "border-slate-200/80 bg-white/90 hover:border-rose-200 dark:border-white/10 dark:bg-slate-900/70"
                      }`}
                    >
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${
                          open
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/20 dark:text-emerald-200"
                            : "bg-rose-50 text-rose-600 dark:bg-rose-400/15 dark:text-rose-200"
                        }`}
                      >
                        {open ? (
                          <CheckCircle2 className="h-[18px] w-[18px]" strokeWidth={2.4} />
                        ) : (
                          <Icon className="h-[18px] w-[18px]" strokeWidth={2.4} />
                        )}
                      </span>
                      <span className="min-w-0 text-sm leading-snug">
                        <span
                          className={`block font-medium ${
                            open
                              ? "text-slate-500 line-through decoration-rose-400/80 dark:text-slate-400"
                              : "text-slate-900 dark:text-white"
                          }`}
                        >
                          {problem}
                        </span>
                        <AnimatePresence initial={false}>
                          {open ? (
                            <motion.span
                              key="sol"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-0.5 block overflow-hidden font-semibold text-emerald-800 dark:text-emerald-200"
                            >
                              {solution}
                            </motion.span>
                          ) : (
                            <span className="mt-0.5 block text-[12px] font-semibold text-rose-600 dark:text-rose-300">
                              Tap to see the LifeWise fix
                            </span>
                          )}
                        </AnimatePresence>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal eager delay={0.2} blur={false}>
            <div className="mt-5">
              <StoreDownloadButtons variant={storeVariant} />
              <a
                href="#problems"
                className="btn-secondary mt-3 inline-flex w-full dark:border-white/15 dark:bg-slate-800/80 dark:text-white dark:hover:bg-slate-700 sm:w-auto"
              >
                See how it helps your family
                <ArrowRight className="h-4 w-4" />
              </a>
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
