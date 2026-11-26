"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Pause,
  Play,
  Sparkles
} from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { DeferredPhoneMock } from "@/components/DeferredPhoneMock";
import { HeroTypewriter } from "@/components/HeroTypewriter";
import { Reveal } from "@/components/Reveal";
import { SmartInstallCTA } from "@/components/SmartInstallCTA";
import { VideoModal } from "@/components/VideoModal";
import { trackHeroView } from "@/lib/analytics";
import {
  detectHeroLang,
  saveHeroLang,
  type HeroLang
} from "@/lib/hero-locale";
import {
  HERO_LANG_LABELS,
  HERO_SCENARIOS,
  HERO_TAP_HINT
} from "@/lib/hero-scenarios";
import { APP_AGGREGATE_RATING, HAS_APP_REVIEWS } from "@/lib/reviews";
import { DISPLAY_RATING } from "@/lib/social-proof";
import { APP_STORE_NAME } from "@/lib/stores";

const LANGS: HeroLang[] = ["en", "hi", "gu"];
const SCENARIO_INTERVAL_MS = 5500;

function trustLine() {
  const bits = ["No card needed", "Android & iPhone", "7 Indian languages"];
  if (HAS_APP_REVIEWS && APP_AGGREGATE_RATING) {
    bits.push(`Rated ${APP_AGGREGATE_RATING.ratingValue} on Play Store`);
  } else {
    bits.push(`Rated ${DISPLAY_RATING.label}`);
  }
  return bits.join(" · ");
}

