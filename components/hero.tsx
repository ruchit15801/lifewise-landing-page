"use client";

import { GooglePlayBadge } from "./google-play-badge";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 dark:border-slate-900/80"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-faded opacity-80" />
      <div className="section-max relative flex flex-col lg:flex-row items-center gap-12 py-16 lg:py-24">
        <div className="max-w-xl space-y-6 transition-transform duration-700 ease-out animate-fade-up-soft">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 dark:bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200/70 dark:border-slate-800/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Your Smart AI Life Assistant
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            Live Smarter with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              LifeWise
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            LifeWise is an AI-powered life assistant that remembers what you
            forget — bills, medicines, family tasks, and daily life reminders,
            so you can live with calm, not chaos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <GooglePlayBadge />
            <button className="btn-ghost">
              See Features
            </button>
          </div>
          <div className="flex flex-wrap gap-4 text-[11px] text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> AI
              memory for your life
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Family
              care & safety
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />{" "}
              Privacy-first design
            </span>
          </div>
        </div>

        <div className="relative w-full max-w-sm transition-transform duration-700 ease-out animate-float-soft">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-accent/25 blur-3xl" />

          <div className="relative mx-auto h-[520px] w-[270px] rounded-[2.4rem] bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.9)] border border-slate-700/80">
            <div className="h-full w-full rounded-[2rem] bg-slate-900/90 p-4 flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>LifeWise</span>
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
                  Today · 9:41
                </span>
              </div>

              <div className="glass-panel bg-slate-900/80 border-slate-700/60 p-4 space-y-2">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  Life Score
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-semibold text-slate-50">78</p>
                    <p className="text-[11px] text-slate-400">
                      Calm, in-control week
                    </p>
                  </div>
                  <div className="relative h-16 w-16">
                    <div className="absolute inset-0 rounded-full border-2 border-slate-700" />
                    <div className="absolute inset-1 rounded-full border-4 border-primary/80 border-t-accent/80 border-r-accent/60" />
                    <div className="absolute inset-3 rounded-full bg-slate-900 flex items-center justify-center text-xs text-slate-200">
                      +12
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div className="glass-panel bg-slate-900/70 border-slate-800/80 p-3">
                  <p className="text-slate-400 mb-1">Today</p>
                  <ul className="space-y-1.5">
                    <li className="flex items-center justify-between">
                      <span className="text-slate-200">Pay electricity</span>
                      <span className="text-[10px] text-accent">8:00 PM</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-slate-200">Papa medicine</span>
                      <span className="text-[10px] text-slate-400">
                        9:00 PM
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-slate-200">Water bill</span>
                      <span className="text-[10px] text-slate-400">
                        Tomorrow
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="glass-panel bg-slate-900/70 border-slate-800/80 p-3 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-400 mb-1">Patterns</p>
                    <p className="text-[11px] text-slate-200">
                      Bills on 5th ·{" "}
                      <span className="text-accent">On track</span>
                    </p>
                    <p className="mt-1 text-[11px] text-slate-200">
                      Medicines ·{" "}
                      <span className="text-accent">92% taken</span>
                    </p>
                  </div>
                  <button className="mt-3 w-full rounded-xl bg-primary/90 px-3 py-1.5 text-[11px] font-medium text-white shadow-md shadow-primary/50">
                    View AI Suggestions
                  </button>
                </div>
              </div>

              <div className="mt-auto space-y-2 text-[11px]">
                <p className="text-slate-400">
                  "Remind me to take BP medicine at 8 PM"
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 rounded-full bg-slate-800/80 px-3 py-1.5 text-[11px] text-slate-300">
                    Ask anything about your life...
                  </div>
                  <button className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-slate-950 shadow-md shadow-accent/60">
                    🎤
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

