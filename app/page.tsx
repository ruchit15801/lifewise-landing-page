import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { HomeIntro } from "@/components/HomeIntro";
import { HomeSections } from "@/components/HomeSections";
import { JsonLd } from "@/components/JsonLd";
import { homePageSchemas } from "@/lib/json-ld";
import { buildHomeMetadata } from "@/lib/seo";

export const metadata: Metadata = buildHomeMetadata();

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageSchemas()} />
      <main id="main-content">
        <Hero />
        <HomeIntro />
        <HomeSections />
      </main>
    </>
  );
}
