import { FAQ_ITEMS, SUPPORT_FAQ_ITEMS, type FaqItem } from "@/lib/faqs";
import { APP_STORE_ID, APP_STORE_NAME, APP_STORE_URL, PLAY_STORE_URL } from "@/lib/stores";
import {
  PLAY_APP_TITLE,
  PLAY_DISAMBIGUATION,
  PLAY_PACKAGE_ID,
  PLAY_SHORT_DESCRIPTION
} from "@/lib/play-listing";
import {
  FAMILY_HUB_MODULES,
  FAMILY_PLAN,
  FREE_PLAN,
  PRO_PLAN,
  STARTER_PLAN
} from "@/lib/landing-data";
import { APP_AGGREGATE_RATING, APP_REVIEWS } from "@/lib/reviews";
import {
  CONTACT_EMAIL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SUPPORT_PHONE
} from "@/lib/seo";

function aggregateRatingSchema() {
  if (!APP_AGGREGATE_RATING) return undefined;
  return {
    "@type": "AggregateRating",
    ratingValue: String(APP_AGGREGATE_RATING.ratingValue),
    reviewCount: String(APP_AGGREGATE_RATING.reviewCount),
    ratingCount: String(APP_AGGREGATE_RATING.ratingCount),
    bestRating: String(APP_AGGREGATE_RATING.bestRating),
    worstRating: String(APP_AGGREGATE_RATING.worstRating)
  };
}

function reviewSchemas(itemId: string) {
  if (APP_REVIEWS.length === 0) return undefined;
  return APP_REVIEWS.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author
    },
    datePublished: review.datePublished,
    name: review.title,
    reviewBody: review.body,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(review.rating),
      bestRating: "5",
      worstRating: "1"
    },
    itemReviewed: { "@id": itemId }
  }));
}

/** Drop undefined keys so empty reviews do not emit invalid schema fields */
function withReviews<T extends Record<string, unknown>>(schema: T): T {
  const rating = aggregateRatingSchema();
  const reviews = reviewSchemas(
    String(schema["@id"] ?? `${SITE_URL}/#software`)
  );
  return {
    ...schema,
    ...(rating ? { aggregateRating: rating } : {}),
    ...(reviews ? { review: reviews } : {})
  };
}

