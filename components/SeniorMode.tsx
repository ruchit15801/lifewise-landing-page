"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, ScanFace, Languages, Fingerprint, HeartPulse, Accessibility } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import { SENIOR_FEATURES } from "@/lib/landing-data";

export function SeniorMode() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SectionShell
      id="senior-mode"
      eyebrow="Accessibility"
      title="Built for Seniors."
      subtitle="No complex menus, no tiny text. LifeWise adapts to the elderly, making it the easiest app they'll ever use."
    >
      <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition-colors dark:border-slate-800/60 dark:bg-slate-800/90">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left: Feature Tabs */}
          <div className="flex flex-col p-5 sm:p-10 lg:p-14 border-b border-slate-200 lg:border-b-0 lg:border-r dark:border-slate-800/60">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 w-fit mb-8 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-400">
              <Accessibility className="h-4 w-4" />
              Senior Mode
            </div>

            <h3 className="mb-8 text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.2]">
              Familiar interfaces.
              <br />
              <span className="text-orange-600 dark:text-orange-400">Zero learning curve.</span>
            </h3>

            <div className="flex flex-col gap-3">
              {SENIOR_FEATURES.map((feature, i) => {
                const isActive = activeTab === i;
                return (
                  <button
                    key={feature.title}
                    onClick={() => setActiveTab(i)}
                    className={cn(
                      "flex items-start gap-4 rounded-2xl p-4 text-left transition-all",
                      isActive 
                        ? "bg-white shadow-md border border-slate-200 dark:bg-slate-900/80 dark:border-slate-700/60 dark:shadow-xl" 
                        : "hover:bg-slate-100 border border-transparent dark:hover:bg-slate-900/40"
                    )}
                  >
                    <div className={cn(
                      "shrink-0 grid h-12 w-12 place-items-center rounded-xl transition-colors",
                      isActive 
                        ? "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400" 
                        : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                    )}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className={cn(
                        "text-[15px] font-bold mb-1 transition-colors",
                        isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400"
                      )}>{feature.title}</h4>
                      <p className={cn(
                        "text-sm font-medium leading-relaxed transition-colors",
                        isActive ? "text-slate-600 dark:text-slate-300" : "text-slate-500 dark:text-slate-500"
                      )}>{feature.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Phone Mockup showcasing the active feature */}
          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden p-5 sm:min-h-[500px] sm:p-10 lg:p-14">
            {/* Background Glow based on active tab */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[100px] pointer-events-none dark:bg-orange-500/15 transition-all duration-700" />
            
            <div className="relative mx-auto w-full max-w-[280px] aspect-[9/19] rounded-[3rem] border-[8px] border-slate-200 bg-white shadow-2xl overflow-hidden dark:border-slate-800 dark:bg-slate-950">
              {/* Dynamic UI based on active tab */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col pt-12 p-6"
                >
                  {activeTab === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }} 
                        transition={{ duration: 2 }}
                        className="h-24 w-24 rounded-full bg-orange-100 text-orange-600 grid place-items-center dark:bg-orange-500/20 dark:text-orange-400"
                      >
                        <Volume2 className="h-10 w-10" />
                      </motion.div>
                      <div>
                        <div className="text-2xl font-black text-slate-900 dark:text-white mb-2">Papa, it&apos;s 8 PM.</div>
                        <div className="text-lg font-bold text-slate-600 dark:text-slate-400">Time for Amlodipine.</div>
                      </div>
                      <div className="w-full space-y-3 mt-auto">
                        <div className="w-full rounded-2xl bg-emerald-700 py-4 text-center text-lg font-bold text-white shadow-lg">I took it</div>
                        <div className="w-full rounded-2xl bg-slate-100 py-4 text-center text-lg font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">Snooze</div>
                      </div>
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
                      <div className="relative">
                        <ScanFace className="h-24 w-24 text-slate-300 dark:text-slate-600" />
                        <motion.div 
                          animate={{ top: ["0%", "100%", "0%"] }} 
                          transition={{ duration: 3, ease: "linear" }}
                          className="absolute left-0 w-full h-1 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" 
                        />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-slate-900 dark:text-white">Face ID</div>
                        <div className="text-sm font-medium text-slate-500 mt-2 dark:text-slate-400">Logging you securely without passwords.</div>
                      </div>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <Languages className="h-16 w-16 text-orange-500 mb-8" />
                      <div className="w-full space-y-4">
                        <div className="w-full rounded-2xl border-2 border-orange-500 bg-orange-50 py-5 text-xl font-bold text-orange-700 dark:bg-orange-500/20 dark:text-orange-400">हिन्दी</div>
                        <div className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 py-5 text-xl font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">English</div>
                        <div className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 py-5 text-xl font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">मराठी</div>
                      </div>
                    </div>
                  )}

                  {activeTab === 3 && (
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <div className="relative mb-6 grid h-28 w-28 place-items-center">
                        <motion.span
                          aria-hidden
                          className="absolute inset-0 rounded-full bg-rose-500/25"
                          animate={{ scale: [1, 1.55, 1], opacity: [0.55, 0, 0.55] }}
                          transition={{ duration: 1.8, ease: "easeOut" }}
                        />
                        <motion.span
                          aria-hidden
                          className="absolute inset-2 rounded-full bg-rose-500/20"
                          animate={{ scale: [1, 1.35, 1], opacity: [0.7, 0.1, 0.7] }}
                          transition={{ duration: 1.8, ease: "easeOut", delay: 0.25 }}
                        />
                        <motion.div
                          animate={{ scale: [1, 1.08, 1] }}
                          transition={{ duration: 1.8, ease: "easeInOut" }}
                          className="relative grid h-20 w-20 place-items-center rounded-full bg-rose-500 text-white shadow-lg shadow-rose-500/40"
                        >
                          <HeartPulse className="h-9 w-9" />
                        </motion.div>
                      </div>
                      <div className="text-xl font-black text-slate-900 dark:text-white">SOS sent</div>
                      <div className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                        Calling Rahul + sharing location
                      </div>
                      <div className="mt-8 w-full space-y-2.5">
                        {[
                          { label: "Rahul (Son)", status: "Calling…" },
                          { label: "Priya (Caregiver)", status: "SMS sent" }
                        ].map((row, i) => (
                          <motion.div
                            key={row.label}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.18, duration: 0.35 }}
                            className="flex items-center justify-between rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 dark:border-rose-500/20 dark:bg-rose-500/10"
                          >
                            <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
                              {row.label}
                            </span>
                            <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                              {row.status}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
