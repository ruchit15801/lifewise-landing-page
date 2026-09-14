/** PRD-accurate content for the LifeWise landing page (PRD v1.0) */

import { Volume2, ScanFace, Languages, HeartPulse } from "lucide-react";

import { APP_STORE_NAME } from "@/lib/stores";

export const PRODUCT_TAGLINE = APP_STORE_NAME;

export const PRODUCT_DESCRIPTION =
  "Built for the whole family, not a personal to-do list. Papa's medicines, bijli bills, health readings, Family Ledger, and caregiver alerts live on one Family Hub that every authorised member can use.";

export const HOME_QUICK_ACTIONS = [
  {
    icon: "mic" as const,
    title: "Voice Reminder",
    desc: "Speak naturally. Whisper AI detects member, time, and task. Example: \"Add Papa's medicine reminder at 8 PM\"."
  },
  {
    icon: "camera" as const,
    title: "Scan Bill",
    desc: "Google ML Kit OCR extracts bill name, amount, and due date. Auto-fills the bill form for any family member."
  },
  {
    icon: "ai" as const,
    title: "WiseAI Chat",
    desc: "Ask anything about your family: reminders, expenses, appointments, and health summaries."
  }
] as const;

export const FAMILY_HUB_MODULES = [
  "Medicine",
  "Doctor Appointments",
  "Health Monitoring",
  "Bills & Utilities",
  "Insurance",
  "Subscriptions",
  "Family Ledger",
  "Daily Routine",
  "Call & Check-in",
  "Travel & Visits",
  "Diet & Meals",
  "Medicine Stock",
  "Documents",
  "Fitness",
  "Study & Education",
  "Mental Wellness",
  "Vehicle",
  "Home Maintenance",
  "Emergency SOS",
  "Custom Modules"
] as const;

export const WISEAI_PROMPTS = [
  "What reminders does Papa have this week?",
  "How much have we spent on food this month?",
  "Mummy ki next doctor appointment kab hai?",
  "Which of our subscriptions are expiring soon?"
] as const;

export type PlanTier = "free" | "starter" | "family" | "pro";

export const FREE_PLAN = {
  id: "free" as const,
  name: "Free",
  price: "₹0",
  priceInr: 0,
  monthlyInr: 0,
  yearlyInr: 0,
  period: "/ month",
  tagline: "Get started. No credit card needed.",
  desc: "Real family value with hard limits. Limits are set so regular use typically hits a wall within the first one to two months.",
  recommended: false,
  cta: "Start free, no card needed",
  yearlyOffLabel: null as string | null,
  features: [
    "Up to 2 family members",
    "3 modules per member (any 3 of 20)",
    "10 reminders total across the family",
    "7 days of expense history",
    "Basic spending summary (current month)",
    "1 bill per member (max 2 bills)",
    "1 document (Aadhaar or PAN only)",
    "Voice reminder: 5 uses per month",
    "Bill scan: 3 scans per month",
    "WiseAI chat: 5 messages per month",
    "Unlimited push notifications",
    "iOS + Android, no ads"
  ],
  walls: [
    "3rd family member",
    "4th module on any member",
    "11th reminder",
    "History older than 7 days",
    "PDF export and monthly report",
    "Bank statement import and budget limits",
    "2nd document, 6th voice use, 4th scan, or 6th WiseAI message"
  ]
} as const;

export const STARTER_PLAN = {
  id: "starter" as const,
  name: "Starter",
  price: "₹99",
  priceInr: 99,
  monthlyInr: 99,
  yearlyInr: 799,
  period: "/ month",
  tagline: "Perfect for a small family or couple",
  desc: "More members, modules, and history than Free, without the full Family plan.",
  recommended: false,
  cta: "Choose Starter",
  yearlyOffLabel: "33% off yearly",
  features: [
    "Up to 4 family members",
    "8 modules per member",
    "50 active reminders total",
    "3 months expense history",
    "Monthly spending summary and basic charts",
    "5 bills per member",
    "10 documents (all types)",
    "Voice: 30/month, bill scan: 20/month, WiseAI: 30/month",
    "Bank statement PDF import: 1 per month",
    "Basic monthly report in-app (no PDF export)",
    "1 caregiver per family member",
    "Up to 10 recurring expense templates",
    "Family noticeboard: 20 posts/month"
  ],
  walls: [
    "5th family member (upgrade to Family)",
    "9th module per member",
    "51st reminder or history beyond 3 months",
    "PDF export of reports",
    "More than 1 bank import per month",
    "More than 1 caregiver per member"
  ]
} as const;

