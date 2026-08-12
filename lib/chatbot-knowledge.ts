/**
 * LifeWise Chatbot Knowledge Base
 * Comprehensive product knowledge for intelligent, real-time answers.
 */

export type KnowledgeEntry = {
  intent: string;
  triggers: string[];
  response: string;
  followUp?: string;
};

export const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  // ── Product Overview ──
  {
    intent: "what_is_lifewise",
    triggers: [
      "what is lifewise", "lifewise kya hai", "tell me about lifewise",
      "what does lifewise do", "about lifewise", "lifewise app",
      "explain lifewise", "intro", "introduction", "overview",
      "what app", "kya app", "konsi app", "which app"
    ],
    response: "LifeWise is India's Family Operating System 🇮🇳 — a single mobile app where your entire family's life is organized.\n\n🏠 Manage Papa's medicine reminders\n💡 Track electricity & mobile bills\n🏥 Schedule Mummy's doctor appointments\n📚 Monitor children's study schedules\n👨‍👩‍👧‍👦 Connect caregivers in real-time\n\nIt works on both Android & iOS with support for Hindi, Gujarati, Marathi, Tamil, Telugu & Bengali.",
    followUp: "Would you like to know about pricing, features, or how to download?"
  },

  // ── Family Hub ──
  {
    intent: "family_hub",
    triggers: [
      "family hub", "family feature", "add member", "add papa",
      "add mummy", "family management", "family member", "profile",
      "member profile", "parivaar", "parivar", "ghar"
    ],
    response: "Family Hub is LifeWise's hero feature! 🌟\n\nEach family member gets their own profile with up to 20 modules:\n\n💊 Medicine & Health Monitoring\n💰 Bills & Expenses\n🏥 Doctor Appointments\n📄 Insurance & Documents\n🆘 Emergency SOS\n📚 Study & Education\n🚗 Vehicle Maintenance\n🏋️ Fitness & Diet\n🧠 Mental Wellness\n🔧 Home Maintenance\n\nCaregivers (siblings, spouse, relatives) can be invited with View Only, Can Edit, or Full Access permissions. When Papa misses a medicine, all caregivers get alerted within 30 minutes.",
    followUp: "Want to know how to add a caregiver or set up medicine reminders?"
  },

  // ── Medicine Reminders ──
  {
    intent: "medicine_reminder",
    triggers: [
      "medicine", "reminder", "dawai", "tablet", "pill", "medicine reminder",
      "papa medicine", "mummy medicine", "health reminder", "dose",
      "dosage", "goli", "aushadh", "dawa", "medical reminder"
    ],
    response: "Setting up medicine reminders is easy! 💊\n\n📱 Open Family Hub → Select Papa/Mummy\n✅ Enable Medicine module\n💊 Add medicine name, dosage & time (e.g., 8 AM & 8 PM)\n🔔 LifeWise sends push notifications at the right time\n\n🎤 Voice shortcut: Say \"Papa ki medicine 8 baje\" on the Home screen!\n\nPremium users get:\n• Missed-dose alerts to caregivers (within 30 min)\n• Medicine stock tracking\n• Monthly compliance reports",
    followUp: "Need help with bill reminders or caregiver setup?"
  },

  // ── Bills ──
  {
    intent: "bills",
    triggers: [
      "bill", "electricity", "bijli", "recharge", "mobile bill",
      "gas bill", "broadband", "credit card", "rent", "upi",
      "payment", "due date", "utility", "scan bill"
    ],
    response: "Never miss a bill again! 💡\n\nLifeWise tracks all your bills:\n⚡ Electricity & Gas\n📱 Mobile Recharge\n🌐 Broadband / WiFi\n💳 Credit Card\n🏠 Rent & Maintenance\n\n📅 Set due dates (e.g., every 15th) with reminders days before\n💰 Track amounts in ₹\n📸 Scan Bill feature (Premium): Camera OCR auto-fills bill details!\n\n💡 Money Leak Detection (Premium) flags unused subscriptions and suggests savings.",
    followUp: "Want to know about pricing or other features?"
  },

  // ── Pricing ──
  {
    intent: "pricing",
    triggers: [
      "price", "pricing", "cost", "kitna", "kharcha", "paisa",
      "free", "premium", "199", "subscription", "plan", "rupees",
      "rs", "monthly", "yearly", "payment plan", "kimat", "rate", "kya app free hai", "is it free"
    ],
    response: "LifeWise has a generous free tier + affordable Premium! 💰\n\n🆓 FREE Plan:\n• Up to 3 family members\n• Medicine + Bills modules\n• Basic reminders\n• 1 caregiver per member\n• 7 days history\n\n⭐ PREMIUM — ₹199/month:\n• Unlimited family members\n• All 20 modules\n• WiseAI chat assistant\n• Voice reminders\n• Bill scan OCR\n• Monthly PDF reports\n• Money Leak detection\n• 1 GB document storage\n\n💰 YEARLY SAVINGS:\n• Premium Yearly: ₹1,499/year (save ₹889!)\n• Family Yearly: ₹1,999/year (up to 6 accounts)\n\nCancel anytime from Profile → Subscription.",
    followUp: "Ready to download, or have questions about specific features?"
  },

  // ── Download ──
  {
    intent: "download",
    triggers: [
      "download", "install", "play store", "app store", "android",
      "ios", "iphone", "get app", "where to download", "kaise download",
      "link", "google play"
    ],
    response: "Download LifeWise from the official sources! 📲\n\n🤖 Android: Google Play Store\n🍎 iOS: App Store\n🌐 Website: lifewiseee.com\n\n⚠️ Important: Only download from lifewiseee.com or official stores. Avoid fake apps with similar names.\n\nThe app is lightweight, works offline for reminders, and supports all Indian languages.",
    followUp: "Need help with setup after downloading?"
  },

  // ── WiseAI ──
  {
    intent: "wiseai",
    triggers: [
      "wiseai", "ai", "artificial intelligence", "smart assistant",
      "ai chat", "ask ai", "claude", "chatbot in app", "ai feature",
      "wise ai", "intelligent"
    ],
    response: "WiseAI is your intelligent family assistant! 🤖✨ (Premium feature)\n\nAsk questions like:\n• \"What reminders does Papa have this week?\"\n• \"How much spent on food this month?\"\n• \"Mummy ki next appointment kab hai?\"\n• \"Which subscriptions are expiring soon?\"\n\n🔒 Privacy-first: Uses your family data securely. Document images are NEVER sent to AI.\n🗣️ Works in Hindi & English\n⚡ Powered by Claude API for accurate, contextual answers.",
    followUp: "Want to know about Premium pricing or other features?"
  },

  // ── Language Support ──
  {
    intent: "language",
    triggers: [
      "hindi", "gujarati", "language", "bhasha", "marathi", "tamil",
      "telugu", "bengali", "english", "regional", "indian language",
      "voice", "bolna"
    ],
    response: "LifeWise speaks your language! 🗣️\n\nSupported languages:\n🇮🇳 English\n🇮🇳 Hindi\n🇮🇳 Gujarati\n🇮🇳 Marathi\n🇮🇳 Tamil\n🇮🇳 Telugu\n🇮🇳 Bengali\n\n🎤 Voice Reminder understands Hindi commands like:\n\"Papa ko kal subah 8 baje medicine deni hai\"\n\n🤖 WiseAI answers in both Hindi & English.\n\nChange language anytime from app Settings.",
    followUp: "Anything else you'd like to know?"
  },

  // ── Caregiver ──
  {
    intent: "caregiver",
    triggers: [
      "caregiver", "care giver", "share", "invite", "family share",
      "permission", "access", "connect family", "sync", "real time",
      "dekhbhal", "seva"
    ],
    response: "Stay connected with your family through Caregivers! 👨‍👩‍👧‍👦\n\n📱 Family Hub → Select member → Settings → Manage Caregivers\n\nInvite anyone with 3 permission levels:\n👁️ View Only — see reminders & status\n✏️ Can Edit — add/modify reminders\n🔑 Full Access — complete management\n\n🔔 Missed-dose alerts: When Papa misses medicine, ALL caregivers get notified within 30 minutes.\n\nPerfect for:\n• Siblings sharing parent care across cities\n• Spouse coordinating children's schedules\n• NRI children monitoring elderly parents in India",
    followUp: "Need help with SOS emergency feature or medicine setup?"
  },

  // ── SOS Emergency ──
  {
    intent: "sos",
    triggers: [
      "sos", "emergency", "help button", "panic", "urgent",
      "fall detection", "elderly", "alone", "safety", "suraksha"
    ],
    response: "Emergency SOS keeps your family safe! 🆘\n\n🔴 Activate by:\n• Shake phone 3 times rapidly\n• Long-press SOS button\n\n📲 LifeWise immediately:\n• Sends SMS to emergency contacts\n• Calls emergency contacts\n• Shares live location\n• Sends medical info (allergies, conditions)\n\n👴 Especially useful for elderly parents living alone in India.\n\nSet up emergency contacts in Family Hub → Member → Emergency SOS module.",
    followUp: "Want to know about other safety features?"
  },

  // ── Privacy & Security ──
  {
    intent: "privacy",
    triggers: [
      "privacy", "security", "data", "safe", "secure", "encrypt",
      "personal data", "information safe", "data sell", "trust",
      "surakshit", "private"
    ],
    response: "Your family's data is 100% secure! 🔒\n\n🛡️ LifeWise Privacy:\n• End-to-end encryption\n• Data stored securely on MongoDB\n• Documents on AWS S3 (encrypted)\n• Data is NEVER sold to third parties\n• SMS access (optional) only for bill detection\n\n📤 Your rights:\n• Export all family data anytime\n• Delete account & data from Profile settings\n• Document images never sent to AI\n\nWe follow strict Indian data protection standards.",
    followUp: "Any other questions about LifeWise?"
  },

  // ── Contact Support ──
  {
    intent: "support",
    triggers: [
      "support", "contact", "call", "whatsapp", "email", "help",
      "phone number", "sampark", "madad", "customer care",
      "complaint", "issue", "problem", "bug", "not working"
    ],
    response: "LifeWise India Support is here to help! 🙏\n\n📧 Email: support@lifewiseee.com\n📞 Call: +91 63538 91986\n💬 WhatsApp: +91 63538 91986\n\n🕐 Hours: Mon–Sat, 9 AM – 7 PM IST\n\n📝 You can also fill the Support form on this page — we'll reply within 24 hours.\n\nSupport available in English & Hindi.",
    followUp: "Is there anything specific I can help with right now?"
  },

  // ── Senior Mode ──
  {
    intent: "senior_mode",
    triggers: [
      "senior", "elderly", "old age", "parents", "grandparents",
      "budhe", "buzurg", "simple mode", "easy mode", "large text"
    ],
    response: "LifeWise has a dedicated Senior-Friendly Mode! 👴👵\n\n🔤 Extra large text & buttons\n🎤 Voice-first interaction\n🔔 Louder, persistent reminders\n📱 Simplified interface with fewer options\n👨‍👩‍👧 Caregiver-managed setup\n\nPerfect for parents who aren't tech-savvy. You can set it up for them remotely through the Caregiver feature!\n\nAvailable in Hindi, Gujarati, and all supported languages.",
    followUp: "Want to learn about the SOS feature for seniors?"
  },

  // ── Insurance & Subscriptions ──
  {
    intent: "insurance_subscriptions",
    triggers: [
      "insurance", "bima", "policy", "renewal", "netflix",
      "subscription", "ott", "prime", "hotstar", "money leak"
    ],
    response: "Track all policies & subscriptions! 📋\n\n🏥 Insurance Module:\n• Health, Life, Vehicle & Home policies\n• Renewal reminders: 30/15/7 days before\n• Store policy documents safely\n\n📺 Subscriptions Module:\n• Netflix, Prime, Hotstar & more\n• Auto-renewal tracking\n• Money Leak Detection flags unused subscriptions\n\n💡 Example: \"You're spending extra on food delivery. Potential saving: ₹2,400/month\"\n\nBoth are Premium features.",
    followUp: "Interested in Premium pricing?"
  },

  // ── Reports ──
  {
    intent: "reports",
    triggers: [
      "report", "pdf", "analytics", "insights", "summary",
      "monthly report", "health report", "compliance", "track"
    ],
    response: "Get detailed family insights! 📊\n\n📄 Monthly PDF Reports (Premium):\n• Medicine compliance per member\n• Bill payment history\n• Expense breakdown by category\n• Family health summary\n• Missed reminders analysis\n\n📈 Example: \"Papa's medicine compliance: 80% this week\"\n\nReports are auto-generated and can be shared with doctors or family members.",
    followUp: "Want to know about WiseAI or other Premium features?"
  },

  // ── Target Audience ──
  {
    intent: "who_is_it_for",
    triggers: [
      "who is it for", "target", "audience", "kiske liye",
      "for whom", "use case", "suitable", "who is this app for", "who can use", "kon use kari sake"
    ],
    response: "LifeWise is built for Indian families! 🇮🇳\n\n👨‍👩‍👧‍👦 Perfect for:\n• Adult children managing parents in Ahmedabad, Mumbai, Delhi\n• NRI children caring for parents remotely\n• Caregivers coordinating health routines\n• Seniors needing simple, voice-driven reminders\n• Students tracking fees & study schedules\n• Families managing shared bills & expenses\n\nFrom a single person to a joint family of 10+ — LifeWise scales to your needs.",
    followUp: "Ready to download and try it free?"
  },

  // ── Voice Reminder ──
  {
    intent: "voice_reminder",
    triggers: [
      "voice", "voice reminder", "speak", "mic", "whisper",
      "bolo", "awaz", "speech"
    ],
    response: "Set reminders with your voice! 🎤\n\nJust speak naturally on the Home screen:\n\n\"Papa ki medicine 8 baje\"\n\"Mummy ka doctor appointment Friday\"\n\"Bijli ka bill 15 tarikh ko\"\n\n⚡ Whisper AI detects:\n• Which family member\n• Time & date\n• Type of reminder\n\nWorks in Hindi & English. No typing needed!\n\n(Premium feature)",
    followUp: "Want to know about other Premium features?"
  },

  // ── Scan Bill ──
  {
    intent: "scan_bill",
    triggers: [
      "scan", "camera", "ocr", "photo bill", "bill photo",
      "capture bill", "scan bill"
    ],
    response: "Scan bills instantly with your camera! 📸\n\n📱 Tap Scan Bill on Home screen\n📷 Point camera at any bill\n🤖 Google ML Kit OCR extracts:\n• Bill name / provider\n• Amount in ₹\n• Due date\n\n✅ Auto-fills the bill form for any family member. No manual entry needed!\n\n(Premium feature)",
    followUp: "Interested in other time-saving features?"
  }
];

