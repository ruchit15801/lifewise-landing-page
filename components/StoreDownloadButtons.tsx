"use client";

import { useState } from "react";
import { cn } from "@/components/cn";
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  STORE_LAUNCH_MESSAGE,
  STORES_ARE_LIVE
} from "@/lib/stores";

type Variant = "dark" | "light" | "hero";

function GooglePlayBadge({ variant }: { variant: Variant }) {
  const dark = variant === "dark" || variant === "hero";
  return (
    <svg
      viewBox="0 0 180 54"
      className="h-[52px] w-auto sm:h-[54px]"
      aria-hidden
    >
      <rect
        width="180"
        height="54"
        rx="8"
        fill={dark ? "#0F172A" : "#FFFFFF"}
        stroke={dark ? "rgba(255,255,255,0.15)" : "rgba(15,23,42,0.12)"}
      />
      <path
        d="M22 12.5l14 14.5-14 14.5V12.5zm2.2 2.5v24l10.8-12L24.2 15z"
        fill="#34A853"
      />
      <path d="M24.2 15l10.8 12 4.5-4.2L30 12.5 24.2 15z" fill="#FBBC04" />
      <path d="M39.5 22.8L35 27l4.5 4.2L48 27 39.5 22.8z" fill="#EA4335" />
      <path d="M24.2 39l5.8-5.5 10.8 12L24.2 39z" fill="#4285F4" />
      <text
        x="58"
        y="20"
        fill={dark ? "#94A3B8" : "#64748B"}
        fontSize="9"
        fontFamily="system-ui,sans-serif"
        fontWeight="600"
      >
        GET IT ON
      </text>
      <text
        x="58"
        y="36"
        fill={dark ? "#F8FAFC" : "#0F172A"}
        fontSize="16"
        fontFamily="system-ui,sans-serif"
        fontWeight="700"
      >
        Google Play
      </text>
    </svg>
  );
}

function AppStoreBadge({ variant }: { variant: Variant }) {
  const dark = variant === "dark" || variant === "hero";
  return (
    <svg
      viewBox="0 0 180 54"
      className="h-[52px] w-auto sm:h-[54px]"
      aria-hidden
    >
      <rect
        width="180"
        height="54"
        rx="8"
        fill={dark ? "#0F172A" : "#FFFFFF"}
        stroke={dark ? "rgba(255,255,255,0.15)" : "rgba(15,23,42,0.12)"}
      />
      <path
        d="M30 38c-.2 1.4-1.2 3.6-2.5 3.6-.6 0-1.3-.4-2.1-.4-.9 0-1.7.4-2.6.4-1.6 0-3.1-2.8-3.1-5.6 0-3.4 2-5.2 3.9-5.2.7 0 1.5.5 2.4.5.8 0 1.7-.5 2.8-.5 1 0 2.7.4 3.5 2.1-3.1 1.7-2.6 6.1.7 7.5zm-2.4-19.8c.5-.7 1-1.7.8-2.7-1 .1-2.1.7-2.7 1.5-.5.6-1 1.7-.8 2.6 1.1.1 2.2-.6 2.7-1.4z"
        fill={dark ? "#F8FAFC" : "#0F172A"}
      />
      <text
        x="58"
        y="20"
        fill={dark ? "#94A3B8" : "#64748B"}
        fontSize="9"
        fontFamily="system-ui,sans-serif"
        fontWeight="600"
      >
        Download on the
      </text>
      <text
        x="58"
        y="36"
        fill={dark ? "#F8FAFC" : "#0F172A"}
        fontSize="16"
        fontFamily="system-ui,sans-serif"
        fontWeight="700"
      >
        App Store
      </text>
    </svg>
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
          aria-label="Download LifeWise on Google Play"
          className={cn(
            "group relative inline-flex shrink-0 transition-transform hover:-translate-y-0.5 active:translate-y-0",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
          )}
        >
          <GooglePlayBadge variant={variant} />
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
          <AppStoreBadge variant={variant} />
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
            : "Tap a store button — we'll notify you when LifeWise goes live."}
        </p>
      )}
    </div>
  );
}