export function Hero() {
  const [lang, setLang] = useState<HeroLang>("en");
  const [langReady, setLangReady] = useState(false);
  const [activeScenario, setActiveScenario] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const closeVideo = useCallback(() => setVideoOpen(false), []);
  const openVideo = useCallback(() => setVideoOpen(true), []);

  const pickLang = useCallback((next: HeroLang) => {
    setLang(next);
    saveHeroLang(next);
  }, []);

  const selectScenario = useCallback((index: number) => {
    setActiveScenario(index);
  }, []);

  // Auto-cycle through problem-solution scenarios
  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveScenario((prev) => (prev + 1) % HERO_SCENARIOS.length);
    }, SCENARIO_INTERVAL_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused]);

  // Initial language detection
  useEffect(() => {
    trackHeroView();
    let cancelled = false;
    void detectHeroLang().then((detected) => {
      if (cancelled) return;
      setLang(detected);
      setLangReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const currentScenario = HERO_SCENARIOS[activeScenario] || HERO_SCENARIOS[0];

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

          {/* Top Bar: Store Badge & Language Toggle */}
          <Reveal eager blur={false}>
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-slate-200/70 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-premium dark:border-indigo-400/25 dark:bg-slate-800 dark:text-slate-100 dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                <Sparkles className="h-4 w-4 text-primary dark:text-indigo-300" />
                {APP_STORE_NAME}
                <span className="inline-flex items-center gap-1 rounded-full border border-accent/25 bg-accent/15 px-2 py-0.5 text-[10px] font-bold tracking-wide text-accent dark:border-emerald-400/30 dark:bg-emerald-400/15 dark:text-emerald-300">
                  Android + iPhone
                </span>
              </div>

              {/* Language Switcher */}
              <div
                className={`inline-flex rounded-full border border-slate-200/80 bg-white/90 p-1 shadow-sm transition-opacity dark:border-white/10 dark:bg-slate-900/80 ${
                  langReady ? "opacity-100" : "opacity-80"
                }`}
                role="group"
                aria-label="Headline language"
              >
                {LANGS.map((code) => {
                  const active = lang === code;
                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => pickLang(code)}
                      aria-pressed={active}
                      className={`min-h-[32px] rounded-full px-2.5 text-[11px] font-semibold transition ${
                        active
                          ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                          : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                      }`}
                    >
                      {HERO_LANG_LABELS[code]}
                    </button>
                  );
                })}
              </div>

              {/* Active Category Badge */}
              <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200/60 bg-indigo-50/70 px-2.5 py-1 text-[11px] font-semibold text-indigo-700 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300">
                <currentScenario.icon className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                {currentScenario.badge[lang]}
              </span>
            </div>
          </Reveal>

          {/* Dynamic Headline with Typewriter Resolution */}
          <Reveal eager delay={0.05} blur={false}>
            <div className="mt-4 min-h-[5.4rem] sm:min-h-[6.2rem] lg:min-h-[7.2rem] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`${activeScenario}-${lang}-heading`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ type: "spring", stiffness: 360, damping: 28 }}
                  className="font-display text-[1.75rem] font-semibold leading-[1.18] tracking-tight text-slate-950 sm:text-4xl lg:text-[2.75rem] dark:text-white"
                >
                  <span className="block text-slate-900 dark:text-white">
                    {currentScenario.question[lang]}
                  </span>
                  <span className="block mt-1 font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent dark:from-emerald-400 dark:via-teal-300 dark:to-indigo-300">
                    <HeroTypewriter
                      key={`${activeScenario}-${lang}-typewriter`}
                      text={currentScenario.resolution[lang]}
                      speed={32}
                    />
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Dynamic Subline */}
          <Reveal eager delay={0.1} blur={false}>
            <div className="mt-3 min-h-[2.8rem] sm:min-h-[3.2rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${activeScenario}-${lang}-subline`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  id="lifewise-definition"
                  className="text-base leading-relaxed text-slate-700 sm:text-[17px] dark:text-slate-200"
                >
                  {currentScenario.subline[lang]}
                </motion.p>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Interactive Problem-Solution Rotating Showcase */}
          <Reveal eager delay={0.15} blur={false}>
            <div
              className="mt-4 rounded-2xl border border-slate-200/80 bg-white/90 p-3 shadow-premium backdrop-blur dark:border-white/10 dark:bg-slate-900/80"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Showcase Header Controls */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-white/5 text-xs">
                <div className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-200">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Problems LifeWise Solves</span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    {activeScenario + 1} of {HERO_SCENARIOS.length}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPaused(!isPaused)}
                  aria-label={isPaused ? "Resume auto-cycling" : "Pause auto-cycling"}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition px-2 py-0.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {isPaused ? (
                    <>
                      <Play className="h-3 w-3 fill-current text-emerald-600 dark:text-emerald-400" />
                      <span>Paused</span>
                    </>
                  ) : (
                    <>
                      <Pause className="h-3 w-3 fill-current text-slate-400" />
                      <span>Auto-cycling</span>
                    </>
                  )}
                </button>
              </div>

              {/* Scenario Cards */}
              <ul className="mt-2.5 space-y-2" aria-label="Problems LifeWise solves">
                {HERO_SCENARIOS.map((item, i) => {
                  const open = activeScenario === i;
                  const Icon = item.icon;

                  return (
                    <li key={item.id} className="relative">
                      <button
                        type="button"
                        onClick={() => selectScenario(i)}
                        className={`relative flex w-full items-start gap-3 rounded-xl border p-3 text-left transition overflow-hidden ${
                          open
                            ? "border-emerald-300/90 bg-emerald-50/80 dark:border-emerald-400/30 dark:bg-emerald-950/20 shadow-sm"
                            : "border-slate-200/70 bg-white/70 hover:border-slate-300 dark:border-white/5 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800/60"
                        }`}
                      >
                        {/* Progress Bar for Active Card */}
                        {open && (
                          <div
                            aria-hidden
                            className="absolute inset-x-0 top-0 h-1 bg-emerald-200/40 dark:bg-emerald-900/30 overflow-hidden"
                          >
                            <motion.div
                              key={`${activeScenario}-${isPaused}`}
                              className="h-full bg-emerald-500 dark:bg-emerald-400"
                              initial={{ width: "0%" }}
                              animate={{ width: isPaused ? undefined : "100%" }}
                              transition={{
                                duration: SCENARIO_INTERVAL_MS / 1000,
                                ease: "linear"
                              }}
                            />
                          </div>
                        )}

                        {/* Icon */}
                        <span
                          className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg transition ${
                            open
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/20 dark:text-emerald-200"
                              : "bg-rose-50 text-rose-600 dark:bg-rose-400/15 dark:text-rose-200"
                          }`}
                        >
                          {open ? (
                            <CheckCircle2
                              className="h-[18px] w-[18px]"
                              strokeWidth={2.4}
                            />
                          ) : (
                            <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
                          )}
                        </span>

                        {/* Text Container */}
                        <span className="min-w-0 flex-1 text-sm leading-snug">
                          <span
                            className={`block font-medium transition ${
                              open
                                ? "text-slate-600 line-through decoration-rose-400/80 dark:text-slate-300"
                                : "text-slate-900 dark:text-white"
                            }`}
                          >
                            {item.problem[lang]}
                          </span>

                          <AnimatePresence initial={false}>
                            {open ? (
                              <motion.div
                                key="solution-block"
                                initial={{ opacity: 0, height: 0, y: -4 }}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -4 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 350,
                                  damping: 28
                                }}
                                className="mt-1 overflow-hidden"
                              >
                                <div className="flex items-start gap-1.5 font-semibold text-emerald-800 dark:text-emerald-200">
                                  <span className="inline-flex items-center rounded bg-emerald-600 px-1.5 py-0.5 text-[10px] font-bold text-white dark:bg-emerald-500">
                                    {item.fixLabel[lang]}
                                  </span>
                                  <span className="text-sm leading-snug">
                                    {item.solution[lang]}
                                  </span>
                                </div>
                              </motion.div>
                            ) : (
                              <span className="mt-0.5 block text-[11px] font-semibold text-rose-600/90 dark:text-rose-300/90">
                                {HERO_TAP_HINT[lang]}
                              </span>
                            )}
                          </AnimatePresence>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Dots and Navigation */}
              <div className="mt-2.5 flex items-center justify-between border-t border-slate-100 pt-2 text-xs dark:border-white/5">
                <div className="flex items-center gap-1.5">
                  {HERO_SCENARIOS.map((item, i) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => selectScenario(i)}
                      aria-label={`Show ${item.badge[lang]}`}
                      className={`h-2 rounded-full transition-all ${
                        activeScenario === i
                          ? "w-6 bg-emerald-500 dark:bg-emerald-400"
                          : "w-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                  {currentScenario.badge[lang]}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Install CTA & Trust Line */}
          <Reveal eager delay={0.2} blur={false}>
            <div className="mt-5">
              <SmartInstallCTA
                location="hero"
                label="Install Free"
                showDesktopStores
                secondary={
                  <button
                    type="button"
                    onClick={openVideo}
                    className="btn-secondary inline-flex w-full dark:border-white/15 dark:bg-slate-800/80 dark:text-white dark:hover:bg-slate-700 sm:w-auto"
                  >
                    <Play className="h-4 w-4 fill-current" aria-hidden />
                    Watch 20-sec demo
                  </button>
                }
              />
            </div>
            <p className="mt-3 text-[12px] font-medium leading-snug text-slate-600 dark:text-slate-300">
              {trustLine()}
            </p>
          </Reveal>
        </div>

        {/* Right Column: Interactive Phone Mock */}
        <div className="relative justify-self-center noise lg:justify-self-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-indigo-300/30 blur-3xl dark:bg-indigo-400/25"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-white/25 blur-2xl dark:bg-slate-200/10"
          />
          <div className="relative z-10 max-w-[min(92vw,24rem)] sm:max-w-[28rem] lg:max-w-[30rem]">
            <DeferredPhoneMock className="relative z-10 max-w-[min(92vw,24rem)] sm:max-w-[28rem] lg:max-w-[30rem]" />
            <button
              type="button"
              onClick={openVideo}
              aria-label="Watch LifeWise demo video"
              className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-lg ring-1 ring-slate-200/80 backdrop-blur transition hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:bg-slate-900/90 dark:text-white dark:ring-white/10"
            >
              <Play className="h-4 w-4 fill-current text-indigo-600 dark:text-indigo-300" />
              Watch demo
            </button>
          </div>
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={closeVideo} />
    </section>
  );
}
