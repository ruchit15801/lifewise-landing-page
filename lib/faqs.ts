/** Landing vs Support FAQs stay separate so Google does not dilute duplicate FAQPage markup. */

export type FaqItem = {
  question: string;
  answer: string;
  keywords?: string[];
};

/**
 * Home / landing FAQ — product-understanding questions.
 * First sentence of each answer is a complete standalone snippet for AEO.
 */
export const LANDING_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is LifeWise?",
    answer:
      "LifeWise is India's Family Operating System (Family OS) — a single mobile app that lets one person manage medicine reminders, bills, insurance, health, documents and daily routines for their entire family, not just themselves. Instead of using 5 different apps for Papa's medicine, Mummy's doctor visits, electricity bills and insurance renewals, everything lives inside one Family Hub, and every family member can see and act on it together.",
    keywords: [
      "what is lifewise",
      "lifewise app kya hai",
      "family os",
      "family operating system"
    ]
  },
  {
    question: "How is LifeWise different from a normal medicine reminder or to-do app?",
    answer:
      "A normal reminder app only reminds you. LifeWise reminds the right person and every caregiver connected to them — so if Papa misses his 8 PM tablet, his son and daughter both get notified, not just Papa. Most reminder apps are single-user; LifeWise is built around a family of members, each with their own profile, modules, and history, connected through one Family Hub.",
    keywords: [
      "medicine reminder app india",
      "family app vs reminder app",
      "caregiver notification"
    ]
  },
  {
    question: 'What is "Family Hub" in LifeWise and why is it the main feature?',
    answer:
      "Family Hub is the screen where every family member — Papa, Mummy, kids, spouse — gets their own card with their own medicines, bills, health data and documents attached to them. Every other feature in LifeWise (reminders, insights, WiseAI) pulls its data from Family Hub, which is why it's the star-badged, primary tab in the app. You add a member once, choose what you want to track for them, and their entire life fits on one card.",
    keywords: ["family hub app india", "family hub meaning", "family hub"]
  },
  {
    question: "What are the 20 modules inside LifeWise, and do I need to use all of them?",
    answer:
      "LifeWise offers 20 modules per family member — Medicine Tracking, Doctor Appointments, Health Monitoring, Emergency SOS, Bill Management, Insurance, Subscription Tracking, Expense Tracking, Daily Routine, Call & Check-in, Travel & Visits, Diet & Meal Planning, Medicine Stock Tracker, Important Documents, Fitness Tracking, Study & Education, Mental Health & Wellness, Vehicle Management, Home Maintenance, and a fully Custom module. You choose only what applies — for example, Papa might only need Medicine + Bills + Insurance, while your college-going daughter might only need Study + Expense Tracking.",
    keywords: [
      "lifewise modules",
      "family management app features india",
      "20 modules"
    ]
  },
  {
    question: 'How does the caregiver / "connected member" system work?',
    answer:
      'When you add a family member, LifeWise asks "who should manage or receive alerts for this person?" — you can connect one or more caregivers (son, daughter, spouse) to that member. Every reminder for that person is then sent to both the member and every connected caregiver, and when any one of them marks it done, it updates instantly for everyone else. This means if you and your sibling both look after Mummy, you\'re never both wondering whether her BP medicine was taken.',
    keywords: [
      "caregiver app india",
      "caregiver reminder app",
      "connected member"
    ]
  },
  {
    question: "What is WiseAI and what can I actually ask it?",
    answer:
      'WiseAI is LifeWise\'s built-in AI chat assistant, powered by Claude, that understands your family\'s data and answers in plain language. You can type or say things like "What reminders does Papa have this week?", "How much have we spent on food this month?", or "Mummy ki next doctor appointment kab hai?" and WiseAI replies instantly using your actual family data — it can even create a reminder for you directly from a chat message.',
    keywords: ["wiseai family assistant", "ai reminder app india", "wiseai"]
  },
  {
    question: "Can I add a reminder just by speaking in Hindi or Gujarati?",
    answer:
      'Yes — LifeWise has a Voice Reminder feature where you tap the mic icon and simply say something like "Papa ko kal subah 8 baje medicine leni hai," and the app automatically detects the family member, the task, and the time, then creates the reminder for you to confirm. It\'s built for how Indian families actually talk, not just typed English commands.',
    keywords: [
      "voice reminder app hindi",
      "hindi medicine reminder app",
      "gujarati family app"
    ]
  },
  {
    question: "Can LifeWise read a bill automatically instead of me typing it?",
    answer:
      "Yes — the Scan Bill feature lets you photograph any bijli, gas, water, or mobile bill, and LifeWise uses OCR to automatically read the bill name, amount, and due date, then pre-fills the form for you. You just confirm which family member the bill belongs to and save — no manual typing of amounts or dates.",
    keywords: [
      "scan bill ocr app india",
      "electricity bill reminder",
      "bijli bill"
    ]
  },
  {
    question: "What happens if a family member misses a reminder?",
    answer:
      'If a reminder isn\'t marked done within 30 minutes of its scheduled time, LifeWise automatically marks it "Missed" and instantly alerts every connected caregiver — so you find out the same day, not a week later. Missed reminders are also shown in red across the Home screen and Reminders tab, and a daily summary notification tells you exactly how many reminders were missed that day.',
    keywords: [
      "medicine reminder app for parents",
      "missed medicine alert",
      "dawai miss"
    ]
  },
  {
    question: "If my sibling and I both manage Mummy's account, do we see the same updates instantly?",
    answer:
      "Yes — LifeWise uses real-time sync, so when one caregiver marks a reminder as done, it updates on every other connected caregiver's phone within seconds, without anyone needing to refresh the app. This is what makes LifeWise a true shared family system rather than separate individual reminder lists.",
    keywords: [
      "family sync app india",
      "shared family reminder app",
      "real-time sync"
    ]
  },
  {
    question: 'What is "Money Leak Alert" and how does it actually save money?',
    answer:
      'Money Leak Alert is an AI feature that scans your family\'s recurring spending and flags waste you\'d otherwise miss — like paying for Netflix, Prime, and Hotstar together, or multiple food-delivery subscriptions. It shows the exact potential saving, for example "Rs. 3,600/year if you cancel one," so you can act on it in one tap instead of manually auditing every subscription yourself.',
    keywords: [
      "family expense tracker india",
      "subscription tracker app india",
      "money leak"
    ]
  },
  {
    question: "Can one app really handle both Papa's medicines and my own bill payments?",
    answer:
      "Yes — that's the core idea of LifeWise. Every family member gets their own profile with only the modules relevant to them, so Papa's card can show Medicine + Insurance while your own card shows Bills + Expense Tracking + Subscriptions, all inside the same Family Hub, under one login, one Home screen, and one set of notifications.",
    keywords: ["best family management app india", "one app family"]
  },
  {
    question: "Is LifeWise suitable for elderly parents who aren't comfortable with technology?",
    answer:
      'Yes — LifeWise is designed so that an adult child (25–45) can set up and manage everything on behalf of an elderly parent, while the parent simply receives simple notifications like "Papa ki BP Tablet lene ka time ho gaya" and taps one button to mark it done. Parents don\'t need to configure anything themselves — the heavy setup is done by whoever is caring for them.',
    keywords: [
      "senior medicine reminder app",
      "dawai reminder app",
      "tablet reminder app india"
    ]
  },
  {
    question: "What is the Emergency SOS feature and how does it work?",
    answer:
      "Emergency SOS lets any family member trigger help in one action — shaking the phone three times or long-pressing the SOS button — which instantly sends an SMS and call alert with their location to up to 5 saved emergency contacts. It also generates a shareable digital medical card with blood group, allergies, existing conditions, and current medications, so first responders have critical information immediately.",
    keywords: ["sos emergency feature family app", "emergency sos"]
  },
  {
    question: "Does LifeWise work without internet?",
    answer:
      "Yes — LifeWise caches your last-fetched reminders and family data on your device, so you can view existing reminders and mark them done even when you're offline. Any actions you take offline are queued and automatically synced to the server and to your caregivers the moment your connection returns.",
    keywords: ["offline family app india", "offline reminders"]
  },
  {
    question: "Is my family's health, financial, and personal data safe with LifeWise?",
    answer:
      "Yes — LifeWise stores your family's data securely with encrypted authentication (JWT + Firebase Auth), documents stored on secure AWS S3 storage, and access limited to only the caregivers you personally connect to each member. Sensitive items like document images are never sent to the WiseAI assistant, and you control exactly who can view or edit each family member's information through Family Permissions.",
    keywords: [
      "dpdp compliant family app",
      "family data privacy india",
      "privacy"
    ]
  },
  {
    question: "What do I get for free, and what does LifeWise Premium (Rs. 199/month) add?",
    answer:
      "The free plan covers up to 3 family members with Medicine + Bills modules, basic reminders, and 1 caregiver per member. Premium, at Rs. 199/month (or Rs. 1,499/year), unlocks unlimited family members, all 20 modules, unlimited caregivers, full history and export, WiseAI chat, voice reminders, bill scan OCR, monthly PDF reports, and Money Leak detection — everything needed to run the whole family, not just one or two people.",
    keywords: [
      "lifewise premium 199",
      "is lifewise free to use in india",
      "premium"
    ]
  },
  {
    question: "Which languages does LifeWise support?",
    answer:
      "LifeWise supports English, Hindi, Gujarati, Marathi, Tamil, Telugu, and Bengali across the app, and both Voice Reminder and WiseAI chat understand natural Hindi/Gujarati phrasing — not just formal typed English — so it fits how Indian families actually speak to each other.",
    keywords: [
      "family app hindi gujarati",
      "lifewise hindi gujarati support",
      "languages"
    ]
  },
  {
    question: "Who is LifeWise actually built for — only parents, or everyone in the family?",
    answer:
      "LifeWise is built for four kinds of users in one family: the adult child (25–45) who manages Papa and Mummy's medicines and bills; the senior parent (55+) who just receives and taps reminders; the caregiver spouse or sibling who shares the responsibility; and young adults or students who use it for their own expenses and study schedules. It's one app the whole family uses together, each person using only what's relevant to them.",
    keywords: [
      "family management app india",
      "family app for parents",
      "who is lifewise for"
    ]
  }
];

