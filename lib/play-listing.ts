/**
 * Single source of truth for Google Play Console listing copy.
 * Keep website SEO / schema / AEO in sync with these strings.
 *
 * Play limits: title ≤ 30 chars, short description ≤ 80 chars.
 * Package: com.lifewise
 *
 * NOTE: If you change the live Play Console title, update PLAY_APP_TITLE here first.
 */

import { PLAY_STORE_URL } from "@/lib/stores";

/** Android applicationId / Play package name */
export const PLAY_PACKAGE_ID = "com.lifewise";

/** Exact Play Store listing title (≤30 chars) */
export const PLAY_APP_TITLE = "LifeWise: Family OS";

/** Play short description (≤80 chars) - primary SERP / store snippet keywords */
export const PLAY_SHORT_DESCRIPTION =
  "Family OS for India: medicine, bills, Family Hub & WiseAI. Free on Google Play.";

/**
 * Play full-description opening (keyword-dense, matches website H1 intent).
 * Use for meta description + AEO citation alignment.
 */
export const PLAY_FULL_DESCRIPTION_LEAD =
  "LifeWise is India's Family Operating System (Family OS) app. Manage Papa's medicine reminders, electricity (bijli) bills, doctor appointments, insurance, subscriptions, and daily family routines in one Family Hub, with WiseAI, voice reminders, and bill scan OCR. Official app: com.lifewise on Google Play. Website: lifewiseee.com.";

/** Store category alignment for schema */
export const PLAY_CATEGORY = "Lifestyle";
export const PLAY_CATEGORY_SCHEMA = "LifestyleApplication";

/**
 * High-intent keywords mirrored from Play title + short desc + full desc themes.
 * Used in <meta name="keywords"> and ranking content - keep natural, no stuffing in UI.
 */
export const PLAY_KEYWORDS = [
  "LifeWise",
  "LifeWise: Family OS",
  "LifeWise Family OS",
  "LifeWise app",
  "LifeWise Android",
  "com.lifewise",
  "Family OS",
  "Family Operating System",
  "Family Operating System app India",
  "family hub app",
  "Family Hub",
  "medicine reminder",
  "medicine reminder app",
  "medicine reminder app India",
  "Papa medicine reminder",
  "bill reminder",
  "bill reminder app India",
  "electricity bill reminder",
  "bijli bill reminder",
  "WiseAI",
  "voice reminder",
  "bill scan OCR",
  "caregiver app India",
  "family management app",
  "download LifeWise",
  "LifeWise Google Play",
  "lifewiseee"
] as const;

/** Entity disambiguation - another “LifeWise” exists on Play (insurance) */
export const PLAY_DISAMBIGUATION =
  "LifeWise (com.lifewise / lifewiseee.com) is India's Family Operating System for medicine and bill reminders. It is not LifeWise Student Insurance or LifeWise Assurance Company.";

export const PLAY_STORE_LISTING = {
  packageId: PLAY_PACKAGE_ID,
  title: PLAY_APP_TITLE,
  shortDescription: PLAY_SHORT_DESCRIPTION,
  url: PLAY_STORE_URL,
  category: PLAY_CATEGORY
} as const;

/** Assert Play Console length limits in CI-friendly checks */
export function assertPlayListingLimits() {
  if (PLAY_APP_TITLE.length > 30) {
    throw new Error(`PLAY_APP_TITLE exceeds 30 chars (${PLAY_APP_TITLE.length})`);
  }
  if (PLAY_SHORT_DESCRIPTION.length > 80) {
    throw new Error(
      `PLAY_SHORT_DESCRIPTION exceeds 80 chars (${PLAY_SHORT_DESCRIPTION.length})`
    );
  }
}