function subscriptionOffers() {
  const until = "2027-12-31";
  const offer = (
    name: string,
    price: string,
    description: string,
    billed: "Month" | "Year"
  ) => ({
    "@type": "Offer" as const,
    name,
    price,
    priceCurrency: "INR",
    priceValidUntil: until,
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#pricing`,
    description,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price,
      priceCurrency: "INR",
      billingDuration: 1,
      billingIncrement: 1,
      unitCode: billed === "Month" ? "MON" : "ANN"
    }
  });

  return [
    offer("Free", "0", FREE_PLAN.features.join(", "), "Month"),
    offer("Starter monthly", String(STARTER_PLAN.monthlyInr), STARTER_PLAN.features.join(", "), "Month"),
    offer("Starter yearly", String(STARTER_PLAN.yearlyInr), STARTER_PLAN.features.join(", "), "Year"),
    offer("Family monthly", String(FAMILY_PLAN.monthlyInr), FAMILY_PLAN.features.join(", "), "Month"),
    offer("Family yearly", String(FAMILY_PLAN.yearlyInr), FAMILY_PLAN.features.join(", "), "Year"),
    offer("Pro monthly", String(PRO_PLAN.monthlyInr), PRO_PLAN.features.join(", "), "Month"),
    offer("Pro yearly", String(PRO_PLAN.yearlyInr), PRO_PLAN.features.join(", "), "Year")
  ];
}

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#software`;
const LOCAL_ID = `${SITE_URL}/#localbusiness`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: SITE_NAME,
    alternateName: [
      "LifeWise - AI Family Hub",
      "LifeWise AI Family Hub",
      "lifewise-ai-family-hub",
      "LifeWise App",
      "LifeWise India",
      "LifeWise",
      "lifewise",
      "lifewiseee",
      "lifewiseee.com",
      "com.lifewise"
    ],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
      caption: "LifeWise logo"
    },
    image: `${SITE_URL}/og-image.svg`,
    description:
      "LifeWise (lifewiseee.com) is the official LifeWise - AI Family Hub app for medicine reminders, bill alerts, Family Hub, and WiseAI. Google Play package: com.lifewise. App Store listing: LifeWise - AI Family Hub. Not affiliated with LifeWise Student Insurance.",
    email: CONTACT_EMAIL,
    telephone: SUPPORT_PHONE,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN"
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        "@id": `${SITE_URL}/#customer-support`,
        contactType: "customer support",
        email: CONTACT_EMAIL,
        telephone: SUPPORT_PHONE,
        availableLanguage: ["English", "Hindi", "Gujarati", "Marathi"],
        areaServed: {
          "@type": "Country",
          name: "India"
        }
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: SUPPORT_PHONE,
        email: CONTACT_EMAIL,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"]
      }
    ],
    areaServed: {
      "@type": "Country",
      name: "India"
    },
    knowsAbout: [
      "LifeWise",
      "LifeWise - AI Family Hub",
      "LifeWise AI Family Hub",
      "Family Hub",
      "family health management",
      "medicine reminders for parents",
      "bill payment reminders India",
      "caregiver coordination",
      "family expense tracking",
      "Family Ledger",
      "Family Location",
      "Apple Health",
      "Health Connect",
      "WiseAI",
      "Family Hub",
      "AI life assistant",
      "DPDP Act compliant family apps"
    ],
    slogan: SITE_TAGLINE,
    brand: {
      "@type": "Brand",
      name: SITE_NAME
    },
    sameAs: [
      PLAY_STORE_URL,
      APP_STORE_URL,
      "https://x.com/lifewiseeapp",
      "https://discord.gg/XFzhXWBan",
      "https://www.instagram.com/lifewiseapp/",
      "https://www.youtube.com/@LifeWiseApp"
    ].filter(Boolean),
    identifier: PLAY_PACKAGE_ID
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": LOCAL_ID,
    name: `${SITE_NAME} India Support`,
    url: `${SITE_URL}/support`,
    image: `${SITE_URL}/logo.png`,
    telephone: SUPPORT_PHONE,
    email: CONTACT_EMAIL,
    priceRange: "INR 0-1999",
    areaServed: {
      "@type": "Country",
      name: "India"
    },
    parentOrganization: { "@id": ORG_ID },
    availableLanguage: ["English", "Hindi", "Gujarati"]
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: APP_STORE_NAME,
    alternateName: [
      "LifeWise App",
      "LifeWise AI Family Hub",
      "lifewise-ai-family-hub",
      "lifewiseee.com",
      "com.lifewise"
    ],
    url: SITE_URL,
    description:
      "Official LifeWise website (lifewiseee.com). Download LifeWise - AI Family Hub on Google Play (com.lifewise) and the App Store for medicine reminders, bill alerts, Family Hub, and WiseAI.",
    publisher: { "@id": ORG_ID },
    inLanguage: ["en-IN", "en", "hi"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/support?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function softwareApplicationSchema() {
  return withReviews({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": APP_ID,
    name: PLAY_APP_TITLE,
    alternateName: [
      "LifeWise",
      "LifeWise App",
      "LifeWise AI Family Hub",
      "lifewise-ai-family-hub",
      PLAY_PACKAGE_ID
    ],
    applicationCategory: "LifestyleApplication",
    applicationSubCategory: "Family Management",
    operatingSystem: "Android, iOS",
    url: SITE_URL,
    downloadUrl: PLAY_STORE_URL || APP_STORE_URL || SITE_URL,
    installUrl: PLAY_STORE_URL || APP_STORE_URL || SITE_URL,
    screenshot: `${SITE_URL}/og-image.svg`,
    image: `${SITE_URL}/og-image.svg`,
    identifier: PLAY_PACKAGE_ID,
    softwareVersion: "1.0",
    description: `${PLAY_SHORT_DESCRIPTION} ${PLAY_DISAMBIGUATION}`,
    featureList: [
      "Family Hub with member cards and 20 modules per member",
      "Family Ledger for shared family money",
      "Consent-based Family Location",
      "Health Monitoring with Apple Health and Health Connect",
      "WiseAI family assistant",
      "Voice reminders via OpenAI Whisper",
      "Bill scan OCR",
      "Medicine and bill reminders with caregiver escalation",
      "Caregiver real-time sync",
      "Smart Automation workflows",
      "Money Leak detection",
      "Emergency SOS",
      "Monthly PDF reports",
      ...FAMILY_HUB_MODULES.slice(0, 8)
    ],
    offers: subscriptionOffers(),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    countriesSupported: "IN",
    inLanguage: ["en", "hi", "gu", "mr", "ta", "te", "bn"],
    audience: {
      "@type": "Audience",
      geographicArea: {
        "@type": "Country",
        name: "India"
      }
    },
    sameAs: [
      PLAY_STORE_URL,
      APP_STORE_URL,
      "https://x.com/lifewiseeapp",
      "https://www.instagram.com/lifewiseapp/",
      "https://www.youtube.com/@LifeWiseApp"
    ].filter(Boolean)
  });
}

export function productSchema() {
  const productId = `${SITE_URL}/#product`;
  return withReviews({
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": productId,
    name: PLAY_APP_TITLE,
    description: PLAY_SHORT_DESCRIPTION,
    brand: { "@type": "Brand", name: SITE_NAME },
    category: "Family Management Software",
    image: `${SITE_URL}/og-image.svg`,
    url: SITE_URL,
    sku: PLAY_PACKAGE_ID,
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "3999",
      priceCurrency: "INR",
      offerCount: 7,
      availability: "https://schema.org/InStock",
      url: PLAY_STORE_URL || SITE_URL
    },
    isRelatedTo: { "@id": APP_ID },
    sameAs: [PLAY_STORE_URL, APP_STORE_URL].filter(Boolean)
  });
}