export const FAMILY_PLAN = {
  id: "family" as const,
  name: "Family",
  price: "₹199",
  priceInr: 199,
  monthlyInr: 199,
  yearlyInr: 1499,
  period: "/ month",
  tagline: "The complete family operating system",
  desc: "Unlimited members, all 20 modules, Money Leak, location, SOS, and PDF reports.",
  recommended: true,
  cta: "Choose Family",
  yearlyOffLabel: "37% off yearly",
  features: [
    "Unlimited family members",
    "All 20 modules per member",
    "Unlimited active reminders",
    "12 months expense history",
    "Full spending dashboard",
    "Unlimited bill tracking",
    "50 documents (all types, all members)",
    "Unlimited voice reminders and bill scans",
    "WiseAI chat: 100 messages per month",
    "Unlimited bank statement PDF imports",
    "Full monthly and annual reports with PDF export",
    "Unlimited caregivers and recurring templates",
    "Money Leak alerts and budget alerts",
    "Family location sharing for up to 6 members",
    "Emergency SOS, medicine stock, 12-month vitals",
    "Priority push notifications, dark mode, unlimited CSV/Excel import"
  ],
  walls: [
    "WiseAI beyond 100 messages: add-on credits",
    "Documents beyond 50: upgrade to Pro",
    "White-label or business use: Pro"
  ]
} as const;

export const PRO_PLAN = {
  id: "pro" as const,
  name: "Pro",
  price: "₹499",
  priceInr: 499,
  monthlyInr: 499,
  yearlyInr: 3999,
  period: "/ month",
  tagline: "Power users, large families, business use",
  desc: "Everything in Family, plus unlimited documents, 300 WiseAI messages, and Pro-only tools.",
  recommended: false,
  cta: "Choose Pro",
  yearlyOffLabel: null as string | null,
  features: [
    "Everything in the Family plan",
    "Unlimited documents and storage",
    "WiseAI chat: 300 messages per month",
    "Annual health report PDF (doctor-ready)",
    "Family finance annual report",
    "Priority support (24-hour response)",
    "Early access to new features",
    "Multi-language reports (Hindi, Gujarati)",
    "Unlimited custom expense categories",
    "Full JSON backup of family data",
    "Pill identifier by photo (beta)",
    "Medicine interaction checker",
    "Insurance claim assistant wizard",
    "WhatsApp reminder integration (beta)",
    "5 sub-accounts for joint family or business"
  ],
  walls: [
    "Sub-accounts beyond 5: custom enterprise pricing",
    "White-label for businesses: contact us"
  ]
} as const;

/** Three paid subscriptions. Free is the fourth, zero-rupee tier. */
export const PAID_PLANS = [STARTER_PLAN, FAMILY_PLAN, PRO_PLAN] as const;
export const SUBSCRIPTION_PLANS = [FREE_PLAN, STARTER_PLAN, FAMILY_PLAN, PRO_PLAN] as const;

/** Family plan at Rs. 199/month. Older site copy called this Premium. */
export const PREMIUM_PLAN = FAMILY_PLAN;

export const YEARLY_PLAN = {
  name: "Family Yearly",
  price: "₹1,499",
  priceInr: 1499,
  period: "/ year",
  desc: FAMILY_PLAN.desc,
  note: "Save ₹889 versus ₹2,388 at ₹199/month",
  features: FAMILY_PLAN.features
} as const;

export const YEARLY_TIERS = [
  {
    name: "Starter Yearly",
    price: "₹799",
    period: "/ year",
    note: "33% off versus monthly"
  },
  {
    name: "Family Yearly",
    price: "₹1,499",
    period: "/ year",
    note: "37% off versus monthly"
  },
  {
    name: "Pro Yearly",
    price: "₹3,999",
    period: "/ year",
    note: "Billed once a year"
  }
] as const;

export const PRD_EXAMPLE_DATE = "Saturday, 30 May 2026";

export const MONEY_LEAK_EXAMPLE =
  "You are spending extra on food delivery. Potential saving: Rs. 2,400/month";

export const FAMILY_HEALTH_EXAMPLE = {
  name: "Papa",
  compliance: "80%",
  label: "medicine compliance this week"
} as const;

export const MODULES = FAMILY_HUB_MODULES;

/** PRD Family Hub core: member-attached modules, not a personal dashboard. */
export const FAMILY_HUB_CORE_MODULES = [
  {
    name: "Medicines",
    unique:
      "Dose, timing, snooze, and missed alerts go to the member and every connected caregiver."
  },
  {
    name: "Health Monitoring",
    unique:
      "Manual logs plus Apple Health, Health Connect, and compatible watches on that member's card."
  },
  {
    name: "Bill Management",
    unique:
      "Tracks what is due and when. A paid bill can post once to Family Ledger, without duplicating the payment."
  },
  {
    name: "Daily Routine",
    unique:
      "Timed routines feed the same Reminders engine as medicines and bills, per member."
  },
  {
    name: "Family Ledger",
    unique:
      "Family money: who paid, for whom, contributions, and balances. Not a roommate splitter bolted on."
  },
  {
    name: "Family Location",
    unique:
      "Consent-based sharing, Safe Places, and pause in one tap. Covert tracking is out of scope."
  }
] as const;

