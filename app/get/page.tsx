"use client";

import { useEffect } from "react";
import Image from "next/image";

const IOS_URL =
  "https://apps.apple.com/in/app/lifewise-ai-family-hub/id6803865970";
const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.lifewise";

export default function GetPage() {
  useEffect(() => {
    const ua = navigator.userAgent || "";
    if (/iPhone|iPad|iPod/i.test(ua)) {
      // iOS — go straight to App Store, no delay
      window.location.replace(IOS_URL);
    } else if (/Android/i.test(ua)) {
      // Android — go straight to Play Store, no delay
      window.location.replace(ANDROID_URL);
    }
    // Desktop / unknown: stay on page and show both buttons
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 py-12 text-center bg-lightBg dark:bg-darkBg transition-colors duration-300">
      {/* Ambient glow — matches site style */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 120% at 45% 0%, rgba(109,93,246,0.18) 0%, transparent 60%)",
        }}
      />

      {/* Logo */}
      <div className="relative mb-7">
        <span
          aria-hidden
          className="absolute -inset-2 rounded-full opacity-80 blur-[18px]"
          style={{
            background:
              "conic-gradient(from 0deg, #ff0080, #ff8c00, #40e0d0, #8a2be2, #ff0080)",
          }}
        />
        <span className="absolute inset-0 rounded-full bg-white/85 shadow-sm ring-1 ring-white/90" />
        <Image
          src="/logo.png"
          alt="LifeWise"
          width={80}
          height={80}
          priority
          className="relative z-10 h-20 w-20 rounded-full object-contain drop-shadow-md"
        />
      </div>

      {/* Heading */}
      <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
        Download{" "}
        <span
          className="gradient-text"
          style={{
            background: "linear-gradient(135deg, #6d5df6, #4f46e5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          LifeWise
        </span>
      </h1>

      <p className="text-base text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed mb-10">
        Your AI-powered family hub — health, schedules &amp; memories in one
        place.
      </p>

      {/* Store Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        {/* App Store */}
        <a
          href={IOS_URL}
          id="btn-appstore"
          aria-label="Download LifeWise on the App Store"
          className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-white/8 backdrop-blur-xl shadow-premium px-5 py-4 text-slate-900 dark:text-white font-semibold text-[0.95rem] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0"
          style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
        >
          {/* Apple SVG */}
          <svg
            className="shrink-0 text-slate-800 dark:text-white"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <span className="flex flex-col text-left">
            <span className="text-[0.7rem] font-normal text-slate-500 dark:text-slate-400 leading-none mb-0.5">
              Download on the
            </span>
            <span className="text-[1rem] font-bold leading-none">App Store</span>
          </span>
          <span className="ml-auto text-slate-400 dark:text-slate-500 text-xs font-normal">
            iPhone / iPad
          </span>
        </a>

        {/* Play Store */}
        <a
          href={ANDROID_URL}
          id="btn-playstore"
          aria-label="Get LifeWise on Google Play"
          className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-white/8 backdrop-blur-xl shadow-premium px-5 py-4 text-slate-900 dark:text-white font-semibold text-[0.95rem] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0"
          style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
        >
          {/* Google Play SVG */}
          <svg
            className="shrink-0"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M3.18 23.76c.32.18.68.22 1.04.1l11.8-6.81-2.56-2.56-10.28 9.27z" fill="#EA4335"/>
            <path d="M21.54 10.27 18.1 8.3 15.2 11l2.9 2.9 3.44-1.99c.98-.57.98-1.58 0-2.64z" fill="#FBBC05"/>
            <path d="M4.22.14C3.86.02 3.5.06 3.18.24L13.46 10.5l2.56-2.56L4.22.14z" fill="#4285F4"/>
            <path d="M3.18.24C2.46.65 2 1.42 2 2.35v19.3c0 .93.46 1.7 1.18 2.11l.06.04 10.82-10.8v-.26L3.24.2l-.06.04z" fill="#34A853"/>
          </svg>
          <span className="flex flex-col text-left">
            <span className="text-[0.7rem] font-normal text-slate-500 dark:text-slate-400 leading-none mb-0.5">
              Get it on
            </span>
            <span className="text-[1rem] font-bold leading-none">Google Play</span>
          </span>
          <span className="ml-auto text-slate-400 dark:text-slate-500 text-xs font-normal">
            Android
          </span>
        </a>
      </div>

      <p className="mt-10 text-xs text-slate-400 dark:text-slate-600">
        {`\u00A9 ${new Date().getFullYear()} LifeWise. All rights reserved.`}
      </p>
    </main>
  );
}
