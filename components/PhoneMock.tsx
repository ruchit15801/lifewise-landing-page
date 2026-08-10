"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/components/cn";

export function PhoneMock({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const [enableTilt, setEnableTilt] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    setEnableTilt(fine && wide);
  }, []);

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[24rem] sm:max-w-[26rem] lg:max-w-[28rem]",
        className
      )}
    >
      <div className="absolute -inset-14 -z-10 blur-3xl pointer-events-none">
        <div className="absolute left-6 top-10 h-56 w-56 rounded-full bg-primary/25" />
        <div className="absolute right-6 bottom-10 h-56 w-56 rounded-full bg-accent/18" />
      </div>

      <motion.div
        className="relative"
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <div className="relative aspect-[78/163.4] rounded-[3.05rem] bg-black p-[2px] shadow-lift">
          <div className="relative h-full rounded-[2.92rem] bg-black p-[6px]">
            <div className="relative h-full overflow-hidden rounded-[2.45rem] bg-gradient-to-br from-slate-950 to-slate-900">
              <div className="absolute inset-0 opacity-75 [background:radial-gradient(820px_420px_at_18%_8%,rgba(109,93,246,0.50),transparent_60%),radial-gradient(700px_360px_at_82%_26%,rgba(34,197,94,0.26),transparent_60%)]" />

              <div className="pointer-events-none absolute left-1/2 top-3 z-20 -translate-x-1/2">
                <div className="h-7 w-32 rounded-full bg-black/85 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]" />
              </div>

              <div className="relative flex h-full flex-col p-5 pt-10">
                <div className="flex items-center justify-between text-white/90">
                  <div className="text-sm font-semibold">LifeWise</div>
                  <div className="text-[10px] text-white/60">Sat, 30 May 2026</div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { label: "Voice", icon: "🎙" },
                    { label: "Scan", icon: "📷" },
                    { label: "WiseAI", icon: "✨" }
                  ].map((c) => (
                    <div
                      key={c.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-2 text-center"
                    >
                      <div className="text-sm">{c.icon}</div>
                      <div className="mt-1 text-[9px] font-semibold text-white/80">
                        {c.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    { label: "Today", value: "5" },
                    { label: "Papa health", value: "80%" },
                    { label: "Bills due", value: "2" },
                    { label: "Family", value: "4" }
                  ].map((c) => (
                    <div
                      key={c.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]"
                    >
                      <div className="text-[11px] text-white/60">{c.label}</div>
                      <div className="mt-1 text-lg font-semibold text-white">
                        {c.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[11px] text-white/60">Next reminder</div>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <div className="text-sm font-semibold text-white">
                      Papa — Medicine 8 PM
                    </div>
                    <div className="shrink-0 rounded-full bg-accent/20 px-2 py-1 text-[11px] font-semibold text-accent">
                      Today
                    </div>
                  </div>
                </div>

                <div className="mt-auto grid grid-cols-5 gap-1.5 pt-4">
                  {["Home", "★Family", "Alerts", "Insights", "Profile"].map((t) => (
                    <div
                      key={t}
                      className="rounded-xl border border-white/10 bg-white/5 p-2 text-center text-[9px] font-semibold text-white/70"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {enableTilt ? (
        <span className="sr-only">Interactive phone preview on desktop</span>
      ) : null}
    </div>
  );
}
