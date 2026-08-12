import type { Metadata } from "next";
import { SupportSection } from "@/components/SupportSection";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { supportPageSchemas } from "@/lib/json-ld";
import { buildSupportMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSupportMetadata();

export default function SupportPage() {
  return (
    <>
      <JsonLd data={supportPageSchemas()} />
      <main id="main-content" className="pt-4">
        <SupportSection />
        <FAQSection />
      </main>
    </>
  );
}
