"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Clock, CalendarSync, BellRing, ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import { MODULES } from "@/lib/landing-data";

export function ReminderSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <SectionShell
      id="reminders"
      eyebrow="Task Management"
      title="Never miss what matters."
      subtitle="From daily medicines to yearly insurance premiums, LifeWise tracks it all in one unified task list."
    >
      <div ref={containerRef} className="relative space-y-6">
        
        {/* Main Panel */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 p-5 sm:p-10 lg:p-14 transition-colors dark:border-slate-800/60 dark:bg-slate-800/90">
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.05] dark:opacity-[0.06]"
              style={{ backgroundImage: "radial-gradient(circle, #f59e0b 1px, transparent 1px)", backgroundSize: "32px 32px" }}
            />
            {/* Glow */}
            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              
              {/* Left text */}
              <div className="flex flex-col justify-center pr-0 lg:pr-12">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-700 w-fit mb-8 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400">
                  <BellRing className="h-4 w-4" />
                  Command Center
                </div>

                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                  Filter by person.
                  <br />
                  <span className="text-amber-600 dark:text-amber-400">Filter by module.</span>
                </h3>

                <p className="mt-6 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm mb-8">
                  View all upcoming tasks across your family, or zoom in on one person&apos;s medicines. LifeWise intelligently organizes everything by urgency.
                </p>

                <div className="grid gap-4 max-w-sm">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center font-bold text-lg dark:bg-rose-500/20 dark:text-rose-400 dark:border-rose-500/30">1</div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Overdue</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">Alerts caregivers immediately</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center font-bold text-lg dark:bg-amber-500/20 dark:text-amber-400 dark:border-amber-500/30">2</div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Today</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">Structured schedule for the day</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold text-lg dark:bg-blue-500/20 dark:text-blue-400 dark:border-blue-500/30">3</div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Upcoming</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">Bills and appointments in advance</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Hub Mockup */}
              <div className="relative mt-12 lg:mt-0 flex items-center justify-center lg:justify-end border-t border-slate-200 lg:border-t-0 lg:border-l lg:pl-12 pt-12 lg:pt-0 dark:border-slate-800/60">
                <motion.div style={{ y }} className="w-full">
                  <div className="relative mx-auto w-full max-w-[340px] rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden dark:border-slate-700/60 dark:bg-slate-900/90 dark:backdrop-blur-xl">
                    
                    {/* Header + Filters */}
                    <div className="px-4 py-4 border-b border-slate-100 bg-slate-50 dark:border-slate-800/60 dark:bg-slate-900/50">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-[14px] font-bold text-slate-900 dark:text-white">Tasks & Reminders</div>
                        <div className="text-[10px] font-bold text-slate-500 bg-slate-200 px-2 py-1 rounded dark:bg-slate-800">4 Active</div>
                      </div>
                      <div className="flex gap-2 overflow-hidden">
                        <div className="text-[11px] font-medium bg-slate-900 text-white px-3 py-1 rounded-full dark:bg-white dark:text-slate-900">All</div>
                        <div className="text-[11px] font-medium bg-white text-slate-600 border border-slate-200 px-3 py-1 rounded-full dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">Papa</div>
                        <div className="text-[11px] font-medium bg-white text-slate-600 border border-slate-200 px-3 py-1 rounded-full dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">Mummy</div>
                      </div>
                    </div>

                    <div className="p-4 space-y-4">
                      {/* Overdue */}
                      <div>
                        <div className="text-[10px] font-bold text-rose-600 uppercase tracking-widest mb-2 flex items-center gap-1 dark:text-rose-400"><Clock className="h-3 w-3" /> Overdue</div>
                        <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 flex gap-3 dark:border-rose-500/30 dark:bg-rose-500/10">
                          <div className="h-4 w-4 rounded-full border-2 border-rose-400 mt-1 shrink-0" />
                          <div>
                            <div className="text-[13px] font-bold text-slate-900 dark:text-white">Amlodipine 5mg</div>
                            <div className="text-[11px] text-slate-600 mt-0.5 dark:text-slate-400">Papa • Missed 8:00 AM</div>
                          </div>
                        </div>
                      </div>

                      {/* Today */}
                      <div>
                        <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-2 flex items-center gap-1 dark:text-amber-400"><Clock className="h-3 w-3" /> Today</div>
                        <div className="space-y-2">
                          <div className="rounded-xl border border-slate-200 bg-white p-3 flex gap-3 shadow-sm dark:border-slate-700/50 dark:bg-slate-800/80">
                            <div className="h-4 w-4 rounded-full border-2 border-slate-300 mt-1 shrink-0 dark:border-slate-600" />
                            <div>
                              <div className="text-[13px] font-bold text-slate-900 dark:text-white">Electricity Bill</div>
                              <div className="text-[11px] text-slate-600 mt-0.5 dark:text-slate-400">Family • Due Today</div>
                            </div>
                          </div>
                          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 flex gap-3 dark:border-emerald-500/30 dark:bg-emerald-500/10">
                            <div className="h-4 w-4 rounded-full bg-emerald-500 text-white grid place-items-center mt-1 shrink-0">
                              <CheckCircle2 className="h-3 w-3" />
                            </div>
                            <div>
                              <div className="text-[13px] font-bold text-slate-900 line-through opacity-70 dark:text-white">Morning Walk</div>
                              <div className="text-[11px] text-slate-600 mt-0.5 opacity-70 dark:text-slate-400">Mummy • Done</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Upcoming */}
                      <div>
                        <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-1 dark:text-blue-400"><CalendarSync className="h-3 w-3" /> Tomorrow</div>
                        <div className="rounded-xl border border-slate-200 bg-white p-3 flex gap-3 shadow-sm opacity-70 dark:border-slate-700/50 dark:bg-slate-800/80">
                          <div className="h-4 w-4 rounded-full border-2 border-slate-300 mt-1 shrink-0 dark:border-slate-600" />
                          <div>
                            <div className="text-[13px] font-bold text-slate-900 dark:text-white">Doctor Appointment</div>
                            <div className="text-[11px] text-slate-600 mt-0.5 dark:text-slate-400">Papa • 10:00 AM</div>
                          </div>
                        </div>
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
