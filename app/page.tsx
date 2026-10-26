import type { Metadata } from "next";
import { Hero } from "@/components/hero";
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
        <TrustBar />
        <HomeSections />
      </main>
    </>
  );
}
