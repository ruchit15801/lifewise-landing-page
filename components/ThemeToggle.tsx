"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";
import { cn } from "@/components/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/60 px-3 py-2 text-sm font-semibold text-slate-900 shadow-premium backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0",
        "dark:border-white/10 dark:bg-white/5 dark:text-white",
        className
      )}
    >
      <span className="relative h-5 w-5">
        <Sun
          className={cn(
            "absolute inset-0 h-5 w-5 transition-all duration-300",
            theme === "dark" ? "scale-0 opacity-0" : "scale-100 opacity-100"
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 h-5 w-5 transition-all duration-300",
            theme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0"
          )}
        />
      </span>
      <span className="hidden sm:inline">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}

