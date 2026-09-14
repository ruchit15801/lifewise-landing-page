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
    response: "LifeWise is India's Family Operating System, built for family use.\n\nOne Family Hub where each person has a card:\n• Papa's medicine reminders\n• Electricity and mobile bills\n• Health Monitoring (manual + Apple Health / Health Connect)\n• Family Ledger (who paid, for whom)\n• Family Location with consent\n• WiseAI and caregiver sync\n\nAvailable on Google Play (com.lifewise) and the App Store. Hindi, Gujarati, Marathi, Tamil, Telugu and Bengali.",
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
    response: "Family Hub is LifeWise's main feature.\n\nEach family member gets a card. Modules attach to that person, not to a generic inbox:\n\n• Medicines + Health Monitoring (Apple Health / Health Connect)\n• Bills (due dates) + Family Ledger (who paid, for whom)\n• Daily Routine, documents, insurance\n• Family Location (consent-based, pause anytime)\n• Up to 20 modules per member\n\nCaregivers get View / Edit / Full Access. If Papa misses a medicine, connected caregivers are alerted within 30 minutes. That member-first model is what makes LifeWise different from a personal reminder or bill app.",
    followUp: "Want Family Ledger, Family Location, or how to add a caregiver?"
  },

  // ── Medicine Reminders ──
  {
    intent: "medicine_reminder",
    triggers: [
      "medicine", "reminder", "dawai", "tablet", "pill", "medicine reminder",
      "papa medicine", "mummy medicine", "health reminder", "dose",
      "dosage", "goli", "aushadh", "dawa", "medical reminder"
    ],
    response: "Setting up medicine reminders is easy! 💊\n\n📱 Open Family Hub → Select Papa/Mummy\n✅ Enable Medicine module\n💊 Add medicine name, dosage & time (e.g., 8 AM & 8 PM)\n🔔 LifeWise sends push notifications at the right time\n\n🎤 Voice shortcut: Say \"Papa ki medicine 8 baje\" on the Home screen!\n\nFamily and Pro plans add:\n• Missed-dose alerts to caregivers (within 30 min)\n• Medicine stock tracking\n• Monthly compliance reports",
    followUp: "Need help with bill reminders, Family Ledger, or caregiver setup?"
  },

  {
    intent: "uniqueness",
    triggers: [
      "unique", "difference", "different", "vs", "versus", "competitor",
      "why lifewise", "special", "kya alag", "alag", "better than",
      "splitwise", "life360", "medisafe", "reminder app vs", "what makes"
    ],
    response: "LifeWise is unique because it is a Family OS, not one-job apps glued together.\n\n• Family Hub: every task sits on a member card\n• Missed medicines alert caregivers, not only Papa's phone\n• Bills (what is due) stay separate from Family Ledger (who paid)\n• Family Location needs consent and can pause\n• Wearables sync to that member; family sharing is a second permission\n• Smart Automation routes missed tasks and optional bill-to-ledger posting",
    followUp: "Want details on Family Hub, Family Ledger, or health sync?"
  },

  {
    intent: "family_ledger",
    triggers: [
      "family ledger", "ledger", "khata", "khatabook", "who paid",
      "shared expense", "family money", "contribution", "balance",
      "split expense", "expense tracking"
    ],
    response: "Family Ledger is LifeWise's family money module inside Family Hub.\n\nRecord: amount, category, paid by, expense for, payment method, date, optional receipt.\nIt answers who paid and for whom. Bill Management answers what still needs to be paid.\nWhen you mark a bill paid, LifeWise can ask to add that amount to Family Ledger once, so the two records stay linked without duplicating the payment.",
    followUp: "Want bill scan OCR or Money Leak alerts next?"
  },

  {
    intent: "family_location",
    triggers: [
      "location", "family location", "gps", "tracking", "safe place",
      "where is papa", "live location", "share location", "map"
    ],
    response: "Family Location is consent-based, not covert tracking.\n\nA member must opt in, pick who can view, and can pause sharing in one tap.\nOptional Safe Places (Home, School, Work) and arrival alerts only if someone turns them on.\nLifeWise does not promise a fixed update every few minutes; phones control background timing.",
    followUp: "Need Emergency SOS or caregiver permissions?"
  },

  {
    intent: "health_wearables",
    triggers: [
      "apple health", "healthkit", "health connect", "apple watch",
      "galaxy watch", "fitbit", "garmin", "wearable", "smartwatch",
      "steps", "sleep", "heart rate", "bp sync"
    ],
    response: "Health Monitoring lives on the family member's card.\n\niOS: Apple Health / HealthKit (Apple Watch and compatible sources)\nAndroid: Health Connect (including Galaxy Watch via Samsung Health when synced)\nYou can still log BP, sugar, and weight by hand.\nConnecting a watch does not auto-share with the whole family. The member chooses LifeWise family sharing separately. Last synced time is shown; updates follow the phone and watch, not a promised every-second feed.",
    followUp: "Want medicine reminders or Family Hub setup?"
  },

  // ── Bills ──
  {
    intent: "bills",
    triggers: [
      "bill", "electricity", "bijli", "recharge", "mobile bill",
      "gas bill", "broadband", "credit card", "rent", "upi",
      "payment", "due date", "utility", "scan bill"
    ],
    response: "Never miss a bill again! 💡\n\nLifeWise tracks all your bills:\n⚡ Electricity & Gas\n📱 Mobile Recharge\n🌐 Broadband / WiFi\n💳 Credit Card\n🏠 Rent & Maintenance\n\n📅 Set due dates (e.g., every 15th) with reminders days before\n💰 Track amounts in ₹\n📸 Scan Bill: 3 scans/month on Free, 20 on Starter, unlimited on Family and Pro. Camera OCR auto-fills bill details.\n\nMoney Leak Detection is on the Family and Pro plans. It flags unused subscriptions and suggests savings.",
    followUp: "Want to know about pricing or other features?"
  },

  // ── Pricing ──
  {
    intent: "pricing",
    triggers: [
      "price", "pricing", "cost", "kitna", "kharcha", "paisa",
      "free", "premium", "199", "99", "499", "starter", "family plan", "pro plan",
      "subscription", "plan", "rupees",
      "rs", "monthly", "yearly", "payment plan", "kimat", "rate", "kya app free hai", "is it free", "paywall"
    ],
    response: "LifeWise has Free plus three paid plans.\n\nFREE Rs. 0:\n• 2 family members, 3 modules each, 10 reminders\n• 7 days expense history, 1 bill per member, 1 document\n• Voice 5/month, bill scan 3/month, WiseAI 5/month\n• Unlimited push notifications, no ads\n\nSTARTER Rs. 99/month or Rs. 799/year (33% off):\n• 4 members, 8 modules, 50 reminders, 3 months history\n• 1 caregiver per member, in-app monthly report (no PDF)\n\nFAMILY Rs. 199/month or Rs. 1,499/year (37% off), recommended:\n• Unlimited members, all 20 modules, Money Leak, SOS\n• Location for up to 6, PDF reports, WiseAI 100/month\n\nPRO Rs. 499/month or Rs. 3,999/year:\n• Everything in Family, unlimited documents, WiseAI 300/month\n• Medicine interaction checker, 5 sub-accounts, 24-hour support\n\nPrices are listed in INR. The website can show USD, EUR, and GBP converted from INR. Cancel from Profile, then Subscription.",
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
    response: "Download LifeWise now on Google Play and the App Store! 📲\n\n🤖 Android: https://play.google.com/store/apps/details?id=com.lifewise\n🍎 iPhone / iPad: https://apps.apple.com/us/app/lifewise-ai-family-hub/id6803865970\n🌐 Website: https://www.lifewiseee.com\n\n⚠️ Only download from lifewiseee.com or official stores. Avoid fake apps with similar names.",
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
    response: "WiseAI is your family assistant. Limits: 5 messages/month on Free, 30 on Starter, 100 on Family, 300 on Pro.\n\nAsk questions like:\n• \"What reminders does Papa have this week?\"\n• \"How much spent on food this month?\"\n• \"Mummy ki next appointment kab hai?\"\n• \"Which subscriptions are expiring soon?\"\n\nPrivacy-first: uses your family data securely. Document images are NEVER sent to AI.\nWorks in Hindi and English.",
    followUp: "Want plan limits, or other Family Hub features?"
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
    response: "Stay connected with your family through Caregivers! 👨‍👩‍👧‍👦\n\n📱 Family Hub → Select member → Settings → Manage Caregivers\n\nInvite anyone with 3 permission levels:\n👁️ View Only: see reminders & status\n✏️ Can Edit: add/modify reminders\n🔑 Full Access: complete management\n\n🔔 Missed-dose alerts: When Papa misses medicine, ALL caregivers get notified within 30 minutes.\n\nPerfect for:\n• Siblings sharing parent care across cities\n• Spouse coordinating children's schedules\n• NRI children monitoring elderly parents in India",
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
    response: "LifeWise India Support is here to help! 🙏\n\n📧 Email: support@lifewiseee.com\n📞 Call: +91 63538 91986\n💬 WhatsApp: +91 63538 91986\n\n📝 You can also fill the Support form on this page. We'll reply within 24 hours.\n\nSupport available in English & Hindi.",
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
    response: "Track all policies & subscriptions! 📋\n\n🏥 Insurance Module:\n• Health, Life, Vehicle & Home policies\n• Renewal reminders: 30/15/7 days before\n• Store policy documents safely\n\n📺 Subscriptions Module:\n• Netflix, Prime, Hotstar & more\n• Auto-renewal tracking\n• Money Leak Detection flags unused subscriptions\n\n💡 Example: \"You're spending extra on food delivery. Potential saving: ₹2,400/month\"\n\nInsurance, subscriptions, and Money Leak sit on paid plans. Money Leak alerts start on Family.",
    followUp: "Want Starter, Family, or Pro limits?"
  },

  // ── Reports ──
  {
    intent: "reports",
    triggers: [
      "report", "pdf", "analytics", "insights", "summary",
      "monthly report", "health report", "compliance", "track"
    ],
    response: "Get detailed family insights! 📊\n\n📄 Monthly PDF reports (Family and Pro):\n• Medicine compliance per member\n• Bill payment history\n• Expense breakdown by category\n• Family health summary\n• Missed reminders analysis\n\n📈 Example: \"Papa's medicine compliance: 80% this week\"\n\nReports are auto-generated and can be shared with doctors or family members.",
    followUp: "Want WiseAI limits or other Family Hub features?"
  },

  // ── Target Audience ──
  {
    intent: "who_is_it_for",
    triggers: [
      "who is it for", "target", "audience", "kiske liye",
      "for whom", "use case", "suitable", "who is this app for", "who can use", "kon use kari sake"
    ],
    response: "LifeWise is built for Indian families! 🇮🇳\n\n👨‍👩‍👧‍👦 Perfect for:\n• Adult children managing parents in Ahmedabad, Mumbai, Delhi\n• NRI children caring for parents remotely\n• Caregivers coordinating health routines\n• Seniors needing simple, voice-driven reminders\n• Students tracking fees & study schedules\n• Families managing shared bills & expenses\n\nFrom a single person to a joint family of 10+. LifeWise scales to your needs.",
    followUp: "Ready to download and try it free?"
  },

  // ── Voice Reminder ──
  {
    intent: "voice_reminder",
    triggers: [
      "voice", "voice reminder", "speak", "mic", "whisper",
      "bolo", "awaz", "speech"
    ],
    response: "Set reminders with your voice! 🎤\n\nJust speak naturally on the Home screen:\n\n\"Papa ki medicine 8 baje\"\n\"Mummy ka doctor appointment Friday\"\n\"Bijli ka bill 15 tarikh ko\"\n\n⚡ Whisper AI detects:\n• Which family member\n• Time & date\n• Type of reminder\n\nWorks in Hindi & English. No typing needed!\n\nFree includes 5 voice reminders per month. Starter 30. Family and Pro are unlimited.",
    followUp: "Want bill scan or plan limits?"
  },

  // ── Scan Bill ──
  {
    intent: "scan_bill",
    triggers: [
      "scan", "camera", "ocr", "photo bill", "bill photo",
      "capture bill", "scan bill"
    ],
    response: "Scan bills instantly with your camera! 📸\n\n📱 Tap Scan Bill on Home screen\n📷 Point camera at any bill\n🤖 Google ML Kit OCR extracts:\n• Bill name / provider\n• Amount in ₹\n• Due date\n\n✅ Auto-fills the bill form for any family member. No manual entry needed!\n\nFree includes 3 bill scans per month. Starter 20. Family and Pro are unlimited.",
    followUp: "Want pricing or Family Ledger next?"
  }
];

// ── Synonym Map for fuzzy matching ──
export const SYNONYMS: Record<string, string[]> = {
  "medicine": ["dawai", "tablet", "pill", "goli", "dawa", "aushadh", "med"],
  "bill": ["bijli", "recharge", "payment", "kharcha", "bill"],
  "family": ["parivaar", "parivar", "ghar", "kutumb", "gharwale"],
  "ledger": ["khata", "khatabook", "expense", "kharcha"],
  "location": ["gps", "map", "tracking"],
  "unique": ["alag", "different", "vs"],
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
