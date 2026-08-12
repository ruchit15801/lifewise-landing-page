"use client";

import { useState } from "react";
import { Send, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import {
  SUPPORT_EMAIL,
  SUPPORT_PHONE_DISPLAY,
  TEL_URL,
  WHATSAPP_URL,
  ADDRESS
} from "@/lib/seo";

export function SupportSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "general",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", topic: "general", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <SectionShell
      id="support"
      eyebrow="Support"
      title="We're here to help."
      subtitle="Have an issue setting up the Family Hub or connecting caregivers? Our India-based team is ready to assist you in English and Hindi."
    >
      <div className="relative mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Contact Info */}
        <Reveal delay={0.1} className="lg:col-span-5 flex flex-col gap-6">
          {/* Card 1 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors dark:border-slate-800/60 dark:bg-[#0a0a12]">
            <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 grid place-items-center mb-6 dark:bg-blue-500/10 dark:border-blue-500/30 dark:text-blue-400">
              <Mail className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Email Support</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Drop us a line anytime. We usually reply within 24 hours.</p>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">
              {SUPPORT_EMAIL}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm transition-colors dark:border-emerald-500/30 dark:bg-emerald-950/20">
            <div className="h-12 w-12 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-700 grid place-items-center mb-6 dark:bg-emerald-500/20 dark:border-emerald-500/30 dark:text-emerald-400">
              <Phone className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">WhatsApp & Call</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-6 font-medium">Available 10 AM to 6 PM (IST), Mon - Sat.</p>
            <div className="flex flex-col gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white shadow-md transition-transform hover:-translate-y-0.5">
                Message on WhatsApp
              </a>
              <a href={TEL_URL} className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:underline">
                Call {SUPPORT_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors dark:border-slate-800/60 dark:bg-[#0a0a12]">
            <div className="h-12 w-12 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 grid place-items-center mb-6 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400">
              <MapPin className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Office</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {ADDRESS.street}<br/>
              {ADDRESS.city}, {ADDRESS.state} {ADDRESS.pin}<br/>
              {ADDRESS.country}
            </p>
          </div>
        </Reveal>

        {/* Right: Contact Form */}
        <Reveal delay={0.2} className="lg:col-span-7">
          <div className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 transition-colors dark:border-slate-800/60 dark:bg-[#0a0a12]">
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, #64748b 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white mb-8">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                    <input
                      id="name"
                      required
                      type="text"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors dark:border-slate-700 dark:bg-slate-900/50 dark:text-white dark:focus:border-blue-500"
                      placeholder="Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone (Optional)</label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors dark:border-slate-700 dark:bg-slate-900/50 dark:text-white dark:focus:border-blue-500"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                  <input
                    id="email"
                    required
                    type="email"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors dark:border-slate-700 dark:bg-slate-900/50 dark:text-white dark:focus:border-blue-500"
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="topic" className="text-xs font-bold uppercase tracking-wider text-slate-500">How can we help?</label>
                  <select
                    id="topic"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] font-medium text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors dark:border-slate-700 dark:bg-slate-900/50 dark:text-white dark:focus:border-blue-500"
                    value={formData.topic}
                    onChange={(e) => setFormData(p => ({ ...p, topic: e.target.value }))}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="premium">Premium Subscription</option>
                    <option value="technical">App Issue / Bug</option>
                    <option value="feedback">Feedback / Suggestion</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors dark:border-slate-700 dark:bg-slate-900/50 dark:text-white dark:focus:border-blue-500"
                    placeholder="Please describe your issue in detail..."
                    value={formData.message}
                    onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-[15px] font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40 disabled:opacity-70 disabled:hover:bg-blue-600 disabled:hover:-translate-y-0 disabled:hover:shadow-blue-500/25"
                >
                  {status === "idle" && (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                  {status === "submitting" && "Sending..."}
                  {status === "success" && "Message Sent Successfully!"}
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
