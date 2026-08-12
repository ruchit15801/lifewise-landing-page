"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Bot, MessageCircle, Send, X, Sparkles } from "lucide-react";
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

/* ── Typing indicator dots ── */
function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1.5 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-white/5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block h-2 w-2 rounded-full bg-primary/60"
            animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Single message bubble ── */
function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn("flex", isUser ? "justify-end" : "justify-start")}
    >
      {!isUser && (
        <div className="mr-2 mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-indigo-600 text-white">
          <Bot className="h-3.5 w-3.5" />
        </div>
      )}
      <div
        className={cn(
          "max-w-[82%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed",
          isUser
            ? "bg-gradient-to-br from-primary to-indigo-600 text-white rounded-br-md"
            : "border border-slate-200/70 bg-white/80 text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 rounded-bl-md"
        )}
      >
        {message.text}
      </div>
    </motion.div>
  );
}

export function SupportChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize with greeting
  useEffect(() => {
    if (open && messages.length === 0) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setMessages([{ id: uid(), role: "bot", text: getChatbotGreeting() }]);
        setIsTyping(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [open, messages.length]);

  // Auto-scroll
  useEffect(() => {
    const el = listRef.current;
    if (el) {
      requestAnimationFrame(() => {
        el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      });
    }
  }, [messages, isTyping, open]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const send = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = { id: uid(), role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate realistic typing delay (300-900ms based on response length)
    const reply = getChatbotReply(trimmed);
    const delay = Math.min(300 + reply.length * 1.5, 900);

    setTimeout(() => {
      const botMsg: ChatMessage = { id: uid(), role: "bot", text: reply };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, delay);
  }, []);

  const quickReplies = getQuickReplies();

  return (
    <>
      {/* ── Chat Panel ── */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "fixed z-[60] flex flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white/[0.97] shadow-2xl backdrop-blur-2xl",
              "dark:border-white/10 dark:bg-slate-950/[0.97]",
              "bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 left-4 sm:left-auto sm:w-[min(100vw-2rem,26rem)]",
              "max-h-[min(75dvh,36rem)]"
            )}
            role="dialog"
            aria-label="LifeWise AI support chat"
          >
            {/* Header */}
            <div className="relative flex items-center justify-between gap-3 border-b border-slate-200/60 px-4 py-3.5 dark:border-white/10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-indigo-500/5" />
              <div className="relative flex items-center gap-3">
                <div className="relative">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-lg">
                    <Bot className="h-5 w-5" />
                  </span>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-950" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    LifeWise Assistant
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                    ● Online | Instant answers
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative grid h-8 w-8 place-items-center rounded-full border border-slate-200/70 transition-colors hover:bg-slate-100 dark:border-white/10 dark:hover:bg-white/10"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto p-4 scrollbar-none">
              {messages.map((m) => (
                <MessageBubble key={m.id} message={m} />
              ))}
              {isTyping && <TypingIndicator />}
            </div>

            {/* Input area */}
            <div className="border-t border-slate-200/60 p-3 dark:border-white/10">
              {/* Quick replies */}
              <div className="mb-2.5 flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="shrink-0 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold text-primary transition-all hover:bg-primary/10 hover:border-primary/30 active:scale-95 dark:border-primary/30 dark:bg-primary/10 dark:text-primary"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Input form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about LifeWise..."
                  className="min-h-[44px] flex-1 rounded-2xl border border-slate-200/70 bg-slate-50/60 px-4 text-sm transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/15 dark:border-white/10 dark:bg-white/5 dark:focus:bg-white/10"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className={cn(
                    "grid h-[44px] w-[44px] shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-lg transition-all",
                    "hover:shadow-xl hover:scale-[1.03] active:scale-95",
                    "disabled:opacity-40 disabled:hover:scale-100 disabled:hover:shadow-lg"
                  )}
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>

              <p className="mt-2 text-center text-[10px] text-slate-400">
                Powered by LifeWise AI •{" "}
                <a href="#support" className="font-semibold text-primary hover:underline" onClick={() => setOpen(false)}>
                  Contact human support
                </a>
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* ── Floating Button ── */}
      <motion.button
        type="button"
        onClick={() => setOpen((p) => !p)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "fixed z-[60] grid h-14 w-14 place-items-center rounded-full shadow-2xl",
          "bg-gradient-to-br from-primary to-indigo-600 text-white",
          "bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4",
          "transition-shadow hover:shadow-[0_8px_32px_rgba(109,93,246,0.5)]"
        )}
        aria-label={open ? "Close support chat" : "Open LifeWise AI chat"}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring when closed */}
        {!open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" style={{ animationDuration: "2.5s" }} />
        )}
      </motion.button>
    </>
  );
}
