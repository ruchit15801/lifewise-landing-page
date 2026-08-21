import { FAMILY_HUB_MODULES, PRODUCT_DESCRIPTION } from "@/lib/landing-data";

/** Server-rendered copy so crawlers see real homepage content without waiting on JS. */
export function HomeIntro() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-slate-50 py-8 sm:py-10 lg:py-12 dark:bg-slate-900"
    >
      <div className="section-max max-w-3xl">
        <p className="font-display text-xs font-semibold tracking-wide text-indigo-700 dark:text-indigo-300">
          What is LifeWise
        </p>
        <h2 className="mt-2 font-display text-[1.35rem] font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-white">
          India&apos;s Family Operating System
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
          <p>
            LifeWise is India&apos;s Family Operating System (Family OS) — one
            mobile app to manage medicine reminders, bills, insurance, health,
            documents, and daily routines for the whole household.{" "}
            {PRODUCT_DESCRIPTION}
          </p>
          <p>
            Family Hub is the main screen: Papa, Mummy, kids, and spouse each
            get a card. You turn on only the modules that matter — medicine for
            parents, bills and subscriptions for you, study tracking for a
            student. Caregivers see the same updates in real time when a
            reminder is done or missed.
          </p>
          <p>
            Voice Reminder understands Hindi like &ldquo;Papa ko kal subah 8
            baje medicine leni hai.&rdquo; Scan Bill reads bijli, gas, water,
            or mobile bills with OCR. WiseAI answers from your family data.
            Emergency SOS can alert up to five contacts with location and a
            medical card.
          </p>
          <p>
            Start free on Google Play (package com.lifewise): up to 3 members,
            Medicine + Bills. Premium is Rs. 199/month or Rs. 1,499/year for
            all 20 modules, WiseAI, voice reminders, bill scan, and Money Leak
            alerts. Official site: lifewiseee.com. Not LifeWise Student
            Insurance.
          </p>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          <span className="font-display font-semibold text-slate-900 dark:text-white">
            20 modules per member:{" "}
          </span>
          {FAMILY_HUB_MODULES.join(", ")}.
        </p>
      </div>
    </section>
  );
}
