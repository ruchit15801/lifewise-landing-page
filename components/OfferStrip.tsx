"use client";

import { CheckCircle2, Download, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  trackCtaClick,
  trackStoreRedirect,
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

const steps = [
  { n: "1", title: "Install", body: "Free on Play & App Store" },
  { n: "2", title: "Add Papa", body: "+1 medicine in 2 minutes" },
  { n: "3", title: "First alert today", body: "Reminder + missed ping" }
] as const;

export function OfferStrip() {
  const [platform, setPlatform] = useState<StorePlatform>("desktop");
  const [utm, setUtm] = useState<Record<string, string>>({});

  useEffect(() => {
    setPlatform(detectPlatform());
    setUtm(readUtmParams());
  }, []);

  const primaryHref = useMemo(
    () => preferredStoreUrl(platform, utm),
    [platform, utm]
  );
  const playHref = useMemo(() => buildStoreUrl("android", utm), [utm]);
  const appHref = useMemo(() => buildStoreUrl("ios", utm), [utm]);
  const qrTarget = useMemo(() => buildGetAppUrl(utm), [utm]);

  const onPrimaryClick = () => {
    const p: StorePlatform = platform === "unknown" ? "desktop" : platform;
    trackCtaClick("offer", p);
    trackStoreRedirect(p, "offer");
  };

  const onBadgeClick = (p: "android" | "ios") => {
    trackCtaClick("offer", p);
    trackStoreRedirect(p, "offer");
  };

  return (
    <section id="offer" className="scroll-mt-24 py-6 sm:py-8">
      <div className="section-max">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-indigo-300/40 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-indigo-600/20 dark:border-indigo-400/20">
            {/* Ambient decorative lighting */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 -bottom-16 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl"
            />

            <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-8">
              {/* Left Column: Heading, Value Prop, and 3-Step Setup */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-indigo-100 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                  <span>START TODAY · NO CARD NEEDED</span>
                </div>

                <h2 className="mt-3.5 font-display text-2xl sm:text-3xl lg:text-[2.2rem] font-bold leading-tight tracking-tight text-white">
                  First month: Family plan features free.
                </h2>

                <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-indigo-100 sm:text-base">
                  Experience full peace of mind for your parents. Keep the free plan forever, or upgrade anytime from{" "}
                  <strong className="font-bold text-white underline decoration-emerald-400 decoration-2 underline-offset-4">
                    ₹99/month
                  </strong>
                  .
                </p>

                {/* 3 Step Cards */}
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-200/90 mb-3">
                    Get setup in 3 simple steps:
                  </p>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
                    {steps.map((step) => (
                      <div
                        key={step.n}
                        className="relative flex flex-col justify-between rounded-2xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/30"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-bold text-indigo-700 shadow-sm">
                            {step.n}
                          </span>
                          <span className="text-sm font-semibold text-white leading-tight">
                            {step.title}
                          </span>
                        </div>
                        <p className="mt-2 text-[12px] leading-snug text-indigo-100/85">
                          {step.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Beautiful, Balanced CTA Card */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto w-full max-w-md rounded-3xl border border-white/80 bg-white p-5 sm:p-6 shadow-2xl dark:border-white/10 dark:bg-slate-900">
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                          Install Free
                        </p>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                          1st month all features included
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/40">
                      Android + iPhone
                    </span>
                  </div>

                  {/* Big Primary Install Button */}
                  <div className="mt-4">
                    <a
                      href={primaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onPrimaryClick}
                      aria-label="Install LifeWise Free"
                      className="btn-primary flex w-full items-center justify-center gap-2 min-h-[48px] rounded-xl text-sm font-semibold shadow-lg shadow-indigo-600/25 transition-all hover:shadow-indigo-600/35 hover:-translate-y-0.5"
                    >
                      <Download className="h-4 w-4 shrink-0" aria-hidden />
                      <span>Install LifeWise Free</span>
                    </a>
                  </div>

                  {/* App Store & Play Store Badges */}
                  <div className="mt-3.5 grid grid-cols-2 gap-2.5">
                    {PLAY_STORE_LIVE && (
                      <a
                        href={playHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => onBadgeClick("android")}
                        aria-label="Get LifeWise on Google Play"
                        className="flex items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/70 p-2 transition hover:bg-slate-100 hover:border-slate-300 dark:border-white/10 dark:bg-slate-800/60 dark:hover:bg-slate-800"
                      >
                        <Image
                          src="/badges/google-play.svg"
                          alt="Get it on Google Play"
                          width={130}
                          height={38}
                          className="h-8 w-auto object-contain"
                          unoptimized
                        />
                      </a>
                    )}
                    {APP_STORE_LIVE && (
                      <a
                        href={appHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => onBadgeClick("ios")}
                        aria-label="Download LifeWise on the App Store"
                        className="flex items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/70 p-2 transition hover:bg-slate-100 hover:border-slate-300 dark:border-white/10 dark:bg-slate-800/60 dark:hover:bg-slate-800"
                      >
                        <Image
                          src="/badges/app-store-black.svg"
                          alt="Download on the App Store"
                          width={130}
                          height={38}
                          className="h-8 w-auto object-contain dark:hidden"
                          unoptimized
                        />
                        <Image
                          src="/badges/app-store-white.svg"
                          alt="Download on the App Store"
                          width={130}
                          height={38}
                          className="hidden h-8 w-auto object-contain dark:block"
                          unoptimized
                        />
                      </a>
                    )}
                  </div>

                  {/* QR Scan Strip */}
                  <div className="mt-3.5 flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-2.5 dark:border-white/5 dark:bg-slate-800/50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={qrCodeUrl(qrTarget, 128)}
                      alt="Scan to open LifeWise on phone"
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-xl bg-white p-1 border border-slate-200/60 shadow-sm shrink-0"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="min-w-0 flex-1 text-left">
                      <p className="text-xs font-semibold text-slate-800 dark:text-white">
                        Scan from phone camera
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        Instantly opens Play Store / App Store
                      </p>
                    </div>
                  </div>

                  {/* Trust Footnote */}
                  <div className="mt-3.5 flex items-center justify-center gap-3 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <span className="text-emerald-500 font-bold">✓</span> No card needed
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-amber-500 font-bold">★</span> 4.8/5 Rated
                    </span>
                    <span>•</span>
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
