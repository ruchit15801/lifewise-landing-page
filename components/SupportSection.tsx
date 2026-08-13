"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  ExternalLink,
  ChevronDown,
  ShieldCheck,
  Clock3,
  Languages,
  Sparkles,
  CheckCircle2,
  Check,
  Users,
  MessageCircle
} from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/components/cn";
import {
  SUPPORT_EMAIL,
  SUPPORT_PHONE_DISPLAY,
  TEL_URL,
  WHATSAPP_URL,
  SUPPORT_HOURS
} from "@/lib/seo";

const TOPICS = [
  { value: "general", label: "General inquiry", hint: "Anything else" },
  { value: "family-hub", label: "Family Hub setup", hint: "Members & caregivers" },
  { value: "premium", label: "Premium / billing", hint: "Plans & payments" },
  { value: "technical", label: "App issue / bug", hint: "Crash or error" },
  { value: "medicine", label: "Medicine reminders", hint: "Schedules & alerts" },
  { value: "feedback", label: "Feedback / suggestion", hint: "Ideas for us" }
] as const;

const LANGUAGES = [
  { value: "english", label: "English", hint: "EN" },
  { value: "hindi", label: "Hindi", hint: "हिंदी" },
  { value: "gujarati", label: "Gujarati", hint: "ગુજરાતી" },
  { value: "marathi", label: "Marathi", hint: "मराठी" },
  { value: "other", label: "Other", hint: "Tell us in message" }
] as const;

const FAMILY_SIZES = [
  { value: "1-2", label: "1-2 members", hint: "Just us" },
  { value: "3-4", label: "3-4 members", hint: "Typical family" },
  { value: "5-6", label: "5-6 members", hint: "Joint family" },
  { value: "7+", label: "7+ members", hint: "Big household" }
] as const;

const CONTACT_METHODS = [
  {
    value: "whatsapp",
    label: "WhatsApp",
    desc: "Fastest reply",
    icon: MessageCircle
  },
  {
    value: "email",
    label: "Email",
    desc: "Detailed help",
    icon: Mail
  },
  {
    value: "call",
    label: "Call",
    desc: "Talk to us",
    icon: Phone
  }
] as const;

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  city: "",
  topic: "general",
  language: "english",
  familySize: "3-4",
  contactMethod: "whatsapp",
  message: ""
};

const fieldClass =
  "w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-[15px] font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:bg-slate-900 dark:focus:ring-indigo-400/20";

const labelClass =
  "font-display text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400";

