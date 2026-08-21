"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import {
  APP_AGGREGATE_RATING,
  APP_REVIEWS,
  HAS_APP_REVIEWS,
  type AppReview
} from "@/lib/reviews";
import { cn } from "@/components/cn";

function Stars({
  value,
  size = "sm"
}: {
  value: number;
  size?: "sm" | "md" | "lg";
}) {
  const cls =
    size === "lg"
      ? "h-5 w-5"
      : size === "md"
        ? "h-4 w-4"
        : "h-3.5 w-3.5";

  return (
    <span
      className="inline-flex items-center gap-0.5"
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(
            cls,
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

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

function ReviewCard({
  review,
  featured = false,
  index = 0
}: {
  review: AppReview;
  featured?: boolean;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: Math.min(index * 0.06, 0.3),
        type: "spring",
        stiffness: 320,
        damping: 28
      }}
      className={cn(
        "relative overflow-hidden rounded-3xl border p-5 sm:p-6",
        featured
          ? "border-indigo-200/80 bg-gradient-to-br from-indigo-50 via-white to-violet-50 shadow-lg shadow-indigo-500/10 dark:border-indigo-500/30 dark:from-indigo-950/50 dark:via-slate-800 dark:to-violet-950/40 sm:col-span-2 lg:col-span-1 lg:row-span-2"
          : "border-slate-200/90 bg-white/90 dark:border-slate-700 dark:bg-slate-800/90"
      )}
    >
      <Quote
        className={cn(
          "pointer-events-none absolute -right-1 -top-1 text-indigo-500/15 dark:text-indigo-300/10",
          featured ? "h-20 w-20" : "h-14 w-14"
        )}
        aria-hidden
      />

      <div className="relative">
        <Stars value={review.rating} size={featured ? "md" : "sm"} />

        <h3
          className={cn(
            "mt-3 font-display font-bold tracking-tight text-slate-950 dark:text-white",
            featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
          )}
        >
          {review.title}
        </h3>

        <p
          className={cn(
            "mt-2.5 leading-relaxed text-slate-600 dark:text-slate-300",
            featured ? "text-[15px] sm:text-base" : "text-sm"
          )}
        >
          {review.body}
        </p>

        <div className="mt-5 flex items-center gap-3">
          <span
            className={cn(
              "grid place-items-center rounded-2xl font-display font-bold text-white",
              featured
                ? "h-11 w-11 bg-gradient-to-br from-indigo-500 to-violet-600 text-sm shadow-md shadow-indigo-500/30"
                : "h-9 w-9 bg-gradient-to-br from-slate-700 to-slate-900 text-[11px] dark:from-slate-600 dark:to-slate-800"
            )}
            aria-hidden
          >
            {initials(review.author)}
          </span>
          <div>
            <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
              {review.author}
            </p>
            <p className="text-[12px] text-slate-500 dark:text-slate-400">
              {review.location}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ReviewsSection() {
  if (!HAS_APP_REVIEWS || !APP_AGGREGATE_RATING) return null;

  const { ratingValue, reviewCount } = APP_AGGREGATE_RATING;
  const [featured, ...rest] = APP_REVIEWS;

  return (
    <SectionShell
      id="reviews"
      eyebrow="Reviews"
      title="Trusted by Indian families"
      subtitle="Real feedback from people using LifeWise for medicine reminders, bills, and Family Hub."
    >
      <Reveal>
        <div className="mb-8 overflow-hidden rounded-[1.75rem] border border-indigo-200/70 bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 p-5 text-white shadow-xl shadow-indigo-500/20 sm:rounded-[2rem] sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-100/90">
                Family rating
              </p>
              <div className="mt-2 flex flex-wrap items-end gap-3">
                <span className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
                  {ratingValue}
                </span>
                <div className="mb-1.5">
                  <Stars value={Math.round(ratingValue)} size="lg" />
                  <p className="mt-1 text-sm text-indigo-100">
                    Based on {reviewCount}{" "}
                    {reviewCount === 1 ? "review" : "reviews"}
                  </p>
                </div>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-indigo-100/95 sm:text-right">
              Medicine, bills, and Family Hub — one Family OS families actually
              stick with.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {featured ? (
            <ReviewCard review={featured} featured index={0} />
          ) : null}
          {rest.map((review, i) => (
            <ReviewCard
              key={`${review.author}-${review.datePublished}`}
              review={review}
              index={i + 1}
            />
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}
