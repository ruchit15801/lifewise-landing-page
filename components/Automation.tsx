"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bell, RefreshCw, Shield, Zap } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";

const items = [
  {
    icon: Bell,
    t: "Firebase FCM notifications",
    d: "Push to member + caregivers with Mark Done, Snooze, Skip action buttons.",
    color: "from-amber-400 to-orange-500",
    shadow: "shadow-orange-500/30",
    glow: "bg-orange-500/20"
  },
  {
    icon: RefreshCw,
    t: "Real-time WebSocket sync",
    d: "Socket.io rooms per family for instant sync when any caregiver takes action.",
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-cyan-500/30",
    glow: "bg-cyan-500/20"
  },
  {
    icon: Shield,
    t: "Caregiver permissions",
    d: "View Only / Can Edit / Full Access to control who manages which member.",
    color: "from-indigo-500 to-purple-600",
    shadow: "shadow-purple-500/30",
    glow: "bg-purple-500/20"
  },
  {
    icon: Zap,
    t: "Offline queue",
    d: "View reminders offline, queue actions, sync on reconnection.",
    color: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-500/30",
    glow: "bg-emerald-500/20"
  }
];

export function Automation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <SectionShell
      id="automation"
      eyebrow="Real-Time Sync"
      title="Notifications & Sync That Just Work"
      subtitle="Firebase FCM for push, Socket.io for live caregiver sync, and smart escalation when reminders are missed."
    >
      <div ref={containerRef} className="relative w-full z-10">
        
        {/* Parallax Background Gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-visible flex items-center justify-center -z-10">
          <motion.div 
            style={{ y: y1 }}
            className="absolute left-[5%] top-[10%] h-[35rem] w-[35rem] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/20"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute right-[5%] top-[40%] h-[30rem] w-[30rem] rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-500/20"
          />
        </div>

        {/* Global Network SVG Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20 -z-10 flex justify-center items-center">
          <svg viewBox="0 0 800 600" className="w-[150%] max-w-[1200px] h-auto opacity-50">
            <motion.path d="M 400 300 L 200 150 M 400 300 L 600 150 M 400 300 L 200 450 M 400 300 L 600 450" stroke="url(#netGrad)" strokeWidth="4" strokeDasharray="10 10" animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
            <motion.circle cx="400" cy="300" r="40" fill="url(#netGlow)" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} />
            <motion.circle cx="200" cy="150" r="20" fill="#3B82F6" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
            <motion.circle cx="600" cy="150" r="20" fill="#10B981" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} />
            <motion.circle cx="200" cy="450" r="20" fill="#F59E0B" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }} />
            <motion.circle cx="600" cy="450" r="20" fill="#8B5CF6" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2.8, repeat: Infinity, delay: 1.2 }} />
            <defs>
              <linearGradient id="netGrad" x1="0" y1="0" x2="800" y2="600">
                <stop stopColor="#3B82F6"/><stop offset="0.5" stopColor="#8B5CF6"/><stop offset="1" stopColor="#10B981"/>
              </linearGradient>
              <radialGradient id="netGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 300) rotate(90) scale(40)">
                <stop stopColor="#8B5CF6"/><stop offset="1" stopColor="#8B5CF6" stopOpacity="0"/>
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 mt-10">
          {items.map((x, i) => {
            const Icon = x.icon;
            return (
              <Reveal key={x.t} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass group p-8 sm:p-10 relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition-all hover:bg-white/60 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <div className={cn("absolute -right-10 -top-10 h-40 w-40 rounded-full blur-[40px] transition-opacity duration-700 opacity-0 group-hover:opacity-100", x.glow)} />
                  <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
                    <div className={cn("grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-xl transition-transform group-hover:scale-110", x.color, x.shadow)}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">{x.t}</div>
                      <div className="mt-3 text-[15px] font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                        {x.d}
                      </div>
                    </div>
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
