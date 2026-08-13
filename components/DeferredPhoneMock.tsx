"use client";

import dynamic from "next/dynamic";
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

/** Load phone mock after first paint so it does not compete with LCP/TBT. */
export function DeferredPhoneMock({ className }: { className?: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let done = false;
    const enable = () => {
      if (done) return;
      done = true;
      setReady(true);
    };

    const t = window.setTimeout(enable, 1200);
    if ("requestIdleCallback" in window) {
      (
        window as Window & {
          requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number;
        }
      ).requestIdleCallback(enable, { timeout: 2000 });
    }

    return () => window.clearTimeout(t);
  }, []);

  if (!ready) return <PhoneMockSkeleton />;
  return <PhoneMock className={className} />;
}
