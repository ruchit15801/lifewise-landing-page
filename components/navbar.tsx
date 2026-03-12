"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/components/cn";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#ai", label: "AI Assistant" },
  { href: "#family", label: "Family Hub" },
  { href: "#pricing", label: "Pricing" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/60 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/30">
      <div className="section-max flex h-16 items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-semibold tracking-tight"
          aria-label="LifeWise home"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-premium">
            LW
          </span>
          <span className="text-slate-950 dark:text-white">LifeWise</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-900/5",
                "dark:text-slate-200 dark:hover:bg-white/10"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            href="#download"
            className="hidden sm:inline-flex btn-primary"
          >
            Download
          </motion.a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

