"use client";

import { motion } from "framer-motion";
import { Bell, HeartPulse, Landmark, Users } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";

const blocks = [
  { icon: Landmark, t: "Money" },
  { icon: HeartPulse, t: "Health" },
  { icon: Users, t: "Family" },
  { icon: Bell, t: "Reminders" }
];

export function SeniorMode() {
  return (
    <SectionShell
      id="senior"
      eyebrow="For Everyone"
      title="Designed for Seniors Too"
      subtitle="Senior members (55+) can view their reminders and health status with a calm, readable interface — large tap targets, high contrast, and clear confirmations."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass p-6 sm:p-8">
            <div className="text-sm font-semibold">Senior member experience</div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Parents use the app lightly — view reminders, mark medicines taken, and see health status.
              Adult children manage the full setup via Family Hub.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4">
              {blocks.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.t}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl border border-slate-200/70 bg-white/55 p-6 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-premium">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="mt-4 text-base font-semibold">{b.t}</div>
                    <div className="mt-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                      Large tap target
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="glass p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/18 blur-3xl" />
            <div className="relative">
              <div className="text-sm font-semibold">App settings from PRD</div>
              <div className="mt-6 grid gap-3">
                {[
                  { t: "Languages", d: "English, Hindi, Gujarati, Marathi, Tamil, Telugu, Bengali" },
                  { t: "Biometric lock", d: "Touch ID / Face ID for secure access" },
                  { t: "Emergency SOS", d: "Shake phone 3× or long-press — SMS + call to emergency contacts with location" }
                ].map((x) => (
                  <motion.div
                    key={x.t}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-slate-200/70 bg-white/55 p-5 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="text-sm font-semibold">{x.t}</div>
                    <div className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                      {x.d}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
