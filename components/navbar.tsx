"use client";

import Link from "next/link";
import { useTheme } from "./theme-context";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Download", href: "#download" }
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 dark:border-slate-800/80 backdrop-blur-xl bg-backgroundLight/70 dark:bg-slate-950/40">
      <nav className="section-max flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-semibold text-white shadow-lg shadow-primary/40">
            LW
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide">
              LifeWise
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              AI Life Assistant
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="relative inline-flex h-9 w-16 items-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/80 px-1 text-xs shadow-sm"
            aria-label="Toggle theme"
          >
            <span
              className={`absolute inset-y-1 w-7 rounded-full bg-slate-900 dark:bg-slate-100 transition-transform ${
                theme === "dark" ? "translate-x-7" : "translate-x-0"
              }`}
            />
            <span className="relative flex-1 text-[11px] text-slate-900 dark:text-slate-400 text-center">
              ☀️
            </span>
            <span className="relative flex-1 text-[11px] text-slate-400 dark:text-slate-900 text-center">
              🌙
            </span>
          </button>

          <Link
            href="#download"
            className="hidden sm:inline-flex items-center rounded-full bg-primary px-4 py-2 text-xs font-medium text-white shadow-lg shadow-primary/40 hover:bg-primary/90 transition-colors"
          >
            Download App
          </Link>
        </div>
      </nav>
    </header>
  );
}

