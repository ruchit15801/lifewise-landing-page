"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Sparkles, Star } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import { FREE_PLAN, PREMIUM_PLAN, YEARLY_TIERS } from "@/lib/landing-data";

export function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <SectionShell
      id="pricing"
      eyebrow="Pricing"
      title="Freemium: Free vs Premium"
      subtitle="Start free with essentials. Upgrade to Premium for all 20 modules, WiseAI, voice reminders, and full family management."
    >
      <div ref={containerRef} className="relative w-full z-10">
        
        {/* Parallax Background Gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-visible flex items-center justify-center -z-10">
          <motion.div 
            style={{ y: y1 }}
            className="absolute left-[0%] top-[20%] h-[40rem] w-[40rem] rounded-full bg-amber-500/10 blur-[120px] dark:bg-amber-500/20"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute right-[0%] top-[10%] h-[35rem] w-[35rem] rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-500/20"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 relative z-10">
          {[FREE_PLAN, PREMIUM_PLAN].map((p, i) => {
            const highlight = "period" in p && p.name === "Premium";
            return (
              <Reveal key={p.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={cn(
                    "group relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 min-h-[600px] border backdrop-blur-2xl transition-all shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]",
                    highlight 
                      ? "border-amber-300/60 bg-white/60 dark:border-amber-500/30 dark:bg-amber-900/10" 
                      : "border-white/60 bg-white/40 dark:border-white/10 dark:bg-white/5"
                  )}
                >
                  {highlight && (
                    <>
                      {/* Premium SVG Vector Background */}
                      <div className="absolute inset-0 pointer-events-none opacity-20">
                        <svg viewBox="0 0 400 600" className="w-full h-full object-cover">
                          <motion.circle cx="350" cy="50" r="150" fill="url(#premGlow)" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 4, repeat: Infinity }} />
                          <motion.path d="M 0 600 L 400 0 L 400 600 Z" fill="url(#premDiag)" opacity="0.1" />
                          <defs>
                            <radialGradient id="premGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350 50) rotate(90) scale(150)">
                              <stop stopColor="#F59E0B"/><stop offset="1" stopColor="#F59E0B" stopOpacity="0"/>
                            </radialGradient>
                            <linearGradient id="premDiag" x1="0" y1="600" x2="400" y2="0">
                              <stop stopColor="#F59E0B"/><stop offset="1" stopColor="#EC4899"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 pointer-events-none" />
                      <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-amber-500/30 flex items-center gap-1.5">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        Recommended
                      </div>
                    </>
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={cn("grid h-14 w-14 place-items-center rounded-2xl text-white shadow-xl", highlight ? "bg-gradient-to-br from-amber-400 to-orange-500 shadow-amber-500/30" : "bg-gradient-to-br from-slate-400 to-slate-500 shadow-slate-500/30")}>
                        {highlight ? <Sparkles className="h-7 w-7" /> : <Check className="h-7 w-7" />}
                      </div>
                      <div>
                        <div className={cn("text-2xl font-black tracking-tight", highlight ? "text-amber-600 dark:text-amber-400" : "text-slate-900 dark:text-white")}>
                          {p.name}
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 flex items-baseline gap-2">
                      <div className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                        {p.price}
                      </div>
                      {"period" in p && p.period ? (
                        <div className="text-lg font-bold text-slate-500 dark:text-slate-400">
                          {p.period}
                        </div>
                      ) : null}
                    </div>
                    <div className="mt-4 text-[15px] font-medium text-slate-600 dark:text-slate-300 min-h-[44px]">
                      {p.desc}
                    </div>

                    <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent" />

                    <ul className="space-y-4 flex-1">
                      {p.features.map((f, idx) => (
                        <motion.li 
                          key={f} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 text-[15px] font-medium text-slate-700 dark:text-slate-300"
                        >
                          <span className={cn("mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border", highlight ? "bg-amber-100 text-amber-600 border-amber-200 dark:bg-amber-500/20 dark:text-amber-400 dark:border-amber-500/30" : "bg-emerald-100 text-emerald-600 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30")}>
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <span>{f}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.a
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href="#download"
                      className={cn(
                        "mt-10 w-full rounded-2xl py-4 px-6 text-center text-[15px] font-bold shadow-lg transition-all flex items-center justify-center gap-2", 
                        highlight 
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-amber-500/30 hover:shadow-amber-500/50 hover:from-amber-400 hover:to-orange-400" 
                          : "bg-white text-slate-900 border border-slate-200 shadow-slate-200/50 hover:bg-slate-50 dark:bg-white/10 dark:text-white dark:border-white/10 dark:hover:bg-white/20"
                      )}
                    >
                      {highlight ? "Upgrade to Premium" : "Get started free"}
                    </motion.a>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 relative z-10">
          {YEARLY_TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={0.2 + i * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/40 p-6 sm:p-8 shadow-lg backdrop-blur-xl transition-all hover:bg-white/60 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-[20px] transition-opacity opacity-0 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <div className="text-[17px] font-bold text-slate-900 dark:text-white">
                      {tier.name}
                    </div>
                    <div className="inline-flex rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700 dark:bg-purple-500/20 dark:text-purple-300">
                      {tier.note}
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <div className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                      {tier.price}
                    </div>
                    <div className="text-sm font-bold text-slate-500 dark:text-slate-400">
                      {tier.period}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
