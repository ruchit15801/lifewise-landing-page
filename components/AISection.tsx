"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";
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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn("flex", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-premium border backdrop-blur-xl",
          isUser
            ? "bg-gradient-to-br from-primary to-indigo-600 text-white border-white/10"
            : "bg-white/60 text-slate-900 border-slate-200/70 dark:bg-white/5 dark:text-white dark:border-white/10"
        )}
      >
        {text}
      </div>
    </motion.div>
  );
}

export function AISection() {
  return (
    <SectionShell
      id="ai"
      eyebrow="WiseAI"
      title="Ask WiseAI Anything About Your Family"
      subtitle="Powered by Claude API with secure family context — reminders, expenses, health readings, and appointments. Document images are never sent to AI."
      className="relative"
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        <Reveal>
          <div className="glass p-6 sm:p-8 relative overflow-hidden">
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-accent/12 blur-3xl" />
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-premium">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-semibold">WiseAI Assistant</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  Premium feature • Family-aware
                </div>
              </div>
              <div className="ml-auto inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/60 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                <Sparkles className="h-4 w-4 text-primary" />
                Claude API
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Bubble
                from="user"
                text="What reminders does Papa have this week?"
                delay={0.05}
              />
              <Bubble
                from="bot"
                text="Papa has 12 reminders: 7 medicine (daily 8 AM & 8 PM), 1 doctor appointment Friday 10 AM at Sunshine Hospital, and 4 bill due dates."
                delay={0.12}
              />
              <Bubble
                from="user"
                text="How much have we spent on food this month?"
                delay={0.18}
              />
              <Bubble
                from="bot"
                text="Family food spending this month: Rs. 8,450 across all members. Top category: groceries (62%)."
                delay={0.24}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="glass p-6 sm:p-8">
            <div className="text-sm font-semibold">Example prompts from PRD</div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Tap to copy — WiseAI understands Hindi and English.
            </p>

            <div className="mt-6 grid gap-3">
              {WISEAI_PROMPTS.map((p, i) => (
                <motion.button
                  key={p}
                  type="button"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.99 }}
                  className={cn(
                    "text-left rounded-2xl border border-slate-200/70 bg-white/50 px-4 py-4 text-sm font-semibold text-slate-900 shadow-premium backdrop-blur-xl transition",
                    "dark:border-white/10 dark:bg-white/5 dark:text-white"
                  )}
                  onClick={() => {
                    void navigator.clipboard?.writeText(p);
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span>{p}</span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Copy
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
