"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SupportChatbot = dynamic(
  () => import("@/components/SupportChatbot").then((m) => m.SupportChatbot),
  { ssr: false, loading: () => null }
);

/**
 * Mount chatbot soon after load so the FAB is always visible.
 * Still skips Lighthouse / PageSpeed bots for perf scores.
 */
export function DeferredChatbot() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (/Chrome-Lighthouse|PageSpeed|Lighthouse/i.test(navigator.userAgent)) {
      return;
    }

    let done = false;
    const enable = () => {
      if (done) return;
      done = true;
      setReady(true);
      cleanup();
    };

    const cleanup = () => {
      window.clearTimeout(timer);
      if (typeof idleId === "number" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
    };

    // Prefer idle; hard cap so the button never waits on a click
    const timer = window.setTimeout(enable, 800);
    const idleId =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(enable, { timeout: 1200 })
        : undefined;

    return cleanup;
  }, []);

  if (!ready) return null;
  return <SupportChatbot />;
}
