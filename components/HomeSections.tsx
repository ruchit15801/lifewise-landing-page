"use client";

import { LazySection } from "@/components/LazySection";

export function HomeSections() {
  return (
    <div className="relative bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-50 [&_section]:scroll-mt-24">
      <LazySection
        minHeight={480}
        loader={() =>
          import("@/components/features").then((m) => ({ default: m.Features }))
        }
      />
      <LazySection
        minHeight={640}
        loader={() =>
          import("@/components/FamilyHub").then((m) => ({ default: m.FamilyHub }))
        }
      />
      <LazySection
        minHeight={560}
        loader={() =>
          import("@/components/ReminderSection").then((m) => ({
            default: m.ReminderSection
          }))
        }
      />
      <LazySection
        minHeight={560}
        loader={() =>
          import("@/components/AISection").then((m) => ({ default: m.AISection }))
        }
      />
      <LazySection
        minHeight={520}
        loader={() =>
          import("@/components/Reports").then((m) => ({ default: m.Reports }))
        }
      />
      <LazySection
        minHeight={520}
        loader={() =>
          import("@/components/LifeScore").then((m) => ({ default: m.LifeScore }))
        }
      />
      <LazySection
        minHeight={560}
        loader={() =>
          import("@/components/SeniorMode").then((m) => ({ default: m.SeniorMode }))
        }
      />
      <LazySection
        minHeight={480}
        loader={() =>
          import("@/components/Automation").then((m) => ({ default: m.Automation }))
        }
      />
      <LazySection
        minHeight={720}
        loader={() =>
          import("@/components/pricing").then((m) => ({ default: m.Pricing }))
        }
      />
      <LazySection
        minHeight={480}
        loader={() =>
          import("@/components/RankingSection").then((m) => ({
            default: m.RankingSection
          }))
        }
      />
      <LazySection
        minHeight={480}
        loader={() =>
          import("@/components/FAQSection").then((m) => ({ default: m.FAQSection }))
        }
      />
      <LazySection
        minHeight={640}
        loader={() =>
          import("@/components/SupportSection").then((m) => ({
            default: m.SupportSection
          }))
        }
      />
      <LazySection
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
