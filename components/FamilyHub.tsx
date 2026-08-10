"use client";

import { motion } from "framer-motion";
import { Heart, Pill, Users, FileText, Shield } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import { FAMILY_HUB_MODULES } from "@/lib/landing-data";

const cards = [
  { name: "Papa", label: "Medicine reminder — 8 AM", icon: Pill },
  { name: "Mummy", label: "Doctor appointment — Friday", icon: Heart },
  { name: "Child", label: "School fee due — 15th", icon: Users }
];

export function FamilyHub() {
  return (
    <SectionShell
      id="family"
      eyebrow="Family Hub"
      badge="Hero Feature"
      highlight
      title="The Heart of LifeWise"
      subtitle="Every family member gets their own profile card. Every module — medicine, bills, insurance, documents, SOS — is attached to a member. Caregivers manage loved ones in real time."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        <Reveal>
          <div className="glass p-6 sm:p-8 relative overflow-hidden">
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary/12 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            <div className="text-sm font-semibold">Family overview</div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Add Papa, Mummy, children — each with selected modules and connected caregivers.
            </p>

            <div className="mt-7 grid gap-3">
              {cards.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.85,
                      delay: i * 0.06,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{ y: -8, scale: 1.01 }}
                    className={cn(
                      "rounded-2xl border border-slate-200/70 bg-white/60 backdrop-blur-xl shadow-premium dark:border-white/10 dark:bg-white/5",
                      "hover:shadow-lift transition-shadow"
                    )}
                  >
                    <div className="p-5 flex items-center gap-4">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-premium">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold">{c.name}</div>
                        <div className="text-sm text-slate-700 dark:text-slate-300">
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
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="glass p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <div className="text-sm font-semibold">All 20 Modules</div>
            </div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Select modules per member during setup. Each generates its own reminders and data.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {FAMILY_HUB_MODULES.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-slate-200/70 bg-white/55 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  {m}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white/50 p-5 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-premium">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Connected Caregivers</div>
                  <div className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                    Spouse, siblings, or relatives can view, edit, or get full access.
                    Mark reminders done — everyone syncs instantly via WebSocket.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
