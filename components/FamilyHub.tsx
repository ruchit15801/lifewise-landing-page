"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, ShieldCheck, CheckCircle2, Bell } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { MODULES } from "@/lib/landing-data";

export function FamilyHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <SectionShell
      id="family"
      eyebrow="The Core Experience"
      title="One Hub for the Entire Family"
      subtitle="Stop juggling multiple apps. LifeWise brings your whole family's health, tasks, and bills into one real-time dashboard."
    >
      <div ref={containerRef} className="relative space-y-6">
        
        {/* Main Hub Showcase */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 dark:bg-[#0a0a12] dark:border-slate-800/60 p-8 sm:p-12 lg:p-14 transition-colors duration-500">
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)", backgroundSize: "32px 32px" }}
            />
            
            {/* Glow */}
            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none dark:bg-indigo-600/10" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              
              {/* Left text */}
              <div className="flex flex-col justify-center pr-0 lg:pr-12">
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo-700 w-fit mb-8 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <div className="h-2 w-2 rounded-full bg-indigo-500" />
                  Core Feature
                </div>

                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                  Add every family
                  <br />
                  member once.
                  <br />
                  <span className="text-indigo-600 dark:text-indigo-400">Manage forever.</span>
                </h3>

                <p className="mt-6 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm">
                  Papa, Mummy, children — each with their own profile card and up to 20 modules. Caregivers stay connected in real time via WebSocket sync.
                </p>

                <div className="mt-10 flex items-center gap-6">
                  <div className="flex gap-4">
                    {[
                      { v: "12", l: "Reminders Today" },
                      { v: "8", l: "Bills Tracked" },
                      { v: "91%", l: "Compliance" }
                    ].map((stat) => (
                      <div key={stat.l} className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:border-indigo-300 dark:border-slate-800/60 dark:bg-slate-900/50 dark:hover:border-indigo-500/30">
                        <div className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {stat.v}
                        </div>
                        <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mt-1">
                          {stat.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Hub Mockup */}
              <div className="relative mt-12 lg:mt-0 flex items-center justify-center lg:justify-end border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800/60 lg:pl-12 pt-12 lg:pt-0">
                <motion.div style={{ y }} className="w-full">
                  <div className="relative mx-auto w-full max-w-[340px] rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden dark:border-slate-700/60 dark:bg-slate-900/90 dark:backdrop-blur-xl">
                    
                    {/* Top bar */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800/60">
                      <div className="flex gap-1">
                        <div className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                        <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <div className="text-[11px] font-bold tracking-widest text-slate-400 dark:text-slate-500">FAMILY HUB</div>
                      <Bell className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                    </div>

                    <div className="p-4 space-y-3">
                      {/* Person 1 */}
                      <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-700/50 dark:bg-slate-800/50">
                        <div className="h-10 w-10 shrink-0 rounded-full bg-blue-500/20 text-blue-500 border border-blue-500/30 flex items-center justify-center font-bold text-sm">P</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[13px] font-bold text-slate-900 dark:text-white">Papa</span>
                            <span className="text-[10px] text-slate-500 font-medium">67y</span>
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Medicine due • 8 PM</div>
                        </div>
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      </div>

                      {/* Person 2 */}
                      <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-700/50 dark:bg-slate-800/50">
                        <div className="h-10 w-10 shrink-0 rounded-full bg-rose-500/20 text-rose-500 border border-rose-500/30 flex items-center justify-center font-bold text-sm">M</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[13px] font-bold text-slate-900 dark:text-white">Mummy</span>
                            <span className="text-[10px] text-slate-500 font-medium">62y</span>
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Appointment • Friday</div>
                        </div>
                        <div className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                      </div>

                      {/* Person 3 */}
                      <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-700/50 dark:bg-slate-800/50">
                        <div className="h-10 w-10 shrink-0 rounded-full bg-amber-500/20 text-amber-500 border border-amber-500/30 flex items-center justify-center font-bold text-sm">R</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[13px] font-bold text-slate-900 dark:text-white">Rahul</span>
                            <span className="text-[10px] text-slate-500 font-medium">28y</span>
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">School fee • 15th</div>
                        </div>
                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      </div>
                    </div>

                    {/* Bottom actions */}
                    <div className="grid grid-cols-3 border-t border-slate-100 bg-slate-50/50 dark:border-slate-800/60 dark:bg-slate-900/50">
                      {[
                        { icon: CheckCircle2, l: "Done", c: "text-emerald-500" },
                        { icon: Bell, l: "Remind", c: "text-amber-500" },
                        { icon: ShieldCheck, l: "Secure", c: "text-blue-500" }
                      ].map((x) => (
                        <div key={x.l} className="flex flex-col items-center justify-center py-3 border-r border-slate-100 dark:border-slate-800/60 last:border-0">
                          <x.icon className={`h-4 w-4 ${x.c}`} />
                          <span className="text-[9px] font-bold text-slate-500 mt-1 uppercase tracking-wider">{x.l}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sync bubble */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-emerald-200 bg-white px-4 py-1.5 shadow-lg dark:border-emerald-500/20 dark:bg-emerald-950/80 dark:backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 tracking-wide">Real-time sync • All caregivers</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Feature Highlights Below Hub */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800/60 dark:bg-[#0a0a12] transition-colors">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 grid place-items-center mb-5 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20">
                <FileText className="h-6 w-6" />
              </div>
              <h4 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2">20 Modules per member</h4>
              <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                Select during setup - Each generates its own reminders
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {MODULES.slice(0, 10).map((m) => (
                  <div
                    key={m}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-bold text-slate-600 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400"
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 h-full flex flex-col justify-between dark:border-slate-800/60 dark:bg-[#0a0a12] transition-colors">
              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 grid place-items-center mb-5 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h4 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2">Connected Caregivers</h4>
                <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                  Spouse, siblings, or relatives can view, edit, or get full access. Mark reminders done and everyone syncs instantly.
                </p>
              </div>
              
              <div className="mt-6 flex -space-x-3">
                {[
                  "https://i.pravatar.cc/100?img=68",
                  "https://i.pravatar.cc/100?img=47",
                  "https://i.pravatar.cc/100?img=33"
                ].map((src, i) => (
                  <img key={i} src={src} alt="" className="h-10 w-10 rounded-full border-2 border-white object-cover dark:border-slate-900" />
                ))}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-[10px] font-bold text-slate-600 dark:border-slate-900 dark:bg-slate-800 dark:text-slate-400">
                  +2
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
