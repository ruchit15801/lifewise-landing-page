import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  ExternalLink,
  Home,
  LifeBuoy,
  Pill,
  Users
} from "lucide-react";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/stores";

const DESTINATIONS = [
  {
    href: "/#family",
    title: "Family Hub",
    body: "One place for every family member.",
    icon: Users
  },
  {
    href: "/#reminders",
    title: "Medicine & bills",
    body: "Reminders for Papa, Mummy, and utilities.",
    icon: Pill
  },
  {
    href: "/#ai",
    title: "WiseAI",
    body: "Ask about reminders, expenses, and appointments.",
    icon: Bot
  },
  {
    href: "/support",
    title: "Support",
    body: "Talk to LifeWise India in English or Hindi.",
    icon: LifeBuoy
  }
] as const;

export function NotFoundPage() {
  return (
    <main
      id="main-content"
      className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] dark:opacity-[0.18]"
      />
      <div
        aria-hidden
        className="not-found-glow pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-400/25 blur-3xl dark:bg-indigo-400/20"
      />

      <div className="relative mx-auto w-full max-w-5xl text-center">
        <div className="mx-auto mb-7 flex flex-col items-center gap-3">
          <Image
            src="/logo.png"
            alt="LifeWise"
            width={72}
            height={72}
            priority
            className="h-[4.5rem] w-[4.5rem] rounded-full object-contain shadow-lg shadow-indigo-500/25 ring-1 ring-black/5 dark:ring-white/10"
          />
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">
            Official LifeWise site
          </p>
        </div>

        <p
          aria-hidden
          className="font-display bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-[7.5rem] font-bold leading-none tracking-tighter text-transparent sm:text-[10rem]"
        >
          404
        </p>

        <h1 className="mt-2 font-display text-[1.75rem] font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
          This page is not in LifeWise
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
          The link is broken or the page never existed. You are still on the
          official LifeWise: Family OS website — medicine reminders, bill
          alerts, Family Hub, and WiseAI for Indian families.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary w-full sm:w-auto">
            <Home className="h-4 w-4" />
            Back to home
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/support" className="btn-secondary w-full sm:w-auto">
            <LifeBuoy className="h-4 w-4" />
            Contact support
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
          {DESTINATIONS.map(({ href, title, body, icon: Icon }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/90 dark:hover:border-indigo-400/30"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600 dark:border-indigo-400/20 dark:bg-indigo-500/15 dark:text-indigo-300">
                <Icon className="h-5 w-5" strokeWidth={2.3} />
              </div>
              <h2 className="mt-3 font-display text-[15px] font-bold text-slate-900 dark:text-white">
                {title}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {body}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-300">
                Open
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:text-left">
            <p>
              Looking for the app?{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                LifeWise: Family OS
              </span>{" "}
              is free on Google Play and the App Store.
            </p>
            <div className="flex shrink-0 flex-wrap items-center justify-center gap-3 sm:justify-end">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-indigo-600 hover:underline dark:text-indigo-300"
              >
                Open Play Store
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-indigo-600 hover:underline dark:text-indigo-300"
              >
                Open App Store
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
