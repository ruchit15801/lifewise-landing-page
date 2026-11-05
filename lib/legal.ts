import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "@/lib/seo";

export const LEGAL_EFFECTIVE_DATE = "November 5, 2026";
export const LEGAL_LAST_UPDATED = "November 5, 2026";
export const LEGAL_CONTACT_EMAIL = SUPPORT_EMAIL;
export const LEGAL_JURISDICTION = "Surat, Gujarat, India";
export const LEGAL_GOVERNING_LAW =
  "the laws of India, including the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023 (DPDP Act), and applicable consumer protection regulations";

export const LEGAL_ENTITY = {
  product: `${SITE_NAME} - Family Operating System`,
  company: "Axoryte Infosoft",
  address: "Surat, Gujarat, India",
  website: SITE_URL,
  companyWebsite: "https://axoryteinfosoft.com/",
  domain: "lifewiseee.com",
  country: "India",
  contactEmail: LEGAL_CONTACT_EMAIL,
  phone: "+91 63538 91986",
  phoneDisplay: "+91 63538 91986",
  traderStatus:
    "Commercial Trader / Registered Business Entity (EU Digital Services Act & Consumer Protection)",
  privacyPolicyUrl: `${SITE_URL}/privacy-policy`,
  termsUrl: `${SITE_URL}/terms-and-conditions`,
  euOdrUrl: "https://ec.europa.eu/consumers/odr"
} as const;

