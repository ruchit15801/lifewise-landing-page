import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/JsonLd";
import { homePageSchemas } from "@/lib/json-ld";
import { buildHomeMetadata } from "@/lib/seo";

const Features = dynamic(
  () => import("@/components/features").then((m) => m.Features),
  { loading: () => null }
);
const FamilyHub = dynamic(
  () => import("@/components/FamilyHub").then((m) => m.FamilyHub),
  { loading: () => null }
);

const ReminderSection = dynamic(
  () => import("@/components/ReminderSection").then((m) => m.ReminderSection),
  { loading: () => null }
);
const AISection = dynamic(
  () => import("@/components/AISection").then((m) => m.AISection),
  { loading: () => null }
);
const Reports = dynamic(
  () => import("@/components/Reports").then((m) => m.Reports),
  { loading: () => null }
);
const LifeScore = dynamic(
  () => import("@/components/LifeScore").then((m) => m.LifeScore),
  { loading: () => null }
);
const SeniorMode = dynamic(
  () => import("@/components/SeniorMode").then((m) => m.SeniorMode),
  { loading: () => null }
);
const Automation = dynamic(
  () => import("@/components/Automation").then((m) => m.Automation),
  { loading: () => null }
);
const Pricing = dynamic(
  () => import("@/components/pricing").then((m) => m.Pricing),
  { loading: () => null }
);
const RankingSection = dynamic(
  () => import("@/components/RankingSection").then((m) => m.RankingSection),
  { loading: () => null }
);
const FAQSection = dynamic(
  () => import("@/components/FAQSection").then((m) => m.FAQSection),
  { loading: () => null }
);
const SupportSection = dynamic(
  () => import("@/components/SupportSection").then((m) => m.SupportSection),
  { loading: () => null }
);
const DownloadCTA = dynamic(
  () => import("@/components/DownloadCTA").then((m) => m.DownloadCTA),
  { loading: () => null }
);

export const metadata: Metadata = buildHomeMetadata();

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageSchemas()} />
      <main id="main-content">
        <Hero />
        <div className="relative bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-50 [&_section]:scroll-mt-24">
          <Features />
          <FamilyHub />
          <ReminderSection />
          <AISection />
          <Reports />
          <LifeScore />
          <SeniorMode />
          <Automation />
          <Pricing />
          <RankingSection />
          <FAQSection />
          <SupportSection />
          <DownloadCTA />
        </div>
      </main>
    </>
  );
}
