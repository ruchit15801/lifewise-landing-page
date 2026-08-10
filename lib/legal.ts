import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "@/lib/seo";

export const LEGAL_EFFECTIVE_DATE = "10 August 2026";
export const LEGAL_LAST_UPDATED = "10 August 2026";
export const LEGAL_CONTACT_EMAIL = SUPPORT_EMAIL;
export const LEGAL_JURISDICTION = "India";
export const LEGAL_GOVERNING_LAW =
  "the laws of India, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 (DPDP Act), where applicable";

export const LEGAL_ENTITY = {
  product: SITE_NAME,
  website: SITE_URL,
  domain: "lifewiseee.com",
  country: "India",
  contactEmail: LEGAL_CONTACT_EMAIL
} as const;
