import type { Metadata } from "next";
import {
  PLAY_APP_TITLE,
  PLAY_DISAMBIGUATION,
  PLAY_KEYWORDS,
  PLAY_SHORT_DESCRIPTION,
  assertPlayListingLimits
} from "@/lib/play-listing";

assertPlayListingLimits();

export const SITE_URL = "https://www.lifewiseee.com";
export const SITE_NAME = "LifeWise";
export const SITE_TAGLINE = "Family Operating System";
export const SITE_LOCALE = "en_IN";

/** Gurugram HQ - used for GEO / LocalBusiness schema */
export const ADDRESS = {
  street: "Sector 14",
  city: "Gurugram",
  state: "Haryana",
  pin: "122001",
  country: "India",
  countryCode: "IN",
  /** Approximate coordinates for Sector 14, Gurugram */
  latitude: 28.4601,
  longitude: 77.0266
} as const;

/**
 * SERP title - brand-first so "LifeWise" queries match official site.
 * ~60 chars ideal for Google title display.
 */
export const DEFAULT_TITLE =
  "LifeWise App - Official Family OS India | Medicine & Bill Reminder";

/**
 * Meta description: brand + Play package + high-intent keywords for CTR.
 */
export const DEFAULT_DESCRIPTION =
  "Official LifeWise app (lifewiseee.com / com.lifewise). India's Family Operating System for Papa medicine reminders, bijli bill alerts, Family Hub & WiseAI. Free on Google Play. Premium ₹199/mo. Gurugram, India.";

export const KEYWORDS = [
  ...PLAY_KEYWORDS,
  // Brand / entity (people type "LifeWise" alone)
  "LifeWise",
  "lifewise",
  "LifeWise app",
  "LifeWise app India",
  "LifeWise official",
  "LifeWise official website",
  "LifeWise website",
  "what is LifeWise",
  "LifeWise kya hai",
  "LifeWise Family OS",
  "LifeWise Family Operating System",
  "LifeWise India",
  "lifewiseee",
  "lifewiseee.com",
  "www.lifewiseee.com",
  "com.lifewise",
  "LifeWise Google Play",
  "download LifeWise app",
  "LifeWise Android app",
  "LifeWise Play Store",
  // Product intent
  "family management app India",
  "best family management app India",
  "family hub app India",
  "family reminder app India",
  "caregiver app for parents India",
  "caregiver reminder app",
  "family app for parents",
  "medicine reminder app for parents",
  "Mummy medicine reminder",
  "senior medicine reminder app",
  "dawai reminder app",
  "tablet reminder app India",
  "family health tracker app",
  "health reminder app Hindi",
  "utility bill reminder app",
  "insurance renewal reminder India",
  "subscription tracker app India",
  "family expense tracker India",
  "scan bill OCR app India",
  "WiseAI family assistant",
  "AI reminder app India",
  "voice reminder app Hindi",
  "Hindi medicine reminder app",
  "Gujarati family app",
  // GEO
  "family app Gurugram",
  "family app Delhi NCR",
  "family app Mumbai",
  "family app Ahmedabad",
  "family app Bengaluru",
  "LifeWise Gurugram",
  // Support / trust
  "LifeWise support",
  "LifeWise contact number",
  "LifeWise customer care India",
  "LifeWise WhatsApp support",
  "DPDP compliant family app",
  "LifeWise Premium 199"
] as const;

/** @deprecated use lib/stores.ts - re-exported for compatibility */
export { PLAY_STORE_URL, APP_STORE_URL, STORES_ARE_LIVE } from "@/lib/stores";

export { FAQ_ITEMS } from "@/lib/faqs";
export {
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
  SUPPORT_PHONE_DISPLAY,
  WHATSAPP_URL,
  TEL_URL,
  SUPPORT_HOURS
} from "@/lib/support";

export const CONTACT_EMAIL = "support@lifewiseee.com";

const OG_IMAGE = {
  url: "/og-image.svg",
  width: 1200,
  height: 630,
  alt: `${PLAY_APP_TITLE} - medicine reminder, bill reminder & Family Hub for Indian families`
};

export function buildRootMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: PLAY_APP_TITLE,
    title: {
      default: DEFAULT_TITLE,
      template: `%s | ${SITE_NAME}`
    },
    description: DEFAULT_DESCRIPTION,
    keywords: [...KEYWORDS],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "technology",
    classification: "Family Operating System / Lifestyle Mobile Application",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    alternates: {
      canonical: `${SITE_URL}/`,
      languages: {
        "en-IN": `${SITE_URL}/`,
        en: `${SITE_URL}/`,
        "x-default": `${SITE_URL}/`
      },
      types: {
        "text/plain": [
          { url: `${SITE_URL}/llms.txt`, title: "LLM-readable site summary" },
          { url: `${SITE_URL}/llms-full.txt`, title: "Full LLM reference" }
        ]
      }
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      alternateLocale: ["en_US", "hi_IN"],
      url: SITE_URL,
      siteName: SITE_NAME,
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      countryName: "India",
      images: [OG_IMAGE]
    },
    twitter: {
      card: "summary_large_image",
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      images: [OG_IMAGE.url]
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: ["/favicon.ico"]
    },
    manifest: "/manifest.webmanifest",
    other: {
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-title": SITE_NAME,
      "geo.region": "IN-HR",
      "geo.placename": `${ADDRESS.city}, ${ADDRESS.state}, India`,
      "geo.position": `${ADDRESS.latitude};${ADDRESS.longitude}`,
      ICBM: `${ADDRESS.latitude}, ${ADDRESS.longitude}`,
      "content-language": "en-IN",
      "revisit-after": "3 days",
      rating: "general",
      distribution: "global",
      coverage: "India",
      target: "all",
      HandheldFriendly: "true",
      "google-play-app": "app-id=com.lifewise",
      "application-name": PLAY_APP_TITLE
    }
  };
}

