import { FAQ_ITEMS } from "@/lib/faqs";
import { SUPPORT_EMAIL, SUPPORT_PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/support";

export type ChatMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
};

const GREETING =
  "Namaste! I'm LifeWise Support Assistant. Ask about medicine reminders, bills, Family Hub, Premium pricing, or Hindi support. Type your question or tap a quick option below.";

const FALLBACK =
  `I don't have an exact answer for that yet. Our team can help:\n\n• Email: ${SUPPORT_EMAIL}\n• WhatsApp/Call: ${SUPPORT_PHONE_DISPLAY}\n• Or fill the Support form on this page.`;

const QUICK_REPLIES = [
  "Is LifeWise free?",
  "Medicine reminder for Papa",
  "Premium price in rupees",
  "Contact support",
  "Hindi language support"
] as const;

function normalize(text: string) {
  return text.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}

function scoreFaq(query: string, faq: (typeof FAQ_ITEMS)[number]) {
  const q = normalize(query);
  let score = 0;
  const question = normalize(faq.question);

  if (q.includes(normalize(faq.question)) || normalize(faq.question).includes(q)) {
    score += 10;
  }

  for (const word of q.split(" ")) {
    if (word.length < 3) continue;
    if (question.includes(word)) score += 2;
    if (faq.answer.toLowerCase().includes(word)) score += 1;
    faq.keywords?.forEach((kw) => {
      if (kw.includes(word) || word.includes(kw)) score += 3;
    });
  }

  return score;
}

export function getChatbotGreeting(): string {
  return GREETING;
}

export function getQuickReplies(): readonly string[] {
  return QUICK_REPLIES;
}

export function getChatbotReply(userMessage: string): string {
  const q = normalize(userMessage);

  if (!q) return "Please type your question about LifeWise.";

  if (/^(hi|hello|hey|namaste|hii)\b/.test(q)) {
    return GREETING;
  }

  if (/support|contact|call|whatsapp|email|help|sampark|madad/.test(q)) {
    return `LifeWise Support (India):\n\n📧 ${SUPPORT_EMAIL}\n📞 ${SUPPORT_PHONE_DISPLAY}\n💬 WhatsApp: ${WHATSAPP_URL.replace("?text=Hi%20LifeWise%20team%2C%20I%20need%20help%20with%20", "")}\n\nHours: Mon–Sat, 9 AM – 7 PM IST\n\nYou can also scroll to the Support form and we'll email you back within 24 hours.`;
  }

  let best = FAQ_ITEMS[0];
  let bestScore = 0;

  for (const faq of FAQ_ITEMS) {
    const s = scoreFaq(userMessage, faq);
    if (s > bestScore) {
      bestScore = s;
      best = faq;
    }
  }

  if (bestScore >= 3) {
    return best.answer;
  }

  return FALLBACK;
}
