import { cn } from "@/components/cn";

export function SectionShell({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-12 sm:py-16", className)}>
      <div className="section-max">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="text-xs font-semibold tracking-wide text-primary/90">
              {eyebrow}
            </div>
          ) : null}
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

