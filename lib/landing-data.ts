/** PRD-accurate content for the LifeWise landing page (PRD v1.0) */

export const PRODUCT_TAGLINE = "Family Operating System";

export const PRODUCT_DESCRIPTION =
  "One app to manage your entire family. From Papa's medicine to electricity bills, Mummy's doctor appointments to children's study schedules. Everything in one place, accessible by the whole family.";

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
