import type { Metadata } from "next";

export const SITE_URL = "https://www.lifewiseee.com";
export const SITE_NAME = "LifeWise";
export const SITE_TAGLINE = "Family Operating System";
export const SITE_LOCALE = "en_IN";

export const DEFAULT_TITLE =
  "LifeWise App – Family Operating System for Medicine, Bills & Health Reminders";

export const DEFAULT_DESCRIPTION =
  "LifeWise is the official Family Operating System app. Manage Papa's medicine, electricity bills, doctor appointments, insurance, and family routines in one place. Family Hub, WiseAI, 20 modules. Free on Android & iOS. Premium from Rs. 199/month.";

export const KEYWORDS = [
  "LifeWise",
  "LifeWise app",
  "LifeWise Family Operating System",
  "lifewiseee",
  "family reminder app India",
  "medicine reminder app for parents",
  "bill reminder app India",
  "family health tracker app",
  "WiseAI family assistant",
  "family hub app",
  "caregiver reminder app",
  "Papa medicine reminder",
  "electricity bill reminder app",
  "family operating system app",
  "AI reminder app India",
  "voice reminder app Hindi",
  "family expense tracker India",
  "senior medicine reminder app",
  "insurance renewal reminder",
  "subscription tracker app India",
  "best family management app India",
  "download LifeWise app",
  "LifeWise Android app",
  "LifeWise iOS app",
  "LifeWise support",
  "LifeWise contact number",
  "LifeWise customer care India"
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

export const ADDRESS = {
  street: "Sector 14",
  city: "Gurugram",
  state: "Haryana",
  pin: "122001",
  country: "India"
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
    alternates: {
      canonical: `${SITE_URL}/`,
      languages: {
        "en-IN": `${SITE_URL}/`,
        en: `${SITE_URL}/`
      }
    },
    robots: {
      index: true,
      follow: true,
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
      locale: SITE_LOCALE.replace("_", "-"),
      url: SITE_URL,
      siteName: SITE_NAME,
      title: `${SITE_NAME} – ${SITE_TAGLINE}`,
      description: DEFAULT_DESCRIPTION,
      images: [
        {
          url: `${SITE_URL}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: "LifeWise – Family Operating System app for medicine, bills and family health reminders"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_NAME} – ${SITE_TAGLINE}`,
      description: DEFAULT_DESCRIPTION,
      images: [`${SITE_URL}/og-image.svg`]
    },
    icons: {
      icon: [{ url: "/icon.png" }],
      apple: [{ url: "/icon.png", sizes: "180x180" }]
    },
    manifest: "/manifest.webmanifest",
    other: {
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-title": SITE_NAME,
      "geo.region": "IN",
      "geo.placename": "India",
      "content-language": "en-IN"
    }
  };
}

export function buildHomeMetadata(): Metadata {
  return {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    alternates: { canonical: `${SITE_URL}/` }
  };
}

export function buildPrivacyMetadata(): Metadata {
  return {
    title: "Privacy Policy – LifeWise India",
    description:
      "LifeWise Privacy Policy for the Family Operating System app. Learn how we collect, use, and protect family health data, bill reminders, SMS permissions, WiseAI, and your rights under Indian law (DPDP Act 2023).",
    alternates: { canonical: `${SITE_URL}/privacy-policy` },
    openGraph: {
      title: "LifeWise Privacy Policy",
      description: "How LifeWise protects your family's health, bill, and reminder data in India.",
      url: `${SITE_URL}/privacy-policy`
    }
  };
}

export function buildTermsMetadata(): Metadata {
  return {
    title: "Terms & Conditions – LifeWise India",
    description:
      "LifeWise Terms and Conditions: app usage rules, Free vs Premium subscriptions (Rs. 199/month), health disclaimers, WiseAI terms, acceptable use, and governing law in India.",
    alternates: { canonical: `${SITE_URL}/terms-and-conditions` },
    openGraph: {
      title: "LifeWise Terms & Conditions",
      description: "Terms of use for the LifeWise Family Operating System mobile app.",
      url: `${SITE_URL}/terms-and-conditions`
    }
  };
}
