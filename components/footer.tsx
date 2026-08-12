import Link from "next/link";
import { Mail, Phone, ShieldCheck, Heart } from "lucide-react";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SUPPORT_EMAIL,
  SUPPORT_HOURS,
  SUPPORT_PHONE_DISPLAY,
  TEL_URL,
  WHATSAPP_URL
} from "@/lib/seo";

export function Footer() {
  const year = new Date().getFullYear();
  const yearRange = `${year}-${String(year + 1).slice(-2)}`;

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
                Medicine reminders, bill alerts, Family Hub setup, Premium billing.
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
            <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-600 text-white shadow-md">
                <ShieldCheck className="h-5 w-5" />
              </div>
              {SITE_NAME}
            </div>
            <p className="text-[14px] font-medium leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[15px]">
              {SITE_TAGLINE}. India&apos;s app to manage Papa&apos;s medicine, bijli
              bills, doctor visits, insurance & family routines. Official:{" "}
              <strong className="text-slate-900 dark:text-white">lifewiseee.com</strong>
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {SUPPORT_HOURS}
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
                  Pricing (₹199/mo)
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
                  href="https://play.google.com/store/apps/details?id=com.lifewise"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play
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
