"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import { FAQ_ITEMS } from "@/lib/faqs";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <SectionShell
      id="faq"
      eyebrow="FAQ"
      title="Real Questions About LifeWise, India's Family App"
      subtitle="Answers about Papa medicine reminders, electricity bills, Hindi support, Premium Rs. 199, Family Hub, and how to contact our India support team."
    >
      <div ref={containerRef} className="relative w-full z-10 mx-auto max-w-4xl">
        
        {/* Parallax Background Gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-visible flex items-center justify-center -z-10">
          <motion.div 
            style={{ y: y1 }}
            className="absolute left-[-20%] top-[10%] h-[35rem] w-[35rem] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/20"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute right-[-20%] top-[40%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[100px] dark:bg-cyan-500/20"
          />
        </div>

        {/* Global Abstract SVG Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20 -z-10 flex justify-center items-center">
          <svg viewBox="0 0 800 600" className="w-[150%] max-w-[1200px] h-auto opacity-50">
            <motion.path d="M 100 100 Q 400 500 700 100" fill="none" stroke="url(#faqGrad)" strokeWidth="6" strokeLinecap="round" animate={{ d: ["M 100 100 Q 400 500 700 100", "M 100 300 Q 400 100 700 300", "M 100 100 Q 400 500 700 100"] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
            <motion.circle cx="400" cy="300" r="150" fill="url(#faqGlow)" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5, repeat: Infinity }} />
            <defs>
              <linearGradient id="faqGrad" x1="0" y1="0" x2="800" y2="0">
                <stop stopColor="#3B82F6"/><stop offset="1" stopColor="#06B6D4"/>
              </linearGradient>
              <radialGradient id="faqGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 300) rotate(90) scale(150)">
                <stop stopColor="#3B82F6"/><stop offset="1" stopColor="#3B82F6" stopOpacity="0"/>
              </radialGradient>
            </defs>
          </svg>
        </div>

        <Reveal>
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="mb-10 group relative overflow-hidden rounded-3xl p-6 sm:p-8 border border-white/60 bg-white/40 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition-all hover:bg-white/60 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-blue-500/20 blur-[30px] transition-opacity opacity-0 group-hover:opacity-100" />
            <div className="relative z-10 flex flex-col sm:flex-row items-start gap-5">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30">
                <MessageCircleQuestion className="h-7 w-7" />
              </div>
              <p
                id="lifewise-definition"
                className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-300 font-medium"
              >
                <strong className="text-slate-900 dark:text-white text-lg block mb-1">LifeWise</strong>
                is the official <strong className="text-blue-600 dark:text-blue-400">Family Operating System</strong> mobile app at{" "}
                <strong className="text-blue-600 dark:text-blue-400">lifewiseee.com</strong>, built for Indian families to manage
                medicine reminders, electricity bills, doctor appointments, insurance,
                documents, and daily routines for every family member in one beautiful app.
              </p>
            </div>
          </motion.div>
        </Reveal>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delay={index * 0.05}>
                <motion.article 
                  whileHover={{ scale: 1.01, x: 5 }}
                  className={cn(
                    "glass overflow-hidden rounded-2xl border transition-all duration-300",
                    isOpen 
                      ? "border-blue-300/60 bg-white/70 shadow-lg dark:border-blue-500/30 dark:bg-blue-900/10" 
                      : "border-white/60 bg-white/40 shadow-sm hover:shadow-md hover:bg-white/50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                  )}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6 focus:outline-none"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <h3 className={cn("text-[17px] font-bold tracking-tight transition-colors", isOpen ? "text-blue-700 dark:text-blue-400" : "text-slate-900 dark:text-white")}>
                      {item.question}
                    </h3>
                    <div className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300", isOpen ? "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400" : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400")}>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                        aria-hidden
                      />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="faq-answer px-5 pb-6 pt-0 text-[15px] font-medium leading-relaxed text-slate-700 dark:px-6 dark:text-slate-300">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