function ThemedSelect({
  id,
  label,
  value,
  onChange,
  options
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly { value: string; label: string; hint?: string }[];
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const selected = options.find((o) => o.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="space-y-2" ref={rootRef}>
      <span id={`${id}-label`} className={labelClass}>
        {label}
      </span>
      <div className="relative">
        <button
          id={id}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${id}-label`}
          aria-controls={listId}
          onClick={() => setOpen((p) => !p)}
          className={cn(
            fieldClass,
            "flex items-center justify-between gap-3 pr-3 text-left",
            open && "border-indigo-500 bg-white dark:bg-slate-800/90 ring-2 ring-indigo-500/20"
          )}
        >
          <span className="min-w-0 truncate">{selected?.label}</span>
          <span
            className={cn(
              "grid h-8 w-8 shrink-0 place-items-center rounded-xl border transition",
              open
                ? "border-indigo-200 bg-indigo-600 text-white"
                : "border-indigo-100 bg-indigo-50 text-indigo-600"
            )}
          >
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
              strokeWidth={2.5}
            />
          </span>
        </button>

        <AnimatePresence>
          {open ? (
            <motion.ul
              id={listId}
              role="listbox"
              aria-labelledby={`${id}-label`}
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 right-0 z-30 mt-2 max-h-64 overflow-auto rounded-2xl border border-indigo-100 bg-white p-1.5 shadow-xl shadow-indigo-500/15 ring-1 ring-indigo-500/10 dark:border-indigo-500/20 dark:bg-[#12121c] dark:shadow-black/40 dark:ring-indigo-400/10"
            >
              {options.map((opt) => {
                const active = opt.value === value;
                return (
                  <li key={opt.value} role="option" aria-selected={active}>
                    <button
                      type="button"
                      onClick={() => {
                        onChange(opt.value);
                        setOpen(false);
                      }}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition",
                        active
                          ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                          : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-800 dark:text-slate-300 dark:hover:bg-indigo-500/15 dark:hover:text-indigo-200"
                      )}
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-sm font-semibold">
                          {opt.label}
                        </span>
                        {opt.hint ? (
                          <span
                            className={cn(
                              "mt-0.5 block text-[11px] font-medium",
                              active ? "text-indigo-100" : "text-slate-400 dark:text-slate-500"
                            )}
                          >
                            {opt.hint}
                          </span>
                        ) : null}
                      </span>
                      {active ? <Check className="h-4 w-4 shrink-0" strokeWidth={2.5} /> : null}
                    </button>
                  </li>
                );
              })}
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function SupportSection() {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          topic: `${formData.topic} | lang:${formData.language} | family:${formData.familySize} | contact:${formData.contactMethod}`,
          message: formData.message,
          website: ""
        })
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Could not send message.");
      }
      setStatus("success");
      setFormData(emptyForm);
      window.setTimeout(() => setStatus("idle"), 3500);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <SectionShell
      id="support"
      eyebrow="Support"
      title="We're here to help."
      subtitle="Have an issue setting up the Family Hub or connecting caregivers? Our India-based team is ready to assist you in English and Hindi."
    >
      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-12 lg:gap-6">
        <Reveal delay={0.1} className="flex flex-col gap-4 lg:col-span-5">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-800/90 p-6 shadow-sm sm:p-7">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-indigo-100 bg-indigo-50 text-indigo-600">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">Email Support</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Drop us a line anytime. We usually reply within 24 hours.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition hover:text-indigo-700"
            >
              {SUPPORT_EMAIL}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm dark:border-emerald-500/20 dark:from-emerald-950/40 dark:to-slate-800/90 sm:p-7">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-emerald-200 bg-emerald-100 text-emerald-700">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">WhatsApp & Call</h3>
            <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
              {SUPPORT_HOURS}
            </p>
            <div className="mt-5 grid grid-cols-1 gap-2.5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:brightness-105"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.85 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message on WhatsApp
              </a>
              <a
                href={TEL_URL}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50/60 hover:text-emerald-800 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-emerald-500/40 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300"
              >
                <Phone className="h-4 w-4 text-emerald-600" />
                Call {SUPPORT_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 p-6 text-white shadow-lg shadow-indigo-500/25 sm:p-7">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)",
                backgroundSize: "18px 18px"
              }}
            />
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Priority Care
              </div>
              <h4 className="font-display text-xl font-bold tracking-tight">
                Family setup, solved with you.
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-indigo-100">
                Need help inviting caregivers, Senior Mode, or medicine routines?
                We walk Indian families through setup live.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm font-medium text-white/95">
                <li className="flex items-center gap-2.5">
                  <Clock3 className="h-4 w-4 shrink-0 text-emerald-300" />
                  Avg reply under 24 hours
                </li>
                <li className="flex items-center gap-2.5">
                  <Languages className="h-4 w-4 shrink-0 text-sky-200" />
                  English, Hindi, Gujarati support
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-amber-200" />
                  Secure help for Family Hub & billing
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-800/90 p-6 shadow-sm sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #64748b 1px, transparent 1px)",
                backgroundSize: "22px 22px"
              }}
            />

            <div className="relative z-10">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Send us a message
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Tell us what you need. We reply to your email.
                  </p>
                </div>
                {status === "success" ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Sent
                  </span>
                ) : null}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="support-name" className={labelClass}>
                      Full Name
                    </label>
                    <input
                      id="support-name"
                      required
                      type="text"
                      autoComplete="name"
                      className={fieldClass}
                      placeholder="Rahul Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, name: e.target.value }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="support-phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="support-phone"
                      required
                      type="tel"
                      autoComplete="tel"
                      className={fieldClass}
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, phone: e.target.value }))
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="support-email" className={labelClass}>
                      Email Address
                    </label>
                    <input
                      id="support-email"
                      required
                      type="email"
                      autoComplete="email"
                      className={fieldClass}
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, email: e.target.value }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="support-city" className={labelClass}>
                      City
                    </label>
                    <input
                      id="support-city"
                      type="text"
                      autoComplete="address-level2"
                      className={fieldClass}
                      placeholder="Ahmedabad, Mumbai..."
                      value={formData.city}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, city: e.target.value }))
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <ThemedSelect
                    id="support-topic"
                    label="How can we help?"
                    value={formData.topic}
                    onChange={(topic) => setFormData((p) => ({ ...p, topic }))}
                    options={TOPICS}
                  />
                  <ThemedSelect
                    id="support-language"
                    label="Preferred language"
                    value={formData.language}
                    onChange={(language) =>
                      setFormData((p) => ({ ...p, language }))
                    }
                    options={LANGUAGES}
                  />
                </div>

                <ThemedSelect
                  id="support-family"
                  label="Family size"
                  value={formData.familySize}
                  onChange={(familySize) =>
                    setFormData((p) => ({ ...p, familySize }))
                  }
                  options={FAMILY_SIZES}
                />

                <div className="space-y-2">
                  <span className={labelClass}>Prefer reply on</span>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {CONTACT_METHODS.map(({ value, label, desc, icon: Icon }) => {
                      const active = formData.contactMethod === value;
                      return (
                        <button
                          key={value}
                          type="button"
                          onClick={() =>
                            setFormData((p) => ({ ...p, contactMethod: value }))
                          }
                          className={cn(
                            "flex h-full min-h-[4.75rem] w-full flex-col items-center justify-center gap-1 rounded-2xl border px-1.5 py-2.5 text-center transition sm:min-h-[6rem] sm:gap-1 sm:px-3 sm:py-3",
                            active
                              ? "border-indigo-500 bg-indigo-600 text-white shadow-md shadow-indigo-500/25 ring-2 ring-indigo-500/30"
                              : "border-slate-200 bg-slate-50/80 text-slate-700 hover:border-indigo-200 hover:bg-indigo-50 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-indigo-400/40 dark:hover:bg-indigo-500/10"
                          )}
                        >
                          <Icon
                            className={cn(
                              "h-5 w-5 shrink-0",
                              active ? "text-white" : "text-indigo-500 dark:text-indigo-400"
                            )}
                            strokeWidth={2.4}
                          />
                          <span className="font-display text-[12px] font-bold leading-tight sm:text-[13px]">
                            {label}
                          </span>
                          <span
                            className={cn(
                              "hidden text-[10px] font-medium leading-tight sm:inline",
                              active ? "text-indigo-100" : "text-slate-400 dark:text-slate-500"
                            )}
                          >
                            {desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="support-message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="support-message"
                    required
                    rows={3}
                    className={cn(fieldClass, "resize-none")}
                    placeholder="Describe your issue: Family Hub, reminders, billing..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, message: e.target.value }))
                    }
                  />
                </div>

                {status === "error" && error ? (
                  <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 py-3.5 font-display text-[15px] font-bold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-indigo-500/40 disabled:translate-y-0 disabled:opacity-70"
                >
                  {status === "submitting"
                    ? "Sending..."
                    : status === "success"
                      ? "Message sent!"
                      : (
                        <>
                          Send Message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                </button>

                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl border border-slate-100 dark:border-slate-800/60 bg-slate-50/90 dark:bg-slate-900/70 px-3 py-3 text-[11px] font-semibold text-slate-500 dark:text-slate-400 sm:text-xs">
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-indigo-500" />
                    Made for Indian families
                  </span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block" />
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5 text-emerald-500" />
                    Reply in 24h
                  </span>
                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block" />
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-violet-500" />
                    No spam, Secure
                  </span>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
