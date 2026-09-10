/**
 * Live store URLs - empty string = that store not published yet.
 */
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.lifewise";
export const APP_STORE_URL =
  "https://apps.apple.com/us/app/lifewise-ai-family-hub/id6803865970";
export const APP_STORE_ID = "6803865970";

export const PLAY_STORE_LIVE = PLAY_STORE_URL.length > 0;
export const APP_STORE_LIVE = APP_STORE_URL.length > 0;
/** At least one store is downloadable */
export const STORES_ARE_LIVE = PLAY_STORE_LIVE || APP_STORE_LIVE;
