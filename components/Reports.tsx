"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AlertTriangle, PieChart, TrendingUp, BarChart3, Activity } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import { MONEY_LEAK_EXAMPLE, PRD_EXAMPLE_DATE } from "@/lib/landing-data";

function Bar({
  label,
  value,
  pct,
  tone,
  delay
}: {
  label: string;
  value: string;
  pct: number;
  tone: "primary" | "accent";
  delay: number;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 300, damping: 25 }}
      whileHover={{ scale: 1.02, x: 5 }}
      className="group/bar relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-4 shadow-lg backdrop-blur-xl transition-all hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
    >
      <div className={cn("absolute -left-6 -top-6 h-20 w-20 rounded-full blur-[25px] transition-opacity opacity-0 group-hover/bar:opacity-100", tone === "primary" ? "bg-indigo-500/20" : "bg-emerald-500/20")} />
      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="text-sm font-bold text-slate-900 dark:text-white">{label}</div>
        <div className="text-xs font-bold text-slate-600 dark:text-slate-300">
          {value}
        </div>
      </div>
      <div className="relative z-10 mt-3 h-2.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
          className={cn(
            "h-full rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)]",
            tone === "primary"
              ? "bg-gradient-to-r from-indigo-500 to-purple-600"
              : "bg-gradient-to-r from-emerald-400 to-teal-500"
          )}
        />
      </div>
    </motion.div>
  );
}

export function Reports() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <SectionShell
      id="insights"
      eyebrow="Insights Tab"
      title="Analytics, Reports & Money Leak Detection"
      subtitle="Spending overview, bills tracker, health summary, family activity feed, and AI-driven savings alerts, all in one Insights tab."
    >
      <div ref={containerRef} className="relative w-full z-10">
        
        {/* Parallax Background Gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-visible flex items-center justify-center -z-10">
          <motion.div 
            style={{ y: y1 }}
            className="absolute left-[0%] top-[30%] h-[35rem] w-[35rem] rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-500/20"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute right-[10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-500/20"
          />
        </div>

        <Reveal>
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="mb-8 group relative overflow-hidden rounded-3xl p-6 sm:p-8 border border-amber-300/60 bg-amber-50/80 shadow-[0_15px_30px_-10px_rgba(245,158,11,0.15)] backdrop-blur-2xl transition-all dark:border-amber-500/30 dark:bg-amber-900/20"
          >
            {/* Warning Pulsing SVG Background */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <svg viewBox="0 0 800 200" className="w-full h-full object-cover">
                <motion.rect x="0" y="0" width="800" height="200" fill="url(#warnGrad)" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} />
                <motion.path d="M 0 100 Q 100 0 200 100 T 400 100 T 600 100 T 800 100" fill="none" stroke="#F59E0B" strokeWidth="2" opacity="0.5" animate={{ x: [-200, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                <defs>
                  <radialGradient id="warnGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 100) rotate(90) scale(200)">
                    <stop stopColor="#F59E0B" stopOpacity="0.2"/><stop offset="1" stopColor="#F59E0B" stopOpacity="0"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-start gap-5">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                <AlertTriangle className="h-7 w-7" />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900 dark:text-amber-400">Money Leak Alert</div>
                <p className="mt-2 text-[15px] font-medium text-slate-700 leading-relaxed dark:text-slate-300">
                  {MONEY_LEAK_EXAMPLE}
                </p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm border border-amber-200 dark:bg-black/20 dark:text-slate-300 dark:border-amber-500/30">
                  <Activity className="h-4 w-4 text-orange-500" />
                  Potential saving ₹3,600/year if you cancel one.
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass group relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 min-h-[480px] border border-white/60 bg-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
            >
              {/* SVG Vector Background for Charts */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg viewBox="0 0 400 500" className="w-full h-full object-cover">
                  <motion.path d="M 50 400 L 100 250 L 200 300 L 300 150 L 400 200" fill="none" stroke="url(#chartGrad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" animate={{ strokeDasharray: ["0 1000", "1000 0"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                  <motion.path d="M 50 400 L 100 250 L 200 300 L 300 150 L 400 200 L 400 500 L 50 500 Z" fill="url(#chartFill)" opacity="0.5" animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="400" y2="0">
                      <stop stopColor="#3B82F6"/><stop offset="1" stopColor="#10B981"/>
                    </linearGradient>
                    <linearGradient id="chartFill" x1="200" y1="150" x2="200" y2="500">
                      <stop stopColor="#3B82F6" stopOpacity="0.5"/><stop offset="1" stopColor="#3B82F6" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">Spending Overview</div>
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      {PRD_EXAMPLE_DATE} • Last 30 days
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid gap-4">
                  <Bar label="Food" value="₹8,450" pct={62} tone="accent" delay={0.1} />
                  <Bar label="Bills" value="₹4,200" pct={66} tone="primary" delay={0.2} />
                  <Bar label="Medical" value="₹2,100" pct={40} tone="accent" delay={0.3} />
                  <Bar label="Subscriptions" value="₹799" pct={30} tone="primary" delay={0.4} />
                </div>
              </div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass group relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 min-h-[480px] border border-white/60 bg-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-2xl flex flex-col dark:border-white/10 dark:bg-white/5"
            >
              {/* SVG Vector Background for Pie/Report */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg viewBox="0 0 400 500" className="w-full h-full object-cover">
                  <motion.circle cx="300" cy="150" r="100" fill="none" stroke="url(#pieGrad1)" strokeWidth="30" strokeDasharray="300 400" animate={{ rotate: 360 }} style={{ transformOrigin: "300px 150px" }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                  <motion.circle cx="300" cy="150" r="100" fill="none" stroke="url(#pieGrad2)" strokeWidth="30" strokeDasharray="150 400" strokeDashoffset="100" animate={{ rotate: -360 }} style={{ transformOrigin: "300px 150px" }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
                  <defs>
                    <linearGradient id="pieGrad1" x1="0" y1="0" x2="400" y2="400">
                      <stop stopColor="#10B981"/><stop offset="1" stopColor="#06B6D4"/>
                    </linearGradient>
                    <linearGradient id="pieGrad2" x1="400" y1="0" x2="0" y2="400">
                      <stop stopColor="#F59E0B"/><stop offset="1" stopColor="#EF4444"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <PieChart className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">Monthly PDF Report</div>
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Premium • Auto-generated
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  {[
                    { t: "Spending by category", d: "Pie chart + month-over-month comparison", icon: PieChart },
                    { t: "Bills tracker", d: "Paid, upcoming, overdue with full payment history", icon: BarChart3 },
                    { t: "Health summary", d: "Medicine compliance %, BP/sugar trends, appointments", icon: Activity },
                    { t: "Family activity", d: "Son marked Papa's medicine as taken at 8:05 PM", icon: TrendingUp }
                  ].map((x, i) => (
                    <motion.div
                      key={x.t}
                      whileHover={{ scale: 1.02, x: 5 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group/item relative overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-5 shadow-lg backdrop-blur-xl transition-all hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
                    >
                      <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-emerald-500/20 blur-[20px] transition-opacity opacity-0 group-hover/item:opacity-100" />
                      <div className="relative z-10 flex items-start gap-4">
                        <x.icon className="h-5 w-5 text-teal-600 shrink-0 mt-0.5 dark:text-teal-400" />
                        <div>
                          <div className="text-[15px] font-bold text-slate-900 dark:text-white">{x.t}</div>
                          <div className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                            {x.d}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
