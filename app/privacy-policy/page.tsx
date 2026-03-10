import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – LifeWise",
  description:
    "Understand how LifeWise handles your data, SMS permissions, notifications, and privacy."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-backgroundLight dark:bg-backgroundDark min-h-screen">
      <section className="section-max py-16 space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            Your life is personal. LifeWise is designed to protect your data
            while helping you live more calmly and confidently.
          </p>
        </div>

        <div className="glass-panel bg-white/80 dark:bg-slate-950/80 p-6 space-y-6">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              Data Collection
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              LifeWise collects only the information required to power reminders,
              insights, and family care features. This may include:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
              <li>Basic account information (such as name and email).</li>
              <li>
                Reminder content you create (text, voice, photos, and
                schedules).
              </li>
              <li>
                Family member profiles you choose to add for shared reminders.
              </li>
              <li>
                Transactional SMS metadata required to detect bills and
                payments.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              Permissions (SMS, Notifications)
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              LifeWise requests specific permissions on your device to work
              correctly:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
              <li>
                <span className="font-semibold">SMS (optional)</span> – LifeWise
                reads SMS only to detect financial transactions, bill due dates,
                and relevant reminders. Promotional or personal messages are
                ignored.
              </li>
              <li>
                <span className="font-semibold">Notifications</span> – Used to
                deliver reminders for bills, medicines, family tasks, and life
                events.
              </li>
              <li>
                <span className="font-semibold">Storage / Photos (optional)</span>{" "}
                – Only used when you attach images for photo-based reminders.
              </li>
              <li>
                <span className="font-semibold">Microphone (optional)</span> –
                Used for voice reminders and commands, processed securely.
              </li>
            </ul>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              You can change or revoke these permissions anytime in your device
              settings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              Data Usage
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              LifeWise uses your data to:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
              <li>Create and manage reminders for bills, medicines, and tasks.</li>
              <li>
                Generate Life Score and insights about your spending and
                routines.
              </li>
              <li>
                Power family care features, shared reminders, and senior-friendly
                modes.
              </li>
              <li>
                Recommend helpful actions like paying on time or avoiding
                overspending.
              </li>
            </ul>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              LifeWise reads SMS only to detect financial transactions and
              reminders. User data is <span className="font-semibold">
                never sold
              </span>{" "}
              to advertisers or data brokers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              Data Protection
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              We use modern security practices to safeguard your information,
              including:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
              <li>Encryption in transit for all network communication.</li>
              <li>
                Restricted access to sensitive systems and production data.
              </li>
              <li>
                Regular monitoring to detect unusual access or misuse patterns.
              </li>
            </ul>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              While no system can be perfectly secure, LifeWise is built with a
              privacy-first mindset and continually improved to protect your
              information.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              Contact Email
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              If you have questions, requests, or concerns about your data or
              privacy, you can reach us at:
            </p>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-100">
              support@lifewiseee.com
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

