"use client";

import {
  type ComponentType,
  type ReactNode,
  useEffect,
  useRef,
  useState
} from "react";
import { registerLazySection } from "@/lib/section-nav";

type Loader = () => Promise<{ default: ComponentType }>;

/**
 * Mounts a client-only section when it nears the viewport.
 * Nav hash clicks force-load via registerLazySection.
 */
export function LazySection({
  id,
  loader,
  rootMargin = "900px 0px",
  fallback = null,
  minHeight
}: {
  id?: string;
  loader: Loader;
  rootMargin?: string;
  fallback?: ReactNode;
  minHeight?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const loaderRef = useRef(loader);
  loaderRef.current = loader;
  const [Comp, setComp] = useState<ComponentType | null>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cancelled = false;

    const load = async () => {
      if (loadedRef.current) return;
      loadedRef.current = true;
      const mod = await loaderRef.current();
      if (cancelled) return;
      setComp(() => mod.default);
    };

    const unregister = id
      ? registerLazySection(id.startsWith("#") ? id : `#${id}`, load)
      : () => undefined;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          void load();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    io.observe(el);
    return () => {
      cancelled = true;
      io.disconnect();
      unregister();
    };
  }, [id, rootMargin]);

  const pendingId = !Comp && id ? (id.startsWith("#") ? id.slice(1) : id) : undefined;

  return (
    <div
      ref={ref}
      id={pendingId}
      style={minHeight ? { minHeight } : undefined}
    >
      {Comp ? (
        <Comp />
      ) : (
        fallback ?? (
          <div className="mx-auto w-full max-w-6xl animate-pulse px-4 py-16" aria-hidden>
            <div className="h-4 w-28 rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="mt-4 h-8 w-2/3 max-w-md rounded-xl bg-slate-200 dark:bg-slate-700" />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="h-28 rounded-2xl bg-slate-200/80 dark:bg-slate-800" />
              <div className="h-28 rounded-2xl bg-slate-200/80 dark:bg-slate-800" />
            </div>
          </div>
        )
      )}
    </div>
  );
}
