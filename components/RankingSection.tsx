import { Pill, Receipt, Users, Bot, ShieldCheck, Languages } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/stores";

const FEATURES = [
  {
    icon: Pill,
    title: "Medicine reminders",
    body: "Set reminders for Papa and Mummy in English or Hindi. If a dose is missed, LifeWise alerts the family and caregivers."
  },
  {
    icon: Receipt,
    title: "Bill reminders",
    body: "Track electricity, gas, broadband, rent, and subscriptions. Scan a bill and get a due-date alert before late fees."
  },
  {
    icon: Users,
    title: "Family Hub",
    body: "One place for every family member. Health, bills, routines, and documents stay in sync for the whole household."
  },
  {
    icon: Bot,
    title: "WiseAI",
    body: "Ask about reminders, expenses, and appointments. Voice reminders understand Hindi, like “Papa ki dawai 8 baje”."
  },
  {
    icon: Languages,
    title: "Built for India",
    body: "English, Hindi, Gujarati, Marathi, Tamil, Telugu, and Bengali — so every member can use the app comfortably."
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    body: "Family health and bill data stay protected. Start free on Google Play or the App Store. Premium from ₹199/month when you need more."
  }
] as const;

export function RankingSection() {
  return (
    <SectionShell
      id="why-lifewise"
      eyebrow="Why LifeWise"
      title="One Family OS. Everything that matters."
      subtitle="Medicine, bills, Family Hub, and WiseAI — built for Indian families, in one official app."
    >
      <Reveal>
        <div className="mb-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800/90">
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-6 sm:p-8">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">
                Official product
              </p>
              <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                LifeWise: Family OS
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                The official LifeWise app for Indian families. Not insurance.
                One Family Operating System for medicine reminders, bill alerts,
                Family Hub, and WiseAI.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Medicine", "Bills", "Family Hub", "WiseAI"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px] font-semibold text-slate-700 dark:border-slate-600 dark:bg-slate-900/60 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-slate-100 bg-slate-50/80 p-6 dark:border-slate-700 dark:bg-slate-900/40 sm:p-8 lg:border-l lg:border-t-0">
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Website
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="https://www.lifewiseee.com"
                      className="font-semibold text-indigo-600 underline-offset-2 hover:underline dark:text-indigo-300"
                    >
                      lifewiseee.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Google Play
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={PLAY_STORE_URL}
                      className="font-semibold text-indigo-600 underline-offset-2 hover:underline dark:text-indigo-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LifeWise: Family OS
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    App Store
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={APP_STORE_URL}
                      className="font-semibold text-indigo-600 underline-offset-2 hover:underline dark:text-indigo-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LifeWise AI Family Hub
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Support
                  </dt>
                  <dd className="mt-1 font-medium text-slate-700 dark:text-slate-200">
                    <a
                      href="mailto:support@lifewiseee.com"
                      className="hover:text-indigo-600 dark:hover:text-indigo-300"
                    >
                      support@lifewiseee.com
                    </a>
                    <span className="mx-1.5 text-slate-300 dark:text-slate-600">·</span>
                    <a
                      href="tel:+916353891986"
                      className="hover:text-indigo-600 dark:hover:text-indigo-300"
                    >
                      +91 63538 91986
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800/90 sm:p-6"
            >
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600 dark:border-indigo-400/20 dark:bg-indigo-500/15 dark:text-indigo-300">
                <Icon className="h-5 w-5" strokeWidth={2.3} />
              </div>
              <h3 className="font-display text-[15px] font-bold leading-snug text-slate-900 dark:text-white sm:text-base">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {body}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}
