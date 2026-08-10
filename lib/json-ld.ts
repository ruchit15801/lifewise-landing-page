import { FAQ_ITEMS } from "@/lib/faqs";
import { PLAY_STORE_URL, APP_STORE_URL } from "@/lib/stores";
import { FAMILY_HUB_MODULES, FREE_PLAN, PREMIUM_PLAN } from "@/lib/landing-data";
import {
  CONTACT_EMAIL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SUPPORT_PHONE
} from "@/lib/seo";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#software`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    alternateName: ["LifeWise App", "LifeWise Family Operating System", "lifewiseee"],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512
    },
    image: `${SITE_URL}/og-image.svg`,
    description:
      "LifeWise builds the Family Operating System, a mobile app for Indian families to manage health, bills, reminders, and daily routines.",
    email: CONTACT_EMAIL,
    telephone: SUPPORT_PHONE,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACT_EMAIL,
        telephone: SUPPORT_PHONE,
        availableLanguage: ["English", "Hindi", "Gujarati"],
        areaServed: "IN",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00"
        }
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: SUPPORT_PHONE,
        email: CONTACT_EMAIL,
        areaServed: "IN"
      }
    ],
    areaServed: {
      "@type": "Country",
      name: "India"
    },
    knowsAbout: [
      "family health management",
      "medicine reminders",
      "bill payment reminders",
      "caregiver coordination",
      "family expense tracking",
      "AI life assistant"
    ]
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    alternateName: "LifeWise App",
    url: SITE_URL,
    description:
      "Official LifeWise website. Download the Family Operating System app for Android and iOS.",
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN"
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": APP_ID,
    name: SITE_NAME,
    alternateName: `${SITE_NAME} App`,
    applicationCategory: "LifestyleApplication",
    applicationSubCategory: "Family Management",
    operatingSystem: "Android, iOS",
    url: SITE_URL,
    downloadUrl: PLAY_STORE_URL || APP_STORE_URL || SITE_URL,
    screenshot: `${SITE_URL}/og-image.svg`,
    image: `${SITE_URL}/og-image.svg`,
    description:
      "LifeWise is a Family Operating System mobile app. Manage medicine reminders, bills, insurance, documents, health readings, and family routines for every member with Family Hub, WiseAI, and 20 smart modules.",
    featureList: [
      "Family Hub with 20 modules per member",
      "WiseAI family assistant",
      "Voice reminders via OpenAI Whisper",
      "Bill scan OCR",
      "Medicine and bill reminders",
      "Caregiver real-time sync",
      "Money Leak detection",
      "Emergency SOS",
      "Monthly PDF reports",
      ...FAMILY_HUB_MODULES.slice(0, 8)
    ],
    offers: [
      {
        "@type": "Offer",
        name: FREE_PLAN.name,
        price: "0",
        priceCurrency: "INR",
        description: FREE_PLAN.features.join(", ")
      },
      {
        "@type": "Offer",
        name: PREMIUM_PLAN.name,
        price: "199",
        priceCurrency: "INR",
        priceValidUntil: "2027-12-31",
        description: PREMIUM_PLAN.features.join(", ")
      }
    ],
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    countriesSupported: "IN",
    inLanguage: ["en", "hi", "gu", "mr", "ta", "te", "bn"]
  };
}

export function mobileApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: SITE_NAME,
    operatingSystem: "Android, iOS",
    applicationCategory: "LifestyleApplication",
    url: SITE_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR"
    },
    publisher: { "@id": ORG_ID }
  };
}

export function webPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: `${SITE_NAME} – ${SITE_TAGLINE}`,
    description:
      "Official LifeWise landing page. Download the Family Operating System app for medicine reminders, bill alerts, Family Hub, and WiseAI.",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": APP_ID },
    primaryImageOfPage: `${SITE_URL}/og-image.svg`,
    inLanguage: "en-IN",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#lifewise-definition", ".faq-answer"]
    }
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function breadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL
      }
    ]
  };
}

export function homePageSchemas() {
  return [
    organizationSchema(),
    websiteSchema(),
    softwareApplicationSchema(),
    mobileApplicationSchema(),
    webPageSchema(),
    faqPageSchema(),
    breadcrumbSchema()
  ];
}
