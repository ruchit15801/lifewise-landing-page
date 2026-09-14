/**
 * Single source of truth for Google Play Console listing copy.
 * Keep website SEO / schema / AEO in sync with these strings.
 *
 * Play limits: title ≤ 30 chars, short description ≤ 80 chars.
 * Package: com.lifewise
 *
 * NOTE: If you change the live Play Console title, update PLAY_APP_TITLE here first.
 */

import { APP_STORE_NAME, PLAY_STORE_URL } from "@/lib/stores";

/** Android applicationId / Play package name */
export const PLAY_PACKAGE_ID = "com.lifewise";

/** Exact Play Store listing title (≤30 chars). Same as App Store name. */
export const PLAY_APP_TITLE = APP_STORE_NAME;

/** Play short description (≤80 chars) - primary SERP / store snippet keywords */
export const PLAY_SHORT_DESCRIPTION =
  "LifeWise - AI Family Hub for India: medicine, bills, Family Hub & WiseAI.";

/**
 * Play full-description opening (keyword-dense, matches website H1 intent).
 * Use for meta description + AEO citation alignment.
 */
export const PLAY_FULL_DESCRIPTION_LEAD =
  "LifeWise - AI Family Hub (lifewise-ai-family-hub) is India's family management app, built for family use. Manage Papa's medicine reminders, electricity (bijli) bills, Health Monitoring with Apple Health / Health Connect, Family Ledger, Family Location, doctor appointments, insurance, subscriptions, and daily routines in one Family Hub, with WiseAI, voice reminders, caregiver alerts, and bill scan OCR. Official app: com.lifewise on Google Play and LifeWise - AI Family Hub on the App Store. Website: lifewiseee.com.";

/** Store category alignment for schema */
export const PLAY_CATEGORY = "Lifestyle";
export const PLAY_CATEGORY_SCHEMA = "LifestyleApplication";

/**
 * High-intent keywords mirrored from Play title + short desc + full desc themes.
 * Used in <meta name="keywords"> and ranking content - keep natural, no stuffing in UI.
 */
export const PLAY_KEYWORDS = [
  "LifeWise",
  "LifeWise - AI Family Hub",
  "LifeWise AI Family Hub",
  "lifewise-ai-family-hub",
  "LifeWise app",
  "LifeWise Android",
  "com.lifewise",
  "Family Hub",
  "family hub app",
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
  "Family Ledger",
  "family ledger app",
  "family location sharing",
  "Apple Health family",
  "Health Connect family app",
  "wearable family health",
  "download LifeWise",
  "LifeWise Google Play",
  "LifeWise App Store",
  "lifewiseee"
] as const;

/** Entity disambiguation - another “LifeWise” exists on Play (insurance) */
export const PLAY_DISAMBIGUATION =
  "LifeWise (com.lifewise / lifewiseee.com / App Store: LifeWise - AI Family Hub) is a family management app for medicine and bill reminders. It is not LifeWise Student Insurance or LifeWise Assurance Company.";

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
