"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { cn } from "@/components/cn";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";
import { StoreDownloadButtons } from "@/components/StoreDownloadButtons";
import { LifeWisePhoneScene, screenBeat, type PhoneScreen } from "@/components/LifeWisePhoneScene";

type Story = {
  key: string;
  label: string;
  sting: string;
  problem: string;
  solution: string;
  before: PhoneScreen[];
  after: PhoneScreen[];
};

const stories: Story[] = [
  {
    key: "medicine",
    label: "Missed medicine",
    sting: "You found out three days later.",
    problem: "Papa skipped his BP tablet again.",
    solution: "He gets the reminder. If he misses it, you get the alert the same morning.",
    before: [
      {
        type: "chat",
        title: "Family",
        lines: [
          { from: "them", name: "Priya", text: "Papa ne BP tablet li?", time: "Sun 9:41" },
          { from: "you", text: "I thought you asked him", time: "Sun 9:42" },
          { from: "them", name: "Priya", text: "He skipped it. Three days.", time: "Sun 9:43" }
        ]
      }
    ],
    after: [
      { type: "lock", clock: "8:00", title: "Papa · BP tablet", body: "Reminder sent to Papa" },
      { type: "dose", person: "Papa", medicine: "Amlodipine 5mg", when: "8:00 AM" },
      { type: "dose", person: "Papa", medicine: "Amlodipine 5mg", when: "8:12 AM", taken: true },
      {
        type: "caregiver",
        person: "Papa",
        title: "Marked Taken",
        body: "8:12 AM · you and Priya both see it",
        done: true
      }
    ]
  },
  {
    key: "bills",
    label: "Late bill",
    sting: "Then the late fee arrived.",
    problem: "The bijli bill sat in a drawer.",
    solution: "Scan it once. LifeWise fills the due date and reminds you before it is late.",
    before: [
      {
        type: "chat",
        title: "Home",
        lines: [
          { from: "them", name: "Mummy", text: "Bijli wala aaya. Bill drawer ma che.", time: "10:02" },
          { from: "you", text: "I'll pay tonight", time: "10:05" },
          { from: "them", name: "Mummy", text: "Late fee add thai gayu.", time: "3 days later" }
        ]
      }
    ],
    after: [
      { type: "bill", name: "UGVCL Electricity", amount: "₹2,458", due: "15 Oct" },
      { type: "lock", clock: "9:10", title: "Electricity due in 3 days", body: "Reminder on your phone" },
      { type: "bill", name: "UGVCL Electricity", amount: "₹2,458", due: "15 Oct", paid: true }
    ]
  },
  {
    key: "siblings",
    label: "Siblings",
    sting: "Nobody actually knows.",
    problem: "Three cities. One chat: \"Did anyone call Mummy?\"",
    solution: "Everyone sees the same Family Hub: who called, who paid, what is next.",
    before: [
      {
        type: "chat",
        title: "Siblings",
        lines: [
          { from: "them", name: "Rahul", text: "Did anyone call Mummy?", time: "7:02" },
          { from: "you", text: "I thought Priya did", time: "7:04" },
          { from: "them", name: "Priya", text: "48 unread. I don't know.", time: "7:06" }
        ]
      }
    ],
    after: [
      {
        type: "hub",
        people: [
          { name: "Mummy", note: "Check-in waiting", ok: false },
          { name: "Priya", note: "In Bengaluru", ok: true },
          { name: "Ruchit", note: "Ahmedabad", ok: true }
        ]
      },
      {
        type: "hub",
        people: [
          { name: "Mummy", note: "Priya called · 7:40 PM", ok: true },
          { name: "Priya", note: "Checkup booked Sat", ok: true },
          { name: "Ruchit", note: "₹2,000 groceries logged", ok: true }
        ]
      }
    ]
  },
  {
    key: "documents",
    label: "Lost file",
    sting: "The hospital is waiting.",
    problem: "They ask for the policy number. Nobody knows where the file is.",
    solution: "It lives on Mummy's card. The helpline is one tap from SOS.",
    before: [
      {
        type: "chat",
        title: "Family",
        lines: [
          { from: "them", name: "Ruchit", text: "Hospital wants policy number NOW", time: "9:01" },
          { from: "you", text: "File is at Papa's cupboard?", time: "9:02" },
          { from: "them", name: "Priya", text: "I can't find it", time: "9:04" }
        ]
      }
    ],
    after: [
      {
        type: "caregiver",
        person: "Mummy",
        title: "Star Health · 4128 9901",
        body: "Saved on her card. Helpline one tap away.",
        done: true
      },
      {
        type: "hub",
        people: [
          { name: "Mummy", note: "Policy + SOS shared", ok: true },
          { name: "Priya", note: "Can view documents", ok: true }
        ]
      }
    ]
  },
  {
    key: "money",
    label: "Money leak",
    sting: "The month is already gone.",
    problem: "Salary comes. Salary goes. Nobody knows where.",
    solution: "Family Money shows who spent what. Money Leak flags what you forgot to cancel.",
    before: [
      {
        type: "chat",
        title: "Home",
        lines: [
          { from: "you", text: "Salary aavi. Paisa gaya kya?", time: "1st" },
          { from: "them", name: "Neha", text: "Swiggy, Hotstar, I don't know", time: "1st" }
        ]
      }
    ],
    after: [
      {
        type: "caregiver",
        person: "Money Leak",
        title: "2 unused subscriptions",
        body: "Still on autopay · ₹399 + ₹299",
        done: false
      },
      {
        type: "hub",
        people: [
          { name: "Food", note: "₹8,400 this month", ok: false },
          { name: "Bills", note: "₹2,458 paid", ok: true },
          { name: "Meds", note: "₹1,200", ok: true }
        ]
      }
    ]
  },
  {
    key: "alone",
    label: "Lives alone",
    sting: "Your heart is already racing.",
    problem: "Mummy lives alone. The call did not go through.",
    solution: "One \"I'm OK\" tap. If she needs help, SOS hits the whole family at once.",
    before: [
      {
        type: "chat",
        title: "Mummy",
        lines: [
          { from: "you", text: "Mummy pick up na?", time: "10:02" },
          { from: "you", text: "Call again. Still ringing.", time: "10:11" }
        ]
      }
    ],
    after: [
      { type: "lock", clock: "9:00", title: "Morning check-in", body: "Sent to Mummy" },
      { type: "checkin", person: "Mummy" },
      { type: "checkin", person: "Mummy", ok: true },
      {
        type: "caregiver",
        person: "Mummy",
        title: "I'm OK · 9:03 AM",
        body: "Family notified. No extra call needed.",
        done: true
      }
    ]
  }
];

