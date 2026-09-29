"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

const PhoneMock = dynamic(
  () => import("@/components/PhoneMock").then((m) => m.PhoneMock),
  { ssr: false, loading: () => <PhoneMockSkeleton /> }
);

function PhoneMockSkeleton() {
  return (
    <div
      className="mx-auto aspect-[78/163.4] w-full max-w-[22rem] rounded-[3rem] bg-slate-200/40 dark:bg-slate-700/40"
      aria-hidden
    />
  );
}

function MobileHeroShot({ className }: { className?: string }) {
  return (
    <Image
      src="/app-screens/home.png"
      alt="LifeWise home: Voice Reminder, Scan Bills, and WiseAI"
      width={390}
      height={844}
      priority
      sizes="(max-width: 1024px) 88vw, 420px"
      className={`mx-auto h-auto w-full max-w-[20rem] rounded-[1.75rem] border border-slate-200/80 shadow-xl dark:border-slate-700 ${className ?? ""}`}
    />
  );
}

/** Phone mock is heavy. Phones get the screenshot immediately; desktops load the live mock after first paint. */
export function DeferredPhoneMock({ className }: { className?: string }) {
  const [wide, setWide] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!wide) return;
    let done = false;
    const enable = () => {
      if (done) return;
      done = true;
      setReady(true);
    };
    const idle = window.requestIdleCallback?.(enable, { timeout: 1800 });
    const timer = window.setTimeout(enable, 900);
    return () => {
      window.clearTimeout(timer);
      if (idle != null && window.cancelIdleCallback) window.cancelIdleCallback(idle);
    };
  }, [wide]);

  if (!wide) return <MobileHeroShot className={className} />;
  if (!ready) return <PhoneMockSkeleton />;
  return <PhoneMock className={className} />;
}
