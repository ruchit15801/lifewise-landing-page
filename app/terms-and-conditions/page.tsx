import type { Metadata } from "next";
import Link from "next/link";
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
          name: "Terms of Service",
          description:
            "Terms of Service and Trader Disclosure for LifeWise Family Operating System (operated by Axoryte Infosoft): subscriptions, consumer rights, acceptable use, disclaimers, and dispute resolution."
        })}
      />
      <LegalPageShell
        title="Terms of Service"
        subtitle={`Welcome to LifeWise, an AI-powered Family Operating System developed and operated by ${LEGAL_ENTITY.company} ("Company", "we", "our", or "us"). These Terms of Service ("Terms") govern your access to and use of the LifeWise mobile application, website, and related services (collectively, the "Service"). By creating an account, accessing, or using LifeWise, you agree to these Terms. If you do not agree, please do not use the Service.`}
      >
        {/* Trader Status Declaration Box */}
        <div className="glass p-5 sm:p-6 border-l-4 border-primary text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-900 dark:text-white">
              Commercial Trader Disclosure (EU Digital Services Act &amp; Consumer Protection):
            </strong>{" "}
            LifeWise is developed and published as a commercial software product by{" "}
            <strong>{LEGAL_ENTITY.company}</strong>, a registered business entity based in Surat,
            Gujarat, India. This document serves as our official Terms of Service, public trader
            disclosure, and consumer rights notice under applicable laws, including the European
            Union Digital Services Act (DSA - Regulation (EU) 2022/2065).
          </p>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Developer / Trader: <strong>{LEGAL_ENTITY.company}</strong> • Support:{" "}
            <a
              href={`mailto:${LEGAL_CONTACT_EMAIL}`}
              className="font-medium text-primary hover:underline"
            >
              {LEGAL_CONTACT_EMAIL}
            </a>{" "}
            • Phone: {LEGAL_ENTITY.phoneDisplay} • Registered Address: {LEGAL_ENTITY.address}
          </p>
        </div>

        {/* Section 1 */}
        <LegalSection title="1. About LifeWise">
          <p>
            LifeWise is a family management platform designed to help individuals and families
            organize their everyday responsibilities in one place.
          </p>
          <p>
            Depending on your subscription, device, permissions, and available features, LifeWise
            may provide:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Family Hub and family member management.</li>
            <li>Medicines, appointments, health and wellness tracking.</li>
            <li>
              Health and fitness data synchronization through supported platforms (e.g. Apple Health
              and Android Health Connect).
            </li>
            <li>Family Money, expense tracking, budgets, and contributions.</li>
            <li>Bill management and payment reminders.</li>
            <li>Tasks, routines, reminders, and notifications.</li>
            <li>Family location sharing and safety features.</li>
            <li>Insurance and document management.</li>
            <li>Travel planning and subscription management.</li>
            <li>Gmail-based inbox detection and automatic reminder suggestions.</li>
            <li>AI-powered assistance and insights (WiseAI).</li>
            <li>Other features introduced through future updates.</li>
          </ul>
          <p>
            Feature availability may vary by platform, subscription plan, region, and device
            compatibility.
          </p>
        </LegalSection>

        {/* Section 2 */}
        <LegalSection title="2. Eligibility and Accounts">
          <p>You must provide accurate information when creating your LifeWise account.</p>
          <p>You are responsible for:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Maintaining the confidentiality of your login credentials.</li>
            <li>All activities performed through your account.</li>
            <li>Keeping your account information accurate and updated.</li>
            <li>Informing us immediately if you suspect unauthorized access.</li>
            <li>Using the Service only for lawful purposes.</li>
          </ul>
          <p>
            You must not share account access in a way that compromises your security or another
            person&apos;s privacy. You must be at least 18 years old, or use the Service under the
            supervision of a parent or legal guardian, to create an account or manage family data.
          </p>
          <p>
            If you create or manage a family group, you must have appropriate authorization to add
            other family members and manage their information.
          </p>
        </LegalSection>

        {/* Section 3 */}
        <LegalSection title="3. Family Members and Permissions">
          <p>
            LifeWise allows users to create family groups and add family members or authorized
            caregivers.
          </p>
          <p>You are responsible for ensuring that:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>You have permission to add another person&apos;s information.</li>
            <li>
              You have appropriate consent before sharing another person&apos;s sensitive
              information.
            </li>
            <li>
              Family members understand which information may be visible to authorized members.
            </li>
            <li>Caregiver permissions are assigned appropriately.</li>
          </ul>
          <p>
            Access to health records, financial records, documents, and location information is
            subject to the permissions and sharing settings available in the Service.
          </p>
          <p>
            We are not responsible for information shared by users with other family members through
            permissions they have authorized.
          </p>
        </LegalSection>

        {/* Section 4 */}
        <LegalSection title="4. Health and Wellness Disclaimer">
          <p>
            LifeWise may allow you to record, organize, and view health information, including
            medicines, appointments, blood pressure, blood sugar, weight, heart rate, oxygen levels,
            sleep, and fitness activity.
          </p>
          <p>
            Health information may be entered manually or synchronized through supported platforms
            such as Apple Health and Android Health Connect.
          </p>
          <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 text-amber-950 dark:text-amber-200 text-sm sm:text-base space-y-2">
            <p className="font-semibold">LifeWise is not a medical service or healthcare provider.</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>LifeWise does not provide medical diagnoses or prescribe medications.</li>
              <li>
                Information and AI-generated insights are for general informational and
                organisational purposes only.
              </li>
              <li>
                LifeWise does not replace professional medical advice, clinical diagnosis, or
                treatment.
              </li>
              <li>
                Always consult a qualified healthcare professional regarding medical decisions.
              </li>
              <li>
                Do not ignore or delay professional medical assistance because of information
                displayed in LifeWise.
              </li>
            </ul>
          </div>
          <p>
            In an emergency, contact your local emergency services (such as 112 in India or 911/112
            in other jurisdictions) or healthcare provider immediately.
          </p>
          <p>You are solely responsible for the accuracy of manually entered health information.</p>
        </LegalSection>

        {/* Section 5 */}
        <LegalSection title="5. Location and Safety Features">
          <p>
            LifeWise may offer optional family location sharing, location history, safe places,
            arrival notifications, battery monitoring, and emergency-related features.
          </p>
          <p>These features require explicit device permissions and active internet connectivity.</p>
          <p>You acknowledge that:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Location sharing requires appropriate user permission and explicit opt-in.</li>
            <li>Location information may be inaccurate, delayed, or subject to GPS drift.</li>
            <li>
              Background location availability depends on device and operating system restrictions.
            </li>
            <li>
              Users can manage, pause, or permanently stop location sharing through available
              settings at any time.
            </li>
            <li>Location and safety notifications are not guaranteed to be instantaneous.</li>
            <li>
              LifeWise must not be treated as a replacement for emergency services or professional
              safety systems.
            </li>
          </ul>
          <p>You should only enable location sharing with people who have authorized it.</p>
        </LegalSection>

        {/* Section 6 */}
        <LegalSection title="6. Financial and Bill Management Disclaimer">
          <p>
            LifeWise may provide expense tracking, family budgets, contribution records, bill
            reminders, financial summaries, and related organizational features.
          </p>
          <p>Unless a specific feature clearly states otherwise:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>LifeWise does not act as a bank, financial institution, or payment gateway.</li>
            <li>
              LifeWise does not guarantee the accuracy of manually entered financial information.
            </li>
            <li>Bill reminders do not automatically execute payments.</li>
            <li>
              Users remain solely responsible for paying their bills through the relevant service
              provider.
            </li>
            <li>
              Financial summaries are informational and should not be treated as professional
              financial, tax, or investment advice.
            </li>
          </ul>
          <p>
            Where payment information is imported or captured (e.g. via bill scan OCR), users should
            review and confirm the information before relying on it.
          </p>
        </LegalSection>

        {/* Section 7 */}
        <LegalSection title="7. Gmail and Third-Party Integrations">
          <p>
            LifeWise may allow users to connect supported third-party services, including Google
            Gmail, to provide features such as identifying relevant transactional information and
            creating reminders.
          </p>
          <p>When you connect a third-party account:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>You authorize the permissions displayed during the connection process.</li>
            <li>
              LifeWise accesses only the information required for the enabled functionality and
              granted permissions.
            </li>
            <li>Gmail access, where enabled, is strictly read-only.</li>
            <li>LifeWise does not use Gmail access to send, modify, or delete emails.</li>
            <li>
              Information obtained from Google APIs adheres strictly to the{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </li>
            <li>Google user data is not sold or used for targeted advertising.</li>
            <li>
              Google user data is not transferred to third parties except as permitted by applicable
              policies and as necessary to provide the requested functionality.
            </li>
          </ul>
          <p>
            You may revoke third-party access at any time through the relevant provider&apos;s
            account settings (e.g., Google Account security settings) or within the LifeWise app.
          </p>
          <p>Third-party services are governed by their own terms and privacy policies.</p>
        </LegalSection>

        {/* Section 8 */}
        <LegalSection title="8. Documents and User Content">
          <p>
            LifeWise may allow you to upload, store, scan, organize, or process documents, receipts,
            images, and other information.
          </p>
          <p>
            You retain ownership of the content you submit. By submitting content, you grant us the
            limited permission necessary to host, process, display, synchronize, and provide the
            requested Service functionality.
          </p>
          <p>You agree not to upload content that:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Violates another person&apos;s intellectual property or privacy rights.</li>
            <li>Is unlawful, fraudulent, defamatory, or harmful.</li>
            <li>Contains malicious software, viruses, or unauthorized trackers.</li>
            <li>You are not authorized to store or share.</li>
          </ul>
          <p>
            You are responsible for maintaining your own backup copies of critical or original
            documents.
          </p>
        </LegalSection>

        {/* Section 9 */}
        <LegalSection title="9. AI Features (WiseAI)">
          <p>
            LifeWise uses artificial intelligence to provide summaries, suggestions,
            classifications, reminders, and contextual insights.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              AI-generated results may occasionally be incomplete, inaccurate, or outdated due to the
              probabilistic nature of machine learning models.
            </li>
            <li>
              You must independently verify important information (such as medicine dosage, bill
              due dates, and appointment timings) before acting on it.
            </li>
            <li>
              AI-generated information must not be treated as professional medical, financial,
              legal, or emergency advice.
            </li>
            <li>
              We are not liable for decisions made solely in reliance on AI-generated responses.
            </li>
          </ul>
        </LegalSection>

        {/* Section 10 */}
        <LegalSection title="10. Subscriptions, Payments &amp; Consumer Rights">
          <p>
            LifeWise offers free and paid subscription plans to meet different family needs:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Free plan:</strong> Rs. 0. Includes core family hub, basic reminders, and
              limited document storage.
            </li>
            <li>
              <strong>Starter plan:</strong> Rs. 99/month or Rs. 799/year.
            </li>
            <li>
              <strong>Family plan (Recommended):</strong> Rs. 199/month or Rs. 1,499/year.
            </li>
            <li>
              <strong>Pro plan:</strong> Rs. 499/month or Rs. 3,999/year.
            </li>
          </ul>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Prices are listed in Indian Rupees (INR) and may be converted by Google Play or Apple App
            Store to local currencies in other jurisdictions, inclusive of or plus applicable taxes
            (GST, VAT, or sales taxes).
          </p>

          <h3 className="font-semibold text-slate-900 dark:text-white mt-4">
            10.1 In-App Purchases &amp; Billing
          </h3>
          <p>
            Where subscriptions are purchased through Google Play or Apple App Store:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Payments are processed directly by the relevant app store.</li>
            <li>Subscription pricing and billing periods are displayed before purchase.</li>
            <li>
              Subscriptions automatically renew unless cancelled at least 24 hours prior to the
              renewal date according to the relevant store&apos;s process.
            </li>
            <li>
              Users can manage or cancel subscriptions anytime in their Google Play Store
              (Subscriptions menu) or Apple ID account settings. Cancellation takes effect at the end
              of the active billing cycle.
            </li>
          </ul>

          <h3 className="font-semibold text-slate-900 dark:text-white mt-4">
            10.2 Statutory Right of Withdrawal (EU / EEA Consumers)
          </h3>
          <p>
            Under the EU Consumer Rights Directive (2011/83/EU) and applicable consumer protection
            regulations, consumers residing in the European Union have a statutory right of
            withdrawal of fourteen (14) calendar days from the date of concluding the contract for
            digital services.
          </p>
          <p>
            For digital content and immediate in-app services: When you purchase a subscription
            through Google Play or Apple App Store and request immediate access to digital features,
            you acknowledge that performance begins immediately. Refunds and statutory withdrawal
            requests for in-app purchases are administered directly through Google Play (via Google
            Play order history or Google Play customer support) or Apple App Store in accordance with
            their respective refund policies. You may also contact our support team at{" "}
            <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="font-medium text-primary hover:underline">
              {LEGAL_CONTACT_EMAIL}
            </a>{" "}
            for assistance.
          </p>
        </LegalSection>

        {/* Section 11 */}
        <LegalSection title="11. Acceptable Use">
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Use LifeWise for any unlawful or fraudulent activities.</li>
            <li>Attempt to access another user&apos;s account without authorization.</li>
            <li>Interfere with the security, integrity, or normal operation of the Service.</li>
            <li>
              Reverse engineer, decompile, or exploit the application except where permitted by
              applicable law.
            </li>
            <li>Upload malicious software, corrupted files, or harmful content.</li>
            <li>Misuse family permissions or access another person&apos;s private data unlawfully.</li>
            <li>
              Use the Service to harass, stalk, monitor, or harm another person without their
              explicit knowledge and authorization.
            </li>
          </ul>
          <p>
            We reserve the right to restrict or terminate access where we reasonably believe these
            Terms have been violated.
          </p>
        </LegalSection>

        {/* Section 12 */}
        <LegalSection title="12. Intellectual Property">
          <p>
            LifeWise, including its software, code, user interface, branding, logos, trademarks, and
            original content, is owned by or licensed to {LEGAL_ENTITY.company}.
          </p>
          <p>
            You are granted a limited, personal, non-exclusive, non-transferable, and revocable
            licence to use the Service for personal or authorized family purposes in accordance with
            these Terms.
          </p>
          <p>
            You may not copy, redistribute, modify, sell, license, or commercially exploit our
            intellectual property without prior written permission from {LEGAL_ENTITY.company}.
          </p>
        </LegalSection>

        {/* Section 13 */}
        <LegalSection title="13. Service Availability and Changes">
          <p>
            We aim to maintain reliable access to LifeWise but do not guarantee uninterrupted or
            error-free availability.
          </p>
          <p>The Service may occasionally be unavailable due to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Scheduled maintenance and system upgrades.</li>
            <li>Network, hosting, or infrastructure failures.</li>
            <li>Third-party service interruptions.</li>
            <li>Device or operating system restrictions.</li>
            <li>Circumstances beyond our reasonable control (force majeure).</li>
          </ul>
          <p>
            We may add, modify, suspend, or discontinue features with reasonable notice where
            required by law.
          </p>
        </LegalSection>

        {/* Section 14 */}
        <LegalSection title="14. Account Suspension and Termination">
          <p>You may stop using LifeWise at any time.</p>
          <p>
            You may delete your account and associated personal data directly within the app (under{" "}
            <em>Settings &rarr; Account &rarr; Delete Account</em>) or by contacting our support team
            at{" "}
            <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="font-medium text-primary hover:underline">
              {LEGAL_CONTACT_EMAIL}
            </a>
            .
          </p>
          <p>We may suspend or terminate access if:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>You materially violate these Terms.</li>
            <li>Your use creates an active security or legal risk.</li>
            <li>We are required to do so by applicable law or regulatory authority.</li>
            <li>Continued provision of the Service is no longer commercially or technically feasible.</li>
          </ul>
          <p>
            Account deletion and associated data handling are governed by our{" "}
            <Link href="/privacy-policy" className="font-medium text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            and applicable data protection laws.
          </p>
        </LegalSection>

        {/* Section 15 */}
        <LegalSection title="15. Privacy and Data Protection">
          <p>
            Your privacy is paramount. Your use of LifeWise is governed by our comprehensive{" "}
            <Link href="/privacy-policy" className="font-semibold text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <p>
            Our Privacy Policy explains what information we collect, how we process and store it,
            how location and health data are safeguarded, when information may be shared, and how
            you can exercise your statutory rights (access, correction, erasure) under applicable data
            protection laws, including India&apos;s Digital Personal Data Protection Act, 2023 (DPDP
            Act) and the General Data Protection Regulation (GDPR).
          </p>
          <p>Please review our Privacy Policy before using the Service.</p>
        </LegalSection>

        {/* Section 16 */}
        <LegalSection title="16. Limitation of Liability">
          <p>
            To the maximum extent permitted by applicable law, {LEGAL_ENTITY.company} and its
            directors, employees, and affiliates will not be liable for indirect, incidental,
            special, consequential, or punitive damages arising from your use of or inability to use
            LifeWise.
          </p>
          <p>
            We do not guarantee that all information, reminders, synchronization results, AI-generated
            outputs, or third-party integrations will always be accurate, complete, or uninterrupted.
          </p>
          <p>
            To the extent permitted by law, our total aggregate liability for any claim arising out
            of or relating to these Terms or the Service shall not exceed the amount you paid to
            LifeWise in the twelve (12) months preceding the claim, or Rs. 1,000, whichever is
            greater.
          </p>
          <p>
            Nothing in these Terms excludes or limits liability that cannot legally be excluded or
            limited under applicable mandatory consumer protection laws.
          </p>
        </LegalSection>

        {/* Section 17 */}
        <LegalSection title="17. Indemnification">
          <p>
            To the extent permitted by applicable law, you agree to indemnify and hold harmless{" "}
            {LEGAL_ENTITY.company}, its officers, and employees from and against any claims, losses,
            damages, liabilities, and legal expenses arising from your unlawful use of LifeWise, your
            violation of these Terms, or your infringement of any third party&apos;s legal rights.
          </p>
        </LegalSection>

        {/* Section 18 */}
        <LegalSection title="18. Changes to These Terms">
          <p>
            We may update these Terms from time to time to reflect improvements in our Service,
            business operations, or updated legal and regulatory requirements.
          </p>
          <p>
            Updated Terms will be published on this page with a revised Last Updated date. Where
            required by law, we will provide advance notice of material changes through an in-app
            notification or email.
          </p>
          <p>
            Your continued use of LifeWise after updated Terms become effective constitutes
            acceptance of those changes to the extent permitted by law.
          </p>
        </LegalSection>

        {/* Section 19 */}
        <LegalSection title="19. Governing Law and Disputes">
          <p>
            These Terms are governed by {LEGAL_GOVERNING_LAW}, subject to applicable mandatory
            consumer protection rights that cannot legally be excluded.
          </p>
          <p>
            Any disputes arising out of or in connection with these Terms shall be subject to the
            jurisdiction of the competent courts in {LEGAL_JURISDICTION}.
          </p>
          <h3 className="font-semibold text-slate-900 dark:text-white mt-4">
            19.1 European Commission Online Dispute Resolution (ODR)
          </h3>
          <p>
            If you are a consumer residing in the European Union and have an unresolved complaint
            regarding an online purchase, you may access the European Commission&apos;s Online
            Dispute Resolution platform at{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            . We encourage you to first contact us directly at{" "}
            <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="font-medium text-primary hover:underline">
              {LEGAL_CONTACT_EMAIL}
            </a>{" "}
            so we can resolve any issue promptly.
          </p>
        </LegalSection>

        {/* Section 20 */}
        <LegalSection title="20. Trader Declaration &amp; Contact Information">
          <p>
            Under the EU Digital Services Act (DSA) and applicable commercial trade regulations, the
            developer and operating trader details for LifeWise are provided below:
          </p>
          <div className="glass overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 p-5 space-y-3 text-sm sm:text-base">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1 border-b border-slate-200 dark:border-slate-800">
              <span className="font-semibold text-slate-900 dark:text-white">Operating Entity / Trader:</span>
              <span className="sm:col-span-2">{LEGAL_ENTITY.company}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1 border-b border-slate-200 dark:border-slate-800">
              <span className="font-semibold text-slate-900 dark:text-white">Commercial Status:</span>
              <span className="sm:col-span-2">Registered Business Trader (Organization Developer)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1 border-b border-slate-200 dark:border-slate-800">
              <span className="font-semibold text-slate-900 dark:text-white">Product:</span>
              <span className="sm:col-span-2">{LEGAL_ENTITY.product}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1 border-b border-slate-200 dark:border-slate-800">
              <span className="font-semibold text-slate-900 dark:text-white">Support Email:</span>
              <span className="sm:col-span-2">
                <a
                  href={`mailto:${LEGAL_CONTACT_EMAIL}`}
                  className="font-semibold text-primary hover:underline"
                >
                  {LEGAL_CONTACT_EMAIL}
                </a>
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1 border-b border-slate-200 dark:border-slate-800">
              <span className="font-semibold text-slate-900 dark:text-white">Helpline / Phone:</span>
              <span className="sm:col-span-2">
                <a href={`tel:${LEGAL_ENTITY.phone}`} className="font-medium text-primary hover:underline">
                  {LEGAL_ENTITY.phoneDisplay}
                </a>
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1 border-b border-slate-200 dark:border-slate-800">
              <span className="font-semibold text-slate-900 dark:text-white">Corporate Website:</span>
              <span className="sm:col-span-2">
                <a
                  href={LEGAL_ENTITY.companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  {LEGAL_ENTITY.companyWebsite}
                </a>
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1 border-b border-slate-200 dark:border-slate-800">
              <span className="font-semibold text-slate-900 dark:text-white">Product Website:</span>
              <span className="sm:col-span-2">
                <a
                  href={LEGAL_ENTITY.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  {LEGAL_ENTITY.website}
                </a>
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1 border-b border-slate-200 dark:border-slate-800">
              <span className="font-semibold text-slate-900 dark:text-white">Registered Address:</span>
              <span className="sm:col-span-2">{LEGAL_ENTITY.address}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1">
              <span className="font-semibold text-slate-900 dark:text-white">Country:</span>
              <span className="sm:col-span-2">{LEGAL_ENTITY.country}</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            By using LifeWise, you acknowledge that you have read, understood, and agreed to these
            Terms of Service.
          </p>
        </LegalSection>
      </LegalPageShell>
    </>
  );
}
