import { cn } from "@/components/cn";

export function SectionShell({
  id,
  eyebrow,
  badge,
  title,
  subtitle,
  children,
  className,
  highlight
}: {
  id?: string;
  eyebrow?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-8 sm:py-10 lg:py-12", className)}>
      <div className="section-max">
        <div
          className={cn(
            "max-w-2xl",
            highlight &&
              "rounded-3xl border border-accent/25 bg-accent/5 p-6 ring-1 ring-accent/15 sm:p-8 dark:border-accent/30 dark:bg-accent/10"
          )}
        >
          <div className="flex flex-wrap items-center gap-2">
            {eyebrow ? (
              <div className="font-display text-xs font-semibold tracking-wide text-indigo-700 dark:text-indigo-300">
                {eyebrow}
              </div>
            ) : null}
            {badge ? (
              <span className="rounded-full border border-accent/25 bg-accent/15 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-accent dark:border-accent/40 dark:bg-accent/20">
                {badge}
              </span>
            ) : null}
          </div>
          <h2 className="mt-2 font-display text-[1.35rem] font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-white">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2.5 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="mt-5 sm:mt-6">{children}</div>
      </div>
    </section>
  );
}
