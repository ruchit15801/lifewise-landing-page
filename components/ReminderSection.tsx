"use client";

import { Mic, Camera, Bot } from "lucide-react";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";

const cards = [
  {
    icon: Mic,
    title: "Voice Reminder",
    example: "\"Papa ko kal subah 8 baje medicine leni hai\""
  },
  {
    icon: Camera,
    title: "Scan Bill",
    example: "OCR extracts bill name, amount & due date"
  },
  {
    icon: Bot,
    title: "WiseAI Chat",
    example: "\"What reminders does Papa have this week?\""
  }
];

export function ReminderSection() {
  return (
    <SectionShell
      id="reminders"
      eyebrow="Reminders Tab"
      title="Your Reminder Command Center"
      subtitle="All reminders across all family members in one unified view — filter by Today, Upcoming, Overdue, or per member."
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {cards.map((c, idx) => {
          const Icon = c.icon;
          return (
            <Reveal key={c.title} delay={idx * 0.06}>
              <motion.div whileHover={{ y: -6 }} className="glass p-6 sm:p-7">
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
                  <span>Home screen shortcut</span>
                  <span className="text-primary">Instant</span>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="glass p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <div className="text-sm font-semibold">Reminder lifecycle</div>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                FCM push at scheduled time → Mark Done / Snooze / Skip → caregivers sync in real time.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Papa ki BP Tablet — 8:00 PM. Tap to mark as taken.",
                  "Electricity bill due in 3 days. Amount approx Rs. 2,400",
                  "MISSED — Papa ki medicine nahi li abhi tak. 30 min ho gaye."
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
            <div className="text-sm font-semibold">Filter & manage</div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              All • Today • Upcoming • Overdue • Completed — plus per-member filters for Papa, Mummy, and more.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                { t: "Mark Done", d: "First-write wins — all caregivers see COMPLETED." },
                { t: "Snooze", d: "Reschedule notification in X minutes." },
                { t: "Missed alerts", d: "Red badge on Home + alert to caregivers after 30 min." }
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
