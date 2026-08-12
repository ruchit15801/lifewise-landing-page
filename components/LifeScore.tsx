"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeartPulse, Pill, ReceiptIndianRupee, CheckCircle2, Calendar, Activity } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import { FAMILY_HEALTH_EXAMPLE } from "@/lib/landing-data";

function ProgressRing({ value }: { value: number }) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  const dash = (pct / 100) * c;

  return (
    <div className="relative grid place-items-center">
      <svg width="140" height="140" viewBox="0 0 140 140" className="rotate-[-90deg]">
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="rgba(2,6,23,0.05)"
          strokeWidth="12"
          className="dark:hidden"
        />
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="12"
          className="hidden dark:block"
        />
        <motion.circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="url(#grad)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c - dash}`}
          initial={{ strokeDasharray: `0 ${c}` }}
          whileInView={{ strokeDasharray: `${dash} ${c - dash}` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center flex flex-col items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Score
          </div>
          <div className="text-3xl font-black tracking-tight text-slate-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-emerald-500">
            {pct}%
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function LifeScore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <SectionShell
      id="health"
      eyebrow="Home Screen"
      title="Family Health Summary"
      subtitle="Horizontal scroll of member cards on Home: health compliance %, upcoming bills, and today's reminders across the whole family."
    >
      <div ref={containerRef} className="relative w-full z-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        
        {/* Parallax Background Gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-visible flex items-center justify-center -z-10">
          <motion.div 
            style={{ y: y1 }}
            className="absolute left-[10%] top-[30%] h-[30rem] w-[30rem] rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-500/20"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute right-[5%] top-[50%] h-[25rem] w-[25rem] rounded-full bg-emerald-500/10 blur-[90px] dark:bg-emerald-500/20"
          />
        </div>

        <Reveal>
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass group relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 min-h-[480px] border border-white/60 bg-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-2xl flex flex-col sm:flex-row gap-8 items-center sm:items-start dark:border-white/10 dark:bg-white/5"
          >
            {/* SVG Vector Background for Pulse/Health */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg viewBox="0 0 400 600" className="w-full h-full object-cover">
                <motion.path d="M -100 300 L 50 300 L 100 150 L 150 450 L 200 300 L 500 300" fill="none" stroke="url(#pulseGrad)" strokeWidth="4" strokeLinejoin="round" animate={{ x: [-200, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                <defs>
                  <linearGradient id="pulseGrad" x1="0" y1="0" x2="400" y2="0">
                    <stop stopColor="#6366F1" stopOpacity="0"/><stop offset="0.5" stopColor="#6366F1"/><stop offset="1" stopColor="#6366F1" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10 shrink-0">
              <div className="ring-glow rounded-[2rem] p-6 bg-white/70 shadow-xl border border-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/20">
                <ProgressRing value={80} />
              </div>
            </div>
            
            <div className="relative z-10 flex-1 w-full text-center sm:text-left">
              <div className="inline-flex items-center gap-2 mb-2 rounded-full bg-indigo-50/80 px-3 py-1.5 text-xs font-bold text-indigo-700 shadow-sm border border-indigo-100 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/30">
                <HeartPulse className="h-3.5 w-3.5" />
                {FAMILY_HEALTH_EXAMPLE.name}
              </div>
              <div className="text-xl font-bold text-slate-900 dark:text-white">
                {FAMILY_HEALTH_EXAMPLE.compliance} {FAMILY_HEALTH_EXAMPLE.label}
              </div>
              
              <div className="mt-8 grid gap-4 text-left">
                {[
                  {
                    icon: Pill,
                    t: "Medicine compliance",
                    d: "Track daily medicine taken vs missed per member.",
                    color: "from-blue-500 to-cyan-500",
                    shadow: "shadow-cyan-500/30"
                  },
                  {
                    icon: Activity,
                    t: "Health readings",
                    d: "BP, sugar, weight trends over last 30 days.",
                    color: "from-indigo-500 to-purple-500",
                    shadow: "shadow-indigo-500/30"
                  },
                  {
                    icon: ReceiptIndianRupee,
                    t: "Upcoming bills",
                    d: "Next 3–5 due within 7 days, green, orange, red coded.",
                    color: "from-emerald-400 to-teal-500",
                    shadow: "shadow-emerald-500/30"
                  }
                ].map((x, i) => {
                  const Icon = x.icon;
                  return (
                    <motion.div
                      key={x.t}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.02, x: -5 }}
                      className="group/item relative overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-4 shadow-md backdrop-blur-xl transition-all hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
                    >
                      <div className="flex items-start gap-4 relative z-10">
                        <div className={cn("shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br text-white", x.color, x.shadow)}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="text-[15px] font-bold text-slate-900 dark:text-white">{x.t}</div>
                          <div className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                            {x.d}
                          </div>
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
            {/* SVG Vector Background for Timeline */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg viewBox="0 0 400 600" className="w-full h-full object-cover">
                <motion.line x1="100" y1="50" x2="100" y2="550" stroke="url(#timelineGrad)" strokeWidth="4" strokeDasharray="10 10" animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                <motion.circle cx="100" cy="150" r="12" fill="#10B981" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.circle cx="100" cy="300" r="12" fill="#3B82F6" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                <motion.circle cx="100" cy="450" r="12" fill="#F59E0B" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                <defs>
                  <linearGradient id="timelineGrad" x1="0" y1="0" x2="0" y2="600">
                    <stop stopColor="#10B981"/><stop offset="0.5" stopColor="#3B82F6"/><stop offset="1" stopColor="#F59E0B"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">Today&apos;s Reminders</div>
              </div>
              <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                All reminders due today across ALL family members, with MISSED badges and green checkmarks for completed.
              </p>
              
              <div className="mt-10 grid gap-5">
                {[
                  { k: "Papa", v: "BP Tablet, 8:00 PM • Pending", status: "pending", icon: Pill, color: "text-blue-600 bg-blue-50 border-blue-200" },
                  { k: "Mummy", v: "Doctor appointment, 10:00 AM • Done", status: "done", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
                  { k: "Electricity", v: "Bill due in 2 days • ₹2,400", status: "alert", icon: ReceiptIndianRupee, color: "text-amber-600 bg-amber-50 border-amber-200" }
                ].map((x, i) => (
                  <motion.div
                    key={x.k}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={cn(
                      "relative overflow-hidden rounded-2xl border px-5 py-4 shadow-sm backdrop-blur-xl transition-all hover:shadow-md",
                      x.color, "dark:bg-black/20 dark:border-white/10 dark:text-white"
                    )}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <x.icon className="h-5 w-5 shrink-0 opacity-80" />
                        <div className="font-bold">{x.k}</div>
                      </div>
                      <div className="text-xs font-bold opacity-80">{x.v}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
