"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  HeartHandshake,
  Home,
  Plane,
  RotateCcw,
  Type
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/components/cn";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";
import { LifeWisePhoneScene, screenBeat, type PhoneScreen } from "@/components/LifeWisePhoneScene";

type Persona = {
  key: string;
  icon: LucideIcon;
  tab: string;
  who: string;
  problem: string;
  solution: string;
  uses: string[];
  before: PhoneScreen[];
  after: PhoneScreen[];
};

const personas: Persona[] = [
  {
    key: "parents",
    icon: HeartHandshake,
    tab: "Caring for parents",
    who: "You look after Mummy and Papa while holding down a job.",
    problem: "Four medicines, two doctors, and you are the memory for both.",
    solution: "Set medicines once. You only hear from LifeWise if a dose is missed.",
    uses: ["Medicines", "Caregiver alerts", "Health log"],
    before: [
      {
        type: "chat",
        title: "Papa",
        lines: [
          { from: "you", text: "Tablet lidhi?", time: "8:40" },
          { from: "them", name: "Papa", text: "Haan haan", time: "next day" }
        ]
      }
    ],
    after: [
      { type: "dose", person: "Papa", medicine: "Metformin", when: "8:00 AM" },
      { type: "dose", person: "Papa", medicine: "Metformin", when: "8:05 AM", taken: true },
      {
        type: "caregiver",
        person: "Papa",
        title: "Taken · BP 128/82 logged",
        body: "You were not pinged. Nothing was missed.",
        done: true
      }
    ]
  },
  {
    key: "away",
    icon: Plane,
    tab: "Living away",
    who: "You work in another city. Parents are back home.",
    problem: "A missed call at night turns into hours of worry.",
    solution: "Mummy taps I'm OK. You see medicines and bills from Bengaluru or Dubai.",
    uses: ["Check-in", "Family Hub", "SOS"],
    before: [
      {
        type: "chat",
        title: "Mummy",
        lines: [
          { from: "you", text: "Call not going through", time: "10:11" },
          { from: "you", text: "Please reply", time: "10:18" }
        ]
      }
    ],
    after: [
      { type: "checkin", person: "Mummy" },
      { type: "checkin", person: "Mummy", ok: true },
      {
        type: "hub",
        people: [
          { name: "Mummy", note: "I'm OK · Ahmedabad", ok: true },
          { name: "Papa", note: "Evening medicine taken", ok: true },
          { name: "You", note: "Watching from Bengaluru", ok: true }
        ]
      }
    ]
  },
  {
    key: "couples",
    icon: Briefcase,
    tab: "Working couples",
    who: "Both of you work. The kids' calendar runs the house.",
    problem: "School fees, vaccines, the maid. It lives in two different heads.",
    solution: "Say it once. Both phones show it. Whoever pays marks it done.",
    uses: ["Reminders", "Bills", "Shared list"],
    before: [
      {
        type: "chat",
        title: "Neha",
        lines: [
          { from: "you", text: "Riya ni fees kadhi?", time: "Mon" },
          { from: "them", name: "Neha", text: "I thought you did", time: "Mon" }
        ]
      }
    ],
    after: [
      { type: "lock", clock: "7:15", title: "Riya · school fees", body: "Due on the 10th · both parents see it" },
      {
        type: "caregiver",
        person: "Riya",
        title: "Fees paid by Neha",
        body: "Marked done. You don't pay twice.",
        done: true
      }
    ]
  },
  {
    key: "joint",
    icon: Home,
    tab: "Joint families",
    who: "Eight people, one kitchen, one shared budget.",
    problem: "\"Who paid for the gas cylinder?\" becomes a monthly fight.",
    solution: "Chacha adds the cylinder. Bhabhi adds groceries. One khata at month end.",
    uses: ["Family Money", "Member cards", "Split"],
    before: [
      {
        type: "chat",
        title: "Home",
        lines: [
          { from: "them", name: "Bhabhi", text: "Cylinder kone aapyo?", time: "1st" },
          { from: "them", name: "Chacha", text: "I paid. No one noted it.", time: "1st" }
        ]
      }
    ],
    after: [
      {
        type: "hub",
        people: [
          { name: "Chacha", note: "Gas · ₹903", ok: true },
          { name: "Bhabhi", note: "Groceries · ₹3,200", ok: true },
          { name: "Papa", note: "Month split ready", ok: true }
        ]
      }
    ]
  },
  {
    key: "seniors",
    icon: Type,
    tab: "Seniors",
    who: "You are 65+ and still want to do this yourself.",
    problem: "Small text, too many buttons, English-only apps.",
    solution: "One big button. Hindi or Gujarati. Your son in Pune sees Taken without a call.",
    uses: ["Senior Mode", "Large tap", "7 languages"],
    before: [
      {
        type: "chat",
        title: "Son",
        lines: [
          { from: "them", name: "Son", text: "Dadi app khuli ke nai?", time: "8:20" },
          { from: "you", text: "Buttons ghana. Text nano.", time: "8:21" }
        ]
      }
    ],
    after: [
      { type: "dose", person: "Dadi", medicine: "BP tablet", when: "8:00 PM" },
      { type: "dose", person: "Dadi", medicine: "BP tablet", when: "8:01 PM", taken: true },
      {
        type: "caregiver",
        person: "Dadi",
        title: "Taken · son notified",
        body: "No extra phone call from Pune.",
        done: true
      }
    ]
  }
];

