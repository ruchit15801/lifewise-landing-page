import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — LifeWise",
  description:
    "LifeWise privacy policy — what we collect, why we collect it, how we secure it, and how SMS bill detection works."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="section-max py-16 sm:py-20">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
          LifeWise is built to be privacy-first. This page explains what data we
          collect, what permissions we request, how we use data, and how we keep
          it secure.
        </p>

        <div className="mt-10 space-y-10">
          <section className="glass p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Data Collection</h2>
            <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
              <li>
                - Account data (optional): name, email/phone if you create an
                account.
              </li>
              <li>
                - Reminder data: reminders you create, schedules, and completion
                status.
              </li>
              <li>
                - Usage analytics (optional): app performance and feature usage
                to improve reliability.
              </li>
            </ul>
          </section>

          <section className="glass p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Permissions (SMS detection)</h2>
            <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              LifeWise may request access to read SMS only to detect bill and
              financial reminder messages (for example: electricity, mobile
              recharge, subscriptions, and bank alerts). This helps us identify
              due dates and amounts so you don’t miss critical payments.
            </p>
            <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
              We do not use SMS data for advertising, profiling, or selling to
              third parties.
            </p>
          </section>

          <section className="glass p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Data Usage</h2>
            <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
              <li>- To create reminders and send notifications.</li>
              <li>- To generate insights like life score and reports.</li>
              <li>- To support Family Hub features you enable.</li>
            </ul>
            <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              User data is never sold.
            </p>
          </section>

          <section className="glass p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Security</h2>
            <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              We apply industry-standard security practices (encryption in
              transit, access controls, and least-privilege). If we store data,
              we aim to minimize what’s collected and retain it only as long as
              needed to provide the service.
            </p>
          </section>

          <section className="glass p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              Questions? Email{" "}
              <a
                className="font-semibold text-primary hover:underline"
                href="mailto:privacy@lifewise.app"
              >
                privacy@lifewise.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

