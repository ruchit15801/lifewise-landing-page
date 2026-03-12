"use client";

import { motion } from "framer-motion";
import { Lock, Zap, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const chips = [
  { icon: Zap, title: "Lighthouse 90+", desc: "Fast, minimal, optimized" },
  { icon: Lock, title: "Privacy-first", desc: "Data is never sold" },
  { icon: Sparkles, title: "Premium UI", desc: "Glass + gradients + polish" }
];

export function TrustBar() {
  return (
    <section className="py-10 sm:py-12">
      <div className="section-max">
        <Reveal>
          <div className="glass noise bg-grid p-4 sm:p-5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {chips.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.55,
                      delay: i * 0.06,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-slate-200/70 bg-white/55 px-4 py-4 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-premium">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold">{c.title}</div>
                        <div className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                          {c.desc}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

