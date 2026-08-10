/** Real user questions for LifeWise (Indian family app context) */

export type FaqItem = {
  question: string;
  answer: string;
  keywords?: string[];
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is LifeWise app?",
    answer:
      "LifeWise is India's Family Operating System: a mobile app where you manage Papa's medicine, Mummy's doctor visits, electricity bills, insurance renewals, school fees, and daily family routines from one place. It works on Android and iOS.",
    keywords: ["what is lifewise", "lifewise app kya hai"]
  },
  {
    question: "Is LifeWise free to use in India?",
    answer:
      "Yes. LifeWise has a free plan for Indian families: up to 3 members, Medicine + Bills modules, basic reminders, and 7 days history. Premium is Rs. 199/month for all 20 modules, WiseAI, voice reminders, bill scan, and unlimited family members.",
    keywords: ["free", "price", "cost", "kitna"]
  },
  {
    question: "How do I set medicine reminder for Papa or Mummy?",
    answer:
      "Open Family Hub → add or select Papa/Mummy → enable Medicine module → add medicine name, dosage, and time (e.g. 8 AM & 8 PM). LifeWise sends push notifications. You can also say: 'Papa ki medicine 8 baje' using Voice Reminder on the Home screen.",
    keywords: ["medicine", "papa", "mummy", "dawai", "tablet"]
  },
  {
    question: "Can LifeWise remind me about electricity and mobile bills?",
    answer:
      "Yes. Add bills in the Bills module: electricity, gas, broadband, mobile recharge, credit card, rent, and more. Set due date (e.g. every 15th), reminder days before, and approximate amount in Rs. You can also Scan Bill with camera OCR to auto-fill details.",
    keywords: ["bill", "electricity", "bijli", "recharge", "upi"]
  },
  {
    question: "Does LifeWise work in Hindi and Gujarati?",
    answer:
      "Yes. LifeWise supports English, Hindi, Gujarati, Marathi, Tamil, Telugu, and Bengali in app settings. Voice Reminder understands Hindi commands like 'Papa ko kal subah 8 baje medicine deni hai'. WiseAI answers in Hindi and English.",
    keywords: ["hindi", "gujarati", "language", "bhasha"]
  },
  {
    question: "What is Family Hub in LifeWise?",
    answer:
      "Family Hub is the main feature. Each family member (Papa, Mummy, child, spouse) gets a profile with up to 20 modules: medicine, bills, insurance, documents, SOS, study, vehicle, and more. Caregivers can manage members and get real-time sync when reminders are done or missed.",
    keywords: ["family hub", "members", "caregiver"]
  },
  {
    question: "How do I add a caregiver for my parents?",
    answer:
      "In Family Hub → select member → Settings → Manage Caregivers. Invite spouse, sibling, or relative with View Only, Can Edit, or Full Access. When Papa misses a medicine reminder, all connected caregivers get an alert within 30 minutes.",
    keywords: ["caregiver", "parents", "share", "family"]
  },
  {
    question: "What is WiseAI and is it included?",
    answer:
      "WiseAI is LifeWise's AI family assistant (Premium). Ask: 'What reminders does Papa have this week?', 'How much spent on food this month?', or 'Mummy ki next appointment kab hai?' It uses your family data securely. Document images are never sent to AI.",
    keywords: ["wiseai", "ai", "chat", "assistant"]
  },
  {
    question: "Is my family's health and bill data safe?",
    answer:
      "LifeWise is privacy-first. Data is encrypted, stored securely on MongoDB, documents on AWS S3, and never sold. SMS access (optional) is only for bill detection. You can export or delete family data anytime from Profile settings.",
    keywords: ["safe", "privacy", "data", "secure"]
  },
  {
    question: "What is SOS emergency feature?",
    answer:
      "Emergency SOS lets a family member shake phone 3 times or long-press SOS button. LifeWise sends SMS and calls to emergency contacts with location and medical info, useful for elderly parents living alone in India.",
    keywords: ["sos", "emergency", "help"]
  },
  {
    question: "How much is LifeWise Premium in rupees?",
    answer:
      "Premium: Rs. 199/month. Yearly: Rs. 1,499/year (save Rs. 888). Family Yearly: Rs. 1,999/year for up to 6 accounts. Payment in INR. Cancel anytime from Profile → Subscription.",
    keywords: ["premium", "199", "rupees", "yearly", "payment"]
  },
  {
    question: "How do I download LifeWise app?",
    answer:
      "Visit the official website lifewiseee.com and tap Download on Google Play. iOS version is also available. Only download from lifewiseee.com. Avoid fake apps with similar names.",
    keywords: ["download", "install", "play store", "android", "ios"]
  },
  {
    question: "How do I contact LifeWise support?",
    answer:
      "Email support@lifewiseee.com, call or WhatsApp +91 63538 91986 (Mon–Sat 9 AM–7 PM IST), or fill the Support form on lifewiseee.com/support. Our team helps with setup, billing, and app issues in English and Hindi.",
    keywords: ["support", "contact", "help", "call", "whatsapp", "email"]
  },
  {
    question: "Can LifeWise track insurance and subscription renewals?",
    answer:
      "Yes. Insurance module tracks health, life, vehicle, and home policies with renewal reminders (30/15/7 days before). Subscriptions module tracks Netflix, Prime, Hotstar, and other renewals. Money Leak detection flags unused subscriptions to save Rs. per month.",
    keywords: ["insurance", "netflix", "subscription", "renewal"]
  },
  {
    question: "Who is LifeWise made for in India?",
    answer:
      "LifeWise is built for Indian families: adult children managing parents in Ahmedabad, Mumbai, Delhi or abroad; caregivers coordinating health; seniors using simple reminders; students tracking fees and study schedules, all in one Family Operating System.",
    keywords: ["india", "indian", "family", "parents"]
  }
];