export function WhoItsFor() {
  const [active, setActive] = useState(personas[0].key);
  const [run, setRun] = useState(0);
  const [step, setStep] = useState(0);
  const persona = personas.find((p) => p.key === active) ?? personas[0];
  const Icon = persona.icon;
  const screens = useMemo(() => [...persona.before, ...persona.after], [persona]);
  const inApp = step >= persona.before.length;

  useEffect(() => {
    setStep(0);
  }, [active, run]);

  return (
    <SectionShell
      id="who-its-for"
      eyebrow="Who LifeWise is for"
      title="Pick your family. See your problem get solved."
      subtitle="Choose a household. The left list follows the phone, step by step."
    >
      <div
        role="tablist"
        aria-label="Who LifeWise is for"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {personas.map((p) => {
          const TabIcon = p.icon;
          const selected = p.key === active;
          return (
            <button
              key={p.key}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="who-its-for-panel"
              onClick={() => {
                setActive(p.key);
                setRun(0);
              }}
              className={cn(
                "inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition",
                selected
                  ? "border-indigo-600 bg-indigo-600 text-white shadow-premium"
                  : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
              )}
            >
              <TabIcon className="h-4 w-4" />
              {p.tab}
            </button>
          );
        })}
      </div>

      <Reveal>
        <div
          id="who-its-for-panel"
          role="tabpanel"
          className="mt-3 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-premium dark:border-white/10 dark:bg-slate-900/70"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={persona.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 p-4 sm:p-5 lg:grid-cols-2 lg:items-stretch"
            >
              <div className="flex min-h-full flex-col">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-100 text-indigo-700 dark:bg-indigo-400/20 dark:text-indigo-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                      {persona.tab}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{persona.who}</p>
                  </div>
                </div>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-2xl bg-rose-50 p-3 dark:bg-rose-400/10">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-300">
                      Your problem
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-snug text-slate-900 dark:text-white">
                      {persona.problem}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 p-3 dark:bg-emerald-400/10">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-300">
                      {inApp ? "LifeWise now" : "The fix"}
                    </p>
                    <p className="mt-1 flex gap-2 text-sm font-medium text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      {persona.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {persona.uses.map((u) => (
                    <span
                      key={u}
                      className="rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-700 dark:bg-indigo-400/15 dark:text-indigo-200"
                    >
                      {u}
                    </span>
                  ))}
                </div>

                <ol className="mt-3 flex flex-1 flex-col gap-1.5">
                  {screens.map((screen, i) => {
                    const beat = screenBeat(screen);
                    const BeatIcon = beat.icon;
                    const on = i === step;
                    const passed = i < step;
                    return (
                      <li
                        key={`${beat.label}-${i}`}
                        className={cn(
                          "flex items-center gap-2.5 rounded-2xl border px-3 py-2 text-sm",
                          on
                            ? "border-indigo-200 bg-indigo-50 dark:border-indigo-400/30 dark:bg-indigo-400/10"
                            : passed
                              ? "border-emerald-100 bg-emerald-50/70 dark:border-emerald-400/20"
                              : "border-slate-100 bg-slate-50 dark:border-white/10 dark:bg-slate-800/50"
                        )}
                      >
                        <span
                          className={cn(
                            "grid h-8 w-8 shrink-0 place-items-center rounded-xl",
                            on
                              ? "bg-indigo-600 text-white"
                              : passed
                                ? "bg-emerald-600 text-white"
                                : "bg-white text-slate-500 dark:bg-slate-900"
                          )}
                        >
                          <BeatIcon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1 font-medium text-slate-800 dark:text-slate-100">
                          {beat.label}
                        </span>
                        {on ? (
                          <span className="h-2 w-2 shrink-0 animate-ping rounded-full bg-indigo-500" />
                        ) : passed ? (
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                        ) : (
                          <span className="text-[11px] font-semibold text-slate-400">{i + 1}</span>
                        )}
                      </li>
                    );
                  })}
                </ol>

                <button type="button" onClick={() => setRun((n) => n + 1)} className="btn-primary mt-3">
                  <RotateCcw className="h-4 w-4" />
                  Replay this family
                </button>
              </div>

              <div className="flex items-center justify-center rounded-2xl bg-slate-50 py-3 dark:bg-slate-800/40">
                <LifeWisePhoneScene
                  sceneKey={`${persona.key}-${run}`}
                  screens={screens}
                  playing
                  interval={2800}
                  onStep={setStep}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </SectionShell>
  );
}
