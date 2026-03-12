"use client";

import { motion } from "framer-motion";
import { Heart, Pill, Users } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";

const cards = [
  { name: "Papa", label: "Medicine reminder — 8 AM", icon: Pill },
  { name: "Partner", label: "Health reminder — weekly", icon: Heart },
  { name: "Child", label: "School fee reminder", icon: Users }
];

export function FamilyHub() {
  return (
    <SectionShell
      id="family"
      eyebrow="Family Hub"
      title="Care that feels effortless"
      subtitle="A stacked, premium dashboard for your loved ones — reminders, health routines, and peace of mind."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass p-6 sm:p-8">
            <div className="text-sm font-semibold">Family overview</div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Everything that matters, surfaced at the right time.
            </p>

            <div className="mt-7 relative h-[320px]">
              {cards.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.name}
                    whileHover={{ y: -6, rotate: 0, scale: 1.01 }}
                    className={cn(
                      "absolute left-0 right-0 mx-auto max-w-md",
                      "rounded-2xl border border-slate-200/70 bg-white/60 backdrop-blur-xl shadow-premium dark:border-white/10 dark:bg-white/5"
                    )}
                    style={{
                      top: 22 * i,
                      transform: `rotate(${(-2 + i) * 2}deg)`
                    }}
                  >
                    <div className="p-5 flex items-center gap-4">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-premium">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold">{c.name}</div>
                        <div className="text-sm text-slate-700 dark:text-slate-300 truncate">
                          {c.label}
                        </div>
                      </div>
                      <div className="ml-auto rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent border border-accent/20">
                        Active
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-lightBg to-transparent dark:from-darkBg" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="glass p-6 sm:p-8">
            <div className="text-sm font-semibold">Smart routines</div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              LifeWise nudges gently — and escalates only when needed.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                { k: "Morning", v: "Papa medicine reminder + confirmation" },
                { k: "Weekly", v: "Partner health check-in + summary" },
                { k: "Fees", v: "School fee due date + auto-follow ups" }
              ].map((r, i) => (
                <motion.div
                  key={r.k}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200/70 bg-white/50 p-5 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-semibold">{r.k}</div>
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      #{i + 1}
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                    {r.v}
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

