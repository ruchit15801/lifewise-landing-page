import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/stores";
import type { StorePlatform } from "@/lib/analytics";
import { SITE_URL } from "@/lib/seo";

/** Canonical smart-install page — phone scan auto-detects iOS / Android. */
export const GET_APP_URL = `${SITE_URL.replace(/\/$/, "")}/get`;

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid"
] as const;

export function detectPlatform(
  ua = typeof navigator !== "undefined" ? navigator.userAgent : ""
): StorePlatform {
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  // iPadOS 13+ often reports as Macintosh with touch
  if (
    typeof navigator !== "undefined" &&
    /Macintosh/i.test(ua) &&
    navigator.maxTouchPoints > 1
  ) {
    return "ios";
  }
  if (/Android/i.test(ua)) return "android";
  if (ua) return "desktop";
  return "unknown";
}

export function readUtmParams(
  search = typeof window !== "undefined" ? window.location.search : ""
): Record<string, string> {
  const params = new URLSearchParams(search);
  const out: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) out[key] = value;
  }
  return out;
}

/** Play Store referrer encoding: utm_source%3D...&utm_medium%3D... */
export function buildPlayReferrer(utm: Record<string, string>): string {
  const parts = Object.entries(utm).map(
    ([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`
  );
  return parts.join("&");
}

export function buildStoreUrl(
  platform: "android" | "ios",
  utm: Record<string, string> = {}
): string {
  if (platform === "android") {
    const url = new URL(PLAY_STORE_URL);
    if (Object.keys(utm).length > 0) {
      url.searchParams.set("referrer", buildPlayReferrer(utm));
    }
    return url.toString();
  }

  const url = new URL(APP_STORE_URL);
  if (utm.utm_campaign) url.searchParams.set("ct", utm.utm_campaign);
  if (utm.utm_source) url.searchParams.set("pt", utm.utm_source);
  return url.toString();
}

/** Absolute /get URL with UTMs — used by QR and desktop CTA. */
export function buildGetAppUrl(utm: Record<string, string> = {}): string {
  const url = new URL(GET_APP_URL);
  for (const [k, v] of Object.entries(utm)) url.searchParams.set(k, v);
  return url.toString();
}

export function preferredStoreUrl(
  platform: StorePlatform,
  utm: Record<string, string> = {}
): string {
  if (platform === "ios") return buildStoreUrl("ios", utm);
  if (platform === "android") return buildStoreUrl("android", utm);
  return buildGetAppUrl(utm);
}

export function qrCodeUrl(data: string, size = 128): string {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`;
}
