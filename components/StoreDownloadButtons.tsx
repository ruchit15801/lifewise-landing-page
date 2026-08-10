"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/components/cn";
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  STORE_LAUNCH_MESSAGE,
  STORES_ARE_LIVE
} from "@/lib/stores";

type Variant = "dark" | "light" | "hero";

const BADGE_HEIGHT = 44;

function StoreBadgeImage({
  src,
  alt,
  width,
  height
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="h-[44px] w-auto sm:h-[48px]"
      unoptimized
    />
  );
}

export function StoreDownloadButtons({
  variant = "light",
  className,
  showSoonBadge = true
}: {
  variant?: Variant;
  className?: string;
  showSoonBadge?: boolean;
}) {
  const [notice, setNotice] = useState<string | null>(null);
  const useWhiteAppStoreBadge = variant === "dark" || variant === "hero";

  function handleClick(e: React.MouseEvent, url: string) {
    if (url) return;
    e.preventDefault();
    setNotice(STORE_LAUNCH_MESSAGE);
    setTimeout(() => setNotice(null), 6000);
  }

  const playUrl = PLAY_STORE_URL || "#download";
  const appUrl = APP_STORE_URL || "#download";

  return (
    <div className={cn("w-full", className)}>
      {!STORES_ARE_LIVE && showSoonBadge ? (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          Launching soon on Play Store &amp; App Store
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href={playUrl}
          onClick={(e) => handleClick(e, PLAY_STORE_URL)}
          target={PLAY_STORE_URL ? "_blank" : undefined}
          rel={PLAY_STORE_URL ? "noopener noreferrer" : undefined}
          aria-label="Get LifeWise on Google Play"
          className={cn(
            "group relative inline-flex shrink-0 transition-transform hover:-translate-y-0.5 active:translate-y-0",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
          )}
        >
          <StoreBadgeImage
            src="/badges/google-play.svg"
            alt="Get it on Google Play"
            width={149}
            height={BADGE_HEIGHT}
          />
        </a>

        <a
          href={appUrl}
          onClick={(e) => handleClick(e, APP_STORE_URL)}
          target={APP_STORE_URL ? "_blank" : undefined}
          rel={APP_STORE_URL ? "noopener noreferrer" : undefined}
          aria-label="Download LifeWise on the App Store"
          className={cn(
            "group relative inline-flex shrink-0 transition-transform hover:-translate-y-0.5 active:translate-y-0",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
          )}
        >
          <StoreBadgeImage
            src={
              useWhiteAppStoreBadge
                ? "/badges/app-store-white.svg"
                : "/badges/app-store-black.svg"
            }
            alt="Download on the App Store"
            width={useWhiteAppStoreBadge ? 132 : 149}
            height={BADGE_HEIGHT}
          />
        </a>
      </div>

      {notice ? (
        <p
          role="status"
          className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200"
        >
          {notice}
        </p>
      ) : (
        <p className="mt-3 text-xs text-slate-600 dark:text-slate-400">
          {STORES_ARE_LIVE
            ? "Free download • Android & iOS • Made for Indian families"
            : "Tap a store button and we'll notify you when LifeWise goes live."}
        </p>
      )}
    </div>
  );
}
