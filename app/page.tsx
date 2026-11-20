import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { BeforeAfter } from "@/components/BeforeAfter";
import { DemoVideoSection } from "@/components/DemoVideoSection";
import { HomeSections } from "@/components/HomeSections";
import { JsonLd } from "@/components/JsonLd";
import { TrustBar } from "@/components/TrustBar";
import { homePageSchemas } from "@/lib/json-ld";
import { buildHomeMetadata } from "@/lib/seo";

export const metadata: Metadata = buildHomeMetadata();

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageSchemas()} />
      <main id="main-content">
        <Hero />
        <BeforeAfter />
        <DemoVideoSection />
        <TrustBar />
        <HomeSections />
      </main>
    </>
  );
}
