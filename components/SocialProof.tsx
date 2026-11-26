"use client";

import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";
import { cn } from "@/components/cn";
import {
  DISPLAY_RATING,
  SOCIAL_QUOTES,
  SOCIAL_STATS
} from "@/lib/social-proof";

function Stars({ value }: { value: number }) {
  return (
    <span
      className="inline-flex items-center gap-0.5"
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(
            "h-3.5 w-3.5",
            i < value
              ? "fill-amber-400 text-amber-400"
              : "text-slate-300 dark:text-slate-600"
          )}
          aria-hidden
        />
      ))}
    </span>
  );
}

export function SocialProof() {
  return (
    <SectionShell
      id="social-proof"
      eyebrow="Loved by families"
      title="What early families are saying."
      subtitle={`${DISPLAY_RATING.label} average  medicine alerts, bill reminders, and one Family Hub.`}
      className="py-5 sm:py-7"
    >
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {SOCIAL_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900/70"
            >
              <p className="text-[11px] font-bold uppercase tracking-wide text-indigo-700 dark:text-indigo-300">
                {stat.label}
              </p>
              <p className="mt-1 font-display text-2xl font-semibold text-slate-900 dark:text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-[12px] text-slate-500 dark:text-slate-400">
                {stat.hint}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {SOCIAL_QUOTES.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.05}>
            <figure className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-900/70">
              <div className="mb-2 flex items-center justify-between gap-2">
                <Stars value={item.rating} />
                <span className="text-[11px] font-semibold text-slate-400">
                  {item.rating}/5
                </span>
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-3 text-[12px] font-semibold text-slate-900 dark:text-white">
                {item.name}
                <span className="font-normal text-slate-500 dark:text-slate-400">
                  {" "}
                  · {item.city}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
