"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bot, Sparkles, MessageSquare, ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";

export function AISection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <SectionShell
      id="ai"
      eyebrow="WiseAI"
      title="Meet Your Family's Brain"
      subtitle="Stop scrolling through chat history. Ask WiseAI natural questions about your family's health, expenses, and schedule, and get instant answers."
    >
      <div ref={containerRef} className="relative space-y-6">
        
        {/* Main AI Panel */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 lg:p-14 transition-colors dark:border-slate-800/60 dark:bg-slate-800/90">
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
              style={{ backgroundImage: "radial-gradient(circle, #a855f7 1px, transparent 1px)", backgroundSize: "28px 28px" }}
            />
            {/* Glow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none dark:bg-purple-600/10" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[400px]">
              
              {/* Left text */}
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-purple-700 w-fit mb-8 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-400">
                  <Sparkles className="h-3 w-3" />
                  Premium Feature
                </div>

                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                  Chat with your
                  <br />
                  <span className="text-purple-600 dark:text-purple-400">family data.</span>
                </h3>

                <p className="mt-6 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm mb-8">
                  No need to manually search for past bills or health records. Just ask WiseAI in English or Hindi, and it will instantly retrieve and summarize the data for you.
                </p>

                <div className="grid gap-3 max-w-sm">
                  {[
                    "What was Mummy's BP last week?",
                    "How much did we spend on electricity this year?",
                    "Did Rahul take his morning vitamins?"
                  ].map((prompt, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-purple-300 transition-colors dark:bg-slate-900/50 dark:border-slate-800/80 dark:hover:border-purple-500/50"
                    >
                      <MessageSquare className="h-4 w-4 text-purple-500" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{prompt}</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Chat Mockup */}
              <div className="relative h-full flex items-center justify-center lg:justify-end">
                <motion.div style={{ y }} className="w-full max-w-md">
                  <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden dark:border-slate-700/60 dark:bg-slate-900/90 dark:backdrop-blur-xl">
                    {/* Header */}
                    <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 bg-slate-50 dark:border-slate-800/60 dark:bg-slate-900/50">
                      <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 border border-purple-200 grid place-items-center dark:bg-purple-500/20 dark:text-purple-400 dark:border-purple-500/30">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">WiseAI Assistant</div>
                        <div className="text-[10px] text-slate-500 font-medium">Online • Premium</div>
                      </div>
                    </div>

                    {/* Chat Area */}
                    <div className="p-5 space-y-5 bg-slate-50/50 dark:bg-transparent">
                      {/* User message */}
                      <div className="flex justify-end">
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          className="max-w-[85%] rounded-2xl rounded-tr-sm bg-purple-600 px-4 py-3 text-[13px] font-medium text-white shadow-sm"
                          style={{ transformOrigin: "bottom right" }}
                        >
                          What was Papa&apos;s BP trend over the last 3 days?
                        </motion.div>
                      </div>

                      {/* AI Typing / Response */}
                      <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 border border-purple-200 grid place-items-center shrink-0 dark:bg-purple-500/20 dark:text-purple-400 dark:border-purple-500/30">
                          <Bot className="h-4 w-4" />
                        </div>
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 }}
                          className="max-w-[85%] rounded-2xl rounded-tl-sm border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-700/50 dark:bg-slate-800/80"
                          style={{ transformOrigin: "top left" }}
                        >
                          <div className="text-[13px] font-medium text-slate-700 leading-relaxed dark:text-slate-300">
                            Here is Papa&apos;s BP from the last 3 days:
                            <br/><br/>
                            • <strong>Today:</strong> 120/80 (Normal)<br/>
                            • <strong>Yesterday:</strong> 125/82 (Normal)<br/>
                            • <strong>Monday:</strong> 130/85 (Slightly High)
                            <br/><br/>
                            His BP has been stabilizing well. I have also noted that he hasn&apos;t missed any medication this week.
                          </div>
                          
                          {/* Data pills */}
                          <div className="mt-3 flex gap-2">
                            <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-bold text-slate-500 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400">Source: BP Module</span>
                            <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-bold text-slate-500 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400">12 Logs</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Input area */}
                    <div className="px-4 py-3 border-t border-slate-100 bg-white flex items-center gap-3 dark:border-slate-800/60 dark:bg-slate-900/80">
                      <div className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-[13px] font-medium text-slate-400 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-slate-500">
                        Ask about expenses, health...
                      </div>
                      <div className="grid h-9 w-9 place-items-center rounded-full bg-purple-600 text-white shadow-sm shrink-0">
                        <Sparkles className="h-4 w-4" />
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
