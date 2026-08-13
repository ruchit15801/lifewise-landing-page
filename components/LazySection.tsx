"use client";

import {
  type ComponentType,
  type ReactNode,
  useEffect,
  useRef,
  useState
} from "react";

type Loader = () => Promise<{ default: ComponentType }>;

/**
 * Mounts a client-only section when it nears the viewport.
 * Keeps first paint / hydration small for PageSpeed TBT.
 */
export function LazySection({
  loader,
  rootMargin = "200px 0px",
  fallback = null,
  minHeight
}: {
  loader: Loader;
  rootMargin?: string;
  fallback?: ReactNode;
  minHeight?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const loaderRef = useRef(loader);
  loaderRef.current = loader;
  const [Comp, setComp] = useState<ComponentType | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cancelled = false;
    const load = async () => {
      const mod = await loaderRef.current();
      if (cancelled) return;
      setComp(() => mod.default);
    };

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
    };
  }, [rootMargin]);

  return (
    <div ref={ref} style={minHeight ? { minHeight } : undefined}>
      {Comp ? <Comp /> : fallback}
    </div>
  );
}
