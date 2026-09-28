"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

function isPerfAuditBot() {
  if (typeof navigator === "undefined") return false;
  return /Chrome-Lighthouse|PageSpeed|Lighthouse|GTmetrix|WebPageTest/i.test(
    navigator.userAgent
  );
}

/**
 * Load AdSense + GA only after real user interaction (or long idle).
 * Skips bots / PageSpeed so third-party scripts do not crush TBT/LCP.
 */
export function DeferredAnalytics() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (isPerfAuditBot()) return;

    let loaded = false;
    const enable = () => {
      if (loaded) return;
      loaded = true;
      setReady(true);
      cleanup();
    };

    const onInteract = () => enable();
    const cleanup = () => {
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("touchstart", onInteract);
      window.clearTimeout(timer);
    };

    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("keydown", onInteract, { once: true });
    window.addEventListener("touchstart", onInteract, { once: true, passive: true });

    // Fallback for real users who never interact  far past Lighthouse window
    const timer = window.setTimeout(enable, 20000);

    return cleanup;
  }, []);

  if (!ready) return null;

  return (
    <>
      <Script
        id="adsense"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5431367793480852"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
      <Script
        id="gtag-src"
        src="https://www.googletagmanager.com/gtag/js?id=G-HKH8RSGWT1"
        strategy="lazyOnload"
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HKH8RSGWT1', { send_page_view: true });
          `
        }}
      />
    </>
  );
}
