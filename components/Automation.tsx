"use client";

import { motion } from "framer-motion";
import { Bot, CreditCard, HeartPulse, Lightbulb } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";

const items = [
  { icon: CreditCard, t: "Detects bills", d: "Find due dates from alerts and reduce missed payments." },
  { icon: HeartPulse, t: "Reminds medicines", d: "Consistency with gentle nudges and confirmations." },
  { icon: Bot, t: "Tracks spending", d: "Simple summaries with category clarity." },
  { icon: Lightbulb, t: "Suggests improvements", d: "Small changes that compound into better days." }
];

export function Automation() {
  return (
    <SectionShell
      id="automation"
      eyebrow="Automation"
      title="Automation That Works Quietly"
      subtitle="LifeWise runs in the background: it detects, reminds, tracks, and suggests—without noise."
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {items.map((x, i) => {
          const Icon = x.icon;
          return (
            <Reveal key={x.t} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass p-6 sm:p-7 relative overflow-hidden"
              >
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
                <div className="relative flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-premium">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold tracking-tight">{x.t}</div>
                    <div className="mt-1 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {x.d}
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

