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
  { href: "/support", label: "Support", isPage: true }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#family");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = useMemo(
    () => navItems.map((i) => i.href).filter((h) => h.startsWith("#")),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((s) => {
      const el = document.querySelector(s);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const NavLink = ({
    item,
    onClick,
    className
  }: {
    item: (typeof navItems)[number];
    onClick?: () => void;
    className: string;
  }) => {
    const isActive = !item.isPage && active === item.href;
    const inner = (
      <>
        {isActive ? (
          <motion.span
            layoutId="nav-pill"
            className="absolute inset-0 rounded-full bg-indigo-100 border border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/20"
            transition={{ type: "spring", stiffness: 520, damping: 40 }}
          />
        ) : null}
        <span className="relative z-10">{item.label}</span>
      </>
    );

    if (item.isPage) {
      return (
        <Link href={item.href} onClick={onClick} className={className}>
          {inner}
        </Link>
      );
    }
    return (
      <a href={item.href} onClick={onClick} className={className}>
        {inner}
      </a>
    );
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500 border-b",
          isScrolled
            ? "border-slate-200/80 bg-white/80 dark:border-slate-800/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-xl shadow-slate-200/20 dark:shadow-none"
            : "border-transparent bg-transparent py-2"
        )}
      >
        <div className="section-max flex h-16 items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2.5 outline-none transition-transform hover:-translate-y-0.5 active:translate-y-0"
            aria-label="Home"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl transition-all group-hover:bg-indigo-500/30 dark:bg-indigo-500/30" />
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] ring-1 ring-slate-200 dark:shadow-[0_4px_20px_-4px_rgba(255,255,255,0.2)] dark:ring-white/10 transition-shadow group-hover:shadow-md z-10">
                <Image
                  src="/logo.png"
                  alt="LifeWise Logo"
                  fill
                  sizes="40px"
                  className="object-contain p-1.5 transition-transform group-hover:scale-105"
                  priority
                />
              </div>
            </div>
            <span className="hidden font-black tracking-tight text-slate-900 dark:text-white sm:block sm:text-xl">
              LifeWise
            </span>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 p-1.5 shadow-sm backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-900/50">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    item={item}
                    className={cn(
                      "relative px-4 py-2 text-[13px] font-bold tracking-wide transition-colors",
                      active === item.href
                        ? "text-indigo-700 dark:text-indigo-400"
                        : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                    )}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#download"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              Download Free
            </a>
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>

            <button
              onClick={() => setOpen((p) => !p)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white/50 text-slate-600 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300 backdrop-blur-sm lg:hidden"
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
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed inset-x-4 top-24 z-[90] overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 dark:border-slate-800/80 dark:bg-slate-950/95 p-6 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  item={item}
                  onClick={() => setOpen(false)}
                  className="relative rounded-2xl px-5 py-4 text-base font-bold text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-white"
                />
              ))}
              <div className="my-4 h-px w-full bg-slate-200 dark:bg-slate-800/60" />
              <div className="flex items-center justify-between px-5">
                <span className="text-sm font-bold text-slate-600 dark:text-slate-400">Appearance</span>
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-slate-900/40 dark:bg-slate-950/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />
        )}
      </AnimatePresence>
    </>
  );
}
