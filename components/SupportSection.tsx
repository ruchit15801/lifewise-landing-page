"use client";

import { useState, type FormEvent, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Loader2, Mail, MapPin, Phone, Send, CheckCircle2, ShieldCheck, Star, Zap, Diamond } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import {
  SUPPORT_EMAIL,
  SUPPORT_HOURS,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_TOPICS,
  TEL_URL,
  WHATSAPP_URL
} from "@/lib/support";

export function SupportSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          city: data.get("city"),
          topic: data.get("topic"),
          message: data.get("message"),
          website: data.get("website")
        })
      });

      const json = (await res.json()) as { ok: boolean; error?: string; message?: string };

      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMsg(json.error ?? "Failed to send. Please try WhatsApp or call us.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please email support@lifewiseee.com directly.");
    }
  }

  return (
    <SectionShell
      id="support"
      eyebrow="Support"
      title="LifeWise India Support: We're Here to Help"
      subtitle="Questions about medicine reminders, bills, Family Hub, Premium billing, or app setup? Fill the form and our team will reply to your email within 24 hours."
    >
      <div ref={containerRef} className="relative w-full z-10 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
        
        {/* Parallax Background Gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-visible flex items-center justify-center -z-10">
          <motion.div 
            style={{ y: y1 }}
            className="absolute left-[-15%] top-[10%] h-[40rem] w-[40rem] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/20"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute right-[-10%] top-[30%] h-[35rem] w-[35rem] rounded-full bg-emerald-500/10 blur-[100px] dark:bg-emerald-500/20"
          />
        </div>

        <Reveal className="lg:col-span-2">
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass group h-full relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 border border-white/60 bg-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
          >
            {/* SVG Vector Background for Support Details */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg viewBox="0 0 400 600" className="w-full h-full object-cover">
                <motion.path d="M -100 200 Q 150 -50 400 200 T 900 200" fill="none" stroke="url(#supGrad1)" strokeWidth="4" animate={{ x: [-500, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
                <motion.path d="M -100 400 Q 150 150 400 400 T 900 400" fill="none" stroke="url(#supGrad2)" strokeWidth="4" animate={{ x: [-500, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
                <defs>
                  <linearGradient id="supGrad1" x1="0" y1="0" x2="400" y2="0">
                    <stop stopColor="#3B82F6" stopOpacity="0"/><stop offset="0.5" stopColor="#3B82F6"/><stop offset="1" stopColor="#3B82F6" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="supGrad2" x1="0" y1="0" x2="400" y2="0">
                    <stop stopColor="#10B981" stopOpacity="0"/><stop offset="0.5" stopColor="#10B981"/><stop offset="1" stopColor="#10B981" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Contact LifeWise (India)</h3>
              <p className="mt-3 text-[15px] font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                Made for Indian families with support in English & Hindi. Sales, app help,
                and Premium billing assistance.
              </p>

              <ul className="mt-10 space-y-6 flex-1">
                {[
                  { icon: Mail, label: "Email", value: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}`, color: "from-blue-500 to-indigo-500", shadow: "shadow-blue-500/30" },
                  { icon: Phone, label: "Call & WhatsApp", value: SUPPORT_PHONE_DISPLAY, href: TEL_URL, color: "from-emerald-400 to-teal-500", shadow: "shadow-emerald-500/30", extra: true },
                  { icon: MapPin, label: "Hours (IST)", value: SUPPORT_HOURS, color: "from-amber-400 to-orange-500", shadow: "shadow-orange-500/30" }
                ].map((item, idx) => (
                  <motion.li 
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className={cn("grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white shadow-lg", item.color, item.shadow)}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="mt-1 text-[15px] font-medium text-slate-600 hover:text-blue-600 transition-colors break-all dark:text-slate-300 dark:hover:text-blue-400">
                          {item.value}
                        </a>
                      ) : (
                        <div className="mt-1 text-[15px] font-medium text-slate-600 dark:text-slate-300">{item.value}</div>
                      )}
                      
                      {item.extra && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          <a href={WHATSAPP_URL} className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-md shadow-[#25D366]/30 transition-transform hover:scale-105">
                            WhatsApp
                          </a>
                          <a href={TEL_URL} className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-md shadow-slate-900/30 transition-transform hover:scale-105 dark:bg-white dark:text-slate-900 dark:shadow-white/20">
                            Call now
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl border border-emerald-200/50 bg-emerald-50/50 p-5 text-[14px] font-medium text-slate-700 shadow-inner dark:border-emerald-500/20 dark:bg-emerald-900/20 dark:text-slate-300">
                <strong className="text-emerald-700 dark:text-emerald-400 block mb-1">🇮🇳 India product:</strong>
                UPI bills, Hindi voice reminders, ₹ pricing, and family care built for
                Indian households.
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: "Bank-Grade Security", icon: ShieldCheck, color: "text-blue-500" },
                  { label: "Priority Support", icon: Star, color: "text-amber-500" },
                  { label: "Family Data Sync", icon: Zap, color: "text-purple-500" },
                  { label: "No Hidden Fees", icon: Diamond, color: "text-emerald-500" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5 rounded-xl border border-white/80 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/10">
                    <f.icon className={cn("h-4 w-4 shrink-0", f.color)} />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <motion.form 
            onSubmit={onSubmit} 
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass group h-full relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 border border-white/60 bg-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
          >
            {/* SVG Vector Background for Form */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg viewBox="0 0 600 800" className="w-full h-full object-cover">
                <motion.rect x="100" y="50" width="400" height="700" rx="40" fill="none" stroke="url(#formGrad)" strokeWidth="2" strokeDasharray="10 20" animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                <defs>
                  <linearGradient id="formGrad" x1="0" y1="0" x2="600" y2="800">
                    <stop stopColor="#3B82F6" stopOpacity="0.5"/><stop offset="1" stopColor="#EC4899" stopOpacity="0.5"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Send a Support Request</h3>
              <p className="mt-2 text-[15px] font-medium text-slate-600 dark:text-slate-400">
                Mail will be sent to <strong className="text-blue-600 dark:text-blue-400">{SUPPORT_EMAIL}</strong>
              </p>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-2 group/input">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full name *</span>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-2xl border border-white/80 bg-white/70 px-5 py-4 text-[15px] font-medium shadow-inner backdrop-blur-xl transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/20 group-hover/input:border-blue-300 dark:border-white/10 dark:bg-black/20 dark:text-white dark:focus:bg-black/40"
                    placeholder="Your name"
                  />
                </label>

                <label className="block group/input">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email *</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-2xl border border-white/80 bg-white/70 px-5 py-4 text-[15px] font-medium shadow-inner backdrop-blur-xl transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/20 group-hover/input:border-blue-300 dark:border-white/10 dark:bg-black/20 dark:text-white dark:focus:bg-black/40"
                    placeholder="you@email.com"
                  />
                </label>

                <label className="block group/input">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Phone / WhatsApp *</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    className="mt-2 w-full rounded-2xl border border-white/80 bg-white/70 px-5 py-4 text-[15px] font-medium shadow-inner backdrop-blur-xl transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/20 group-hover/input:border-blue-300 dark:border-white/10 dark:bg-black/20 dark:text-white dark:focus:bg-black/40"
                    placeholder="+91 98765 43210"
                  />
                </label>

                <label className="block sm:col-span-2 group/input">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">City (optional)</span>
                  <input
                    name="city"
                    autoComplete="address-level2"
                    className="mt-2 w-full rounded-2xl border border-white/80 bg-white/70 px-5 py-4 text-[15px] font-medium shadow-inner backdrop-blur-xl transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/20 group-hover/input:border-blue-300 dark:border-white/10 dark:bg-black/20 dark:text-white dark:focus:bg-black/40"
                    placeholder="Ahmedabad, Mumbai, Delhi..."
                  />
                </label>

                <label className="block sm:col-span-2 group/input">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Topic *</span>
                  <div className="relative mt-2">
                    <select
                      name="topic"
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-2xl border border-white/80 bg-white/70 px-5 py-4 pr-12 text-[15px] font-medium shadow-inner backdrop-blur-xl transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/20 group-hover/input:border-blue-300 dark:border-white/10 dark:bg-black/20 dark:text-white dark:focus:bg-black/40"
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>
                      {SUPPORT_TOPICS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-slate-400 dark:text-slate-500">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </label>

                <label className="block sm:col-span-2 group/input">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message *</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-y rounded-2xl border border-white/80 bg-white/70 px-5 py-4 text-[15px] font-medium shadow-inner backdrop-blur-xl transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/20 group-hover/input:border-blue-300 dark:border-white/10 dark:bg-black/20 dark:text-white dark:focus:bg-black/40"
                    placeholder="Describe your issue, e.g. Papa medicine reminder not working, Premium payment, Family Hub setup..."
                  />
                </label>

                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden
                />
              </div>

              {status === "success" ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 flex items-start gap-4 rounded-2xl border border-emerald-200/50 bg-emerald-50/80 p-5 shadow-sm backdrop-blur-md dark:border-emerald-500/20 dark:bg-emerald-900/20">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="text-[15px] font-medium text-slate-800 dark:text-slate-200">
                    Request sent to <strong className="text-emerald-700 dark:text-emerald-400">{SUPPORT_EMAIL}</strong>. We will reply within 24 hours on
                    business days (IST).
                  </div>
                </motion.div>
              ) : null}

              {status === "error" ? (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 rounded-xl bg-red-50 p-4 text-[15px] font-bold text-red-600 dark:bg-red-500/10 dark:text-red-400">
                  {errorMsg}
                </motion.p>
              ) : null}

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "mt-8 w-full sm:w-auto rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-center text-[15px] font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/50 flex items-center justify-center gap-3", 
                  status === "loading" && "opacity-70 cursor-not-allowed"
                )}
              >
                {status === "loading" ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
                {status === "loading" ? "Sending Request..." : "Send Support Request"}
              </motion.button>
            </div>
          </motion.form>
        </Reveal>
      </div>
    </SectionShell>
  );
}
