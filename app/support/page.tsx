import type { Metadata } from "next";
import { SupportSection } from "@/components/SupportSection";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { supportPageSchemas } from "@/lib/json-ld";
import { SUPPORT_FAQ_ITEMS } from "@/lib/faqs";
import { buildSupportMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSupportMetadata();

export default function SupportPage() {
  return (
    <>
      <JsonLd data={supportPageSchemas()} />
      <main id="main-content" className="pt-4">
        <SupportSection titleAs="h1" />
        <FAQSection
          items={SUPPORT_FAQ_ITEMS}
          eyebrow="Support FAQ"
          title="Contact, download, and billing"
          subtitle="How to reach LifeWise, get the official app, and manage Starter, Family, or Pro billing. Product questions (Family OS, Family Hub, WiseAI) are on the home FAQ."
          footerHref="/#faq"
          footerLabel="Read product FAQ"
          footerNote="Want to know what LifeWise is? See the product questions on the home page."
        />
      </main>
    </>
  );
}
