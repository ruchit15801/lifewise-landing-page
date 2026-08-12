import { FAQ_ITEMS } from "@/lib/faqs";
import { PLAY_STORE_URL, APP_STORE_URL } from "@/lib/stores";
import { FAMILY_HUB_MODULES, FREE_PLAN, PREMIUM_PLAN } from "@/lib/landing-data";
import {
  ADDRESS,
  CONTACT_EMAIL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SUPPORT_PHONE
} from "@/lib/seo";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#software`;
const LOCAL_ID = `${SITE_URL}/#localbusiness`;

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.state,
    postalCode: ADDRESS.pin,
    addressCountry: ADDRESS.countryCode
  };
}

function geoCoordinates() {
  return {
    "@type": "GeoCoordinates",
    latitude: ADDRESS.latitude,
    longitude: ADDRESS.longitude
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: SITE_NAME,
    alternateName: [
      "LifeWise App",
      "LifeWise Family Operating System",
      "lifewiseee",
      "LifeWise India"
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
      "LifeWise builds the Family Operating System — a mobile app for Indian families to manage health, bills, reminders, and daily routines from one place.",
    email: CONTACT_EMAIL,
    telephone: SUPPORT_PHONE,
    address: postalAddress(),
    foundingLocation: {
      "@type": "Place",
      name: `${ADDRESS.city}, ${ADDRESS.country}`,
      address: postalAddress(),
      geo: geoCoordinates()
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
        },
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          opens: "09:00",
          closes: "19:00",
          timeZone: "Asia/Kolkata"
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
    areaServed: [
      {
        "@type": "Country",
        name: "India"
      },
      {
        "@type": "City",
        name: "Gurugram"
      },
      {
        "@type": "City",
        name: "Mumbai"
      },
      {
        "@type": "City",
        name: "Delhi"
      },
      {
        "@type": "City",
        name: "Ahmedabad"
      },
      {
        "@type": "City",
        name: "Bengaluru"
      }
    ],
    knowsAbout: [
      "family health management",
      "medicine reminders for parents",
      "bill payment reminders India",
      "caregiver coordination",
      "family expense tracking",
      "AI life assistant",
      "Family Operating System",
      "DPDP Act compliant family apps"
    ],
    slogan: SITE_TAGLINE,
    brand: {
      "@type": "Brand",
      name: SITE_NAME
    }
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
    priceRange: "₹0–₹199",
    address: postalAddress(),
    geo: geoCoordinates(),
    areaServed: {
      "@type": "Country",
      name: "India"
    },
    parentOrganization: { "@id": ORG_ID },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      opens: "09:00",
      closes: "19:00"
    },
    availableLanguage: ["English", "Hindi", "Gujarati"]
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    alternateName: ["LifeWise App", "lifewiseee.com"],
    url: SITE_URL,
    description:
      "Official LifeWise website. Download India's Family Operating System app for Android and iOS.",
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
      "LifeWise is a Family Operating System mobile app for India. Manage medicine reminders, bills, insurance, documents, health readings, and family routines with Family Hub, WiseAI, and 20 smart modules.",
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
        availability: "https://schema.org/InStock",
        description: FREE_PLAN.features.join(", ")
      },
      {
        "@type": "Offer",
        name: PREMIUM_PLAN.name,
        price: "199",
        priceCurrency: "INR",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        description: PREMIUM_PLAN.features.join(", ")
      }
    ],
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
    }
  };
}

export function productSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product`,
    name: `${SITE_NAME} Family Operating System`,
    description:
      "Mobile Family Operating System for Indian families — medicine reminders, bills, Family Hub, and WiseAI.",
    brand: { "@type": "Brand", name: SITE_NAME },
    category: "Family Management Software",
    image: `${SITE_URL}/og-image.svg`,
    url: SITE_URL,
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "199",
      priceCurrency: "INR",
      offerCount: 2,
      availability: "https://schema.org/InStock"
    },
    isRelatedTo: { "@id": APP_ID }
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
    publisher: { "@id": ORG_ID },
    countriesSupported: "IN"
  };
}

export function webPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: `${SITE_NAME} App India – Family Operating System | Medicine Reminder, Bill Reminder & Family Hub`,
    description:
      "Official LifeWise landing page. Download India's Family Operating System for medicine reminders, bill alerts, Family Hub, and WiseAI. Free on Android & iOS.",
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
      cssSelector: ["#lifewise-definition", ".faq-answer", "#why-lifewise h2"]
    },
    significantLink: [
      `${SITE_URL}/support`,
      `${SITE_URL}/privacy-policy`,
      `${SITE_URL}/terms-and-conditions`,
      `${SITE_URL}/llms.txt`,
      `${SITE_URL}/llms-full.txt`
    ]
  };
}

export function faqPageSchema(pageUrl = `${SITE_URL}/#faq`) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": pageUrl,
    url: pageUrl.includes("#") ? SITE_URL : pageUrl,
    inLanguage: "en-IN",
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
        text: "Add medicine name, dose, and time — or use Voice Reminder and say it in Hindi or English."
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
      "A Family Operating System is a mobile app that lets one household manage every member's medicine reminders, bills, health, documents, and daily routines from a single command center. LifeWise is India's Family Operating System at lifewiseee.com.",
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
    name: "Why LifeWise – India Family Operating System features",
    description:
      "Core reasons Indian families choose LifeWise for medicine reminders, bill alerts, Family Hub, and WiseAI.",
    numberOfItems: 6,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Medicine reminder app for parents",
        description:
          "Papa and Mummy medicine reminders in English or Hindi with caregiver escalation."
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Electricity & bill reminder India",
        description:
          "Bijli, gas, broadband, rent, and subscription due-date alerts with bill scan OCR."
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Family Hub for Indian households",
        description:
          "Up to 20 modules per family member, shared with caregivers in real time."
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "WiseAI family assistant",
        description:
          "AI assistant for reminders, expenses, and appointments with Hindi voice commands."
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Hindi, Gujarati & Indian languages",
        description:
          "English, Hindi, Gujarati, Marathi, Tamil, Telugu, and Bengali support."
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Secure DPDP-aware family app",
        description:
          "Official LifeWise at lifewiseee.com — Free plan and Premium from ₹199/month."
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
    name: "LifeWise Support & Contact – India",
    description:
      "Contact LifeWise India customer care by email, WhatsApp, or phone for Family Hub, medicine reminders, bills, and Premium help.",
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

/** Home page — Org/Website already in root layout; avoid duplicates */
export function homePageSchemas() {
  return [
    softwareApplicationSchema(),
    mobileApplicationSchema(),
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
    faqPageSchema(`${SITE_URL}/support#faq`),
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
