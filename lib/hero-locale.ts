export type HeroLang = "gu" | "hi" | "en";

const STORAGE_KEY = "lifewise-hero-lang";
const GEO_CACHE_KEY = "lifewise-hero-lang-geo";
const GEO_TTL_MS = 1000 * 60 * 60 * 24; // 24h

const GUJARAT_MARKERS = [
  "gujarat",
  "gj",
  "ahmedabad",
  "amdavad",
  "surat",
  "vadodara",
  "baroda",
  "rajkot",
  "bhavnagar",
  "jamnagar",
  "gandhinagar",
  "anand",
  "mehsana",
  "bhuj",
  "junagadh"
];

function isGujaratRegion(region: string, city: string): boolean {
  const hay = `${region} ${city}`.toLowerCase();
  return GUJARAT_MARKERS.some((m) => hay.includes(m));
}

export function isHeroLang(value: string | null | undefined): value is HeroLang {
  return value === "gu" || value === "hi" || value === "en";
}

/** Manual override from language toggle  sticky across visits. */
export function readSavedHeroLang(): HeroLang | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return isHeroLang(v) ? v : null;
  } catch {
    return null;
  }
}

export function saveHeroLang(lang: HeroLang) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // ignore
  }
}

function readCachedGeoLang(): HeroLang | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(GEO_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { lang?: string; at?: number };
    if (!parsed.at || Date.now() - parsed.at > GEO_TTL_MS) return null;
    return isHeroLang(parsed.lang) ? parsed.lang : null;
  } catch {
    return null;
  }
}

function writeCachedGeoLang(lang: HeroLang) {
  try {
    window.sessionStorage.setItem(
      GEO_CACHE_KEY,
      JSON.stringify({ lang, at: Date.now() })
    );
  } catch {
    // ignore
  }
}

function fallbackFromBrowser(): HeroLang {
  const nav = (navigator.language || "").toLowerCase();
  if (nav.startsWith("gu")) return "gu";
  if (nav.startsWith("hi")) return "hi";

  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (tz === "Asia/Kolkata" || tz === "Asia/Calcutta") return "hi";
  } catch {
    // ignore
  }

  return "en";
}

type GeoPayload = {
  country_code?: string;
  country?: string;
  region?: string;
  regionName?: string;
  region_code?: string;
  city?: string;
  success?: boolean;
};

async function fetchIpGeo(): Promise<GeoPayload | null> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 2800);
  try {
    // ipwho.is  no API key, CORS-friendly
    const res = await fetch("https://ipwho.is/", {
      signal: controller.signal,
      cache: "no-store"
    });
    if (!res.ok) return null;
    const data = (await res.json()) as GeoPayload & { success?: boolean };
    if (data.success === false) return null;
    return data;
  } catch {
    return null;
  } finally {
    window.clearTimeout(timer);
  }
}

/**
 * Gujarat → Gujarati, rest of India → Hindi, outside India → English.
 * Manual localStorage override always wins.
 */
export async function detectHeroLang(): Promise<HeroLang> {
  const saved = readSavedHeroLang();
  if (saved) return saved;

  const cached = readCachedGeoLang();
  if (cached) return cached;

  const geo = await fetchIpGeo();
  if (geo) {
    const country = (geo.country_code || "").toUpperCase();
    const region = `${geo.region || ""} ${geo.regionName || ""} ${geo.region_code || ""}`;
    const city = geo.city || "";

    let lang: HeroLang = "en";
    if (country === "IN") {
      lang = isGujaratRegion(region, city) ? "gu" : "hi";
    }

    writeCachedGeoLang(lang);
    return lang;
  }

  const fallback = fallbackFromBrowser();
  writeCachedGeoLang(fallback);
  return fallback;
}
