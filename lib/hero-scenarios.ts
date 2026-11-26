import {
  BellRing,
  FileText,
  Pill,
  Receipt,
  ShieldCheck,
  Users,
  Wallet
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { HeroLang } from "./hero-locale";

export type HeroScenario = {
  id: string;
  key: "meds" | "bills" | "family" | "insurance" | "money";
  icon: LucideIcon;
  badge: Record<HeroLang, string>;
  question: Record<HeroLang, string>;
  resolution: Record<HeroLang, string>;
  subline: Record<HeroLang, string>;
  problem: Record<HeroLang, string>;
  solution: Record<HeroLang, string>;
  fixLabel: Record<HeroLang, string>;
};

export const HERO_SCENARIOS: HeroScenario[] = [
  {
    id: "meds",
    key: "meds",
    icon: Pill,
    badge: {
      en: "Medicine Reminder",
      gu: "દવા રિમાઇન્ડર",
      hi: "दवाई रिमाइंडर"
    },
    question: {
      en: "Papa forgot his medicine?",
      gu: "પપ્પા દવા લેવાનું ભૂલી ગયા?",
      hi: "पापा दवाई लेना भूल गए?"
    },
    resolution: {
      en: "You'll know right away.",
      gu: "તમને તરત ખબર પડી જશે.",
      hi: "आपको तुरंत खबर पड़ जाएगी।"
    },
    subline: {
      en: "LifeWise reminds Papa on time, and alerts you if he misses it. Medicines, bills and family in one app.",
      gu: "LifeWise પપ્પાને સમયસર યાદ અપાવશે, અને ચૂકી જાય તો તમને તરત એલર્ટ કરશે. દવા, બિલ અને પરિવાર — એક એપમાં.",
      hi: "LifeWise पापा को समय पर याद दिलाता है, और छूटने पर आपको तुरंत अलर्ट भेजता है। दवाई, बिल और परिवार — एक ऐप में।"
    },
    problem: {
      en: "Papa forgot his BP tablet again",
      gu: "પપ્પા ફરીથી પોતાની BP ની ગોળી ભૂલી ગયા",
      hi: "पापा फिर से अपनी BP की गोली भूल गए"
    },
    solution: {
      en: "He gets a reminder, you get an alert if he misses it",
      gu: "પપ્પાને રીમાઇન્ડર મળે છે, અને ભૂલી જાય તો તમને તરત એલર્ટ આવે છે",
      hi: "पापा को अलार्म मिलेगा, और मिस होने पर तुरंत आपको अलर्ट आएगा"
    },
    fixLabel: {
      en: "LifeWise Fix",
      gu: "LifeWise ઉકેલ",
      hi: "LifeWise समाधान"
    }
  },
  {
    id: "bills",
    key: "bills",
    icon: Receipt,
    badge: {
      en: "Bill Tracker",
      gu: "બિલ મેનેજમેન્ટ",
      hi: "बिल ट्रैकर"
    },
    question: {
      en: "Late fee on electricity bill?",
      gu: "લાઈટ બિલ પર પેનલ્ટી લાગી ગઈ?",
      hi: "बिजली बिल पर लेट फीस लग गई?"
    },
    resolution: {
      en: "Never pay a penalty again.",
      gu: "હવે ક્યારેય પેનલ્ટી નહીં ભરવી પડે.",
      hi: "अब कभी पेनाल्टी नहीं लगेगी।"
    },
    subline: {
      en: "Scan any utility bill once. LifeWise tracks due dates, auto-calculates amounts, and alerts the whole family.",
      gu: "ઘરનું કોઈપણ બિલ એકવાર સ્કેન કરો. LifeWise છેલ્લી તારીખ ટ્રેક કરીને સમયસર આખા પરિવારને યાદ કરાવશે.",
      hi: "कोई भी बिल एक बार स्कैन करें। LifeWise तारीख ट्रैक करके आखिरी तारीख से पहले पूरे परिवार को अलर्ट भेजता है।"
    },
    problem: {
      en: "Late fee on the electricity bill again",
      gu: "લાઈટ બિલ ભરવામાં મોડું થવાથી પેનલ્ટી લાગી",
      hi: "बिजली बिल लेट होने से लेट फीस लग गई"
    },
    solution: {
      en: "Scan once, get reminded 3 days before the due date",
      gu: "એકવાર બિલ સ્કેન કરો, છેલ્લી તારીખના 3 દિવસ પહેલા સમયસર રિમાઇન્ડર મેળવો",
      hi: "एक बार स्कैन करें, आखिरी तारीख से 3 दिन पहले रिमाइंडर पाएं"
    },
    fixLabel: {
      en: "LifeWise Fix",
      gu: "LifeWise ઉકેલ",
      hi: "LifeWise समाधान"
    }
  },
  {
    id: "family",
    key: "family",
    icon: Users,
    badge: {
      en: "Family Care",
      gu: "ફેમિલી કેર",
      hi: "फैमिली केयर"
    },
    question: {
      en: '"Did anyone call Mummy?"',
      gu: '"મમ્મી સાથે કોઈએ વાત કરી આજે?"',
      hi: '"क्या किसी ने मम्मी को कॉल किया?"'
    },
    resolution: {
      en: "Everyone stays in the loop.",
      gu: "આખો પરિવાર એક સાથે અપડેટ.",
      hi: "पूरा परिवार एक साथ कनेक्टेड।"
    },
    subline: {
      en: "Senior Mode with single-tap 'I'm OK' check-in and emergency SOS. Stop asking the same questions in WhatsApp groups.",
      gu: "સિનિયર મોડમાં ફક્ત 1-ટેપ 'I'm OK' ચેક-ઇન અને ઇમરજન્સી SOS. વોટ્સએપ ગ્રૂપમાં વારંવાર પૂછવાની કોઈ ચિંતા નહીં.",
      hi: "सीनियर मोड में सिर्फ 1-टैप 'I'm OK' चेक-इन और इमरजेंसी SOS। व्हाट्सऐप ग्रुप्स में बार-बार पूछने की जरूरत नहीं।"
    },
    problem: {
      en: '"Did anyone call Mummy?" in the family group',
      gu: 'ફેમિલી ગ્રૂપમાં એ જ ચિંતા: "મમ્મી સાથે કોઈએ વાત કરી?"',
      hi: 'फैमिली ग्रुप में वही सवाल: "क्या किसी ने मम्मी को कॉल किया?"'
    },
    solution: {
      en: "Daily check-ins & routine updates shared live in one Family Hub",
      gu: "મમ્મીનું ડેઇલી ચેક-ઇન અને અપડેટ્સ એક જ ફેમિલી હબમાં સૌને લાઈવ દેખાય છે",
      hi: "डेली चेक-इन और जरूरी अपडेट्स एक ही फैमिली हब में सबको लाइव दिखते हैं"
    },
    fixLabel: {
      en: "LifeWise Fix",
      gu: "LifeWise ઉકેલ",
      hi: "LifeWise समाधान"
    }
  },
  {
    id: "insurance",
    key: "insurance",
    icon: ShieldCheck,
    badge: {
      en: "Doc Vault",
      gu: "ડોક્યુમેન્ટ વૉલ્ટ",
      hi: "दस्तावेज वॉल्ट"
    },
    question: {
      en: "Health insurance renewal missed?",
      gu: "હેલ્થ ઇન્સ્યોરન્સ રિન્યુઅલ ભૂલાઈ ગયું?",
      hi: "हेल्थ इन्श्योरेंस रीन्यूअल छूट गया?"
    },
    resolution: {
      en: "Always stay protected.",
      gu: "પરિવાર હંમેશા સુરક્ષિત રહેશે.",
      hi: "परिवार हमेशा सुरक्षित रहेगा।"
    },
    subline: {
      en: "Store policies, health cards & receipts safely. LifeWise warns you 30 days before expiry with details in 1 tap.",
      gu: "હેલ્થ કાર્ડ, પોલિસી અને ગેરંટી રસીદ સુરક્ષિત રાખો. LifeWise એક્સપાયરીના 30 દિવસ પહેલાં જ સમયસર ચેતવે છે.",
      hi: "पॉलिसी, मेडिकल कार्ड और जरूरी दस्तावेज सुरक्षित रखें। LifeWise एक्सपायरी से 30 दिन पहले ही सचेत कर देता है।"
    },
    problem: {
      en: "Health insurance lapsed because renewal was forgotten",
      gu: "તારીખ ભૂલાઈ જતાં હેલ્થ ઇન્સ્યોરન્સ રિન્યુઅલ ચૂકી ગયા",
      hi: "तारीख याद न रहने से हेल्थ पॉलिसी रीन्यूअल मिस हो गई"
    },
    solution: {
      en: "Smart renewal alerts 30 days ahead with policy cards in 1 tap",
      gu: "30 દિવસ પહેલા સ્માર્ટ એલર્ટ, પોલિસી ડિટેલ્સ સીધી 1 ટેપમાં હાજર",
      hi: "30 दिन पहले स्मार्ट रीन्यूअल अलर्ट, पॉलिसी नंबर सीधे स्क्रीन पर"
    },
    fixLabel: {
      en: "LifeWise Fix",
      gu: "LifeWise ઉકેલ",
      hi: "LifeWise समाधान"
    }
  },
  {
    id: "money",
    key: "money",
    icon: Wallet,
    badge: {
      en: "Money Leak",
      gu: "બિનજરૂરી ખર્ચ",
      hi: "मनी लीक"
    },
    question: {
      en: "Money leaking on autopay?",
      gu: "ઓટો-પેથી છૂપા પૈસા કપાય છે?",
      hi: "ऑटो-पे से चुपके-चुपકે पैसे कट रहे हैं?"
    },
    resolution: {
      en: "Plug silent household drains.",
      gu: "ઘરના બિનજરૂરી ખર્ચા તરત અટકાવો.",
      hi: "फालतू खर्चों पर तुरंत रोक लगाएं।"
    },
    subline: {
      en: "Track groceries, maid salaries, and joint expenses. Money Leak radar spots forgotten subscriptions before they charge.",
      gu: "કરિયાણું, બિલ અને ઘરખર્ચનો પારદર્શક ફેમિલી હિસાબ. Money Leak રડાર નકામા ઓટો-પે તરત પકડી પાડે છે.",
      hi: "किराना, बिल और घर के खर्चों का साफ फैमिली खाता। Money Leak रडार बेकार ऑटो-पे पैसे कटने से पहले पकड़ता है।"
    },
    problem: {
      en: "Unused subscriptions quietly charging every month",
      gu: "વણવપરાયેલા સબ્સ્ક્રિપ્શન્સ દર મહિને ખાતામાંથી પૈસા કાપી રહ્યા છે",
      hi: "अनयूज्ड सब्सक्रिप्शन हर महीने चुपके से पैसे काट रहे हैं"
    },
    solution: {
      en: "Money Leak radar flags unused autopays & duplicate spend",
      gu: "Money Leak રડાર નકામા ઓટો-પે અને બિનજરૂરી ખર્ચ તરત પકડી પાડે છે",
      hi: "Money Leak रडार बेकार ऑटो-पे और फालतू खर्च तुरंत पकड़ता है"
    },
    fixLabel: {
      en: "LifeWise Fix",
      gu: "LifeWise ઉકેલ",
      hi: "LifeWise समाधान"
    }
  }
];

export const HERO_LANG_LABELS: Record<HeroLang, string> = {
  gu: "ગુજરાતી",
  hi: "हिंदी",
  en: "EN"
};

export const HERO_TAP_HINT: Record<HeroLang, string> = {
  en: "Tap to see the LifeWise fix",
  gu: "LifeWise નો ઉકેલ જોવા ટેપ કરો",
  hi: "LifeWise का समाधान देखने के लिए टैप करें"
};
