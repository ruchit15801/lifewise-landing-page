"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/components/cn";

/** Sits left of the chat FAB  same bottom row, no overlap. */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          key="scroll-top"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          onClick={goTop}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "fixed z-[60] grid h-12 w-12 place-items-center rounded-full",
            "border border-slate-200/80 bg-white/95 text-indigo-600 shadow-xl backdrop-blur-xl",
            "dark:border-white/15 dark:bg-slate-900/95 dark:text-indigo-300",
            "bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-[calc(1rem+3.5rem+0.75rem)]",
            "transition-shadow hover:shadow-indigo-500/20 hover:border-indigo-200 dark:hover:border-indigo-400/30"
          )}
          aria-label="Scroll back to top"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
