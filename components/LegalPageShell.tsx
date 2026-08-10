import Link from "next/link";
import { LEGAL_EFFECTIVE_DATE, LEGAL_LAST_UPDATED } from "@/lib/legal";
import { SITE_NAME } from "@/lib/seo";

export function LegalPageShell({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <main id="main-content" className="section-max py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          {SITE_NAME} Legal
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
          {subtitle}
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Effective date: {LEGAL_EFFECTIVE_DATE} • Last updated: {LEGAL_LAST_UPDATED}
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
          <Link href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          <span className="text-slate-400">•</span>
          <Link href="/terms-and-conditions" className="text-primary hover:underline">
            Terms &amp; Conditions
          </Link>
          <span className="text-slate-400">•</span>
          <Link href="/support" className="text-primary hover:underline">
            Contact Support
          </Link>
        </div>

        <div className="mt-10 space-y-8">{children}</div>
      </div>
    </main>
  );
}

export function LegalSection({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="glass p-6 sm:p-8">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 space-y-3 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
        {children}
      </div>
    </section>
  );
}
