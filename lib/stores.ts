/**
 * Live store URLs - empty string = that store not published yet.
 * Play Store is live. Set APP_STORE_URL when iOS listing is ready.
 */
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.lifewise";
export const APP_STORE_URL = "";

export const PLAY_STORE_LIVE = PLAY_STORE_URL.length > 0;
export const APP_STORE_LIVE = APP_STORE_URL.length > 0;
/** At least one store is downloadable */
export const STORES_ARE_LIVE = PLAY_STORE_LIVE || APP_STORE_LIVE;