export function mobileApplicationSchema() {
  return withReviews({
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "@id": `${SITE_URL}/#mobile-app`,
    name: PLAY_APP_TITLE,
    alternateName: ["LifeWise", PLAY_PACKAGE_ID],
    operatingSystem: "Android",
    applicationCategory: "LifestyleApplication",
    url: SITE_URL,
    downloadUrl: PLAY_STORE_URL || SITE_URL,
    installUrl: PLAY_STORE_URL || SITE_URL,
    identifier: PLAY_PACKAGE_ID,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      url: PLAY_STORE_URL || SITE_URL
    },
    publisher: { "@id": ORG_ID },
    countriesSupported: "IN",
    sameAs: [
      PLAY_STORE_URL,
      APP_STORE_URL,
      "https://x.com/lifewiseeapp",
      "https://www.instagram.com/lifewiseapp/",
      "https://www.youtube.com/@LifeWiseApp"
    ].filter(Boolean)
  });
}

export function iosApplicationSchema() {
  return withReviews({
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "@id": `${SITE_URL}/#ios-app`,
    name: PLAY_APP_TITLE,
    alternateName: ["LifeWise", APP_STORE_NAME, "lifewise-ai-family-hub"],
    operatingSystem: "iOS",
    applicationCategory: "LifestyleApplication",
    url: SITE_URL,
    downloadUrl: APP_STORE_URL || SITE_URL,
    installUrl: APP_STORE_URL || SITE_URL,
    identifier: APP_STORE_ID,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      url: APP_STORE_URL || SITE_URL
    },
    publisher: { "@id": ORG_ID },
    countriesSupported: "IN",
    sameAs: [APP_STORE_URL].filter(Boolean)
  });
}

export function webPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: `${PLAY_APP_TITLE} - Medicine & Bill Reminder App India | Family Hub`,
    description: PLAY_SHORT_DESCRIPTION,
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": APP_ID }, { "@id": `${SITE_URL}/#family-operating-system` }],
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og-image.svg`
    },
    inLanguage: "en-IN",
    dateModified: new Date().toISOString().slice(0, 10),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#lifewise-definition", ".faq-answer", "#why-lifewise h2", "#features h2", "#family h2"]
    },
    significantLink: [
      PLAY_STORE_URL,
      APP_STORE_URL,
      `${SITE_URL}/support`,
      `${SITE_URL}/privacy-policy`,
      `${SITE_URL}/terms-and-conditions`,
      `${SITE_URL}/llms.txt`,
      `${SITE_URL}/llms-full.txt`
    ].filter(Boolean)
  };
}

export function faqPageSchema(
  pageUrl = `${SITE_URL}/#faq`,
  items: FaqItem[] = FAQ_ITEMS
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": pageUrl,
    url: pageUrl.includes("#") ? SITE_URL : pageUrl,
    inLanguage: "en-IN",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function howToMedicineSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to set a medicine reminder for Papa in LifeWise",
    description:
      "Create a medicine reminder for a parent using LifeWise Family Hub on Android or iOS.",
    inLanguage: "en-IN",
    totalTime: "PT3M",
    tool: {
      "@type": "HowToTool",
      name: "LifeWise mobile app"
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open Family Hub",
        text: "Open LifeWise and go to Family Hub. Select Papa's member profile."
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Enable Medicine module",
        text: "Turn on the Medicine module for that member if it is not already enabled."
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Add reminder",
        text: "Add medicine name, dose, and time, or use Voice Reminder and say it in Hindi or English."
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Invite caregiver",
        text: "Invite a caregiver so missed doses sync in real time across the family."
      }
    ]
  };
}

