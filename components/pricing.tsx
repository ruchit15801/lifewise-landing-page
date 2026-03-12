"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "",
    desc: "Start simple with essentials.",
    features: ["Basic reminders", "Life score", "1 family member"],
    highlight: false
  },
  {
    name: "Pro",
    price: "₹29",
    period: "/ month",
    desc: "Best for daily life automation.",
    features: ["Unlimited reminders", "Voice reminders", "AI insights"],
    highlight: true
  },
  {
    name: "Family+",
    price: "₹99",
    period: "/ month",
    desc: "For families who share care.",
    features: ["Family dashboard", "Medicine tracking", "Shared reminders"],
    highlight: false
  },
  {
    name: "Sponsor",
    price: "₹199",
    period: "/ month",
    desc: "Sponsor plan for parents.",
    features: ["Parent support", "Priority alerts", "Shared schedules"],
    highlight: false
  }
];

export function Pricing() {
  return (
    <SectionShell
      id="pricing"
      eyebrow="Pricing"
      title="Luxury pricing that feels fair"
      subtitle="Choose a plan that matches your life. Upgrade any time."
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <motion.div
              whileHover={{ y: -8 }}
              className={cn(
                "glass p-6 sm:p-7 relative overflow-hidden",
                p.highlight && "ring-glow"
              )}
            >
              {p.highlight ? (
                <div className="absolute right-5 top-5 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent border border-accent/20">
                  Recommended
                </div>
              ) : null}

              <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {p.name}
              </div>
              <div className="mt-3 flex items-end gap-1">
                <div className="text-3xl font-semibold tracking-tight">
                  {p.price}
                </div>
                <div className="pb-1 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {p.period}
                </div>
              </div>
              <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                {p.desc}
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/40 via-transparent to-accent/40 opacity-70" />

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary/10 text-primary border border-primary/20">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-slate-700 dark:text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                href="#download"
                className={cn("mt-8 w-full", p.highlight ? "btn-primary" : "btn-secondary")}
              >
                Get started
              </motion.a>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

