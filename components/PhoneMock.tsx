"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants
} from "framer-motion";
import { cn } from "@/components/cn";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const shimmer: Variants = {
  initial: { opacity: 0, y: 6 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.6, ease: EASE_OUT }
  })
};

export function PhoneMock({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.35 });
  const sy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.35 });

  const rotateX = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-12, 12]);
  const translateX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const translateY = useTransform(sy, [-0.5, 0.5], [-8, 8]);

  return (
    <motion.div
      className={cn(
        "relative mx-auto w-full max-w-[24rem] sm:max-w-[26rem] lg:max-w-[28rem]",
        className
      )}
      onPointerMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        mx.set(px);
        my.set(py);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ perspective: 1200 }}
    >
      <div className="absolute -inset-14 -z-10 blur-3xl">
        <div className="absolute left-6 top-10 h-56 w-56 rounded-full bg-primary/25" />
        <div className="absolute right-6 bottom-10 h-56 w-56 rounded-full bg-accent/18" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10" />
      </div>

      <motion.div
        className="relative"
        animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }
        }
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d"
        }}
      >
        {/* iPhone 17 Pro Max proportions (78mm x 163.4mm) with minimal black border */}
        <div className="relative aspect-[78/163.4] rounded-[3.05rem] bg-black p-[2px] shadow-lift">
          <div className="relative h-full rounded-[2.92rem] bg-black p-[6px]">
            {/* Screen (ultra reduced bezel) */}
            <div className="relative h-full overflow-hidden rounded-[2.45rem] bg-gradient-to-br from-slate-950 to-slate-900">
                <div className="absolute inset-0 opacity-75 [background:radial-gradient(820px_420px_at_18%_8%,rgba(109,93,246,0.50),transparent_60%),radial-gradient(700px_360px_at_82%_26%,rgba(34,197,94,0.26),transparent_60%)]" />

                {/* Dynamic Island */}
                <div className="pointer-events-none absolute left-1/2 top-3 z-20 -translate-x-1/2">
                  <div className="h-7 w-32 rounded-full bg-black/85 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]">
                    <div className="absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-indigo-400/40 blur-[1px]" />
                  </div>
                </div>

                {/* Subtle glass reflection */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -left-24 -top-16 h-64 w-56 rotate-12 rounded-[3rem] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)] blur-lg"
                  animate={reduceMotion ? undefined : { x: [-40, 80, -40] }}
                  transition={
                    reduceMotion
                      ? undefined
                      : { duration: 8.5, repeat: Infinity, ease: "easeInOut" }
                  }
                />

                <div className="relative flex h-full flex-col p-5 pt-10">
                  <div className="flex items-center justify-between text-white/90">
                    <div className="text-sm font-semibold">LifeWise</div>
                    <div className="h-2 w-16 rounded-full bg-white/15" />
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      {
                        label: "Spending",
                        value: "₹12,480",
                        tone: "from-primary/35"
                      },
                      { label: "Savings", value: "18%", tone: "from-accent/35" },
                      { label: "Bills due", value: "2", tone: "from-primary/25" },
                      {
                        label: "Reminders",
                        value: "6",
                        tone: "from-accent/25"
                      }
                    ].map((c, i) => (
                      <motion.div
                        key={c.label}
                        className={cn(
                          "rounded-2xl border border-white/10 bg-white/5 p-3",
                          "shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]"
                        )}
                        variants={shimmer}
                        initial="initial"
                        animate={reduceMotion ? undefined : "animate"}
                        custom={i}
                      >
                        <div className="text-[11px] text-white/60">{c.label}</div>
                        <div className="mt-1 text-lg font-semibold text-white">
                          {c.value}
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                          <motion.div
                            className={cn(
                              "h-full w-2/3 rounded-full bg-gradient-to-r to-indigo-500",
                              c.tone
                            )}
                            initial={{ x: "-30%" }}
                            animate={
                              reduceMotion
                                ? undefined
                                : { x: ["-30%", "0%", "-30%"] }
                            }
                            transition={{
                              duration: 4.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.15
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[11px] text-white/60">Next reminder</div>
                    <div className="mt-1 flex items-center justify-between">
                      <div className="text-sm font-semibold text-white">
                        Medicine — 8:00 PM
                      </div>
                      <div className="rounded-full bg-accent/20 px-2 py-1 text-[11px] font-semibold text-accent">
                        Today
                      </div>
                    </div>
                  </div>

                  {/* Activity + quick actions to avoid empty bottom */}
                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-[11px] font-semibold text-white/70">
                        Today
                      </div>
                      <div className="text-[11px] text-white/55">Summary</div>
                    </div>
                    <div className="mt-3 space-y-2">
                      {[
                        { k: "Electricity", v: "Due in 2 days", tone: "bg-primary/20 text-primary" },
                        { k: "Groceries", v: "₹840 spent", tone: "bg-white/10 text-white/85" },
                        { k: "Family", v: "2 check-ins", tone: "bg-accent/18 text-accent" }
                      ].map((x) => (
                        <div
                          key={x.k}
                          className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 px-3 py-2"
                        >
                          <div className="text-[12px] font-semibold text-white/90">
                            {x.k}
                          </div>
                          <div className={cn("rounded-full px-2 py-1 text-[10px] font-semibold border border-white/10", x.tone)}>
                            {x.v}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto grid grid-cols-3 gap-3 pt-4">
                    {["Money", "Health", "Family"].map((t, i) => (
                      <motion.div
                        key={t}
                        className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center text-[12px] font-semibold text-white/85"
                        initial={{ opacity: 0, y: 8 }}
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                opacity: 1,
                                y: 0,
                                transition: {
                                  delay: 0.22 + i * 0.06,
                                  duration: 0.55,
                                  ease: [0.16, 1, 0.3, 1]
                                }
                              }
                        }
                      >
                        {t}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.10),transparent)]" />
              </div>
            </div>
          </div>
      </motion.div>

      <div className="pointer-events-none absolute -bottom-8 left-1/2 h-16 w-72 -translate-x-1/2 rounded-full bg-slate-900/10 blur-2xl dark:bg-black/35" />
      <Image
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
        alt=""
        width={1}
        height={1}
        priority
        className="hidden"
      />
    </motion.div>
  );
}

