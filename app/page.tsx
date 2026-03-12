import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AISection } from "@/components/AISection";
import { FamilyHub } from "@/components/FamilyHub";
import { ReminderSection } from "@/components/ReminderSection";
import { Reports } from "@/components/Reports";
import { LifeScore } from "@/components/LifeScore";
import { SeniorMode } from "@/components/SeniorMode";
import { Automation } from "@/components/Automation";
import { Pricing } from "@/components/Pricing";
import { DownloadCTA } from "@/components/DownloadCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <AISection />
      <FamilyHub />
      <ReminderSection />
      <Reports />
      <LifeScore />
      <SeniorMode />
      <Automation />
      <Pricing />
      <DownloadCTA />
    </main>
  );
}
