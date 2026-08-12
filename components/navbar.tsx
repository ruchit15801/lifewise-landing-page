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
            className="absolute inset-0 rounded-full bg-slate-900/5 dark:bg-white/10"
            transition={{ type: "spring", stiffness: 520, damping: 40 }}
          />
        ) : null}
        <span className="relative">{item.label}</span>
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

  useEffect(() => {
    const onHash = () => {
      if (typeof window === "undefined") return;
      if (window.location.hash) setActive(window.location.hash);
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = sections
      .map((id) => document.querySelector(id))
      .filter(Boolean) as Element[];
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -72% 0px", threshold: [0.12, 0.2, 0.3] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", isScrolled ? "py-2" : "py-5")}>
      <div 
        className={cn(
          "pointer-events-none absolute inset-0 transition-all duration-500",
          isScrolled 
            ? "border-b border-slate-200/60 bg-white/75 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:border-white/10 dark:bg-slate-950/75"
            : "border-b border-transparent bg-transparent"
        )} 
      />
      <div className="w-full max-w-[98rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative flex items-center justify-between">
        <Link
          href="/"
          className="group relative inline-flex items-center justify-center transition-transform hover:scale-105"
          aria-label="LifeWise home"
        >
          {/* Animated Backlight Glow matching logo colors */}
          <motion.div
            className="absolute inset-0 scale-[1.15] rounded-full blur-[10px] opacity-65 group-hover:opacity-100 group-hover:scale-[1.3] transition-all duration-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{
              background: "conic-gradient(from 0deg, #ff0080, #ff8c00, #40e0d0, #8a2be2, #ff0080)"
            }}
          />

          <Image
            src="/logo.png"
            alt="LifeWise Logo"
            width={56}
            height={56}
            priority
            className="relative z-10 h-12 w-12 md:h-14 md:w-14 rounded-full object-contain drop-shadow-md"
          />
        </Link>

        <nav className="hidden md:block">
          <div className="relative rounded-full border border-slate-200/70 bg-white/60 p-1 shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_18px_60px_rgba(2,6,23,0.10)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_24px_90px_rgba(0,0,0,0.45)]">
            <div className="flex items-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  onClick={() => !item.isPage && setActive(item.href)}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-sm font-semibold transition",
                    "text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white"
                  )}
                />
              ))}
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((p) => !p)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white/60 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
          >
            {open ? (
              <X className="h-5 w-5 text-slate-900 dark:text-white" />
            ) : (
              <Menu className="h-5 w-5 text-slate-900 dark:text-white" />
            )}
          </button>
          <motion.a
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ y: 0, scale: 0.99 }}
            href="#download"
            className="hidden sm:inline-flex btn-primary relative overflow-hidden"
          >
            <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100" />
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -inset-16 opacity-40"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "radial-gradient(500px 220px at 30% 20%, rgba(255,255,255,0.38), transparent 60%)"
              }}
            />
            Download
          </motion.a>
          <ThemeToggle />
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-slate-200/60 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/45"
          >
            <div className="w-full max-w-[98rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-3">
              <div className="grid gap-2">
                {navItems.map((item) =>
                  item.isPage ? (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 text-sm font-semibold shadow-premium backdrop-blur-xl",
                        "text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setActive(item.href);
                        setOpen(false);
                      }}
                      className={cn(
                        "rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 text-sm font-semibold shadow-premium backdrop-blur-xl",
                        "text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
                      )}
                    >
                      {item.label}
                    </a>
                  )
                )}
                <a
                  href="#download"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Download
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

