import { getChatbotReply } from "./lib/chatbot";

const queries = [
  "what is lifewise?",
  "how much is the premium?",
  "dawai reminder kaise set kare?",
  "papa ni dawa",
  "sos emergency",
  "who is this app for?",
  "how to share with my brother?",
  "whatsapp support",
  "kya app free hai?",
  "kem cho",
  "thank you",
  "random gibberish that makes no sense",
];

console.log("--- CHATBOT TEST ---");
for (const q of queries) {
  console.log(`\nQ: ${q}`);
  console.log(`A: ${getChatbotReply(q)}`);
  console.log("-".repeat(40));
}
