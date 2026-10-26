"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/components/cn";
import { scrollToSection } from "@/lib/section-nav";

const navItems = [
  { href: "#problems", label: "The problem" },
  { href: "#who-its-for", label: "Who it's for" },
  { href: "#in-the-app", label: "In the app" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#support", label: "Support" }
];


export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#problems");
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
      let crossed = sectionIds[0] ?? "#problems";

      for (const id of sectionIds) {
        const el = document.querySelector(id) as HTMLElement | null;
        if (!el) continue;
        if (el.getBoundingClientRect().top - marker <= 12) crossed = id;
      }

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
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const NavLink = ({
    item,
    className,
    onClick
  }: {
    item: (typeof navItems)[number];
    className: string;
    onClick?: () => void;
  }) => {
    const isActive = active === item.href;
    return (
      <a
        href={`/${item.href}`}
        onClick={(e) => {
          e.preventDefault();
          void scrollToSection(item.href).then(() => {
            setActive(item.href);
            onClick?.();
          });
        }}
        className={className}
      >
        {isActive ? (
          <span
            aria-hidden
            className="absolute inset-0 rounded-full border border-indigo-200/80 bg-indigo-100/90"
          />
        ) : null}
        <span className="relative z-10">{item.label}</span>
      </a>
    );
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
          isScrolled
            ? "border-b border-white/50 bg-white/55 py-1 shadow-[0_8px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
            : "border-b border-transparent bg-transparent py-2"
        )}
      >
        <div className="relative mx-auto flex h-16 w-full max-w-[98rem] items-center px-4 sm:px-6 lg:px-8 xl:px-12">
          <Link
            href="/"
            className="group relative z-20 inline-flex h-12 w-12 shrink-0 items-center justify-center transition-transform hover:scale-105 sm:h-14 sm:w-14"
            aria-label="LifeWise home"
          >
            <span
              aria-hidden
              className="absolute -inset-1 rounded-full opacity-90 blur-[14px]"
              style={{
                background:
                  "conic-gradient(from 0deg, #ff0080, #ff8c00, #40e0d0, #8a2be2, #ff0080)"
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-3 rounded-full bg-indigo-400/20 blur-xl"
            />
            <span className="absolute inset-0 rounded-full bg-white/85 shadow-sm ring-1 ring-white/90" />
            <Image
              src="/logo.png"
              alt="LifeWise Logo"
              width={56}
              height={56}
              priority
              className="relative z-10 h-10 w-10 rounded-full object-contain drop-shadow-md sm:h-12 sm:w-12 md:h-14 md:w-14"
            />
          </Link>

          <nav
            className="pointer-events-none absolute inset-x-0 top-1/2 z-10 hidden -translate-y-1/2 justify-center lg:flex"
            aria-label="Primary"
          >
            <ul
              className={cn(
                "pointer-events-auto flex items-center gap-1 rounded-full border p-1.5 shadow-sm backdrop-blur-xl transition-colors",
                isScrolled
                  ? "border-slate-200/70 bg-white/55"
                  : "border-slate-200/80 bg-white/75"
              )}
            >
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    item={item}
                    className={cn(
                      "relative inline-flex px-4 py-2 font-display text-[13px] font-semibold tracking-wide transition-colors",
                      active === item.href
                        ? "text-indigo-700"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative z-20 ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-x-2 -inset-y-1 rounded-full bg-indigo-400/15 blur-2xl"
            />
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                void scrollToSection("#download");
              }}
              className="relative hidden items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 font-display text-[13px] font-bold text-white shadow-lg shadow-indigo-500/30 ring-1 ring-white/30 transition-all hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-indigo-500/45 lg:inline-flex"
            >
              Download Free
            </a>

            <button
              type="button"
              onClick={() => setOpen((p) => !p)}
              className="relative grid h-11 w-11 place-items-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm backdrop-blur-md lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <>
          <div
            className="fixed inset-0 z-[80] bg-slate-900/35 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="fixed inset-x-3 top-[4.75rem] z-[90] overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/85 p-5 shadow-2xl backdrop-blur-2xl sm:inset-x-4 sm:p-6 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  item={item}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "relative rounded-2xl px-5 py-3.5 font-display text-base font-semibold transition-colors",
                    active === item.href
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  )}
                />
              ))}
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  void scrollToSection("#download");
                }}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 font-display text-sm font-bold text-white"
              >
                Download Free
              </a>
            </nav>
          </div>
        </>
      ) : null}
    </>
  );
}