export function howToBillSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to scan and track an electricity bill in LifeWise",
    description:
      "Use LifeWise Bill Scan OCR to extract due date and amount from an Indian utility bill.",
    inLanguage: "en-IN",
    totalTime: "PT2M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Tap Scan Bill",
        text: "From the LifeWise home screen, tap Scan Bill."
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Capture the bill",
        text: "Photograph the electricity or utility bill. OCR extracts name, amount, and due date."
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Save reminder",
        text: "Confirm the details and save. LifeWise reminds the family before the due date."
      }
    ]
  };
}

/** AEO: define the product category term for answer engines */
export function definedTermSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${SITE_URL}/#family-operating-system`,
    name: "Family Operating System",
    alternateName: ["FOS", "Family OS", "LifeWise Family Operating System"],
    description:
      "A Family Operating System is a mobile app that lets one household manage every member's medicine reminders, bills, health (including Apple Health and Health Connect), Family Ledger, documents, Family Location, and daily routines from a single Family Hub. LifeWise is India's Family Operating System at lifewiseee.com.",
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "LifeWise product glossary",
      url: SITE_URL
    }
  };
}

/** Visible ranking features as ItemList for rich results / AEO */
export function featureItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/#why-lifewise`,
    name: "Why LifeWise - unique Family Operating System features",
    description:
      "Why Indian families choose LifeWise: Family Hub member cards, caregiver escalation, Family Ledger, consent-based location, health sync, and WiseAI.",
    numberOfItems: 6,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Family Hub member cards",
        description:
          "Every medicine, bill, health reading, Family Ledger entry, and location share belongs to a family member, not a personal inbox."
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Medicine reminder with caregiver routing",
        description:
          "Papa and Mummy medicine reminders in English or Hindi with missed-dose alerts to connected caregivers."
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Bill Management plus Family Ledger",
        description:
          "Due-date bills stay separate from family money events. Bijli scan OCR and optional ledger posting."
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Health Monitoring and wearables",
        description:
          "Manual logs plus Apple Health and Health Connect on the member card. Family sharing is a separate permission."
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "WiseAI family assistant",
        description:
          "AI assistant for reminders, Family Ledger, and appointments with Hindi voice commands."
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Consent-based Family Location",
        description:
          "Opt-in sharing, Safe Places, pause in one tap. Built for Indian households with Hindi, Gujarati, and more."
      }
    ]
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/support#webpage`,
    url: `${SITE_URL}/support`,
    name: "LifeWise Support & Contact - India",
    description:
      "Contact LifeWise India customer care by email, WhatsApp, or phone for Family Hub, medicine reminders, bills, and billing help.",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-IN",
    mainEntity: { "@id": LOCAL_ID }
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[] = [{ name: "Home", path: "/" }]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`
    }))
  };
}

/** Home page - Org/Website already in root layout; avoid duplicates */
export function homePageSchemas() {
  return [
    softwareApplicationSchema(),
    mobileApplicationSchema(),
    iosApplicationSchema(),
    productSchema(),
    webPageSchema(),
    definedTermSchema(),
    featureItemListSchema(),
    faqPageSchema(),
    howToMedicineSchema(),
    howToBillSchema(),
    localBusinessSchema(),
    breadcrumbSchema([{ name: "Home", path: "/" }])
  ];
}

export function supportPageSchemas() {
  return [
    contactPageSchema(),
    localBusinessSchema(),
    faqPageSchema(`${SITE_URL}/support#faq`, SUPPORT_FAQ_ITEMS),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Support", path: "/support" }
    ])
  ];
}

export function legalPageSchemas(opts: {
  path: string;
  name: string;
  description: string;
}) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_URL}${opts.path}#webpage`,
      url: `${SITE_URL}${opts.path}`,
      name: opts.name,
      description: opts.description,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      inLanguage: "en-IN"
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: opts.name, path: opts.path }
    ])
  ];
}
