"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/components/cn";

const navItems = [
  { href: "#family", label: "Family Hub" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#support", label: "Support" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#features");
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = useMemo(
    () => navItems.map((i) => i.href).filter((h) => h.startsWith("#")),
    []
  );

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setIsScrolled(window.scrollY > 12);

      const marker = window.innerHeight * 0.32;
      let crossed = sectionIds[0] ?? "#features";

      for (const id of sectionIds) {
        const el = document.querySelector(id) as HTMLElement | null;
        if (!el) continue;
        if (el.getBoundingClientRect().top - marker <= 12) crossed = id;
      }

      // Near page bottom - force last nav section (Support)
      const doc = document.documentElement;
      const nearBottom =
        window.innerHeight + window.scrollY >= doc.scrollHeight - 120;
      if (nearBottom && sectionIds.includes("#support")) {
        crossed = "#support";
      }

      setActive(crossed);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    // Dynamic sections load after first paint - refresh a few times
    const timers = [200, 600, 1200, 2500].map((ms) =>
      window.setTimeout(update, ms)
    );

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      timers.forEach(clearTimeout);
    };
  }, [sectionIds]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const NavLink = ({
    item,
    onClick,
    className
  }: {
    item: (typeof navItems)[number];
    onClick?: () => void;
    className: string;
  }) => {
    const isActive = active === item.href;
    const inner = (
      <>
        {isActive ? (
          <motion.span
            layoutId="nav-pill"
            className="absolute inset-0 rounded-full border border-indigo-200/80 bg-indigo-100/90 dark:border-indigo-400/30 dark:bg-indigo-500/20"
            transition={{ type: "spring", stiffness: 520, damping: 40 }}
          />
        ) : null}
        <span className="relative z-10">{item.label}</span>
      </>
    );

    return (
      <a
        href={`/${item.href}`}
        onClick={(e) => {
          e.preventDefault();
          const el = document.querySelector(item.href);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setActive(item.href);
            onClick?.();
            return;
          }
          // Other pages (privacy, etc.) - go home to section
          window.location.href = `/${item.href}`;
          onClick?.();
        }}
        className={className}
      >
        {inner}
      </a>
    );
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
          isScrolled
            ? "border-b border-white/50 bg-white/55 py-1 shadow-[0_8px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/55 dark:shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
            : "border-b border-transparent bg-transparent py-2"
        )}
      >
        <div className="section-max grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-3">
          {/* Left: logo with full backlight */}
          <div className="flex justify-start">
            <Link
              href="/"
              className="group relative inline-flex h-14 w-14 shrink-0 items-center justify-center transition-transform hover:scale-105"
              aria-label="LifeWise home"
            >
              <motion.div
                aria-hidden
                className="absolute -inset-1 rounded-full opacity-90 blur-[14px] transition-all duration-500 group-hover:scale-125 group-hover:opacity-100 dark:opacity-100"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{
                  background:
                    "conic-gradient(from 0deg, #ff0080, #ff8c00, #40e0d0, #8a2be2, #ff0080)"
                }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-3 rounded-full bg-indigo-400/20 blur-xl dark:bg-indigo-400/25"
              />
              <span className="absolute inset-0 rounded-full bg-white/85 shadow-sm ring-1 ring-white/90 dark:bg-slate-950/60 dark:ring-white/15" />
              <Image
                src="/logo.png"
                alt="LifeWise Logo"
                width={56}
                height={56}
                priority
                className="relative z-10 h-12 w-12 rounded-full object-contain drop-shadow-md md:h-14 md:w-14"
              />
            </Link>
          </div>

          {/* Center: nav perfectly centered between logo and actions */}
          <nav className="hidden justify-self-center lg:block">
            <ul
              className={cn(
                "flex items-center gap-1 rounded-full border p-1.5 shadow-sm backdrop-blur-xl transition-colors",
                isScrolled
                  ? "border-slate-200/70 bg-white/55 dark:border-white/10 dark:bg-white/5"
                  : "border-slate-200/80 bg-white/75 dark:border-white/10 dark:bg-slate-950/40"
              )}
            >
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    item={item}
                    className={cn(
                      "relative inline-flex px-4 py-2 font-display text-[13px] font-semibold tracking-wide transition-colors",
                      active === item.href
                        ? "text-indigo-700 dark:text-indigo-300"
                        : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    )}
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: actions with soft light glow, mirrors logo side weight */}
          <div className="relative flex items-center justify-end gap-2 sm:gap-3">
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-x-2 -inset-y-1 rounded-full bg-indigo-400/15 blur-2xl dark:bg-indigo-400/20"
            />
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#download")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="relative hidden items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 font-display text-[13px] font-bold text-white shadow-lg shadow-indigo-500/30 ring-1 ring-white/30 transition-all hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-indigo-500/45 sm:inline-flex"
            >
              Download Free
            </a>
            <div className="relative hidden lg:block">
              <ThemeToggle className="bg-white/80 shadow-[0_0_24px_rgba(109,93,246,0.18)] dark:bg-white/10 dark:shadow-[0_0_28px_rgba(129,140,248,0.22)]" />
            </div>

            <button
              type="button"
              onClick={() => setOpen((p) => !p)}
              className="relative grid h-11 w-11 place-items-center rounded-xl border border-slate-200/80 bg-white/70 text-slate-600 shadow-[0_0_20px_rgba(109,93,246,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:shadow-[0_0_24px_rgba(129,140,248,0.18)] lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed inset-x-3 top-[4.75rem] z-[90] overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/85 p-5 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/90 sm:inset-x-4 sm:p-6 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  item={item}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "relative rounded-2xl px-5 py-3.5 font-display text-base font-semibold transition-colors",
                    active === item.href
                      ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-white"
                  )}
                />
              ))}
              <div className="my-3 h-px w-full bg-slate-200/80 dark:bg-white/10" />
              <div className="flex items-center justify-between px-2">
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Appearance
                </span>
                <ThemeToggle />
              </div>
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  document
                    .querySelector("#download")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 font-display text-sm font-bold text-white"
              >
                Download Free
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-slate-900/35 backdrop-blur-sm dark:bg-slate-950/50 lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
