/**
 * LifeWise Chatbot Engine — Advanced intent matching with
 * synonym expansion, fuzzy scoring, FAQ fallback, and context awareness.
 */

import { FAQ_ITEMS } from "@/lib/faqs";
import { SUPPORT_EMAIL, SUPPORT_PHONE_DISPLAY } from "@/lib/support";
import {
  KNOWLEDGE_BASE,
  SYNONYMS,
  GREETINGS,
  THANKS,
  type KnowledgeEntry
} from "@/lib/chatbot-knowledge";

export type ChatMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
};

const GREETING_RESPONSE =
  "Namaste! 🙏 I'm LifeWise Assistant — your smart guide to India's Family Operating System.\n\nI can help you with:\n💊 Medicine reminders\n💡 Bill tracking\n👨‍👩‍👧‍👦 Family Hub & Caregivers\n💰 Pricing & Plans\n🤖 WiseAI features\n🆘 SOS & Safety\n📲 Download & Setup\n\nAsk me anything about LifeWise!";

const THANKS_RESPONSE =
  "You're welcome! 🙏 Happy to help. Feel free to ask anything else about LifeWise anytime!";

const FALLBACK =
  `I appreciate your question! While I don't have a specific answer for that, here's how to get help:\n\n📧 Email: ${SUPPORT_EMAIL}\n📞 Call/WhatsApp: ${SUPPORT_PHONE_DISPLAY}\n🕐 Mon–Sat, 9 AM – 7 PM IST\n\nOr scroll to the Support form on this page — our team replies within 24 hours!\n\nYou can also try asking me about features, pricing, medicine reminders, or Family Hub.`;

const QUICK_REPLIES = [
  "What is LifeWise?",
  "Premium pricing ₹",
  "Medicine reminder setup",
  "Family Hub features",
  "Download the app"
] as const;

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s₹]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Expand query words using synonym map */
function expandWithSynonyms(words: string[]): string[] {
  const expanded = new Set(words);
  for (const word of words) {
    for (const [canonical, syns] of Object.entries(SYNONYMS)) {
      if (word === canonical || syns.includes(word)) {
        expanded.add(canonical);
        syns.forEach((s) => expanded.add(s));
      }
    }
  }
  return Array.from(expanded);
}

/** Score a knowledge entry against user query */
function scoreEntry(query: string, entry: KnowledgeEntry): number {
  const q = normalize(query);
  const words = q.split(" ").filter((w) => w.length >= 2);
  const expanded = expandWithSynonyms(words);
  let score = 0;

  // Direct trigger match (highest weight)
  for (const trigger of entry.triggers) {
    const t = normalize(trigger);
    if (q === t) return 100; // exact match
    if (q.includes(t)) score += 15;
    if (t.includes(q) && q.length > 3) score += 12;
  }

  // Word-level matching against triggers
  for (const word of expanded) {
    if (word.length < 2) continue;
    for (const trigger of entry.triggers) {
      const t = normalize(trigger);
      if (t.includes(word)) score += 4;
      if (word.includes(t) && t.length >= 3) score += 3;
    }
  }

  // Match against response content (lower weight)
  const resp = normalize(entry.response);
  for (const word of expanded) {
    if (word.length < 3) continue;
    if (resp.includes(word)) score += 1;
  }

  return score;
}

/** Score FAQ items as fallback */
function scoreFaq(query: string, faq: (typeof FAQ_ITEMS)[number]): number {
  const q = normalize(query);
  const words = q.split(" ").filter((w) => w.length >= 2);
  const expanded = expandWithSynonyms(words);
  let score = 0;

  const question = normalize(faq.question);
  if (q.includes(question) || question.includes(q)) score += 10;

  for (const word of expanded) {
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
  return GREETING_RESPONSE;
}

export function getQuickReplies(): readonly string[] {
  return QUICK_REPLIES;
}

export function getChatbotReply(userMessage: string): string {
  const q = normalize(userMessage);

  if (!q) return "Please type your question about LifeWise — I'm here to help! 😊";

  // Check greetings
  const firstWord = q.split(" ")[0];
  if (GREETINGS[firstWord] || GREETINGS[q]) {
    return GREETING_RESPONSE;
  }

  // Check thanks
  if (THANKS[q] || THANKS[firstWord]) {
    return THANKS_RESPONSE;
  }

  // Score all knowledge entries
  let bestEntry: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of KNOWLEDGE_BASE) {
    const s = scoreEntry(userMessage, entry);
    if (s > bestScore) {
      bestScore = s;
      bestEntry = entry;
    }
  }

  // If knowledge base has a good match
  if (bestEntry && bestScore >= 6) {
    let reply = bestEntry.response;
    if (bestEntry.followUp) {
      reply += "\n\n" + bestEntry.followUp;
    }
    return reply;
  }

  // Fall back to FAQ matching
  let bestFaq = FAQ_ITEMS[0];
  let bestFaqScore = 0;

  for (const faq of FAQ_ITEMS) {
    const s = scoreFaq(userMessage, faq);
    if (s > bestFaqScore) {
      bestFaqScore = s;
      bestFaq = faq;
    }
  }

  if (bestFaqScore >= 3) {
    return bestFaq.answer;
  }

  return FALLBACK;
}
