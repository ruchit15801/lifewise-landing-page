"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { PhoneMock } from "@/components/PhoneMock";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <AnimatedBackground />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] dark:opacity-[0.22]"
      />

      <div className="section-max relative grid min-h-[calc(82vh-4rem)] grid-cols-1 items-center gap-7 py-12 lg:min-h-[calc(88vh-4rem)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-6 lg:py-14">
        <div className="max-w-[42rem]">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/60 px-3 py-1 text-xs font-semibold text-slate-700 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              <Sparkles className="h-4 w-4 text-primary" />
              Your Smart AI Life Assistant
              <span className="ml-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold tracking-wide text-primary border border-primary/20">
                NEW
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-slate-50">
              Live Smarter with{" "}
              <span className="gradient-text">LifeWise</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
              LifeWise is your AI-powered life assistant that remembers what you
              forget — bills, medicines, family tasks, and daily life reminders.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                href="#download"
                className="btn-primary"
              >
                Download on Google Play
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                href="#features"
                className="btn-secondary"
              >
                Explore Features
              </motion.a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3 text-xs text-slate-600 dark:text-slate-400">
              {["AI memory", "Bills + medicine", "Family hub", "Privacy-first"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200/70 bg-white/55 px-3 py-1 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>

        <div className="relative noise lg:justify-self-end lg:translate-x-1">
          <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-white/30 blur-3xl dark:bg-white/5" />
          <PhoneMock className="max-w-[22rem] sm:max-w-[24rem] lg:max-w-[26rem]" />
        </div>
      </div>
    </section>
  );
}

