import type { Metadata } from "next";
import { SupportSection } from "@/components/SupportSection";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/json-ld";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Support & Contact – LifeWise India",
  description:
    "Contact LifeWise support: email support@lifewiseee.com, call/WhatsApp +91 63538 91986. Help with medicine reminders, bills, Family Hub, Premium billing. Mon–Sat 9 AM–7 PM IST.",
  alternates: { canonical: `${SITE_URL}/support` },
  openGraph: {
    title: "LifeWise Support – India",
    description: "Get help with the LifeWise Family Operating System app.",
    url: `${SITE_URL}/support`
  }
};

export default function SupportPage() {
  return (
    <>
      <JsonLd data={faqPageSchema()} />
      <main id="main-content" className="pt-4">
        <SupportSection />
        <FAQSection />
      </main>
    </>
  );
}
