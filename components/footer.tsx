import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-backgroundLight dark:bg-slate-950 border-t border-slate-200/40 dark:border-slate-900">
      <div className="section-max py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-sm">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[11px] font-semibold text-white shadow-md shadow-primary/40">
              LW
            </div>
            <span className="text-slate-800 dark:text-slate-100 font-medium">
              LifeWise
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © 2025 LifeWise. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-300">
          <Link href="#features" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#features" className="hover:text-primary transition-colors">
            Features
          </Link>
          <Link
            href="/privacy-policy"
            className="hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link href="#download" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

