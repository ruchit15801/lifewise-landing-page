"use client";

import { BadgeCheck, CalendarClock, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";

const items = [
  {
    icon: CalendarClock,
    title: "Bill Reminders",
    desc: "Never miss electricity or subscription payments."
  },
  {
    icon: BadgeCheck,
    title: "Medicine Alerts",
    desc: "AI-powered health reminders for you and your family."
  },
  {
    icon: HeartHandshake,
    title: "Family Hub",
    desc: "Manage reminders and health tracking for loved ones."
  }
];

export function Features() {
  return (
    <SectionShell
      id="features"
      eyebrow="Features"
      title="Your Personal AI Life Assistant"
      subtitle="Premium, minimal, and built for everyday reliability — with automation that feels invisible."
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {items.map((it, idx) => {
          const Icon = it.icon;
          return (
            <Reveal key={it.title} delay={idx * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                className={cn(
                  "glass group p-6 sm:p-7 relative overflow-hidden"
                )}
              >
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/20 blur-3xl transition-opacity group-hover:opacity-90" />
                <div className="absolute -left-20 -bottom-20 h-52 w-52 rounded-full bg-accent/15 blur-3xl transition-opacity group-hover:opacity-90" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 [background:radial-gradient(500px_220px_at_20%_15%,rgba(109,93,246,0.18),transparent_60%),radial-gradient(420px_200px_at_80%_40%,rgba(34,197,94,0.12),transparent_55%)]" />
                </div>

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

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-slate-200/70 via-slate-200/30 to-transparent dark:from-white/10 dark:via-white/5" />
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-primary/60 via-indigo-500/40 to-accent/50 opacity-75 transition-opacity group-hover:opacity-100" />
                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}

