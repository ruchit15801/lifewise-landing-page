"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Download } from "lucide-react";
import { cn } from "@/components/cn";
import {
  trackCtaClick,
  trackStoreRedirect,
  type CtaLocation,
  type StorePlatform
} from "@/lib/analytics";
import {
  buildGetAppUrl,
  buildStoreUrl,
  detectPlatform,
  preferredStoreUrl,
  qrCodeUrl,
  readUtmParams
} from "@/lib/store-links";
import { APP_STORE_LIVE, PLAY_STORE_LIVE } from "@/lib/stores";

export const DEFAULT_INSTALL_CTA = "Install Free";

type Props = {
  location: CtaLocation;
  className?: string;
  label?: string;
  showDesktopStores?: boolean;
  size?: "md" | "lg";
  variant?: "primary" | "bar";
  secondary?: ReactNode;
};

export function SmartInstallCTA({
  location,
  className,
  label = DEFAULT_INSTALL_CTA,
  showDesktopStores = true,
  size = "lg",
  variant = "primary",
  secondary
}: Props) {
  const [platform, setPlatform] = useState<StorePlatform>("desktop");
  const [utm, setUtm] = useState<Record<string, string>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setPlatform(detectPlatform());
    setUtm(readUtmParams());
    setReady(true);
  }, []);

  const primaryHref = useMemo(
    () => preferredStoreUrl(platform, utm),
    [platform, utm]
  );
  const playHref = useMemo(() => buildStoreUrl("android", utm), [utm]);
  const appHref = useMemo(() => buildStoreUrl("ios", utm), [utm]);
  // Always production /get so phone scan auto-opens the right store
  const qrTarget = useMemo(() => buildGetAppUrl(utm), [utm]);

  const isMobileStore = platform === "ios" || platform === "android";
  const showBadges = showDesktopStores && !isMobileStore;

  const onPrimaryClick = () => {
    const p: StorePlatform = platform === "unknown" ? "desktop" : platform;
    trackCtaClick(location, p);
    trackStoreRedirect(p, location);
  };

  const onBadgeClick = (p: "android" | "ios") => {
    trackCtaClick(location, p);
    trackStoreRedirect(p, location);
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onPrimaryClick}
          aria-label={label}
          className={cn(
            "inline-flex w-full items-center justify-center gap-2 font-semibold transition active:translate-y-0 sm:w-auto",
            variant === "primary" &&
              "btn-primary shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5",
            variant === "bar" &&
              "min-h-[48px] rounded-xl bg-primary px-4 py-3 text-sm text-white",
            size === "lg" && variant === "primary" && "min-h-[52px] px-6 text-[15px]",
            size === "md" && "min-h-[44px] px-5 text-sm"
          )}
        >
          <Download className="h-4 w-4 shrink-0" aria-hidden />
          <span className="text-center leading-tight">{label}</span>
        </a>
        {secondary}
      </div>

      {showDesktopStores ? (
        <div
          className={cn(
            "mt-4 flex min-h-[56px] flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
            !showBadges && "hidden"
          )}
          aria-hidden={!showBadges}
        >
          {PLAY_STORE_LIVE ? (
            <a
              href={playHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onBadgeClick("android")}
              aria-label="Get LifeWise on Google Play"
              className="inline-flex shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Image
                src="/badges/google-play.svg"
                alt="Get it on Google Play"
                width={149}
                height={44}
                className="h-11 w-auto"
                unoptimized
              />
            </a>
          ) : null}
          {APP_STORE_LIVE ? (
            <a
              href={appHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onBadgeClick("ios")}
              aria-label="Download LifeWise on the App Store"
              className="inline-flex shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Image
                src="/badges/app-store-black.svg"
                alt="Download on the App Store"
                width={149}
                height={44}
                className="h-11 w-auto dark:hidden"
                unoptimized
              />
              <Image
                src="/badges/app-store-white.svg"
                alt="Download on the App Store"
                width={132}
                height={44}
                className="hidden h-11 w-auto dark:block"
                unoptimized
              />
            </a>
          ) : null}
          <div
            className={cn(
              "hidden items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 p-2 dark:border-white/10 dark:bg-slate-900/70 lg:inline-flex",
              !ready && "opacity-0"
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={qrCodeUrl(qrTarget, 128)}
              alt="Scan to open LifeWise get page — auto opens App Store or Play Store"
              width={64}
              height={64}
              className="h-16 w-16 rounded-md bg-white"
              loading="lazy"
              decoding="async"
            />
            <span className="pr-2 text-[11px] font-medium leading-snug text-slate-600 dark:text-slate-300">
              Scan to
              <br />
              install
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
