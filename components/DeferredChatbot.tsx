"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SupportChatbot = dynamic(
  () => import("@/components/SupportChatbot").then((m) => m.SupportChatbot),
  { ssr: false, loading: () => null }
);

/** Mount chatbot after idle so it does not block TBT / LCP. */
export function DeferredChatbot() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let done = false;
    const enable = () => {
      if (done) return;
      done = true;
      setReady(true);
    };

    const t = window.setTimeout(enable, 3500);
    const onInteract = () => enable();
    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("scroll", onInteract, { once: true, passive: true });

    if ("requestIdleCallback" in window) {
      (
        window as Window & {
          requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number;
        }
      ).requestIdleCallback(enable, { timeout: 5000 });
    }

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("scroll", onInteract);
    };
  }, []);

  if (!ready) return null;
  return <SupportChatbot />;
}
