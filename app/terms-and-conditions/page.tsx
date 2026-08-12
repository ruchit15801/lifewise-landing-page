import type { Metadata } from "next";
import { LegalPageShell, LegalSection } from "@/components/LegalPageShell";
import { JsonLd } from "@/components/JsonLd";
import {
  LEGAL_CONTACT_EMAIL,
  LEGAL_ENTITY,
  LEGAL_GOVERNING_LAW,
  LEGAL_JURISDICTION
} from "@/lib/legal";
import { legalPageSchemas } from "@/lib/json-ld";
import { buildTermsMetadata } from "@/lib/seo";

export const metadata: Metadata = buildTermsMetadata();

export default function TermsAndConditionsPage() {
  return (
    <>
      <JsonLd
        data={legalPageSchemas({
          path: "/terms-and-conditions",
          name: "Terms & Conditions",
          description:
            "Terms and Conditions for using the LifeWise Family Operating System app: subscriptions, acceptable use, disclaimers, and governing law in India."
        })}
      />
      <LegalPageShell
        title="Terms & Conditions"
        subtitle={`Please read these Terms & Conditions ("Terms") carefully before using the ${LEGAL_ENTITY.product} mobile application or website at ${LEGAL_ENTITY.domain}. By downloading, installing, or using LifeWise, you agree to these Terms.`}
      >
        <LegalSection title="1. Agreement to terms">
          <p>
            These Terms constitute a legally binding agreement between you and LifeWise
            regarding your use of the LifeWise Family Operating System application and
            related services. If you do not agree, do not use the app.
          </p>
          <p>
            You must be at least 18 years old, or use the app under supervision of a parent
            or legal guardian, to create an account or manage family data.
          </p>
        </LegalSection>

        <LegalSection title="2. Description of service">
          <p>
            LifeWise is a Family Operating System that allows families to manage health
            reminders, bills, insurance, documents, expenses, caregiver coordination, and
            daily routines through features including Family Hub, WiseAI, voice reminders,
            and bill scan OCR.
          </p>
          <p>
            Features may vary between Free and Premium plans. We may add, modify, or
            discontinue features with reasonable notice where practicable.
          </p>
        </LegalSection>

        <LegalSection title="3. Accounts &amp; family data">
          <ul className="list-disc space-y-2 pl-5">
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>You are responsible for all activity under your account.</li>
            <li>You must provide accurate information when creating family member profiles.</li>
            <li>
              When adding caregivers, you confirm you have authority to share that family
              member&apos;s data with the invited person.
            </li>
            <li>You must not add or manage data for individuals without their knowledge or lawful authority.</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Subscriptions &amp; payments (INR)">
          <p>
            <strong>Free plan:</strong> limited family members, modules, and history as
            described on our Pricing page.
          </p>
          <p>
            <strong>Premium plan:</strong> Rs. 199/month, Rs. 1,499/year, or Family Yearly
            at Rs. 1,999/year (prices in Indian Rupees, subject to change with notice).
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Payments are processed through Google Play, Apple App Store, or authorised payment partners.</li>
            <li>Subscriptions auto-renew unless cancelled before the renewal date in your store account settings.</li>
            <li>Refunds are governed by the respective app store&apos;s refund policies.</li>
            <li>We do not guarantee uninterrupted access during maintenance or force majeure events.</li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Acceptable use">
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Use LifeWise for any unlawful purpose under Indian law.</li>
            <li>Upload false, misleading, or harmful health or financial information.</li>
            <li>Attempt to reverse engineer, hack, or disrupt the service.</li>
            <li>Scrape, spam, or overload our systems or APIs.</li>
            <li>Misuse WiseAI to generate harmful, illegal, or abusive content.</li>
            <li>Resell or commercially exploit the service without written permission.</li>
          </ul>
        </LegalSection>

        <LegalSection title="6. Health &amp; emergency disclaimer">
          <p className="font-semibold text-slate-900 dark:text-white">
            LifeWise is not a medical device and does not provide medical advice.
          </p>
          <p>
            Medicine reminders, health tracking, and WiseAI responses are for
            organisational purposes only. Always consult a qualified doctor for medical
            decisions. Do not rely on LifeWise for emergency medical situations.
          </p>
          <p>
            The SOS feature sends alerts to contacts you configure but does not guarantee
            emergency response. In an emergency, call national emergency services (e.g. 112
            in India) immediately.
          </p>
        </LegalSection>

        <LegalSection title="7. AI features (WiseAI)">
          <p>
            WiseAI uses artificial intelligence to answer questions about your family data.
            AI responses may be incomplete or inaccurate. You should verify important
            information (medicine doses, bill amounts, appointments) before acting on AI
            output. We are not liable for decisions made solely based on AI responses.
          </p>
        </LegalSection>

        <LegalSection title="8. Intellectual property">
          <p>
            LifeWise, its logo, design, software, and content are owned by LifeWise and
            protected by intellectual property laws. You receive a limited, non-exclusive,
            non-transferable licence to use the app for personal family purposes.
          </p>
          <p>
            You retain ownership of data you input. You grant us a licence to process your
            data solely to provide and improve the service as described in our{" "}
            <a href="/privacy-policy" className="font-semibold text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="9. Third-party services">
          <p>
            LifeWise integrates with third-party services (e.g. Firebase, cloud storage,
            AI APIs, payment processors). Your use of those services may be subject to
            their own terms. We are not responsible for third-party outages or policies
            beyond our reasonable control.
          </p>
        </LegalSection>

        <LegalSection title="10. Limitation of liability">
          <p>
            To the maximum extent permitted under Indian law, LifeWise and its operators
            shall not be liable for indirect, incidental, special, or consequential
            damages, including loss of data, missed reminders, late bill payments, or health
            outcomes arising from use or inability to use the service.
          </p>
          <p>
            Our total liability for any claim shall not exceed the amount you paid to
            LifeWise in the 12 months preceding the claim, or Rs. 1,000, whichever is
            greater.
          </p>
        </LegalSection>

        <LegalSection title="11. Indemnification">
          <p>
            You agree to indemnify and hold harmless LifeWise from claims arising from your
            misuse of the service, violation of these Terms, or unauthorised sharing of
            another person&apos;s data through your account.
          </p>
        </LegalSection>

        <LegalSection title="12. Termination">
          <p>
            You may stop using LifeWise and delete your account at any time. We may suspend
            or terminate accounts that violate these Terms or pose a security risk. Upon
            termination, your right to use the app ceases, subject to our Privacy Policy
            on data retention and deletion.
          </p>
        </LegalSection>

        <LegalSection title="13. Governing law &amp; disputes">
          <p>
            These Terms are governed by {LEGAL_GOVERNING_LAW}. Courts in{" "}
            {LEGAL_JURISDICTION} shall have exclusive jurisdiction, subject to applicable
            consumer protection laws that may provide you additional rights.
          </p>
        </LegalSection>

        <LegalSection title="14. Changes to terms">
          <p>
            We may update these Terms from time to time. The updated version will be posted
            at {LEGAL_ENTITY.domain}/terms-and-conditions with a revised date. Continued
            use after changes constitutes acceptance.
          </p>
        </LegalSection>

        <LegalSection title="15. Contact">
          <p>
            LifeWise Legal &amp; Support
            <br />
            Email:{" "}
            <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="font-semibold text-primary hover:underline">
              {LEGAL_CONTACT_EMAIL}
            </a>
            <br />
            Website: {LEGAL_ENTITY.website}
            <br />
            Country: {LEGAL_ENTITY.country}
          </p>
        </LegalSection>
      </LegalPageShell>
    </>
  );
}
