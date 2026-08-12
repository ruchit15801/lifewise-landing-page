"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bot, Sparkles, Copy, MessageSquare } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import { WISEAI_PROMPTS } from "@/lib/landing-data";

function Bubble({
  from,
  text,
  delay
}: {
  from: "user" | "bot";
  text: string;
  delay: number;
}) {
  const isUser = from === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 300, damping: 25 }}
      className={cn("flex w-full", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-5 py-3.5 text-[15px] font-medium leading-relaxed shadow-lg backdrop-blur-md transition-all hover:scale-[1.02]",
          isUser
            ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-tr-sm shadow-indigo-500/25"
            : "bg-white/80 text-slate-800 border border-white/60 dark:bg-slate-800/80 dark:text-slate-200 dark:border-white/10 rounded-tl-sm shadow-black/5"
        )}
      >
        {text}
      </div>
    </motion.div>
  );
}

export function AISection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <SectionShell
      id="ai"
      eyebrow="WiseAI"
      title="Ask WiseAI Anything About Your Family"
      subtitle="Powered by Claude API with secure family context: reminders, expenses, health readings, and appointments. Document images are never sent to AI."
      className="relative"
    >
      <div ref={containerRef} className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 relative z-10">
        
        {/* Parallax Background Gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-visible flex items-center justify-center -z-10">
          <motion.div 
            style={{ y: y1 }}
            className="absolute left-[-15%] top-[10%] h-[40rem] w-[40rem] rounded-full bg-amber-500/10 blur-[120px] dark:bg-amber-500/20"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute right-[-10%] top-[30%] h-[30rem] w-[30rem] rounded-full bg-rose-500/10 blur-[100px] dark:bg-rose-500/20"
          />
        </div>

        <Reveal>
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass group relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 min-h-[500px] border border-white/60 bg-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
          >
            {/* SVG Vector Background for Neural Network */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <svg viewBox="0 0 400 600" className="w-full h-full object-cover">
                <motion.path d="M 50 100 Q 150 50 200 200 T 350 100" fill="none" stroke="url(#aiLineGrad)" strokeWidth="3" animate={{ d: ["M 50 100 Q 150 50 200 200 T 350 100", "M 50 100 Q 150 350 200 200 T 350 100", "M 50 100 Q 150 50 200 200 T 350 100"] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
                <motion.circle cx="200" cy="200" r="120" fill="url(#aiGlow1)" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
                <motion.circle cx="350" cy="100" r="6" fill="#F59E0B" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.circle cx="50" cy="100" r="6" fill="#EF4444" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                <defs>
                  <radialGradient id="aiGlow1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(90) scale(120)">
                    <stop stopColor="#F59E0B"/><stop offset="1" stopColor="#F59E0B" stopOpacity="0"/>
                  </radialGradient>
                  <linearGradient id="aiLineGrad" x1="0" y1="0" x2="400" y2="0">
                    <stop stopColor="#F59E0B"/><stop offset="1" stopColor="#EF4444"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                    <Bot className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">WiseAI Assistant</div>
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Premium feature • Family-aware
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-4 py-2 text-xs font-bold text-orange-700 shadow-sm backdrop-blur-md dark:border-orange-500/30 dark:bg-orange-500/20 dark:text-orange-300">
                  <Sparkles className="h-4 w-4" />
                  Claude API
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-5">
                <Bubble
                  from="user"
                  text="What reminders does Papa have this week?"
                  delay={0.1}
                />
                <Bubble
                  from="bot"
                  text="Papa has 12 reminders: 7 medicine (daily 8 AM & 8 PM), 1 doctor appointment Friday 10 AM at Sunshine Hospital, and 4 bill due dates."
                  delay={0.25}
                />
                <Bubble
                  from="user"
                  text="How much have we spent on food this month?"
                  delay={0.4}
                />
                <Bubble
                  from="bot"
                  text="Family food spending this month: ₹8,450 across all members. Top category: groceries (62%)."
                  delay={0.55}
                />
              </div>
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass group relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 min-h-[500px] border border-white/60 bg-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-2xl flex flex-col dark:border-white/10 dark:bg-white/5"
          >
            {/* SVG Vector Background for Chat Prompts */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg viewBox="0 0 400 600" className="w-full h-full object-cover">
                <motion.rect x="50" y="50" width="300" height="40" rx="20" fill="url(#promptGrad)" opacity="0.3" animate={{ x: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} />
                <motion.rect x="100" y="150" width="250" height="40" rx="20" fill="url(#promptGrad)" opacity="0.2" animate={{ x: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} />
                <motion.rect x="50" y="250" width="280" height="40" rx="20" fill="url(#promptGrad)" opacity="0.4" animate={{ x: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity }} />
                <defs>
                  <linearGradient id="promptGrad" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#F59E0B"/><stop offset="1" stopColor="#EF4444"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-400 to-red-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.3)]">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">Example Prompts</div>
              </div>
              <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                Tap to copy. WiseAI understands Hindi, English, and Hinglish natively.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {WISEAI_PROMPTS.map((p, i) => (
                  <motion.button
                    key={p}
                    type="button"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.02, x: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="group/prompt relative overflow-hidden text-left rounded-2xl border border-white/80 bg-white/70 px-5 py-4 text-[15px] font-bold text-slate-900 shadow-md backdrop-blur-xl transition-all hover:bg-white hover:shadow-xl hover:border-amber-200 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-amber-500/30 dark:hover:bg-white/20"
                    onClick={() => {
                      void navigator.clipboard?.writeText(p);
                    }}
                  >
                    <div className="absolute -right-10 -bottom-10 h-24 w-24 rounded-full bg-amber-500/20 blur-[20px] transition-opacity opacity-0 group-hover/prompt:opacity-100" />
                    <div className="relative z-10 flex items-center justify-between gap-4">
                      <span className="leading-snug">{p}</span>
                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600 transition-colors group-hover/prompt:bg-amber-100 group-hover/prompt:text-amber-700 dark:bg-white/10 dark:text-slate-300 dark:group-hover/prompt:bg-amber-500/20 dark:group-hover/prompt:text-amber-300">
                        <Copy className="h-3.5 w-3.5" />
                        Copy
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
