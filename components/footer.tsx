import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Heart } from "lucide-react";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_DISPLAY,
  TEL_URL,
  WHATSAPP_URL
} from "@/lib/seo";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/stores";

const SOCIAL_LINKS = [
  {
    id: "x-twitter",
    label: "Follow LifeWise on X (Twitter)",
    href: "https://x.com/lifewiseeapp",
    hoverClass: "hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800",
    icon: (
      <svg role="img" aria-hidden viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  {
    id: "discord",
    label: "Join LifeWise on Discord",
    href: "https://discord.gg/XFzhXWBan",
    hoverClass: "hover:text-[#5865F2] hover:bg-indigo-50 dark:hover:bg-indigo-950/40",
    icon: (
      <svg role="img" aria-hidden viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.034.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.026c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    )
  },
  {
    id: "instagram",
    label: "Follow LifeWise on Instagram",
    href: "https://www.instagram.com/lifewiseapp/",
    hoverClass: "hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950/30",
    icon: (
      <svg role="img" aria-hidden viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    )
  },
  {
    id: "youtube",
    label: "Subscribe to LifeWise on YouTube",
    href: "https://www.youtube.com/@LifeWiseApp",
    hoverClass: "hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30",
    icon: (
      <svg role="img" aria-hidden viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  }
];

export function Footer() {
  const yearRange = "2026-27";

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-800/90 pt-8 sm:pt-12 transition-colors duration-500">
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-visible">
        <div className="absolute left-[10%] top-[-20%] h-[24rem] w-[24rem] rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[10%] h-[24rem] w-[24rem] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="section-max relative z-10 flex flex-col gap-8 sm:gap-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/70 p-6 shadow-xl shadow-slate-200/40 dark:shadow-none backdrop-blur-xl sm:rounded-[2.5rem] sm:p-8">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #818cf8 1px, transparent 0)",
              backgroundSize: "24px 24px"
            }}
          />
          <div className="pointer-events-none absolute left-0 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[50px]" />

          <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-100 px-3 py-1 font-display text-xs font-bold uppercase tracking-wider text-indigo-700">
                <Heart className="h-3.5 w-3.5 fill-current" />
                Made for Indian Families
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                Need help with LifeWise?
              </h2>
              <p className="mt-2 max-w-lg text-[15px] font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                Medicine reminders, bill alerts, Family Hub setup, plan billing.
                Our India support team is ready in English & Hindi to assist you.
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:justify-items-stretch lg:ml-auto lg:max-w-lg">
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-transform hover:-translate-y-0.5 hover:shadow-indigo-500/40"
              >
                <Mail className="h-4 w-4 shrink-0" />
                Email Support
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700 shadow-md transition-transform hover:-translate-y-0.5 hover:bg-emerald-100 sm:px-5"
              >
                WhatsApp {SUPPORT_PHONE_DISPLAY}
              </a>
              <a
                href={TEL_URL}
                className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-800/90 px-5 py-3 text-sm font-bold text-slate-900 dark:text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-slate-50 dark:hover:bg-slate-800 sm:col-span-2 sm:mx-auto sm:max-w-[220px]"
              >
                <Phone className="h-4 w-4 shrink-0" />
                Call us
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          <div className="col-span-2 space-y-3 lg:col-span-4 lg:pr-6">
            <div className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              <Link
                href="/"
                className="group relative inline-flex h-8 w-8 shrink-0 items-center justify-center"
                aria-label="LifeWise home"
              >
                <span
                  aria-hidden
                  className="absolute -inset-1 animate-[spin_6s_linear_infinite] rounded-full opacity-90 blur-[8px] dark:opacity-100"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #ff0080, #ff8c00, #40e0d0, #8a2be2, #ff0080)"
                  }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-2 rounded-full bg-indigo-400/20 blur-md dark:bg-indigo-400/25"
                />
                <span className="absolute inset-0 rounded-full bg-white/85 shadow-sm ring-1 ring-white/90 dark:bg-slate-950/60 dark:ring-white/15" />
                <Image
                  src="/logo.png"
                  alt="LifeWise Logo"
                  width={32}
                  height={32}
                  className="relative z-10 h-7 w-7 rounded-full object-contain drop-shadow-sm"
                />
              </Link>
              {SITE_NAME}
            </div>
            <p className="text-[14px] font-medium leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px]">
              {SITE_TAGLINE}. India&apos;s app to manage Papa&apos;s medicine, bijli
              bills, doctor visits, insurance & family routines. Official:{" "}
              <strong className="text-slate-900 dark:text-white">lifewiseee.com</strong>
            </p>
            {/* Social media icons */}
            <div className="flex items-center gap-2 pt-1" aria-label="LifeWise social media">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  id={`footer-social-${social.id}`}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700/60 text-slate-500 dark:text-slate-400 transition-all duration-200 ${social.hoverClass} hover:border-transparent hover:shadow-sm`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Product links" className="space-y-3 lg:col-span-2 lg:col-start-6">
            <div className="font-display text-[15px] font-bold text-slate-900 dark:text-white">Product</div>
            <ul className="space-y-2.5 text-[14px] font-medium sm:text-[15px]">
              <li>
                <a className="text-slate-600 dark:text-slate-400 transition-colors hover:text-indigo-600" href="/#family">
                  Family Hub
                </a>
              </li>
              <li>
                <a className="text-slate-600 dark:text-slate-400 transition-colors hover:text-indigo-600" href="/#ai">
                  WiseAI
                </a>
              </li>
              <li>
                <a className="text-slate-600 dark:text-slate-400 transition-colors hover:text-indigo-600" href="/#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-slate-600 dark:text-slate-400 transition-colors hover:text-indigo-600" href="/#download">
                  Get App
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 dark:text-slate-400 transition-colors hover:text-indigo-600"
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 dark:text-slate-400 transition-colors hover:text-indigo-600"
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App Store
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Support links" className="space-y-3 lg:col-span-2">
            <div className="font-display text-[15px] font-bold text-slate-900 dark:text-white">Support</div>
            <ul className="space-y-2.5 text-[14px] font-medium sm:text-[15px]">
              <li>
                <Link className="text-slate-600 dark:text-slate-400 transition-colors hover:text-indigo-600" href="/support">
                  Contact Us
                </Link>
              </li>
              <li>
                <a className="text-slate-600 dark:text-slate-400 transition-colors hover:text-indigo-600" href="/#faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="text-slate-600 dark:text-slate-400 transition-colors hover:text-indigo-600" href="/support">
                  Help Center
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal links" className="col-span-2 space-y-3 sm:col-span-1 lg:col-span-2">
            <div className="font-display text-[15px] font-bold text-slate-900 dark:text-white">Legal</div>
            <ul className="space-y-2.5 text-[14px] font-medium sm:text-[15px]">
              <li>
                <Link className="text-slate-600 dark:text-slate-400 transition-colors hover:text-indigo-600" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 dark:text-slate-400 transition-colors hover:text-indigo-600" href="/terms-and-conditions">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 dark:border-slate-800/80 py-5 text-[13px] font-medium text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:py-6 sm:text-[14px]">
          <p>
            © {yearRange} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="transition-colors hover:text-slate-900 dark:hover:text-white">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-slate-900 dark:hover:text-white">
              Terms
            </Link>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-slate-400" />
              lifewiseee.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
