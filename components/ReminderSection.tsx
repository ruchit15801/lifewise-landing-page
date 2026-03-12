"use client";

import { Mic, MessageSquare, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";

const cards = [
  {
    icon: Mic,
    title: "Voice Reminder",
    example: "“Remind me to take medicine at 8 PM”"
  },
  {
    icon: ImageIcon,
    title: "Photo Reminder",
    example: "“Pay electricity bill tomorrow”"
  },
  {
    icon: MessageSquare,
    title: "Chat Reminder",
    example: "“Book doctor appointment on Friday”"
  }
];

export function ReminderSection() {
  return (
    <SectionShell
      id="reminders"
      eyebrow="Smart Reminder System"
      title="Reminders Made Effortless"
      subtitle="Create reminders in the way that feels natural — voice, photo, or chat — and let LifeWise handle follow-through."
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {cards.map((c, idx) => {
          const Icon = c.icon;
          return (
            <Reveal key={c.title} delay={idx * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass p-6 sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-premium">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-lg font-semibold">{c.title}</div>
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200/70 bg-white/55 p-4 text-sm text-slate-700 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                  {c.example}
                </div>

                <div className="mt-5 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400">
                  <span>Natural language</span>
                  <span className="text-primary">Instant</span>
                </div>

                <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/40 via-transparent to-accent/40 opacity-70" />
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Reveal>
          <div className={cn("glass p-6 sm:p-8", "relative overflow-hidden")}>
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <div className="text-sm font-semibold">Example commands</div>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                Fast to create. Hard to forget.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Remind me to take medicine at 8 PM",
                  "Pay electricity bill tomorrow",
                  "Renew subscription on the 1st"
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-slate-200/70 bg-white/55 px-4 py-3 text-sm font-semibold text-slate-900 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-white"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="glass p-6 sm:p-8">
            <div className="text-sm font-semibold">Quiet automation</div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              LifeWise adapts reminders based on your behavior—gentle nudges,
              smarter timing, and fewer interruptions.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                { t: "Snooze-aware", d: "Learns your patterns, suggests better times." },
                { t: "Escalation", d: "If important, it follows up thoughtfully." },
                { t: "Summaries", d: "A clean daily/weekly recap—no noise." }
              ].map((x) => (
                <motion.div
                  key={x.t}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200/70 bg-white/50 p-5 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                >
                  <div className="text-sm font-semibold">{x.t}</div>
                  <div className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                    {x.d}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

