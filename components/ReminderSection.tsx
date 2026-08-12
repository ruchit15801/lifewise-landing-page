"use client";

import { useRef } from "react";
import { Mic, Camera, Bot, Clock, CheckCircle2, AlertCircle, Calendar, Filter } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";

const cards = [
  {
    icon: Mic,
    title: "Voice Reminder",
    example: "\"Papa ko kal subah 8 baje medicine leni hai\"",
    color: "from-indigo-400 to-purple-500",
    shadow: "shadow-indigo-500/30",
    glow: "bg-indigo-500/20"
  },
  {
    icon: Camera,
    title: "Scan Bill",
    example: "OCR extracts bill name, amount & due date",
    color: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-500/30",
    glow: "bg-emerald-500/20"
  },
  {
    icon: Bot,
    title: "WiseAI Chat",
    example: "\"What reminders does Papa have this week?\"",
    color: "from-amber-400 to-orange-500",
    shadow: "shadow-orange-500/30",
    glow: "bg-orange-500/20"
  }
];

export function ReminderSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <SectionShell
      id="reminders"
      eyebrow="Reminders Tab"
      title="Your Reminder Command Center"
      subtitle="All reminders across all family members in one unified view. Filter by Today, Upcoming, Overdue, or per member."
    >
      <div ref={containerRef} className="relative w-full z-10">
        
        {/* Parallax Background Gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-visible flex items-center justify-center -z-10">
          <motion.div 
            style={{ y: y1 }}
            className="absolute left-[10%] top-[20%] h-[35rem] w-[35rem] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-500/20"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute right-[0%] top-[60%] h-[25rem] w-[25rem] rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-500/20"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            
            const CardGraphic = () => {
              if (idx === 0) return (
                <svg viewBox="0 0 200 200" className="absolute -right-10 -bottom-10 w-48 h-48 opacity-20 pointer-events-none">
                  <motion.circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" className="text-indigo-500" strokeWidth="4" animate={{ scale: [1, 2], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
                  <motion.circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" className="text-indigo-500" strokeWidth="4" animate={{ scale: [1, 2], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                </svg>
              );
              if (idx === 1) return (
                <svg viewBox="0 0 200 200" className="absolute -right-10 -bottom-10 w-48 h-48 opacity-20 pointer-events-none">
                  <motion.rect x="50" y="50" width="100" height="100" rx="16" fill="none" stroke="currentColor" className="text-emerald-500" strokeWidth="4" strokeDasharray="10 10" animate={{ rotate: -90 }} style={{ transformOrigin: "100px 100px" }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
                </svg>
              );
              return (
                <svg viewBox="0 0 200 200" className="absolute -right-10 -bottom-10 w-48 h-48 opacity-20 pointer-events-none">
                  <motion.path d="M 50 100 L 150 100 M 100 50 L 100 150" stroke="currentColor" className="text-amber-500" strokeWidth="4" animate={{ rotate: 180 }} style={{ transformOrigin: "100px 100px" }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
                  <motion.circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" className="text-amber-500" strokeWidth="4" strokeDasharray="8 8" animate={{ rotate: -180 }} style={{ transformOrigin: "100px 100px" }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
                </svg>
              );
            };

            return (
              <Reveal key={c.title} delay={idx * 0.1}>
                <motion.div 
                  whileHover={{ y: -6, scale: 1.02 }} 
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass group relative h-full overflow-hidden rounded-[2.2rem] p-8 border border-white/60 bg-white/40 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all hover:bg-white/60 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <div className={cn("absolute -left-10 -top-10 h-32 w-32 rounded-full blur-[30px] transition-opacity duration-700 opacity-0 group-hover:opacity-100", c.glow)} />
                  <CardGraphic />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={cn("grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br text-white shadow-lg", c.color, c.shadow)}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="text-xl font-bold text-slate-900 dark:text-white">{c.title}</div>
                    </div>

                    <div className="flex-1 rounded-2xl border border-white/60 bg-white/70 p-5 text-sm font-medium text-slate-700 shadow-inner backdrop-blur-xl dark:border-white/10 dark:bg-black/20 dark:text-slate-300">
                      {c.example}
                    </div>

                    <div className="mt-6 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      <span>Home screen shortcut</span>
                      <span className="rounded-full bg-indigo-500/10 px-2.5 py-1 text-indigo-600 border border-indigo-500/20">Instant</span>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <motion.div 
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass p-8 sm:p-10 relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-2xl min-h-[400px] flex flex-col dark:border-white/10 dark:bg-white/5"
            >
              {/* Lifecycle SVG Graphic */}
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <svg viewBox="0 0 400 400" className="w-full h-full object-cover">
                  <motion.path d="M 50 100 C 150 100, 250 200, 350 200" fill="none" stroke="currentColor" className="text-purple-500" strokeWidth="3" strokeDasharray="6 6" animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                  <motion.circle cx="50" cy="100" r="12" fill="#A855F7" />
                  <motion.circle cx="350" cy="200" r="16" fill="#3B82F6" animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                  <motion.path d="M 50 250 C 150 250, 250 300, 350 300" fill="none" stroke="currentColor" className="text-emerald-500" strokeWidth="3" strokeDasharray="6 6" animate={{ strokeDashoffset: [100, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                </svg>
              </div>

              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">Reminder Lifecycle</div>
                </div>
                <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                  FCM push at scheduled time → Mark Done / Snooze / Skip → caregivers sync in real time.
                </p>
                <div className="mt-8 flex flex-col gap-4">
                  {[
                    { t: "Papa ki BP Tablet, 8:00 PM. Tap to mark as taken.", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
                    { t: "Electricity bill due in 3 days. Amount approx ₹2,400", icon: Calendar, color: "text-blue-600 bg-blue-50 border-blue-200" },
                    { t: "MISSED: Papa ki medicine nahi li abhi tak. 30 min ho gaye.", icon: AlertCircle, color: "text-rose-600 bg-rose-50 border-rose-200" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className={cn("flex items-center gap-3 rounded-2xl border px-5 py-4 text-sm font-bold shadow-sm backdrop-blur-xl", item.color)}
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      <span className="leading-snug">{item.t}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.div 
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass p-8 sm:p-10 relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-2xl min-h-[400px] flex flex-col dark:border-white/10 dark:bg-white/5"
            >
              {/* Filter SVG Graphic */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg viewBox="0 0 400 400" className="w-full h-full object-cover">
                  <motion.polygon points="200,50 350,150 200,250 50,150" fill="none" stroke="currentColor" className="text-blue-500" strokeWidth="4" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} />
                  <motion.polygon points="200,100 350,200 200,300 50,200" fill="none" stroke="currentColor" className="text-cyan-500" strokeWidth="4" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.2 }} />
                  <motion.polygon points="200,150 350,250 200,350 50,250" fill="none" stroke="currentColor" className="text-indigo-500" strokeWidth="4" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.4 }} />
                </svg>
              </div>

              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    <Filter className="h-6 w-6" />
                  </div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">Filter & Manage</div>
                </div>
                <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                  All • Today • Upcoming • Overdue • Completed, plus per-member filters for Papa, Mummy, and more.
                </p>
                
                <div className="mt-8 grid gap-4">
                  {[
                    { t: "Mark Done", d: "First-write wins. All caregivers see COMPLETED." },
                    { t: "Snooze", d: "Reschedule notification in X minutes." },
                    { t: "Missed alerts", d: "Red badge on Home + alert to caregivers after 30 min." }
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
                      <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-cyan-500/10 blur-[20px] transition-opacity opacity-0 group-hover/item:opacity-100" />
                      <div className="relative z-10">
                        <div className="text-sm font-bold text-slate-900 dark:text-white">{x.t}</div>
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
      </div>
    </SectionShell>
  );
}
