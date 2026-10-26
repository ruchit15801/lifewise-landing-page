"use client";

import { useEffect } from "react";
import { LazySection } from "@/components/LazySection";
import { FAQSection } from "@/components/FAQSection";
import { scrollToSection } from "@/lib/section-nav";
import { HAS_APP_REVIEWS } from "@/lib/reviews";

export function HomeSections() {
  useEffect(() => {
    const go = () => {
      if (window.location.hash) void scrollToSection(window.location.hash);
    };

    const t = window.setTimeout(go, 50);
    window.addEventListener("hashchange", go);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("hashchange", go);
    };
  }, []);

  return (
    <div className="relative bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-50 [&_section]:scroll-mt-24">
      <LazySection
        id="problems"
        minHeight={420}
        loader={() =>
          import("@/components/ProblemSolution").then((m) => ({
            default: m.ProblemSolution
          }))
        }
      />
      <LazySection
        id="who-its-for"
        minHeight={400}
        loader={() =>
          import("@/components/WhoItsFor").then((m) => ({ default: m.WhoItsFor }))
        }
      />
      <LazySection
        id="in-the-app"
        minHeight={520}
        loader={() =>
          import("@/components/FeatureShowcase").then((m) => ({
            default: m.FeatureShowcase
          }))
        }
      />
      <LazySection
        id="pricing"
        minHeight={900}
        loader={() =>
          import("@/components/pricing").then((m) => ({ default: m.Pricing }))
        }
      />
      <LazySection
        id="why-lifewise"
        minHeight={480}
        loader={() =>
          import("@/components/RankingSection").then((m) => ({
            default: m.RankingSection
          }))
        }
      />
      {HAS_APP_REVIEWS ? (
        <LazySection
          id="reviews"
          minHeight={420}
          loader={() =>
            import("@/components/ReviewsSection").then((m) => ({
              default: m.ReviewsSection
            }))
          }
        />
      ) : null}
      <FAQSection />
      <LazySection
        id="support"
        minHeight={640}
        loader={() =>
          import("@/components/SupportSection").then((m) => ({
            default: m.SupportSection
          }))
        }
      />
      <LazySection
        id="download"
        minHeight={420}
        loader={() =>
          import("@/components/DownloadCTA").then((m) => ({
            default: m.DownloadCTA
          }))
        }
      />
    </div>
  );
}