export function buildHomeMetadata(): Metadata {
  return {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    keywords: [...KEYWORDS],
    alternates: {
      canonical: `${SITE_URL}/`,
      languages: {
        "en-IN": `${SITE_URL}/`,
        en: `${SITE_URL}/`,
        "x-default": `${SITE_URL}/`
      }
    },
    openGraph: {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      url: `${SITE_URL}/`,
      type: "website",
      locale: "en_IN",
      images: [OG_IMAGE]
    },
    twitter: {
      card: "summary_large_image",
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      images: [OG_IMAGE.url]
    },
    other: {
      "al:android:url": "https://play.google.com/store/apps/details?id=com.lifewise",
      "al:android:package": "com.lifewise",
      "al:android:app_name": PLAY_APP_TITLE
    }
  };
}

export function buildSupportMetadata(): Metadata {
  return {
    title: "Support & Contact - LifeWise India Customer Care",
    description:
      "Contact LifeWise (Family OS) India support: support@lifewiseee.com, WhatsApp/call +91 63538 91986. Help with medicine reminders, bills, Family Hub, Premium. Mon-Sat 9 AM-7 PM IST.",
    keywords: [
      "LifeWise support",
      "LifeWise customer care",
      "LifeWise contact number",
      "LifeWise WhatsApp",
      "Family Hub help India",
      "com.lifewise support"
    ],
    alternates: { canonical: `${SITE_URL}/support` },
    openGraph: {
      title: "LifeWise Support - India Customer Care",
      description:
        "Get help with LifeWise: Family OS for medicine reminders, bills, Family Hub, Premium.",
      url: `${SITE_URL}/support`,
      type: "website",
      locale: "en_IN",
      images: [OG_IMAGE]
    },
    twitter: {
      card: "summary_large_image",
      title: "LifeWise Support - India",
      description:
        "Email, WhatsApp & call LifeWise India support. Mon-Sat 9 AM-7 PM IST.",
      images: [OG_IMAGE.url]
    }
  };
}

export function buildPrivacyMetadata(): Metadata {
  return {
    title: "Privacy Policy - LifeWise India (DPDP Act 2023)",
    description:
      "LifeWise (com.lifewise) Privacy Policy for the Family Operating System app. How we collect, use, and protect family health data, bill reminders, SMS permissions, WiseAI, and your rights under India's DPDP Act 2023.",
    alternates: { canonical: `${SITE_URL}/privacy-policy` },
    openGraph: {
      title: "LifeWise Privacy Policy - India",
      description:
        "How LifeWise protects your family's health, bill, and reminder data under Indian law.",
      url: `${SITE_URL}/privacy-policy`,
      images: [OG_IMAGE]
    },
    robots: { index: true, follow: true }
  };
}

export function buildNotFoundMetadata(): Metadata {
  const title = "Page not found (404) | LifeWise Family OS";
  const description =
    "This LifeWise page does not exist. Go to the official Family OS site for medicine reminders, bill alerts, Family Hub, WiseAI, or contact support.";

  return {
    title,
    description,
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: false,
        follow: true,
        noimageindex: true
      }
    },
    alternates: {
      canonical: `${SITE_URL}/`
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/`,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      images: [OG_IMAGE]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url]
    }
  };
}

export function buildTermsMetadata(): Metadata {
  return {
    title: "Terms & Conditions - LifeWise India",
    description:
      "LifeWise Terms and Conditions: app usage rules, Free vs Premium (₹199/month), health disclaimers, WiseAI terms, acceptable use, and governing law in India. Package: com.lifewise.",
    alternates: { canonical: `${SITE_URL}/terms-and-conditions` },
    openGraph: {
      title: "LifeWise Terms & Conditions",
      description:
        "Terms of use for the LifeWise Family Operating System mobile app in India.",
      url: `${SITE_URL}/terms-and-conditions`,
      images: [OG_IMAGE]
    },
    robots: { index: true, follow: true }
  };
}

/** Exported for AEO / FAQ disambiguation snippets */
export { PLAY_DISAMBIGUATION, PLAY_APP_TITLE, PLAY_SHORT_DESCRIPTION };
