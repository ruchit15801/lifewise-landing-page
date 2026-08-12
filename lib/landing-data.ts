/** PRD-accurate content for the LifeWise landing page (PRD v1.0) */

import { Volume2, ScanFace, Languages } from "lucide-react";

export const PRODUCT_TAGLINE = "LifeWise: Family OS";

export const PRODUCT_DESCRIPTION =
  "One app to manage your entire family. From Papa's medicine to electricity bills, Mummy's doctor appointments to children's study schedules. Everything in one Family Hub, accessible by the whole family.";

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
  "Expenses",
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

export const FREE_PLAN = {
  name: "Free",
  price: "₹0",
  period: "",
  desc: "Start managing your family essentials.",
  features: [
    "Up to 3 family members",
    "Medicine + Bills modules only",
    "Basic reminders",
    "1 caregiver per member",
    "7 days history",
    "No AI features",
    "No document storage"
  ]
} as const;

export const PREMIUM_PLAN = {
  name: "Premium",
  price: "₹199",
  period: "/ month",
  desc: "Full Family Operating System with all modules and AI.",
  features: [
    "Unlimited family members",
    "All 20 modules",
    "Unlimited caregivers",
    "Full history + export",
    "WiseAI chat",
    "Voice reminders",
    "Bill scan OCR",
    "Monthly PDF reports",
    "Money Leak detection",
    "1GB document storage",
    "Priority notifications"
  ]
} as const;

export const YEARLY_TIERS = [
  {
    name: "Premium Yearly",
    price: "₹1,499",
    period: "/ year",
    note: "Save ₹888 (37% off)"
  },
  {
    name: "Family Yearly",
    price: "₹1,999",
    period: "/ year",
    note: "Share with up to 6 accounts (coming soon)"
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
];

export const PRICING_FEATURES = [
  { name: "Family Members", free: "Up to 3", premium: "Unlimited" },
  { name: "Modules", free: "Medicine + Bills", premium: "All 20 Modules" },
  { name: "Caregivers", free: "1 per member", premium: "Unlimited" },
  { name: "History", free: "7 Days", premium: "Unlimited + Export" },
  { name: "WiseAI Chat", free: "No", premium: "Yes" },
  { name: "Voice Logging", free: "No", premium: "Yes" },
  { name: "Bill OCR Scan", free: "No", premium: "Yes" },
  { name: "Money Leak Alerts", free: "No", premium: "Yes" },
  { name: "Document Storage", free: "No", premium: "1 GB" },
];
