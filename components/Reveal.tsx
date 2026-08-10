"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/components/cn";

export function Reveal({
  children,
  delay = 0,
  y = 18,
  blur = true,
  className
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: boolean;
  className?: string;
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { margin: "-80px", once: true });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={
        reduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y, filter: blur ? "blur(10px)" : "none" }
      }
      animate={
        inView
          ? reduceMotion
            ? { opacity: 1 }
            : { opacity: 1, y: 0, filter: "blur(0px)" }
          : undefined
      }
      transition={{
        duration: reduceMotion ? 0.2 : 0.75,
        ease: [0.16, 1, 0.3, 1],
        delay
      }}
    >
      {children}
    </motion.div>
  );
}

