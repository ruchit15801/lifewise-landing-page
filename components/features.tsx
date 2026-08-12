"use client";

import { useRef } from "react";
import { Bot, Camera, Mic, Star, Users, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import { HOME_QUICK_ACTIONS } from "@/lib/landing-data";

const iconMap = {
  mic: Mic,
  camera: Camera,
  ai: Bot
} as const;

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <SectionShell
      id="features"
      eyebrow="Core Features"
      title="Your Family Command Center"
      subtitle="Family Hub is the hero feature. Every reminder, bill, health record, and document flows through it. Plus three instant actions from your Home screen."
    >
      <div ref={containerRef} className="relative w-full z-10">
        {/* Parallax Background Gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-visible flex items-center justify-center -z-10">
          <motion.div 
            style={{ y: y1 }}
            className="absolute left-[-15%] top-[10%] h-[35rem] w-[35rem] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-500/20"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute right-[-10%] top-[40%] h-[25rem] w-[25rem] rounded-full bg-emerald-500/10 blur-[100px] dark:bg-emerald-500/20"
          />
        </div>

        <Reveal>
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass group relative overflow-hidden rounded-[2.5rem] p-8 sm:p-12 min-h-[340px] border border-white/60 bg-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
          >
            {/* Parallax SVG Background for Family Hub */}
            <motion.div style={{ y: y2 }} className="absolute inset-0 pointer-events-none opacity-40 sm:opacity-100 flex justify-end">
              <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[150%] sm:w-[90%] h-full max-w-[600px] translate-x-[10%] object-cover object-right">
                <circle cx="300" cy="200" r="180" fill="url(#famGrad1)" />
                <motion.circle cx="300" cy="200" r="140" stroke="url(#famGrad2)" strokeWidth="1.5" strokeDasharray="4 8" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "300px 200px" }} />
                <motion.circle cx="300" cy="200" r="100" stroke="url(#famGrad3)" strokeWidth="1.5" animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "300px 200px" }} />
                
                {/* Floating Connecting Nodes */}
                <motion.circle cx="450" cy="100" r="8" fill="#6366F1" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5], y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} />
                <motion.circle cx="150" cy="250" r="12" fill="#10B981" animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5], y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
                <motion.circle cx="350" cy="350" r="10" fill="#F59E0B" animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5], x: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }} />
                <motion.path d="M 450 100 L 300 200 L 150 250 M 300 200 L 350 350" stroke="currentColor" className="text-slate-400/20 dark:text-white/10" strokeWidth="1.5" strokeDasharray="4 4" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />

                <defs>
                  <radialGradient id="famGrad1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 200) rotate(90) scale(180)">
                    <stop stopColor="#6366F1" stopOpacity="0.15"/><stop offset="1" stopColor="#6366F1" stopOpacity="0"/>
                  </radialGradient>
                  <linearGradient id="famGrad2" x1="120" y1="20" x2="480" y2="380" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10B981" stopOpacity="0.6"/><stop offset="1" stopColor="#6366F1" stopOpacity="0.1"/>
                  </linearGradient>
                  <linearGradient id="famGrad3" x1="200" y1="100" x2="400" y2="300" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F59E0B" stopOpacity="0.7"/><stop offset="1" stopColor="#F59E0B" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <div className="relative z-10 flex flex-col justify-between h-full max-w-xl">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-emerald-500 text-white shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                    <Users className="h-7 w-7" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-indigo-600 border border-indigo-100 shadow-sm backdrop-blur-md dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/30">
                    <Star className="h-3.5 w-3.5 fill-indigo-600 dark:fill-indigo-300" />
                    Main Feature
                  </span>
                </div>
                
                <h3 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Family Hub
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                  Add Papa, Mummy, children, each with their own profile card and
                  up to 20 modules: medicine, bills, insurance, documents, SOS,
                  study schedules, and more. Caregivers stay connected in real time.
                </p>
              </div>

              <a
                href="#family"
                className="mt-8 inline-flex w-max items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all hover:bg-slate-800 hover:gap-3 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                See Family Hub
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {HOME_QUICK_ACTIONS.map((it, idx) => {
            const Icon = iconMap[it.icon];
            
            // Unique SaaS SVG Animation for each action
            const VectorGraphic = () => {
              if (it.icon === "mic") return (
                <svg viewBox="0 0 200 200" className="absolute right-0 bottom-0 w-56 h-56 translate-x-[15%] translate-y-[15%] opacity-50 pointer-events-none">
                  <motion.path d="M 0 100 Q 50 20 100 100 T 200 100" fill="none" stroke="url(#micGrad)" strokeWidth="8" strokeLinecap="round" animate={{ d: ["M 0 100 Q 50 20 100 100 T 200 100", "M 0 100 Q 50 180 100 100 T 200 100", "M 0 100 Q 50 20 100 100 T 200 100"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                  <motion.path d="M 0 100 Q 50 60 100 100 T 200 100" fill="none" stroke="currentColor" className="text-indigo-400/30" strokeWidth="4" strokeLinecap="round" animate={{ d: ["M 0 100 Q 50 60 100 100 T 200 100", "M 0 100 Q 50 140 100 100 T 200 100", "M 0 100 Q 50 60 100 100 T 200 100"] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
                  <defs><linearGradient id="micGrad" x1="0" y1="0" x2="200" y2="0"><stop stopColor="#6366F1"/><stop offset="1" stopColor="#D946EF"/></linearGradient></defs>
                </svg>
              );
              if (it.icon === "camera") return (
                <svg viewBox="0 0 200 200" className="absolute right-0 bottom-0 w-56 h-56 translate-x-[10%] translate-y-[10%] opacity-50 pointer-events-none">
                  <motion.rect x="40" y="40" width="120" height="120" rx="30" fill="none" stroke="url(#camGrad)" strokeWidth="4" strokeDasharray="12 12" animate={{ rotate: 360 }} style={{ transformOrigin: "100px 100px" }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
                  <motion.circle cx="100" cy="100" r="30" fill="url(#camGrad)" opacity="0.2" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                  <motion.circle cx="100" cy="100" r="15" fill="currentColor" className="text-emerald-500" />
                  <defs><linearGradient id="camGrad" x1="0" y1="0" x2="200" y2="200"><stop stopColor="#10B981"/><stop offset="1" stopColor="#06B6D4"/></linearGradient></defs>
                </svg>
              );
              return (
                <svg viewBox="0 0 200 200" className="absolute right-0 bottom-0 w-64 h-64 translate-x-[20%] translate-y-[10%] opacity-50 pointer-events-none">
                  <motion.circle cx="100" cy="100" r="60" fill="none" stroke="url(#aiGrad)" strokeWidth="3" animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                  <motion.circle cx="100" cy="100" r="40" fill="none" stroke="url(#aiGrad)" strokeWidth="3" animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }} transition={{ duration: 4, repeat: Infinity, delay: 0.8, ease: "easeInOut" }} />
                  <motion.path d="M 100 20 L 100 180 M 20 100 L 180 100" stroke="currentColor" className="text-amber-500/20" strokeWidth="2" strokeDasharray="4 8" animate={{ rotate: 90 }} style={{ transformOrigin: "100px 100px" }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                  <defs><linearGradient id="aiGrad" x1="0" y1="0" x2="200" y2="200"><stop stopColor="#F59E0B"/><stop offset="1" stopColor="#EF4444"/></linearGradient></defs>
                </svg>
              )
            };

            return (
              <Reveal key={it.title} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass group relative h-full overflow-hidden rounded-[2.2rem] p-8 sm:p-9 border border-white/60 bg-white/40 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all hover:bg-white/60 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  {/* Subtle Gradient Glow inside the card */}
                  <div className={cn(
                    "absolute -left-10 -top-10 h-40 w-40 rounded-full blur-[40px] transition-opacity duration-700 opacity-0 group-hover:opacity-100",
                    it.icon === "mic" ? "bg-indigo-500/20" : it.icon === "camera" ? "bg-emerald-500/20" : "bg-amber-500/20"
                  )} />
                  
                  <VectorGraphic />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={cn(
                      "inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-xl mb-7",
                      it.icon === "mic" ? "bg-gradient-to-br from-indigo-500 to-purple-500 shadow-indigo-500/30" : 
                      it.icon === "camera" ? "bg-gradient-to-br from-emerald-400 to-teal-500 shadow-emerald-500/30" : 
                      "bg-gradient-to-br from-amber-400 to-orange-500 shadow-amber-500/30"
                    )}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                      {it.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 flex-1 font-medium">
                      {it.desc}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
