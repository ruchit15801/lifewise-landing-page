"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Zap, Share2, Workflow, ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";

export function Automation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <SectionShell
      id="automation"
      eyebrow="Smart Automation"
      title="Workflows That Save Time"
      subtitle="LifeWise isn't just a list. It actively detects bills, categorizes expenses, and routes missed reminders to the right caregiver."
    >
      <div ref={containerRef} className="relative space-y-6">
        
        {/* Main Automation Panel */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 lg:p-14 transition-colors dark:border-slate-800/60 dark:bg-[#0a0a12]">
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
              style={{ backgroundImage: "radial-gradient(circle, #0ea5e9 1px, transparent 1px)", backgroundSize: "32px 32px" }}
            />
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none dark:bg-cyan-600/10" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[400px]">
              
              {/* Left: Diagram Mockup */}
              <div className="flex items-center justify-center lg:justify-start">
                <motion.div style={{ y }} className="w-full max-w-sm">
                  <div className="relative p-6 rounded-3xl border border-slate-200 bg-white/80 shadow-2xl backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/60">
                    
                    {/* Flow diagram */}
                    <div className="space-y-4">
                      {/* Step 1 */}
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 relative z-10 dark:border-slate-700/50 dark:bg-slate-800/80">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-6 w-6 rounded border border-rose-200 bg-rose-100 text-rose-600 grid place-items-center dark:border-rose-500/30 dark:bg-rose-500/20 dark:text-rose-400">1</div>
                          <span className="text-[13px] font-bold text-slate-900 dark:text-white">Reminder Missed</span>
                        </div>
                        <div className="text-[11px] text-slate-500 pl-9 dark:text-slate-400">Papa&apos;s BP Medicine (8:00 PM)</div>
                      </div>

                      {/* Connecting Line */}
                      <div className="h-6 border-l-2 border-dashed border-cyan-300 ml-7 relative -my-2 dark:border-cyan-500/40" />

                      {/* Step 2 */}
                      <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-4 relative z-10 ring-1 ring-cyan-500/20 dark:border-cyan-800/50 dark:bg-cyan-950/40">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-6 w-6 rounded bg-cyan-100 text-cyan-600 grid place-items-center shadow-sm dark:bg-cyan-500/20 dark:text-cyan-400 dark:shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                            <Workflow className="h-3 w-3" />
                          </div>
                          <span className="text-[13px] font-bold text-cyan-700 dark:text-cyan-300">Wait 30 Minutes</span>
                        </div>
                        <div className="h-1 w-full bg-cyan-200 rounded-full mt-3 overflow-hidden dark:bg-cyan-900">
                          <motion.div className="h-full bg-cyan-500 rounded-full dark:bg-cyan-400" initial={{ width: "0%" }} whileInView={{ width: "100%" }} transition={{ duration: 2, ease: "linear", repeat: Infinity }} />
                        </div>
                      </div>

                      {/* Connecting Line splits */}
                      <div className="flex -my-2">
                        <div className="w-7 border-t-2 border-dashed border-cyan-300 mt-3 relative left-7 dark:border-cyan-500/40" />
                        <div className="w-14 border-t-2 border-dashed border-cyan-300 mt-3 relative ml-auto right-7 dark:border-cyan-500/40" />
                        <div className="h-6 border-l-2 border-dashed border-cyan-300 ml-7 absolute dark:border-cyan-500/40" />
                      </div>

                      {/* Step 3 */}
                      <div className="grid grid-cols-2 gap-3 relative z-10 pt-2">
                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 flex items-center gap-2 dark:border-slate-700/50 dark:bg-slate-800/80">
                          <div className="h-5 w-5 rounded-full bg-blue-100 grid place-items-center text-[10px] font-bold text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">R</div>
                          <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300">Alert Rahul</span>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 flex items-center gap-2 dark:border-slate-700/50 dark:bg-slate-800/80">
                          <div className="h-5 w-5 rounded-full bg-emerald-100 grid place-items-center text-[10px] font-bold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">M</div>
                          <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300">Alert Mummy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right: Text */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700 mb-8 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-400">
                  <Cpu className="h-4 w-4" />
                  Background Tasks
                </div>

                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                  It works while
                  <br />
                  <span className="text-cyan-600 dark:text-cyan-400">you sleep.</span>
                </h3>

                <p className="mt-6 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm mb-8">
                  Set it and forget it. LifeWise automatically escalates missed tasks to caregivers, detects bills from SMS, and auto-categorizes expenses.
                </p>

                <div className="grid gap-4">
                  {[
                    { icon: Share2, t: "Smart Escalation", d: "Alerts caregivers if a critical medicine is missed by 30 mins." },
                    { icon: Zap, t: "Auto Bill Detection", d: "Opt-in SMS scanning finds upcoming bills and adds them to Hub." }
                  ].map((x, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800/80 dark:bg-slate-900/50">
                      <div className="shrink-0 h-10 w-10 rounded-xl border border-slate-200 bg-white grid place-items-center text-cyan-600 dark:border-slate-700 dark:bg-slate-800 dark:text-cyan-400">
                        <x.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-[14px] font-bold text-slate-900 dark:text-white mb-1">{x.t}</div>
                        <div className="text-xs text-slate-600 leading-relaxed font-medium dark:text-slate-400">{x.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
