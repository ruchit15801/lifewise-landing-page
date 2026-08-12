"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeartPulse, Pill, Activity, TrendingUp } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import { FAMILY_HEALTH_EXAMPLE } from "@/lib/landing-data";

function ProgressRing({ value, size = 120, strokeWidth = 10 }: { value: number; size?: number; strokeWidth?: number }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-slate-200 dark:text-slate-800"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="text-emerald-500 drop-shadow-md dark:text-emerald-400 dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
          <span className="text-2xl font-black text-slate-900 dark:text-white">{value}%</span>
        </motion.div>
      </div>
    </div>
  );
}

export function LifeScore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <SectionShell
      id="health"
      eyebrow="Health Screen"
      title="Family Health Summary"
      subtitle="Track medicine compliance, health readings, and upcoming appointments across the whole family in a single glance."
    >
      <div ref={containerRef} className="relative space-y-4">
        
        {/* Main Health Panel */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition-colors dark:border-slate-800/60 dark:bg-[#0a0a12]">
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
              style={{
                backgroundImage: "radial-gradient(circle, #10b981 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            {/* Glow */}
            <div className="absolute right-1/4 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none dark:bg-emerald-500/15" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              
              {/* Left: Text Content */}
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 w-fit mb-8 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <HeartPulse className="h-3 w-3" />
                  Health Tracking
                </div>

                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                  Never miss a dose.
                  <br />
                  <span className="text-emerald-600 dark:text-emerald-400">Never miss a beat.</span>
                </h3>

                <p className="mt-6 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm">
                  Get a unified view of your family&apos;s health. Track medicine compliance, monitor BP/sugar trends, and get notified when a dose is missed.
                </p>

                <div className="mt-8 grid gap-4 text-left">
                  {[
                    { icon: Pill, t: "Medicine compliance", d: "Track daily medicine taken vs missed." },
                    { icon: Activity, t: "Health readings", d: "BP, sugar, weight trends over 30 days." },
                  ].map((x, i) => (
                    <motion.div
                      key={x.t}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                      className="flex items-start gap-4"
                    >
                      <div className="shrink-0 grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-emerald-600 dark:border-slate-700/50 dark:bg-slate-800/60 dark:text-emerald-400">
                        <x.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-[14px] font-bold text-slate-900 dark:text-white">{x.t}</div>
                        <div className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">{x.d}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Mockup UI */}
              <div className="relative flex items-center justify-center p-8 lg:p-10 border-t border-slate-200 lg:border-l lg:border-t-0 dark:border-slate-800/60">
                <motion.div style={{ y }} className="w-full max-w-sm space-y-4">
                  
                  {/* Health Card */}
                  <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-xl backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/90 dark:shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full border border-blue-200 bg-blue-100 grid place-items-center dark:border-blue-500/30 dark:bg-blue-500/20">
                          <span className="text-sm font-bold text-blue-700 dark:text-blue-400">P</span>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white">{FAMILY_HEALTH_EXAMPLE.name}&apos;s Health</div>
                          <div className="text-[10px] text-slate-500 font-medium tracking-wide uppercase dark:text-slate-400">This Week</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-100 px-2 py-1 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse dark:bg-emerald-400" />
                        <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400">Normal</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <ProgressRing value={80} size={100} strokeWidth={8} />
                      <div className="space-y-3 flex-1">
                        <div>
                          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Compliance</div>
                          <div className="text-sm font-medium text-slate-900 dark:text-slate-300">12/15 Doses Taken</div>
                        </div>
                        <div className="h-px bg-slate-200 dark:bg-slate-800" />
                        <div>
                          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Latest BP</div>
                          <div className="flex items-baseline gap-1 text-sm font-medium text-slate-900 dark:text-slate-300">
                            120/80 <span className="text-[10px] text-emerald-600 dark:text-emerald-400">mmHg</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trend Graph Mockup */}
                  <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-xl backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/90 dark:shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-2 dark:text-slate-300">
                        <TrendingUp className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                        Blood Pressure Trend
                      </div>
                      <div className="text-[10px] font-medium text-slate-500">Last 7 Days</div>
                    </div>
                    {/* SVG Line Graph */}
                    <div className="h-20 w-full relative">
                      <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                        <motion.path
                          d="M0 30 Q20 10 40 25 T80 15 T100 20"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.circle cx="80" cy="15" r="2" fill="#3b82f6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 }} />
                      </svg>
                      {/* Grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        <div className="w-full h-px bg-slate-200 dark:bg-slate-800" />
                        <div className="w-full h-px bg-slate-200 dark:bg-slate-800" />
                        <div className="w-full h-px bg-slate-200 dark:bg-slate-800" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
