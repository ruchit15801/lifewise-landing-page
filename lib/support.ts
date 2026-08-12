export const SUPPORT_EMAIL = "support@lifewiseee.com";
export const SUPPORT_PHONE = "+916353891986";
export const SUPPORT_PHONE_DISPLAY = "+91 63538 91986";
export const WHATSAPP_URL = "https://wa.me/916353891986?text=Hi%20LifeWise%20team%2C%20I%20need%20help%20with%20";
export const TEL_URL = "tel:+916353891986";

export const SUPPORT_HOURS = "Mon-Sat, 9:00 AM - 7:00 PM IST";

export const SUPPORT_TOPICS = [
  "General enquiry",
  "App download & installation",
  "Account & login issue",
  "Medicine reminders",
  "Bill & UPI reminders",
  "Family Hub setup",
  "WiseAI assistant",
  "Premium & billing (Rs. 199/month)",
  "Caregiver & family sync",
  "SOS & emergency feature",
  "Partnership / sales",
  "Other"
] as const;

export type SupportTopic = (typeof SUPPORT_TOPICS)[number];
