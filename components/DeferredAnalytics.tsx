"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

/**
 * Load AdSense + GA only after idle / first interaction.
 * Keeps first paint + TBT cleaner for PageSpeed / Lighthouse.
 */
export function DeferredAnalytics() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let loaded = false;
    const enable = () => {
      if (loaded) return;
      loaded = true;
      setReady(true);
      cleanup();
    };

    const onInteract = () => enable();
    const cleanup = () => {
      window.removeEventListener("scroll", onInteract);
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.clearTimeout(timer);
    };

    window.addEventListener("scroll", onInteract, { once: true, passive: true });
    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("keydown", onInteract, { once: true });

    const timer = window.setTimeout(enable, 6000);

    if ("requestIdleCallback" in window) {
      (
        window as Window & {
          requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number;
        }
      ).requestIdleCallback(() => enable(), { timeout: 8000 });
    }

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
