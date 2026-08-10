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
    <section id={id} className={cn("py-12 sm:py-16", className)}>
      <div className="section-max">
        <div
          className={cn(
            "max-w-2xl",
            highlight &&
              "rounded-3xl border border-accent/25 bg-accent/5 p-6 sm:p-8 ring-1 ring-accent/15"
          )}
        >
          <div className="flex flex-wrap items-center gap-2">
            {eyebrow ? (
              <div className="text-xs font-semibold tracking-wide text-primary/90">
                {eyebrow}
              </div>
            ) : null}
            {badge ? (
              <span className="rounded-full bg-accent/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/25">
                {badge}
              </span>
            ) : null}
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-slate-700 dark:text-slate-200/90 leading-relaxed">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