/**
 * /support FAQ — transactional help only (contact, download, official site).
 * Do not repeat landing product FAQs here.
 */
export const SUPPORT_FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do I contact LifeWise support?",
    answer:
      "Email support@lifewiseee.com, call or WhatsApp +91 63538 91986, or fill the support form on this page. We help with setup, billing, and app issues in English and Hindi.",
    keywords: ["support", "contact", "help", "call", "whatsapp", "email"]
  },
  {
    question: "How do I download the official LifeWise app?",
    answer:
      "Download LifeWise: Family OS free on Google Play at https://play.google.com/store/apps/details?id=com.lifewise (package com.lifewise) or on the App Store at https://apps.apple.com/us/app/lifewise-ai-family-hub/id6803865970. Use only lifewiseee.com or the official store listings — avoid similarly named insurance apps.",
    keywords: ["download", "install", "play store", "app store", "android", "ios", "iphone", "com.lifewise"]
  },
  {
    question: "Is lifewiseee.com the official LifeWise website?",
    answer:
      "Yes. https://www.lifewiseee.com is the official LifeWise website. The official app is LifeWise: Family OS on Google Play (package com.lifewise) and LifeWise AI Family Hub on the App Store.",
    keywords: ["official", "lifewiseee", "website", "real lifewise"]
  },
  {
    question: "Is LifeWise the same as LifeWise Student Insurance?",
    answer:
      "No. LifeWise at lifewiseee.com (Google Play package com.lifewise) is India's Family Operating System for medicine reminders, bills, and Family Hub. It is not affiliated with LifeWise Student Insurance or LifeWise Assurance Company.",
    keywords: ["lifewise insurance", "student insurance", "different"]
  },
  {
    question: "How do I cancel Premium or manage billing?",
    answer:
      "Open LifeWise → Profile → Subscription to view, change, or cancel Premium. Plans are billed in INR (Rs. 199/month or Rs. 1,499/year). For a payment issue, email support@lifewiseee.com or WhatsApp +91 63538 91986.",
    keywords: ["cancel", "billing", "subscription", "payment", "refund"]
  },
  {
    question: "How fast does LifeWise support reply?",
    answer:
      "Most messages get a reply within 24 hours. Use WhatsApp or a call for faster help, and email for detailed billing or account issues.",
    keywords: ["reply time", "response", "how long", "24 hours"]
  }
];

/** Home FAQ alias — chatbot / SEO consumers that mean the landing set */
export const FAQ_ITEMS = LANDING_FAQ_ITEMS;
