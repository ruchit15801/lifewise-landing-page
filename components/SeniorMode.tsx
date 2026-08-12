"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bell, HeartPulse, Landmark, Users, Settings } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";

const blocks = [
  { icon: Landmark, t: "Money", color: "from-emerald-400 to-teal-500", shadow: "shadow-emerald-500/30" },
  { icon: HeartPulse, t: "Health", color: "from-rose-400 to-pink-500", shadow: "shadow-pink-500/30" },
  { icon: Users, t: "Family", color: "from-blue-500 to-indigo-500", shadow: "shadow-blue-500/30" },
  { icon: Bell, t: "Reminders", color: "from-amber-400 to-orange-500", shadow: "shadow-orange-500/30" }
];

export function SeniorMode() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <SectionShell
      id="senior"
      eyebrow="For Everyone"
      title="Designed for Seniors Too"
      subtitle="Senior members (55+) can view their reminders and health status with a calm, readable interface: large tap targets, high contrast, and clear confirmations."
    >
      <div ref={containerRef} className="relative w-full z-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        
        {/* Parallax Background Gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-visible flex items-center justify-center -z-10">
          <motion.div 
            style={{ y: y1 }}
            className="absolute left-[-10%] top-[10%] h-[35rem] w-[35rem] rounded-full bg-teal-500/10 blur-[120px] dark:bg-teal-500/20"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute right-[-10%] top-[40%] h-[25rem] w-[25rem] rounded-full bg-rose-500/10 blur-[100px] dark:bg-rose-500/20"
          />
        </div>

        <Reveal>
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass group relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 min-h-[480px] border border-white/60 bg-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-2xl flex flex-col dark:border-white/10 dark:bg-white/5"
          >
            {/* SVG Vector Background for Seniors Experience */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg viewBox="0 0 400 600" className="w-full h-full object-cover">
                <motion.circle cx="200" cy="200" r="150" fill="none" stroke="url(#seniorGrad)" strokeWidth="4" strokeDasharray="20 20" animate={{ rotate: 360 }} style={{ transformOrigin: "200px 200px" }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
                <motion.circle cx="200" cy="200" r="100" fill="url(#seniorFill)" opacity="0.5" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} />
                <defs>
                  <linearGradient id="seniorGrad" x1="0" y1="0" x2="400" y2="400">
                    <stop stopColor="#14B8A6"/><stop offset="1" stopColor="#3B82F6"/>
                  </linearGradient>
                  <radialGradient id="seniorFill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(90) scale(100)">
                    <stop stopColor="#14B8A6"/><stop offset="1" stopColor="#14B8A6" stopOpacity="0"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 text-white shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                  <Users className="h-6 w-6" />
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">Senior Member Experience</div>
              </div>
              <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                Parents use the app lightly: view reminders, mark medicines taken, and see health status.
                Adult children manage the full setup via Family Hub.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {blocks.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <motion.div
                      key={b.t}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="group/btn relative overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-5 text-center shadow-md backdrop-blur-xl transition-all hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
                    >
                      <div className="absolute inset-0 bg-white/40 opacity-0 group-hover/btn:opacity-100 transition-opacity dark:bg-white/5" />
                      <div className="relative z-10 flex flex-col items-center">
                        <div className={cn("grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg mb-3", b.color, b.shadow)}>
                          <Icon className="h-7 w-7" />
                        </div>
                        <div className="text-[15px] font-bold text-slate-900 dark:text-white">{b.t}</div>
                        <div className="mt-1.5 inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:bg-white/10 dark:text-slate-300">
                          Large tap target
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
            {/* SVG Vector Background for Settings */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg viewBox="0 0 400 600" className="w-full h-full object-cover">
                <motion.path d="M 50 100 L 350 100 M 50 250 L 350 250 M 50 400 L 350 400" stroke="url(#settingsGrad)" strokeWidth="6" strokeLinecap="round" strokeDasharray="10 20" animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                <motion.rect x="150" y="80" width="100" height="40" rx="20" fill="#8B5CF6" opacity="0.3" animate={{ x: [-20, 20] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} />
                <defs>
                  <linearGradient id="settingsGrad" x1="0" y1="0" x2="400" y2="0">
                    <stop stopColor="#8B5CF6"/><stop offset="1" stopColor="#EC4899"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <Settings className="h-6 w-6" />
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">App Settings from PRD</div>
              </div>
              <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                Essential configurations ensuring accessibility and safety for all users.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  { t: "Languages", d: "English, Hindi, Gujarati, Marathi, Tamil, Telugu, Bengali", color: "from-purple-500/20 to-pink-500/20" },
                  { t: "Biometric lock", d: "Touch ID / Face ID for secure access", color: "from-blue-500/20 to-cyan-500/20" },
                  { t: "Emergency SOS", d: "Shake phone 3× or long-press for SMS + call to emergency contacts with location", color: "from-rose-500/20 to-red-500/20" }
                ].map((x, i) => (
                  <motion.div
                    key={x.t}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.02, x: -5 }}
                    className="group/item relative overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-5 shadow-md backdrop-blur-xl transition-all hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
                  >
                    <div className={cn("absolute -left-10 -top-10 h-24 w-24 rounded-full blur-[20px] transition-opacity opacity-0 group-hover/item:opacity-100 bg-gradient-to-br", x.color)} />
                    <div className="relative z-10">
                      <div className="text-[15px] font-bold text-slate-900 dark:text-white">{x.t}</div>
                      <div className="mt-1.5 text-xs font-medium text-slate-600 leading-relaxed dark:text-slate-300">
                        {x.d}
                      </div>
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
