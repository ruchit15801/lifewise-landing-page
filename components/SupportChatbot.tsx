"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/components/cn";
import {
  getChatbotGreeting,
  getChatbotReply,
  getQuickReplies,
  type ChatMessage
} from "@/lib/chatbot";

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export function SupportChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ id: uid(), role: "bot", text: getChatbotGreeting() }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = { id: uid(), role: "user", text: trimmed };
    const botMsg: ChatMessage = {
      id: uid(),
      role: "bot",
      text: getChatbotReply(trimmed)
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "fixed z-[60] flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 shadow-lift backdrop-blur-xl",
              "dark:border-white/10 dark:bg-slate-950/95",
              "bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 left-4 sm:left-auto sm:w-[min(100vw-2rem,24rem)]",
              "max-h-[min(70dvh,32rem)]"
            )}
            role="dialog"
            aria-label="LifeWise support chat"
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-200/70 px-4 py-3 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white">
                  <Bot className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">LifeWise Support</div>
                  <div className="text-[11px] text-accent font-semibold">● Instant answers</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full border border-slate-200/70 dark:border-white/10"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[88%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                      m.role === "user"
                        ? "bg-primary text-white"
                        : "border border-slate-200/70 bg-white/80 text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                    )}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200/70 p-3 dark:border-white/10">
              <div className="mb-2 flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {getQuickReplies().map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="shrink-0 rounded-full border border-slate-200/70 bg-white/60 px-3 py-1 text-[11px] font-semibold dark:border-white/10 dark:bg-white/5"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about LifeWise..."
                  className="min-h-[44px] flex-1 rounded-2xl border border-slate-200/70 bg-white/60 px-3 text-sm focus:border-primary focus:outline-none dark:border-white/10 dark:bg-white/5"
                />
                <button type="submit" className="btn-primary !px-4" aria-label="Send message">
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-2 text-center text-[10px] text-slate-500">
                Need human help?{" "}
                <a href="#support" className="font-semibold text-primary" onClick={() => setOpen(false)}>
                  Contact support
                </a>
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((p) => !p)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "fixed z-[60] grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary to-indigo-600 text-white shadow-lift",
          "bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4"
        )}
        aria-label={open ? "Close support chat" : "Open LifeWise support chat"}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </>
  );
}
