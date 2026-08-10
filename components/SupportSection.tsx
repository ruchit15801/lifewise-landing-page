"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
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
      title="LifeWise India Support — We're Here to Help"
      subtitle="Questions about medicine reminders, bills, Family Hub, Premium billing, or app setup? Fill the form and our team will reply to your email within 24 hours."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
        <Reveal className="lg:col-span-2">
          <div className="glass h-full p-6 sm:p-8">
            <h3 className="text-lg font-semibold">Contact LifeWise (India)</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Made for Indian families — support in English &amp; Hindi. Sales, app help,
              and Premium billing assistance.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Email</div>
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="text-sm text-primary hover:underline break-all"
                  >
                    {SUPPORT_EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-accent/15 text-accent">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Call &amp; WhatsApp</div>
                  <a href={TEL_URL} className="text-sm text-primary hover:underline">
                    {SUPPORT_PHONE_DISPLAY}
                  </a>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <a href={WHATSAPP_URL} className="btn-secondary !py-2 !px-4 !text-xs">
                      WhatsApp
                    </a>
                    <a href={TEL_URL} className="btn-secondary !py-2 !px-4 !text-xs">
                      Call now
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Hours (IST)</div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{SUPPORT_HOURS}</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-4 text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-white">🇮🇳 India product:</strong>{" "}
              UPI bills, Hindi voice reminders, Rs. pricing, and family care built for
              Indian households.
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="lg:col-span-3">
          <form onSubmit={onSubmit} className="glass p-6 sm:p-8 h-full">
            <h3 className="text-lg font-semibold">Send a support request</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Mail will be sent to <strong>{SUPPORT_EMAIL}</strong>
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold">Full name *</span>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 text-sm shadow-premium backdrop-blur-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-white/5"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold">Email *</span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 text-sm shadow-premium backdrop-blur-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-white/5"
                  placeholder="you@email.com"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold">Phone / WhatsApp *</span>
                <input
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  className="mt-1.5 w-full rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 text-sm shadow-premium backdrop-blur-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-white/5"
                  placeholder="+91 98765 43210"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold">City (optional)</span>
                <input
                  name="city"
                  autoComplete="address-level2"
                  className="mt-1.5 w-full rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 text-sm shadow-premium backdrop-blur-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-white/5"
                  placeholder="Ahmedabad, Mumbai, Delhi..."
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold">Topic *</span>
                <select
                  name="topic"
                  required
                  defaultValue=""
                  className="mt-1.5 w-full rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 text-sm shadow-premium backdrop-blur-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-white/5"
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
              </label>

              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold">Message *</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-1.5 w-full resize-y rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 text-sm shadow-premium backdrop-blur-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-white/5"
                  placeholder="Describe your issue — e.g. Papa medicine reminder not working, Premium payment, Family Hub setup..."
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
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-accent/25 bg-accent/10 p-4 text-sm text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  Request sent to {SUPPORT_EMAIL}. We will reply within 24 hours on
                  business days (IST).
                </div>
              </div>
            ) : null}

            {status === "error" ? (
              <p className="mt-5 text-sm font-semibold text-red-600 dark:text-red-400">
                {errorMsg}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className={cn("btn-primary mt-6 w-full sm:w-auto", status === "loading" && "opacity-70")}
            >
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {status === "loading" ? "Sending..." : "Send to support@lifewiseee.com"}
            </button>
          </form>
        </Reveal>
      </div>
    </SectionShell>
  );
}