export function ProblemSolution() {
  const [activeKey, setActiveKey] = useState(stories[0].key);
  const [run, setRun] = useState(0);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const story = stories.find((s) => s.key === activeKey) ?? stories[0];
  const screens = useMemo(() => [...story.before, ...story.after], [story]);
  const inApp = step >= story.before.length;

  useEffect(() => {
    setStep(0);
    setDone(false);
  }, [activeKey, run]);

  return (
    <SectionShell
      id="problems"
      eyebrow="This is the Sunday-night feeling"
      title="See the problem. Watch LifeWise solve it."
      subtitle="Scroll to this section. The phone plays the real chat first, then LifeWise working live."
    >
      <div className="-mx-4 mb-3 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
        {stories.map((s) => {
          const selected = s.key === activeKey;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => {
                setActiveKey(s.key);
                setRun(0);
              }}
              className={cn(
                "inline-flex min-h-[40px] shrink-0 items-center rounded-full border px-3.5 text-sm font-semibold transition",
                selected
                  ? "border-rose-600 bg-rose-600 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-rose-300 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
              )}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      <Reveal>
        <div className="grid gap-4 rounded-3xl border border-slate-200/80 bg-white p-4 shadow-premium sm:p-5 lg:grid-cols-2 lg:items-stretch dark:border-white/10 dark:bg-slate-900/70">
          <div className="flex min-h-full flex-col">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${story.key}-${inApp ? "after" : "before"}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
              >
                <p
                  className={cn(
                    "text-[11px] font-bold uppercase tracking-wider",
                    inApp ? "text-emerald-600 dark:text-emerald-300" : "text-rose-600 dark:text-rose-300"
                  )}
                >
                  {inApp ? "How LifeWise solves it" : "The real problem"}
                </p>
                <p className="mt-1 font-display text-[1.2rem] font-semibold leading-snug text-slate-900 dark:text-white">
                  {story.problem}
                </p>
                <p
                  className={cn(
                    "mt-1.5 text-sm font-medium",
                    inApp ? "text-emerald-700 dark:text-emerald-300" : "text-rose-700 dark:text-rose-300"
                  )}
                >
                  {inApp ? story.solution : story.sting}
                </p>
              </motion.div>
            </AnimatePresence>

            <ol className="mt-4 flex flex-1 flex-col gap-1.5">
              {screens.map((screen, i) => {
                const beat = screenBeat(screen);
                const Icon = beat.icon;
                const active = i === step;
                const passed = i < step;
                return (
                  <li
                    key={`${beat.label}-${i}`}
                    className={cn(
                      "flex items-center gap-2.5 rounded-2xl border px-3 py-2 text-sm",
                      active
                        ? "border-indigo-200 bg-indigo-50 dark:border-indigo-400/30 dark:bg-indigo-400/10"
                        : passed
                          ? "border-emerald-100 bg-emerald-50/70 dark:border-emerald-400/20 dark:bg-emerald-400/10"
                          : "border-slate-100 bg-slate-50 dark:border-white/10 dark:bg-slate-800/50"
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-xl",
                        active
                          ? "bg-indigo-600 text-white"
                          : passed
                            ? "bg-emerald-600 text-white"
                            : "bg-white text-slate-500 dark:bg-slate-900"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1 font-medium text-slate-800 dark:text-slate-100">
                      {beat.label}
                    </span>
                    {active ? (
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

            <div className="mt-4">
              {done ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-400/25 dark:bg-emerald-400/10">
                  <p className="flex items-center gap-2 text-sm font-semibold text-emerald-800 dark:text-emerald-200">
                    <CheckCircle2 className="h-4 w-4" />
                    This never has to happen again.
                  </p>
                  <div className="mt-3">
                    <StoreDownloadButtons variant="light" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setRun((n) => n + 1)}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Replay
                  </button>
                </div>
              ) : (
                <button type="button" onClick={() => setRun((n) => n + 1)} className="btn-primary">
                  <RotateCcw className="h-4 w-4" />
                  Play from the start
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center rounded-2xl bg-slate-50 py-3 dark:bg-slate-800/40">
            <LifeWisePhoneScene
              sceneKey={`${story.key}-${run}`}
              screens={screens}
              playing
              interval={2800}
              onStep={setStep}
              onComplete={() => setDone(true)}
            />
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