/**
 * Category contrast for "what we offer". Names product categories, not rival brands.
 */
export const UNIQUENESS_OFFERS = [
  {
    vs: "Personal reminder apps",
    title: "Family Hub, not a private list",
    body: "Every task sits on a member card. Papa, Mummy, and children each keep their own medicines, bills, and routines in one Hub."
  },
  {
    vs: "Medicine-only apps",
    title: "Caregivers get the miss",
    body: "A beep on one phone is not the product. If a dose is missed, connected caregivers are alerted so the family can act the same day."
  },
  {
    vs: "Bill and expense apps",
    title: "Bills and Ledger stay separate",
    body: "Bill Management is the obligation. Family Ledger is the money event: who paid and who it was for. They can link. They do not merge into one messy list."
  },
  {
    vs: "Always-on location apps",
    title: "Location only with consent",
    body: "Family Location needs member permission. Sharing can pause. Arrival alerts exist only when someone turns them on."
  },
  {
    vs: "Personal health dashboards",
    title: "Wearables on the family card",
    body: "Apple Health and Health Connect sync onto that member's Health Monitoring. Platform permission and family sharing are two separate switches."
  },
  {
    vs: "Generic to-do lists",
    title: "Automation that routes work",
    body: "Missed reminders escalate. Bills remind the household. A paid bill can enter Family Ledger. The Hub keeps running when you are not looking."
  }
] as const;

export const EXPENSE_CATEGORIES = [
  { name: "Pharmacy & Medicines", amount: "₹4,500", pct: 60 },
  { name: "Electricity", amount: "₹2,450", pct: 40 },
  { name: "Groceries", amount: "₹15,000", pct: 85 },
  { name: "Doctor Visits", amount: "₹1,200", pct: 20 },
];

export const SENIOR_FEATURES = [
  { title: "Loud Voice Prompts", desc: "Papa can hear reminders clearly in Hindi or English.", icon: Volume2 },
  { title: "No Passwords", desc: "Simple Face ID or Fingerprint login. No confusing OTPs.", icon: ScanFace },
  { title: "Local Languages", desc: "Fully supports Hindi, Marathi, Gujarati, and more.", icon: Languages },
  { title: "One-Tap SOS", desc: "Tap SOS once. Family gets a call, SMS, and live location instantly.", icon: HeartPulse },
];

export const PRICING_FEATURES = [
  { name: "Family members", free: "2", starter: "4", family: "Unlimited", pro: "Unlimited" },
  { name: "Modules per member", free: "3 of 20", starter: "8 of 20", family: "All 20", pro: "All 20" },
  { name: "Active reminders", free: "10 total", starter: "50 total", family: "Unlimited", pro: "Unlimited" },
  { name: "Expense history", free: "7 days", starter: "3 months", family: "12 months", pro: "Unlimited" },
  { name: "Bill tracking", free: "1 per member", starter: "5 per member", family: "Unlimited", pro: "Unlimited" },
  { name: "Documents", free: "1 (Aadhaar or PAN)", starter: "10", family: "50", pro: "Unlimited" },
  { name: "Voice reminder", free: "5 / month", starter: "30 / month", family: "Unlimited", pro: "Unlimited" },
  { name: "Bill scan (OCR)", free: "3 / month", starter: "20 / month", family: "Unlimited", pro: "Unlimited" },
  { name: "WiseAI chat", free: "5 messages", starter: "30 messages", family: "100 messages", pro: "300 messages" },
  { name: "Bank PDF import", free: "Not available", starter: "1 / month", family: "Unlimited", pro: "Unlimited" },
  { name: "PDF reports", free: "Not available", starter: "Not available", family: "Yes", pro: "Yes" },
  { name: "Caregivers", free: "None", starter: "1 per member", family: "Unlimited", pro: "Unlimited" },
  { name: "Location sharing", free: "Not available", starter: "Not available", family: "Up to 6", pro: "Unlimited" },
  { name: "Money Leak alerts", free: "Not available", starter: "Not available", family: "Yes", pro: "Yes" },
  { name: "Medicine interaction check", free: "Not available", starter: "Not available", family: "Not available", pro: "Yes" },
  { name: "WhatsApp reminders", free: "Not available", starter: "Not available", family: "Not available", pro: "Beta" },
  { name: "Priority support", free: "No", starter: "No", family: "No", pro: "Yes (24-hour)" },
  { name: "Monthly billing (INR)", free: "₹0", starter: "₹99 / month", family: "₹199 / month", pro: "₹499 / month" },
  { name: "Yearly billing (INR)", free: "₹0", starter: "₹799 / year", family: "₹1,499 / year", pro: "₹3,999 / year" }
] as const;
