"use client";

import {
  Bot,
  Camera,
  Mic,
  Star,
  Users
} from "lucide-react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import { HOME_QUICK_ACTIONS } from "@/lib/landing-data";

const iconMap = {
  mic: Mic,
  camera: Camera,
  ai: Bot
} as const;

export function Features() {
  return (
    <SectionShell
      id="features"
      eyebrow="Core Features"
      title="Your Family Command Center"
      subtitle="Family Hub is the hero feature. Every reminder, bill, health record, and document flows through it. Plus three instant actions from your Home screen."
    >
      <Reveal>
        <motion.div
          whileHover={{ y: -6 }}
          className="glass group relative overflow-hidden p-6 sm:p-8 ring-glow"
        >
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-emerald-500 text-white shadow-premium">
                <Users className="h-7 w-7" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Family Hub
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent border border-accent/25">
                    <Star className="h-3 w-3 fill-accent" />
                    Main Feature
                  </span>
                </div>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  Add Papa, Mummy, children, each with their own profile card and
                  up to 20 modules: medicine, bills, insurance, documents, SOS,
                  study schedules, and more. Caregivers stay connected in real time.
                </p>
              </div>
            </div>
            <a
              href="#family"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary"
            >
              See Family Hub
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </Reveal>

      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {HOME_QUICK_ACTIONS.map((it, idx) => {
          const Icon = iconMap[it.icon];
          return (
            <Reveal key={it.title} delay={idx * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                className={cn("glass group p-6 sm:p-7 relative overflow-hidden")}
              >
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/20 blur-3xl transition-opacity group-hover:opacity-90" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-premium">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {it.desc}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
