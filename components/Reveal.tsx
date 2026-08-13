"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/components/cn";

/** Lightweight reveal — no Framer Motion (keeps TBT / hydration clean). */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  /** Start visible immediately (hero / above-the-fold). */
  eager = false
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: boolean;
  className?: string;
  eager?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(eager);

  useEffect(() => {
    if (eager) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-500 ease-out will-change-transform",
        visible ? "translate-y-0 opacity-100" : "opacity-0",
        className
      )}
      style={{
        transitionDelay: visible ? `${Math.round(delay * 1000)}ms` : "0ms",
        transform: visible ? "none" : `translateY(${y}px)`
      }}
    >
      {children}
    </div>
  );
}
