/**
 * Set live store URLs when apps are published.
 * Leave empty string until then — buttons show "Coming Soon" with notify flow.
 */
export const PLAY_STORE_URL = "";
export const APP_STORE_URL = "";

export const STORES_ARE_LIVE =
  PLAY_STORE_URL.length > 0 && APP_STORE_URL.length > 0;

export const STORE_LAUNCH_MESSAGE =
  "LifeWise is launching soon on Google Play & App Store! Contact support@lifewiseee.com or WhatsApp +91 63538 91986 to get notified first.";
