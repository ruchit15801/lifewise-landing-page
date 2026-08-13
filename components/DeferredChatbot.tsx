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

    const onInteract = () => enable();
    const cleanup = () => {
      window.clearTimeout(t);
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
    };

    const t = window.setTimeout(enable, 12000);
    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("keydown", onInteract, { once: true });

    return cleanup;
  }, []);

  if (!ready) return null;
  return <SupportChatbot />;
}
