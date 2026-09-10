"use client";

import Image from "next/image";
import { cn } from "@/components/cn";
import {
  APP_STORE_LIVE,
  APP_STORE_URL,
  PLAY_STORE_LIVE,
  PLAY_STORE_URL
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
  showSoonBadge = true,
  align = "start"
}: {
  variant?: Variant;
  className?: string;
  /** kept for API compatibility - unused */
  showSoonBadge?: boolean;
  align?: "start" | "center";
}) {
  const useWhiteAppStoreBadge = variant === "dark" || variant === "hero";
  const centered = align === "center";
  void showSoonBadge;

  const playUrl = PLAY_STORE_URL || "#download";
  const appUrl = APP_STORE_URL || "#download";

  const helperText =
    PLAY_STORE_LIVE && APP_STORE_LIVE
      ? "Free on Google Play & App Store • Made for Indian families"
      : PLAY_STORE_LIVE
        ? "Free on Google Play • Made for Indian families"
        : APP_STORE_LIVE
          ? "Free on the App Store • Made for Indian families"
          : "Download LifeWise for your family";

  return (
    <div
      className={cn(
        "w-full",
        centered && "flex flex-col items-center text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
          centered && "items-center justify-center"
        )}
      >
        <a
          href={playUrl}
          target={PLAY_STORE_LIVE ? "_blank" : undefined}
          rel={PLAY_STORE_LIVE ? "noopener noreferrer" : undefined}
          aria-label="Get LifeWise on Google Play"
          className={cn(
            "group relative inline-flex shrink-0 transition-transform hover:-translate-y-0.5 active:translate-y-0",
            "rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
          onClick={(e) => {
            // Keep button visible; link will be added later in lib/stores.ts
            if (!APP_STORE_LIVE) {
              e.preventDefault();
            }
          }}
          target={APP_STORE_LIVE ? "_blank" : undefined}
          rel={APP_STORE_LIVE ? "noopener noreferrer" : undefined}
          aria-label="Download LifeWise on the App Store"
          className={cn(
            "group relative inline-flex shrink-0 transition-transform hover:-translate-y-0.5 active:translate-y-0",
            "rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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

      <p
        className={cn(
          "mt-3 text-xs",
          centered && "text-center",
          variant === "dark" || variant === "hero"
            ? "font-medium text-white/85"
            : "text-slate-600 dark:text-slate-400"
        )}
      >
        {helperText}
      </p>
    </div>
  );
}
