import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
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
    <footer className="border-t border-slate-200/60 dark:border-white/10">
      <div className="section-max py-12 flex flex-col gap-10">
        <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-white/50 to-accent/10 p-6 sm:p-8 dark:from-primary/15 dark:via-slate-950/40 dark:to-accent/10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                🇮🇳 Made for Indian Families
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                Need help with LifeWise?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                Medicine reminders, bill alerts, Family Hub setup, Premium billing. Our
                India support team is ready in English &amp; Hindi.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <a href={`mailto:${SUPPORT_EMAIL}`} className="btn-primary justify-center">
                <Mail className="h-4 w-4" />
                {SUPPORT_EMAIL}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary justify-center">
                WhatsApp {SUPPORT_PHONE_DISPLAY}
              </a>
              <a href={TEL_URL} className="btn-secondary justify-center">
                <Phone className="h-4 w-4" />
                Call us
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <div className="text-lg font-semibold tracking-tight">{SITE_NAME}</div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {SITE_TAGLINE}. India&apos;s app to manage Papa&apos;s medicine, bijli
              bills, doctor visits, insurance &amp; family routines. Official:{" "}
              <strong>lifewiseee.com</strong>
            </p>
            <p className="text-xs text-slate-500">{SUPPORT_HOURS}</p>
          </div>

          <nav aria-label="Product links" className="space-y-3">
            <div className="text-sm font-semibold">Product</div>
            <ul className="space-y-2 text-sm">
              <li><a className="text-slate-600 hover:text-primary dark:text-slate-400" href="/#family">Family Hub</a></li>
              <li><a className="text-slate-600 hover:text-primary dark:text-slate-400" href="/#ai">WiseAI</a></li>
              <li><a className="text-slate-600 hover:text-primary dark:text-slate-400" href="/#pricing">Pricing (Rs. 199/mo)</a></li>
              <li><a className="text-slate-600 hover:text-primary dark:text-slate-400" href="/#download">Google Play &amp; App Store</a></li>
            </ul>
          </nav>

          <nav aria-label="Support links" className="space-y-3">
            <div className="text-sm font-semibold">Support</div>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-slate-600 hover:text-primary dark:text-slate-400" href="/support">Contact &amp; Support Form</Link></li>
              <li><a className="text-slate-600 hover:text-primary dark:text-slate-400" href="/#faq">FAQ</a></li>
              <li><a className="text-slate-600 hover:text-primary dark:text-slate-400" href="/support">Help Center</a></li>
            </ul>
          </nav>

          <nav aria-label="Legal links" className="space-y-3">
            <div className="text-sm font-semibold">Legal</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-slate-600 hover:text-primary dark:text-slate-400" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-primary dark:text-slate-400" href="/terms-and-conditions">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-500">
              DPDP Act 2023 compliant • India jurisdiction
            </p>
          </nav>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Contact (India)</div>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-primary break-all">
                  {SUPPORT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={TEL_URL} className="hover:text-primary">{SUPPORT_PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Serving families across India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200/60 pt-6 text-sm text-slate-600 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {yearRange} {SITE_NAME}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
            <Link href="/privacy-policy" className="hover:text-primary hover:underline">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-primary hover:underline">
              Terms
            </Link>
            <span>lifewiseee.com • Android &amp; iOS • INR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
