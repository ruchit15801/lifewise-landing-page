"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/components/cn";

export type LiveEvent = {
  icon: LucideIcon;
  title: string;
  meta: string;
  tone: "alert" | "info" | "done";
};

const toneClass: Record<LiveEvent["tone"], string> = {
  alert: "bg-amber-100 text-amber-700 dark:bg-amber-400/20 dark:text-amber-200",
  info: "bg-indigo-100 text-indigo-700 dark:bg-indigo-400/20 dark:text-indigo-200",
  done: "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/20 dark:text-emerald-200"
};

export function LiveEventStack({
  events,
  interval = 2400,
  className,
  playing = false,
  playOnce = false,
  onComplete
}: {
  events: readonly LiveEvent[];
  interval?: number;
  className?: string;
  playing?: boolean;
  playOnce?: boolean;
  onComplete?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-60px" });
  const reduce = useReducedMotion();
  const [count, setCount] = useState(1);
  const doneRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    setCount(1);
    doneRef.current = false;
  }, [events]);

  useEffect(() => {
    if (!playing) return;
    if (reduce) {
      setCount(events.length);
      if (playOnce && !doneRef.current) {
        doneRef.current = true;
        onCompleteRef.current?.();
      }
      return;
    }
    if (!inView) return;
    setCount(1);
    const t = window.setInterval(() => {
      setCount((c) => {
        if (playOnce) {
          if (c >= events.length) return c;
          const next = c + 1;
          if (next >= events.length && !doneRef.current) {
            doneRef.current = true;
            window.setTimeout(() => onCompleteRef.current?.(), 0);
          }
          return next;
        }
        return c >= events.length ? 1 : c + 1;
      });
    }, interval);
    return () => window.clearInterval(t);
  }, [inView, reduce, events.length, interval, playing, playOnce]);

  const visible = events.slice(0, Math.min(count, events.length)).reverse();
  const clickable = !playing && !reduce;

  const advance = () => {
    if (!clickable) return;
    setCount((c) => (c >= events.length ? 1 : c + 1));
  };

  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-2", clickable && "cursor-pointer", className)}
      aria-hidden={playing || reduce}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={clickable ? advance : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                advance();
              }
            }
          : undefined
      }
      aria-label={clickable ? "Show the next LifeWise step" : undefined}
    >
      <AnimatePresence initial={false} mode="popLayout">
        {visible.map((e) => {
          const Icon = e.icon;
          return (
            <motion.div
              key={e.title}
              layout
              initial={{ opacity: 0, y: -14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white/95 px-3 py-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-slate-800/95"
            >
              <span className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-xl", toneClass[e.tone])}>
                <Icon className="h-4 w-4" strokeWidth={2.4} />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[13px] font-semibold text-slate-900 dark:text-white">
                  {e.title}
                </span>
                <span className="block truncate text-[11px] text-slate-500 dark:text-slate-300">
                  {e.meta}
                </span>
              </span>
            </motion.div>
          );
        })}
      </AnimatePresence>
      {clickable ? (
        <p className="pt-0.5 text-center text-[11px] font-semibold text-indigo-600 dark:text-indigo-300">
          {count >= events.length ? "Tap to replay" : `Tap for next step · ${count}/${events.length}`}
        </p>
      ) : null}
    </div>
  );
}
