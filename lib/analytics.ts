/**
 * GA4 event helpers for the conversion landing flow.
 * Safe no-ops until gtag loads (DeferredAnalytics).
 */

export type CtaLocation = "hero" | "sticky" | "offer" | "footer" | "get";
export type StorePlatform = "android" | "ios" | "desktop" | "unknown";

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag(...args);
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean | undefined>
) {
  const cleaned: Record<string, string | number | boolean> = {};
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      if (v !== undefined) cleaned[k] = v;
    }
  }
  gtag("event", name, cleaned);
}

export function trackHeroView() {
  trackEvent("hero_view");
}

export function trackVideoPlay() {
  trackEvent("video_play");
}

export function trackVideo75() {
  trackEvent("video_75pct");
}

export function trackCtaClick(location: CtaLocation, platform: StorePlatform) {
  trackEvent("cta_click", { location, platform });
}

export function trackStoreRedirect(platform: StorePlatform, location: CtaLocation) {
  trackEvent("store_redirect", { platform, location });
}
