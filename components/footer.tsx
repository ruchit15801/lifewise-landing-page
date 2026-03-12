import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  const yearRange = `${year}-${String(year + 1).slice(-2)}`;

  return (
    <footer className="border-t border-slate-200/60 dark:border-white/10">
      <div className="section-max py-10 flex flex-col gap-6">
        <div className="space-y-2">
          <div className="font-semibold tracking-tight">LifeWise</div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Your Smart AI Life Assistant.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold">
            <a
              className="text-slate-700 hover:underline dark:text-slate-200"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-slate-700 hover:underline dark:text-slate-200"
              href="#pricing"
            >
              Pricing
            </a>
            <Link
              className="text-slate-700 hover:underline dark:text-slate-200"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="text-sm text-slate-600 dark:text-slate-400">
            © {yearRange} LifeWise. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

