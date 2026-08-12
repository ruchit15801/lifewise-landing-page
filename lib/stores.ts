/**
 * Live store URLs - empty string = that store not published yet.
 * Play Store is live; App Store stays empty until iOS launch.
 */
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.lifewise";
export const APP_STORE_URL = "";

export const PLAY_STORE_LIVE = PLAY_STORE_URL.length > 0;
export const APP_STORE_LIVE = APP_STORE_URL.length > 0;
/** At least one store is downloadable */
export const STORES_ARE_LIVE = PLAY_STORE_LIVE || APP_STORE_LIVE;

export const STORE_LAUNCH_MESSAGE =
  "LifeWise is live on Google Play. App Store coming soon. WhatsApp +91 63538 91986 or email support@lifewiseee.com to get notified.";
