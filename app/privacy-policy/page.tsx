import type { Metadata } from "next";
import { LegalPageShell, LegalSection } from "@/components/LegalPageShell";
import { JsonLd } from "@/components/JsonLd";
import { LEGAL_CONTACT_EMAIL, LEGAL_ENTITY } from "@/lib/legal";
import { legalPageSchemas } from "@/lib/json-ld";
import { buildPrivacyMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPrivacyMetadata();

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={legalPageSchemas({
          path: "/privacy-policy",
          name: "Privacy Policy",
          description:
            "LifeWise privacy policy for the Family Operating System app: data collection, SMS permissions, family health data, WiseAI, and your rights under Indian DPDP Act 2023."
        })}
      />
      <LegalPageShell
        title="Privacy Policy"
        subtitle={`This Privacy Policy explains how ${LEGAL_ENTITY.product} ("we", "us", "our") collects, uses, stores, and protects your personal and family data when you use the LifeWise mobile application and website at ${LEGAL_ENTITY.domain}.`}
      >
        <LegalSection title="1. Who we are">
          <p>
            <strong>LifeWise</strong> is a Family Operating System mobile application
            operated for users in India through the official website{" "}
            <strong>{LEGAL_ENTITY.domain}</strong>. We help families manage medicine
            reminders, bills, health records, documents, insurance, and daily routines.
          </p>
          <p>
            For privacy-related questions, contact us at{" "}
            <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="font-semibold text-primary hover:underline">
              {LEGAL_CONTACT_EMAIL}
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="2. Information we collect">
          <p>Depending on how you use LifeWise, we may collect:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Account information:</strong> name, email address, phone number,
              profile photo, and login credentials (or Google/Apple sign-in identifiers).
            </li>
            <li>
              <strong>Family member profiles:</strong> names, relations, age, date of
              birth, blood group, phone numbers, and module selections you add in Family
              Hub.
            </li>
            <li>
              <strong>Health &amp; reminder data:</strong> medicine schedules, doctor
              appointments, health readings (BP, sugar, weight, etc.), reminder
              completion status, and caregiver actions.
            </li>
            <li>
              <strong>Financial &amp; bill data:</strong> bill names, due dates,
              approximate amounts, payment history, expenses, subscriptions, and
              insurance policy details you enter or scan.
            </li>
            <li>
              <strong>Documents:</strong> files you upload (Aadhaar, PAN, passport,
              medical records, etc.) stored securely in cloud storage.
            </li>
            <li>
              <strong>SMS data (optional permission):</strong> only bill and payment-related
              SMS content to detect due dates and amounts, not for advertising.
            </li>
            <li>
              <strong>Voice &amp; camera inputs:</strong> audio for voice reminders and
              images for bill scan OCR, processed to create reminders.
            </li>
            <li>
              <strong>WiseAI chat:</strong> text queries you send. Family context is
              injected securely; document images are never sent to AI providers.
            </li>
            <li>
              <strong>Device &amp; usage data:</strong> device type, OS version, app
              version, crash logs, notification tokens (FCM), and anonymised feature usage
              to improve reliability.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="3. How we use your information">
          <ul className="list-disc space-y-2 pl-5">
            <li>To create, schedule, and deliver reminders and push notifications.</li>
            <li>To sync data between family members and caregivers in real time.</li>
            <li>To provide WiseAI answers about your family&apos;s reminders, bills, and health summaries.</li>
            <li>To generate insights, reports, and Money Leak detection (Family and Pro plans).</li>
            <li>To process subscriptions and plan billing in INR.</li>
            <li>To provide customer support and respond to your requests.</li>
            <li>To comply with applicable Indian laws and protect against fraud or abuse.</li>
          </ul>
          <p className="font-semibold text-slate-900 dark:text-white">
            We do not sell your personal data or family health data to third parties.
          </p>
        </LegalSection>

        <LegalSection title="4. SMS &amp; permissions">
          <p>
            LifeWise may request permission to read SMS messages solely to detect bill,
            electricity, mobile recharge, subscription, and bank payment alerts so we can
            remind you before due dates. You can deny this permission and still use the app
            by entering bills manually.
          </p>
          <p>
            We may also request notification, camera, microphone, contacts (for SOS), and
            biometric permissions, each only for the stated feature. You can revoke
            permissions in your device settings at any time.
          </p>
        </LegalSection>

        <LegalSection title="5. Data sharing">
          <p>We share data only when necessary:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Caregivers you authorise:</strong> family members you connect with
              View Only, Can Edit, or Full Access permissions.
            </li>
            <li>
              <strong>Service providers:</strong> cloud hosting, push notifications
              (Firebase FCM), secure storage (e.g. AWS S3), analytics, and AI APIs, bound
              by confidentiality and data-processing agreements.
            </li>
            <li>
              <strong>Legal requirements:</strong> if required by Indian law, court order,
              or government authority.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="6. Data storage &amp; security">
          <p>
            Data is stored on secure servers with encryption in transit (HTTPS/TLS). We
            apply access controls, least-privilege principles, and industry-standard
            security practices. Document uploads are stored in encrypted cloud storage.
          </p>
          <p>
            While we take reasonable measures to protect your data, no system is 100%
            secure. Please use a strong password and enable biometric lock in the app.
          </p>
        </LegalSection>

        <LegalSection title="7. Data retention &amp; deletion">
          <ul className="list-disc space-y-2 pl-5">
            <li>Active account data is retained while your account is in use.</li>
            <li>Deleted family members are soft-deleted for up to 30 days, then permanently removed on request.</li>
            <li>You may export your family data as JSON from Profile settings.</li>
            <li>You may request full account and data deletion by emailing {LEGAL_CONTACT_EMAIL}.</li>
          </ul>
        </LegalSection>

        <LegalSection title="8. Your rights (India)">
          <p>
            Under applicable Indian law, including the Digital Personal Data Protection Act,
            2023, you may have the right to access, correct, erase, and withdraw consent
            for certain processing. To exercise these rights, contact{" "}
            <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="font-semibold text-primary hover:underline">
              {LEGAL_CONTACT_EMAIL}
            </a>
            . We will respond within a reasonable timeframe.
          </p>
        </LegalSection>

        <LegalSection title="9. Children &amp; seniors">
          <p>
            LifeWise is designed for family use. Parents or adult caregivers are responsible
            for adding minor family members and managing their data. Senior members using the
            app should do so with assistance from family caregivers where needed.
          </p>
        </LegalSection>

        <LegalSection title="10. Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time. We will post the updated
            version on {LEGAL_ENTITY.domain} with a revised &quot;Last updated&quot; date.
            Continued use of LifeWise after changes constitutes acceptance of the updated
            policy.
          </p>
        </LegalSection>

        <LegalSection title="11. Contact us">
          <p>
            LifeWise Privacy Team
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
