"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SmartInstallCTA } from "@/components/SmartInstallCTA";
import { detectPlatform } from "@/lib/store-links";

export function StickyInstallBar() {
  const [visible, setVisible] = useState(false);
  const [platform, setPlatform] = useState<"android" | "ios" | "other">("other");

  useEffect(() => {
    const p = detectPlatform();
    setPlatform(p === "ios" || p === "android" ? p : "other");

    const hero = document.getElementById("top");
    if (!hero) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <>
      <div className="h-[76px] md:hidden" aria-hidden />
      <div
        className="fixed inset-x-0 bottom-0 z-[70] border-t border-slate-200/80 bg-white/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-slate-950/95 md:hidden"
        role="region"
        aria-label="Install LifeWise"
      >
        <div className="mx-auto flex max-w-lg items-center gap-2">
          <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-indigo-50 dark:bg-indigo-400/15">
            {platform === "ios" ? (
              <Image
                src="/badges/app-store-black.svg"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
                unoptimized
                aria-hidden
              />
            ) : (
              <Image
                src="/badges/google-play.svg"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
                unoptimized
                aria-hidden
              />
            )}
          </span>
          <div className="min-w-0 flex-1">
            <SmartInstallCTA
              location="sticky"
              label="Install Free"
              showDesktopStores={false}
              size="md"
              variant="bar"
              className="[&>a]:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
