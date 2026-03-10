import Image from "next/image";

export function GooglePlayBadge() {
  return (
    <a
      href="#download"
      className="inline-flex items-center gap-3 rounded-2xl border border-slate-200/70 dark:border-slate-700/80 bg-slate-50/80 dark:bg-slate-900/70 px-4 py-2 shadow-sm hover:border-primary/80 hover:shadow-soft-glow transition-all"
    >
      <div className="relative h-7 w-7 rounded-xl bg-gradient-to-tr from-primary to-accent shadow-md shadow-primary/40 overflow-hidden flex items-center justify-center">
        <span className="text-white text-lg">▶</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
          Get it on
        </span>
        <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">
          Google Play
        </span>
      </div>
    </a>
  );
}