// ── Synonym Map for fuzzy matching ──
export const SYNONYMS: Record<string, string[]> = {
  "medicine": ["dawai", "tablet", "pill", "goli", "dawa", "aushadh", "med"],
  "bill": ["bijli", "recharge", "payment", "kharcha", "bill"],
  "family": ["parivaar", "parivar", "ghar", "kutumb", "gharwale"],
  "reminder": ["yaad", "notification", "alert", "remind"],
  "download": ["install", "setup", "get", "lena"],
  "price": ["cost", "kitna", "kimat", "paisa", "rate", "rupees"],
  "help": ["madad", "sahayata", "support", "problem"],
  "safe": ["surakshit", "secure", "trust"],
  "old": ["buzurg", "budhe", "senior", "elderly"],
  "emergency": ["sos", "urgent", "panic", "khatara"],
  "language": ["bhasha", "hindi", "gujarati", "bolna"],
  "parent": ["papa", "mummy", "maa", "baap", "parents", "ma", "pitaji"]
};

// ── Greeting variations ──
export const GREETINGS: Record<string, boolean> = {
  "hi": true, "hello": true, "hey": true, "namaste": true,
  "hii": true, "hiii": true, "namaskar": true, "kem cho": true,
  "kaise ho": true, "howdy": true, "sup": true, "yo": true
};

// ── Thank you variations ──
export const THANKS: Record<string, boolean> = {
  "thanks": true, "thank you": true, "dhanyavaad": true,
  "shukriya": true, "thanx": true, "ty": true, "thnx": true,
  "dhanyawad": true, "aabhar": true
};
