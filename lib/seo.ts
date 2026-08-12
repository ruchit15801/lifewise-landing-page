import type { Metadata } from "next";

export const SITE_URL = "https://www.lifewiseee.com";
export const SITE_NAME = "LifeWise";
export const SITE_TAGLINE = "Family Operating System";
export const SITE_LOCALE = "en_IN";

/** Gurugram HQ — used for GEO / LocalBusiness schema */
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

export const DEFAULT_TITLE =
  "LifeWise App – Family Operating System for Medicine, Bills & Health Reminders India";

export const DEFAULT_DESCRIPTION =
  "LifeWise is India's Family Operating System app. Manage Papa's medicine reminders, electricity bills, doctor appointments, insurance, and family routines in one place. Family Hub, WiseAI, 20 modules. Free on Android & iOS. Premium from ₹199/month.";

export const KEYWORDS = [
  "LifeWise",
  "LifeWise app",
  "LifeWise Family Operating System",
  "lifewiseee",
  "lifewiseee.com",
  "family reminder app India",
  "medicine reminder app for parents",
  "medicine reminder app India",
  "bill reminder app India",
  "electricity bill reminder India",
  "family health tracker app",
  "WiseAI family assistant",
  "family hub app India",
  "caregiver reminder app",
  "Papa medicine reminder",
  "family operating system app",
  "AI reminder app India",
  "voice reminder app Hindi",
  "family expense tracker India",
  "senior medicine reminder app",
  "insurance renewal reminder India",
  "subscription tracker app India",
  "best family management app India",
  "download LifeWise app",
  "LifeWise Android app",
  "LifeWise iOS app",
  "LifeWise support",
  "LifeWise contact number",
  "LifeWise customer care India",
  "family app Gurugram",
  "caregiver app for parents India",
  "DPDP compliant family app",
  "Hindi medicine reminder app"
] as const;

/** @deprecated use lib/stores.ts — re-exported for compatibility */
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
  alt: "LifeWise – Family Operating System for Indian families: medicine, bills & Family Hub"
};

export function buildRootMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
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
      title: `${SITE_NAME} – ${SITE_TAGLINE}`,
      description: DEFAULT_DESCRIPTION,
      countryName: "India",
      images: [OG_IMAGE]
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_NAME} – ${SITE_TAGLINE}`,
      description: DEFAULT_DESCRIPTION,
      images: [OG_IMAGE.url]
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.png", type: "image/png" }
      ],
      apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
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
      "revisit-after": "7 days",
      rating: "general",
      distribution: "global",
      coverage: "India",
      target: "all",
      HandheldFriendly: "true"
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
    }
  };
}

export function buildSupportMetadata(): Metadata {
  return {
    title: "Support & Contact – LifeWise India Customer Care",
    description:
      "Contact LifeWise India support: email support@lifewiseee.com, call or WhatsApp +91 63538 91986. Help with medicine reminders, bills, Family Hub, Premium billing. Mon–Sat 9 AM–7 PM IST. English & Hindi.",
    keywords: [
      "LifeWise support",
      "LifeWise customer care",
      "LifeWise contact number",
      "LifeWise WhatsApp",
      "Family Hub help India"
    ],
    alternates: { canonical: `${SITE_URL}/support` },
    openGraph: {
      title: "LifeWise Support – India Customer Care",
      description:
        "Get help with LifeWise Family Operating System: medicine reminders, bills, Family Hub, Premium.",
      url: `${SITE_URL}/support`,
      type: "website",
      locale: "en_IN",
      images: [OG_IMAGE]
    },
    twitter: {
      card: "summary_large_image",
      title: "LifeWise Support – India",
      description:
        "Email, WhatsApp & call LifeWise India support. Mon–Sat 9 AM–7 PM IST.",
      images: [OG_IMAGE.url]
    }
  };
}

export function buildPrivacyMetadata(): Metadata {
  return {
    title: "Privacy Policy – LifeWise India (DPDP Act 2023)",
    description:
      "LifeWise Privacy Policy for the Family Operating System app. How we collect, use, and protect family health data, bill reminders, SMS permissions, WiseAI, and your rights under India's DPDP Act 2023.",
    alternates: { canonical: `${SITE_URL}/privacy-policy` },
    openGraph: {
      title: "LifeWise Privacy Policy – India",
      description:
        "How LifeWise protects your family's health, bill, and reminder data under Indian law.",
      url: `${SITE_URL}/privacy-policy`,
      images: [OG_IMAGE]
    },
    robots: { index: true, follow: true }
  };
}

export function buildTermsMetadata(): Metadata {
  return {
    title: "Terms & Conditions – LifeWise India",
    description:
      "LifeWise Terms and Conditions: app usage rules, Free vs Premium (₹199/month), health disclaimers, WiseAI terms, acceptable use, and governing law in India.",
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
