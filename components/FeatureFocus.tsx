"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Mic, ScanLine, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/components/cn";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";

const FeatureShowcase = dynamic(
  () =>
    import("@/components/FeatureShowcase").then((m) => ({
      default: m.FeatureShowcase
    })),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto max-w-6xl animate-pulse px-4 py-10" aria-hidden>
        <div className="h-8 w-48 rounded-xl bg-slate-200 dark:bg-slate-700" />
        <div className="mt-4 h-64 rounded-2xl bg-slate-200/80 dark:bg-slate-800" />
      </div>
    )
  }
);

type HeroFeature = {
  key: string;
  icon: LucideIcon;
  title: string;
  point: string;
  image: string;
  alt: string;
};

const HERO_FEATURES: HeroFeature[] = [
  {
    key: "voice",
    icon: Mic,
    title: "Voice reminder in Hindi / Gujarati",
    point:
      "Home screen Voice Reminder — spoken alerts parents actually understand.",
    image: "/app-screens/feature-home.jpg",
    alt: "LifeWise home with Voice Reminder, Scan Bills and Wise AI"
  },
  {
    key: "scan",
    icon: ScanLine,
    title: "Scan Bill & reminders",
    point:
      "Bills and subscriptions in one list — amount, due date, overdue clear.",
    image: "/app-screens/feature-reminders.jpg",
    alt: "LifeWise Reminders screen with electricity bill and Netflix"
  },
  {
    key: "family",
    icon: Users,
    title: "Family Hub for Papa & everyone",
    point:
      "Each member has their own card — medicines, health, bills managed together.",
    image: "/app-screens/feature-family.jpg",
    alt: "LifeWise family members screen with Dad and family cards"
  }
];

export function FeatureFocus() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SectionShell
        id="in-the-app"
        className="py-5 sm:py-7"
        eyebrow="What matters first"
        title="Three things that change the family day."
        subtitle="Real LifeWise screens: voice reminder, bill reminders, and Family Hub — then open all modules if you want."
      >
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {HERO_FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.key} delay={i * 0.05}>
                <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-premium dark:border-white/10 dark:bg-slate-900/70">
                  <div className="relative mx-auto w-full max-w-[280px] px-4 pt-4 sm:max-w-none">
                    <div className="relative overflow-hidden rounded-[1.35rem] border border-slate-200/90 bg-slate-100 shadow-inner dark:border-white/10 dark:bg-slate-800">
                      <div className="relative aspect-[9/19.5] w-full">
                        <Image
                          src={feature.image}
                          alt={feature.alt}
                          fill
                          sizes="(max-width: 768px) 80vw, 28vw"
                          className="object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-4 pt-3">
                    <div className="flex items-center gap-2">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-200">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="font-display text-[15px] font-semibold leading-snug text-slate-900 dark:text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-snug text-slate-600 dark:text-slate-300">
                      {feature.point}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-5 flex justify-center">
          <button
            type="button"
            aria-expanded={showAll}
            aria-controls="all-features-panel"
            onClick={() => setShowAll((v) => !v)}
            className="btn-secondary inline-flex dark:border-white/15 dark:bg-slate-800/80 dark:text-white"
          >
            {showAll ? "Hide all features" : "See all features"}
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                showAll && "rotate-180"
              )}
            />
          </button>
        </div>
      </SectionShell>

      {showAll ? (
        <div
          id="all-features-panel"
          className="border-t border-slate-200/70 dark:border-white/10"
        >
          <FeatureShowcase embedded />
        </div>
      ) : null}
    </>
  );
}
