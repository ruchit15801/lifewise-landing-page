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
        id="features"
        minHeight={480}
        loader={() =>
          import("@/components/features").then((m) => ({ default: m.Features }))
        }
      />
      <LazySection
        id="family"
        minHeight={640}
        loader={() =>
          import("@/components/FamilyHub").then((m) => ({ default: m.FamilyHub }))
        }
      />
      <LazySection
        id="reminders"
        minHeight={560}
        loader={() =>
          import("@/components/ReminderSection").then((m) => ({
            default: m.ReminderSection
          }))
        }
      />
      <LazySection
        id="ai"
        minHeight={560}
        loader={() =>
          import("@/components/AISection").then((m) => ({ default: m.AISection }))
        }
      />
      <LazySection
        id="reports"
        minHeight={520}
        loader={() =>
          import("@/components/Reports").then((m) => ({ default: m.Reports }))
        }
      />
      <LazySection
        id="health"
        minHeight={520}
        loader={() =>
          import("@/components/LifeScore").then((m) => ({ default: m.LifeScore }))
        }
      />
      <LazySection
        id="senior-mode"
        minHeight={560}
        loader={() =>
          import("@/components/SeniorMode").then((m) => ({ default: m.SeniorMode }))
        }
      />
      <LazySection
        id="automation"
        minHeight={480}
        loader={() =>
          import("@/components/Automation").then((m) => ({ default: m.Automation }))
        }
      />
      <LazySection
        id="pricing"
        minHeight={720}
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
