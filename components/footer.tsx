import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck, Heart } from "lucide-react";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SUPPORT_EMAIL,
  SUPPORT_HOURS,
  SUPPORT_PHONE_DISPLAY,
  TEL_URL,
  WHATSAPP_URL
} from "@/lib/seo";
import { cn } from "@/components/cn";

export function Footer() {
  const year = new Date().getFullYear();
  const yearRange = `${year}-${String(year + 1).slice(-2)}`;

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/60 bg-white/40 dark:border-white/10 dark:bg-slate-950/40 backdrop-blur-3xl">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-visible flex items-center justify-center -z-10">
        <div className="absolute left-[10%] top-[-20%] h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-500/10" />
        <div className="absolute right-[10%] bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-500/10" />
      </div>

      <div className="section-max py-16 flex flex-col gap-12 relative z-10">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-200/60 bg-gradient-to-br from-blue-50/80 via-white/80 to-indigo-50/80 p-8 sm:p-10 shadow-xl shadow-blue-500/5 backdrop-blur-xl dark:border-blue-500/20 dark:from-blue-950/40 dark:via-slate-900/60 dark:to-indigo-950/40">
          
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
                <Heart className="h-3.5 w-3.5 fill-current" />
                Made for Indian Families
              </div>
              <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl text-slate-900 dark:text-white">
                Need help with LifeWise?
              </h2>
              <p className="mt-3 text-[15px] font-medium leading-relaxed text-slate-600 dark:text-slate-300 max-w-lg">
                Medicine reminders, bill alerts, Family Hub setup, Premium billing. Our
                India support team is ready in English & Hindi to assist you.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <a href={`mailto:${SUPPORT_EMAIL}`} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-105">
                <Mail className="h-4 w-4" />
                Email Support
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105">
                WhatsApp {SUPPORT_PHONE_DISPLAY}
              </a>
              <a href={TEL_URL} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-md border border-slate-200 transition-transform hover:scale-105 dark:bg-white/10 dark:text-white dark:border-white/10">
                <Phone className="h-4 w-4" />
                Call us
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-4 sm:col-span-2 lg:col-span-4 lg:pr-8">
            <div className="flex items-center gap-2 text-xl font-black tracking-tight text-slate-900 dark:text-white">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
                <ShieldCheck className="h-5 w-5" />
              </div>
              {SITE_NAME}
            </div>
            <p className="text-[15px] font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
              {SITE_TAGLINE}. India&apos;s app to manage Papa&apos;s medicine, bijli
              bills, doctor visits, insurance & family routines. Official:{" "}
              <strong className="text-slate-900 dark:text-white">lifewiseee.com</strong>
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {SUPPORT_HOURS}
            </div>
          </div>

          <nav aria-label="Product links" className="space-y-4 lg:col-span-2 lg:col-start-6">
            <div className="text-[15px] font-bold text-slate-900 dark:text-white">Product</div>
            <ul className="space-y-3 text-[15px] font-medium">
              <li><a className="text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400" href="/#family">Family Hub</a></li>
              <li><a className="text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400" href="/#ai">WiseAI</a></li>
              <li><a className="text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400" href="/#pricing">Pricing (₹199/mo)</a></li>
              <li><a className="text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400" href="/#download">Get App</a></li>
            </ul>
          </nav>

          <nav aria-label="Support links" className="space-y-4 lg:col-span-2">
            <div className="text-[15px] font-bold text-slate-900 dark:text-white">Support</div>
            <ul className="space-y-3 text-[15px] font-medium">
              <li><Link className="text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400" href="/support">Contact Us</Link></li>
              <li><a className="text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400" href="/#faq">FAQ</a></li>
              <li><a className="text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400" href="/support">Help Center</a></li>
            </ul>
          </nav>

          <nav aria-label="Legal links" className="space-y-4 lg:col-span-2">
            <div className="text-[15px] font-bold text-slate-900 dark:text-white">Legal</div>
            <ul className="space-y-3 text-[15px] font-medium">
              <li>
                <Link className="text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400" href="/terms-and-conditions">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
            <div className="mt-4 rounded-xl bg-slate-100 p-3 text-[11px] font-bold leading-relaxed text-slate-500 dark:bg-white/5 dark:text-slate-400">
              DPDP Act 2023 compliant<br/>India jurisdiction
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-200/60 pt-8 text-[14px] font-medium text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {yearRange} {SITE_NAME}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors dark:hover:text-white">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-900 transition-colors dark:hover:text-white">
              Terms
            </Link>
            <span className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600"></div>
              lifewiseee.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
