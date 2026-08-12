"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Pill, Users, FileText, Shield, Sparkles, Activity } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import { FAMILY_HUB_MODULES } from "@/lib/landing-data";

const cards = [
  { name: "Papa", label: "Medicine reminder, 8 AM", icon: Pill, color: "from-blue-500 to-cyan-500", shadow: "shadow-cyan-500/30", glow: "bg-cyan-500/20" },
  { name: "Mummy", label: "Doctor appointment, Friday", icon: Heart, color: "from-rose-400 to-pink-500", shadow: "shadow-pink-500/30", glow: "bg-pink-500/20" },
  { name: "Child", label: "School fee due, 15th", icon: Users, color: "from-amber-400 to-orange-500", shadow: "shadow-orange-500/30", glow: "bg-orange-500/20" }
];

export function FamilyHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <SectionShell
      id="family"
      eyebrow="Family Hub"
      badge="Hero Feature"
      highlight
      title="The Heart of LifeWise"
      subtitle="Every family member gets their own profile card. Every module (medicine, bills, insurance, documents, SOS) is attached to a member. Caregivers manage loved ones in real time."
    >
      <div ref={containerRef} className="relative w-full z-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        
        {/* Parallax Background Gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-visible flex items-center justify-center -z-10">
          <motion.div 
            style={{ y: y1 }}
            className="absolute left-[-20%] top-[30%] h-[30rem] w-[30rem] rounded-full bg-rose-500/10 blur-[120px] dark:bg-rose-500/20"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute right-[-15%] top-[10%] h-[25rem] w-[25rem] rounded-full bg-cyan-500/10 blur-[100px] dark:bg-cyan-500/20"
          />
        </div>

        <Reveal>
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass group relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 min-h-[480px] border border-white/60 bg-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
          >
            {/* SVG Vector Background for Profiles */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <svg viewBox="0 0 400 600" fill="none" className="w-full h-full object-cover">
                <motion.path d="M -100 200 Q 150 100 400 300 T 900 200" stroke="currentColor" className="text-rose-400/20" strokeWidth="2" strokeDasharray="10 10" animate={{ x: [-100, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
                <motion.circle cx="350" cy="150" r="100" fill="url(#hubGrad1)" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 6, repeat: Infinity }} />
                <defs>
                  <radialGradient id="hubGrad1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350 150) rotate(90) scale(100)">
                    <stop stopColor="#F43F5E"/><stop offset="1" stopColor="#F43F5E" stopOpacity="0"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.3)]">
                  <Heart className="h-6 w-6" />
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">Family Overview</div>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 font-medium max-w-sm">
                Add Papa, Mummy, children, each with selected modules and connected caregivers.
              </p>

              <div className="mt-8 grid gap-4 relative z-20">
                {cards.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <motion.div
                      key={c.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="group/card relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-4 shadow-lg backdrop-blur-xl transition-all hover:bg-white/90 hover:shadow-xl dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
                    >
                      <div className={cn("absolute -left-6 -top-6 h-20 w-20 rounded-full blur-[25px] transition-opacity opacity-0 group-hover/card:opacity-100", c.glow)} />
                      <div className="relative z-10 flex items-center gap-4">
                        <div className={cn("shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br text-white", c.color, c.shadow)}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-bold text-slate-900 dark:text-white">{c.name}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-300 font-medium truncate">
                            {c.label}
                          </div>
                        </div>
                        <div className="ml-auto rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600 border border-emerald-500/20">
                          Active
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass group relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 min-h-[480px] border border-white/60 bg-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-2xl flex flex-col dark:border-white/10 dark:bg-white/5"
          >
            {/* SVG Vector Background for Modules & Security */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <svg viewBox="0 0 400 600" fill="none" className="w-full h-full object-cover">
                <motion.rect x="250" y="50" width="120" height="120" rx="20" stroke="url(#modGrad2)" strokeWidth="3" strokeDasharray="6 6" animate={{ rotate: 90 }} style={{ transformOrigin: "310px 110px" }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                <motion.circle cx="310" cy="110" r="150" fill="url(#modGrad1)" animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 7, repeat: Infinity }} />
                <defs>
                  <radialGradient id="modGrad1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(310 110) rotate(90) scale(150)">
                    <stop stopColor="#06B6D4"/><stop offset="1" stopColor="#06B6D4" stopOpacity="0"/>
                  </radialGradient>
                  <linearGradient id="modGrad2" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#06B6D4"/><stop offset="1" stopColor="#3B82F6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">All 20 Modules</div>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 font-medium">
                Select modules per member during setup. Each generates its own reminders and securely isolates data.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {FAMILY_HUB_MODULES.map((m, i) => (
                  <motion.span
                    key={m}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="rounded-full border border-white/80 bg-white/60 px-4 py-2 text-xs font-bold text-slate-700 shadow-sm backdrop-blur-md transition-colors hover:bg-white hover:text-cyan-600 hover:border-cyan-200 dark:border-white/10 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/20"
                  >
                    {m}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="mt-8 relative z-10 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur-xl transition-all dark:border-white/10 dark:bg-white/10"
            >
              <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-indigo-500/20 blur-[30px]" />
              <div className="relative flex items-start gap-4 z-10">
                <div className="shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">Connected Caregivers</div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    Spouse, siblings, or relatives can view, edit, or get full access.
                    Mark reminders done and everyone syncs instantly via WebSocket.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
