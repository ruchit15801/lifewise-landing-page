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
            "LifeWise privacy policy for the Family Operating System app (com.lifewise): location data, health data, financial data, SMS/Gmail permissions, WiseAI, and your rights under India\u2019s DPDP Act 2023."
        })}
      />
      <LegalPageShell
        title="Privacy Policy"
        subtitle={`This Privacy Policy explains how ${LEGAL_ENTITY.company} (\u201cwe\u201d, \u201cus\u201d, \u201cour\u201d) collects, uses, stores, and protects your personal and family data when you use the ${LEGAL_ENTITY.product} mobile application (package com.lifewise) and website ${LEGAL_ENTITY.domain}.`}
      >
        {/* Summary */}
        <div className="glass p-5 sm:p-6 border-l-4 border-primary text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong className="text-slate-900 dark:text-white">Summary.</strong>{" "}
          LifeWise is a family operating system for health, money, reminders, documents and safety.
          We collect only what a feature needs. Location is shared only after you turn it on, only
          from your own phone, and you can stop in one tap. We never sell personal data and we
          never use it for advertising.
        </div>

        {/* 1 */}
        <LegalSection title="1. Who we are">
          <p>
            LifeWise is operated by <strong>{LEGAL_ENTITY.company}</strong>,{" "}
            {LEGAL_ENTITY.address}. For privacy questions or requests, write to{" "}
            <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="font-semibold text-primary hover:underline">
              {LEGAL_CONTACT_EMAIL}
            </a>
            .
          </p>
        </LegalSection>

        {/* 2 */}
        <LegalSection title="2. Information we collect">
          <h3 className="font-semibold text-slate-900 dark:text-white">2.1 Account and profile</h3>
          <p>
            Name, email or phone number, sign-in identifiers (Firebase Authentication), profile
            photo, language, and the family members you add (name, relation, age, avatar) with
            the modules you enable for them.
          </p>

          <h3 className="font-semibold text-slate-900 dark:text-white mt-4">
            2.2 Location data (precise and approximate)
          </h3>
          <p>
            Used only by the <strong>Family Location</strong> and <strong>Work &amp; Shifts</strong>{" "}
            features, and only after you enable them and grant the OS permission.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>What:</strong> latitude and longitude, accuracy, timestamp, speed, heading,
              movement mode (stationary / walking / bike / car), battery percentage and charging
              state, your Safe Places (Home, Work, School etc.), arrival/leave/stay events, and a
              route history trail.
            </li>
            <li>
              <strong>Foreground:</strong> shown as live map, ETA and route while the app is open.
            </li>
            <li>
              <strong>Background:</strong> when you enable sharing, geofence reminders, crash
              detection or automatic work clock in/out, location may be read while the app is
              closed or not in use. Android shows a persistent notification and iOS shows the
              location indicator. A prominent in-app disclosure appears before the system permission
              prompt.
            </li>
            <li>
              <strong>Why:</strong> to show your location to viewers you choose, send
              arrival/departure and low-battery alerts, detect a possible crash and notify emergency
              contacts (optional auto-SOS), and record work hours at a job site you define.
            </li>
            <li>
              <strong>Your control:</strong> sharing is Self-only (this phone can never share
              another person&apos;s live location). You choose who can view and for how long.
              Pause or stop in one tap. Enabling Work &amp; Shifts does not turn on Family Location
              sharing. Work location is used on your device and is not exported in CSV files.
            </li>
            <li>
              <strong>Retention:</strong> route history is kept only for your plan&apos;s history
              window (days) and then deleted. Stopping sharing stops new collection.
            </li>
            <li>We do not sell location data or use it for ads.</li>
          </ul>

          <h3 className="font-semibold text-slate-900 dark:text-white mt-4">
            2.3 Health and fitness data
          </h3>
          <p>
            Manually logged vitals (blood pressure, sugar, weight, heart rate, oxygen, steps,
            sleep, water etc.), medicines, doses, stock and appointments. If you connect{" "}
            <strong>Apple Health</strong> (HealthKit) or <strong>Health Connect</strong>, we read
            only the data types you approve, together with source and timestamp. Health data is used
            to show your own trends and configurable alerts  never for advertising or sold. Sharing
            with caregivers is a separate LifeWise permission that you control.
          </p>

          <h3 className="font-semibold text-slate-900 dark:text-white mt-4">
            2.4 Financial and payment information
          </h3>
          <p>
            Expenses, bills, subscriptions, Family Money ledger entries, budgets and savings funds
            that you enter, import or scan. Optional payment capture reads notifications from
            allow-listed UPI apps (Google Pay, PhonePe, Paytm, BHIM) or text you paste/share.
            We store only structured fields (amount, merchant, date, masked payee, reference hash)
            and <strong>never store or upload raw notification or message text</strong>. Captured
            payments go to a &ldquo;Needs your OK&rdquo; queue before posting. Bank statements you
            import are parsed on our server for categorization and not kept after the transactions
            you approve. We do not store card numbers, UPI PINs or bank passwords.
          </p>

          <h3 className="font-semibold text-slate-900 dark:text-white mt-4">
            2.5 Documents and files
          </h3>
          <p>
            Insurance policies, IDs, passports, vehicle documents and receipts you upload or
            import (including via DigiLocker). Stored in encrypted cloud storage, visible only to
            you and people you authorize.
          </p>

          <h3 className="font-semibold text-slate-900 dark:text-white mt-4">
            2.6 Camera, photos, microphone and speech
          </h3>
          <p>
            Camera and gallery are used for scanning bills, documents and receipts (OCR). Microphone
            and speech are used for voice expense entry and voice reminders. Access is requested
            only when you use these features.
          </p>

          <h3 className="font-semibold text-slate-900 dark:text-white mt-4">
            2.7 Email, SMS and notification access (optional)
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Gmail:</strong> read-only access (<code>gmail.readonly</code>) limited to
              transactional senders to detect bills and tickets. Email bodies are used for
              classification only and are not stored on our servers. Our use of Google user data
              follows the Google API Services User Data Policy, including the Limited Use
              requirements.
            </li>
            <li>
              <strong>SMS (Android):</strong> where enabled, transactional SMS may be read to
              detect expenses after you accept a separate disclosure. SMS content is used only for
              expense detection and is not shared.
            </li>
            <li>
              <strong>Notification access (Android):</strong> if you enable it, payment
              notifications from allow-listed apps are read as described in §2.4.
            </li>
            <li>
              <strong>Clipboard and share sheet:</strong> content is read only when you open the
              app or share to LifeWise, and can be turned off in settings.
            </li>
          </ul>

          <h3 className="font-semibold text-slate-900 dark:text-white mt-4">
            2.8 Device, usage and diagnostics
          </h3>
          <p>
            Device model, OS version, app version, platform, time zone, push token, feature usage
            counts, crash and performance logs, and a device fingerprint used to prevent referral
            fraud.
          </p>

          <h3 className="font-semibold text-slate-900 dark:text-white mt-4">2.9 Purchases</h3>
          <p>
            Subscriptions are processed by Apple or Google and managed through RevenueCat. We
            receive plan status and an anonymous purchase identifier, not your card details.
          </p>

          <h3 className="font-semibold text-slate-900 dark:text-white mt-4">2.10 Biometrics</h3>
          <p>
            App Lock uses your device&apos;s fingerprint/face/PIN prompt. The check happens in the
            operating system. We never receive or store biometric data or your device PIN.
          </p>
        </LegalSection>

        {/* 3 */}
        <LegalSection title="3. How we use information">
          <ul className="list-disc space-y-2 pl-5">
            <li>Provide the features you turn on and sync them across your authorized family devices.</li>
            <li>Send reminders, alerts and notifications you enabled.</li>
            <li>Scan documents and voice input, and power the WiseAI assistant using your app data as context.</li>
            <li>Security, fraud prevention, debugging and improving reliability.</li>
            <li>Process purchases and referral rewards; comply with law.</li>
          </ul>
          <p className="font-semibold text-slate-900 dark:text-white">
            We do not sell personal data, do not show third-party ads, and do not use health,
            location or financial data for advertising.
          </p>
        </LegalSection>

        {/* 4 */}
        <LegalSection title="4. Data sharing">
          <h3 className="font-semibold text-slate-900 dark:text-white">4.1 Within your family</h3>
          <p>
            Data is visible to another family member or caregiver only if you (or the account
            owner) granted them access to that specific module. Location, health and money are
            permissioned separately.
          </p>

          <h3 className="font-semibold text-slate-900 dark:text-white mt-4">4.2 Service providers</h3>
          <p>Processors acting on our instructions:</p>
          <div className="overflow-x-auto mt-3">
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left font-semibold">Provider</th>
                  <th className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left font-semibold">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Google Firebase", "Authentication, push notifications (FCM)"],
                  ["Amazon Web Services (S3, Lightsail, Amplify)", "Hosting, file and document storage"],
                  ["MongoDB", "Database"],
                  ["RevenueCat, Apple, Google Play", "Subscriptions and billing"],
                  ["OpenAI, Google Vision / Gemini", "OCR, document/voice understanding, WiseAI (only the content you submit to that feature)"],
                  ["Twilio, Resend", "SMS/OTP and email delivery"],
                  ["Frankfurter (ECB rates), map and flight-status providers", "Exchange rates, maps, live transit (no personal identifiers)"],
                ].map(([provider, purpose]) => (
                  <tr key={provider} className="even:bg-slate-50 dark:even:bg-slate-800/40">
                    <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 align-top font-medium">{provider}</td>
                    <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 align-top">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-semibold text-slate-900 dark:text-white mt-4">4.3 Legal and safety</h3>
          <p>
            We may disclose information if required by law, to protect someone&apos;s safety, or
            in a business transfer, with notice to you.
          </p>
        </LegalSection>

        {/* 5 */}
        <LegalSection title="5. Retention and deletion">
          <ul className="list-disc space-y-2 pl-5">
            <li>Data is kept while your account is active. Location history follows your plan&apos;s retention window.</li>
            <li>
              Disabling a module hides it but keeps history so you can re-enable it; you can delete
              that data at any time.
            </li>
            <li>
              <strong>Delete your account and data:</strong> in the app go to{" "}
              <em>Settings &rarr; Delete account</em>, or email{" "}
              <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="font-semibold text-primary hover:underline">
                {LEGAL_CONTACT_EMAIL}
              </a>{" "}
              from your registered address. We delete or anonymize personal data within 30 days,
              except records we must keep by law.
            </li>
            <li>
              Disconnecting Apple Health / Health Connect stops new imports; you may also delete
              imported data.
            </li>
          </ul>
        </LegalSection>

        {/* 6 */}
        <LegalSection title="6. Security">
          <p>
            Encryption in transit (HTTPS/TLS) and at rest for stored files, access checks on every
            family API call, and least-privilege access for our staff. No system is perfectly
            secure, so please protect your device and use App Lock.
          </p>
        </LegalSection>

        {/* 7 */}
        <LegalSection title="7. Your choices and rights">
          <p>
            You can view, correct, export or delete your data, and withdraw any permission
            (Location, Health, Camera, Microphone, Notifications, Gmail, SMS) in-app or in device
            settings. Optional capture features can be turned off at any time.
          </p>
          <p>
            Depending on where you live  including under India&apos;s{" "}
            <strong>Digital Personal Data Protection Act, 2023</strong>, and GDPR/CCPA where
            applicable  you may have additional rights. Contact{" "}
            <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="font-semibold text-primary hover:underline">
              {LEGAL_CONTACT_EMAIL}
            </a>{" "}
            to exercise them.
          </p>
        </LegalSection>

        {/* 8 */}
        <LegalSection title="8. Children">
          <p>
            LifeWise is intended for adults. Parents or guardians may add a child as a family member
            and manage that child&apos;s data. We do not knowingly allow children under 13 to create
            their own account. Contact us to remove data collected in error.
          </p>
        </LegalSection>

        {/* 9 */}
        <LegalSection title="9. International transfers">
          <p>
            Your data may be processed on servers outside your country. We use providers that apply
            appropriate safeguards.
          </p>
        </LegalSection>

        {/* 10 */}
        <LegalSection title="10. Changes to this policy">
          <p>
            We will post updates here with a new date and notify you in-app for material changes.
            Continued use of LifeWise after changes constitutes acceptance of the updated policy.
          </p>
        </LegalSection>

        {/* 11 */}
        <LegalSection title="11. Contact us">
          <p>
            {LEGAL_ENTITY.company}
            <br />
            {LEGAL_ENTITY.address}
            <br />
            Email:{" "}
            <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="font-semibold text-primary hover:underline">
              {LEGAL_CONTACT_EMAIL}
            </a>
            <br />
            Website:{" "}
            <a
              href={`https://${LEGAL_ENTITY.domain}`}
              className="font-semibold text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {LEGAL_ENTITY.domain}
            </a>
          </p>
        </LegalSection>
      </LegalPageShell>
    </>
  );
}
