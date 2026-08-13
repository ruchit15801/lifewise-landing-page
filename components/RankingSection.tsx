import { Pill, Receipt, Users, Bot, ShieldCheck, Languages } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { Reveal } from "@/components/Reveal";

const RANKING_POINTS = [
  {
    icon: Pill,
    title: "Medicine reminder app for parents",
    body: "Set Papa and Mummy medicine reminders in English or Hindi. LifeWise notifies the family and escalates missed doses to caregivers."
  },
  {
    icon: Receipt,
    title: "Electricity & bill reminder India",
    body: "Track bijli, gas, broadband, rent, and subscriptions. Scan bills with OCR and get due-date alerts before late fees."
  },
  {
    icon: Users,
    title: "Family Hub for Indian households",
    body: "One Family Operating System for every member: up to 20 modules per profile, shared with caregivers in real time."
  },
  {
    icon: Bot,
    title: "WiseAI family assistant",
    body: "Ask WiseAI about reminders, expenses, and appointments. Voice Reminder understands Hindi commands like “Papa ki dawai 8 baje”."
  },
  {
    icon: Languages,
    title: "Hindi, Gujarati & more",
    body: "Built for India with English, Hindi, Gujarati, Marathi, Tamil, Telugu, and Bengali support across the app experience."
  },
  {
    icon: ShieldCheck,
    title: "Secure & DPDP-aware design",
    body: "Family health and bill data stay protected. Official app at lifewiseee.com. Free plan available, Premium from ₹199/month."
  }
] as const;

/**
 * Visible ranking / AEO content block for Google + answer engines.
 * Not cloaked: real user-facing section with semantic headings.
 */
export function RankingSection() {
  return (
    <SectionShell
      id="why-lifewise"
      eyebrow="Why LifeWise"
      title="LifeWise: Family OS for medicine, bills & daily life in India"
      subtitle="Official Google Play app (com.lifewise). LifeWise helps adult children and caregivers in Delhi NCR, Mumbai, Ahmedabad, Bengaluru and across India manage parents' health, utility bills, and family routines in one Family Hub."
    >
      <Reveal>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
          {RANKING_POINTS.map(({ icon: Icon, title, body }) => (
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

      <Reveal delay={0.08}>
        <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5 dark:border-indigo-400/20 dark:bg-indigo-500/10 sm:p-6">
          <h3 className="font-display text-base font-bold text-indigo-950 dark:text-indigo-100 sm:text-lg">
            Search: LifeWise Family OS, medicine reminder, bill reminder, Family Hub, WiseAI
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-indigo-900/80 dark:text-indigo-100/85">
            Official product: <strong>LifeWise: Family OS</strong> (
            <strong>com.lifewise</strong>) at{" "}
            <strong>lifewiseee.com</strong>. Free on{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.lifewise"
              className="font-semibold underline underline-offset-2 hover:text-indigo-700 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play
            </a>
            . Support: support@lifewiseee.com, +91 63538
            91986 (Mon-Sat, 9 AM-7 PM IST). HQ: Sector 14, Gurugram, Haryana.
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
