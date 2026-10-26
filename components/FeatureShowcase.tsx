"use client";

import { useEffect, useState } from "react";
import {
  BellRing,
  Bot,
  CheckCircle2,
  HeartPulse,
  Receipt,
  RotateCcw,
  Users,
  Wallet
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/components/cn";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";
import { LifeWisePhoneScene, screenBeat, type PhoneScreen } from "@/components/LifeWisePhoneScene";

type Feature = {
  key: string;
  icon: LucideIcon;
  title: string;
  point: string;
  detail: string;
  screens: PhoneScreen[];
};

const features: Feature[] = [
  {
    key: "hub",
    icon: Users,
    title: "Family Hub",
    point: "Every member gets a card. Medicines, bills and check-ins sit on the person, not a private list.",
    detail: "Papa, Mummy and you share the same Hub. Whoever is connected sees the update in seconds.",
    screens: [
      {
        type: "hub",
        people: [
          { name: "Papa", note: "Medicine due · 8 PM", ok: false },
          { name: "Mummy", note: "I'm OK · 9:03 AM", ok: true },
          { name: "Ruchit", note: "Bijli paid · ₹2,458", ok: true }
        ]
      }
    ]
  },
  {
    key: "meds",
    icon: BellRing,
    title: "Medicines & alerts",
    point: "Papa gets the reminder. If he misses it, you and Priya get the alert the same morning.",
    detail: "Senior Mode is one big Taken button. Caregivers are not guessing in WhatsApp.",
    screens: [
      { type: "dose", person: "Papa", medicine: "Amlodipine 5mg", when: "8:00 AM" },
      { type: "dose", person: "Papa", medicine: "Amlodipine 5mg", when: "8:12 AM", taken: true },
      {
        type: "caregiver",
        person: "Papa",
        title: "Marked Taken",
        body: "8:12 AM · synced to you and Priya",
        done: true
      }
    ]
  },
  {
    key: "bills",
    icon: Receipt,
    title: "Bills",
    point: "Scan the bijli bill once. Amount and due date fill in. The family is reminded before it is late.",
    detail: "Paid bills can post once to Family Money so the obligation and the spend stay linked.",
    screens: [
      { type: "bill", name: "UGVCL Electricity", amount: "₹2,458", due: "15 Oct" },
      { type: "lock", clock: "9:10", title: "Electricity due in 3 days", body: "Reminder on your phone" },
      { type: "bill", name: "UGVCL Electricity", amount: "₹2,458", due: "15 Oct", paid: true }
    ]
  },
  {
    key: "money",
    icon: Wallet,
    title: "Family Money",
    point: "Who paid, for whom, and where the salary went. Money Leak flags unused subscriptions.",
    detail: "Not a roommate splitter. It is the household khata on the same Hub.",
    screens: [
      {
        type: "hub",
        people: [
          { name: "Food", note: "₹8,400 this month", ok: false },
          { name: "Bills", note: "₹2,458 paid", ok: true },
          { name: "Meds", note: "₹1,200", ok: true }
        ]
      },
      {
        type: "caregiver",
        person: "Money Leak",
        title: "2 unused subscriptions",
        body: "Still on autopay · ₹399 + ₹299",
        done: false
      }
    ]
  },
  {
    key: "checkin",
    icon: HeartPulse,
    title: "Check-in & SOS",
    point: "Mummy taps I'm OK. If she needs help, SOS reaches the family circle with location.",
    detail: "For parents who live alone. You stop calling ten times a night.",
    screens: [
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
  },
  {
    key: "ai",
    icon: Bot,
    title: "WiseAI",
    point: "Ask in English or Hindi. It answers from your family's actual data, not a generic chatbot.",
    detail: "Documents stay private. Images are never sent to the assistant.",
    screens: [
      {
        type: "ai",
        question: "Papa ki next medicine kab hai?",
        answer: "Amlodipine tonight at 8:00 PM. Last dose was marked Taken at 8:12 AM."
      },
      {
        type: "ai",
        question: "How much on food this month?",
        answer: "₹8,400 on food. That is your top spend. Two unused subscriptions are still on autopay."
      }
    ]
  }
];

export function FeatureShowcase() {
  const [active, setActive] = useState(features[0].key);
  const [run, setRun] = useState(0);
  const [step, setStep] = useState(0);
  const feature = features.find((f) => f.key === active) ?? features[0];
  const Icon = feature.icon;

  useEffect(() => {
    setStep(0);
  }, [active, run]);

  return (
    <SectionShell
      id="in-the-app"
      eyebrow="Inside the app"
      title="The main features your family will use"
      subtitle="Family Hub, medicines, bills, money, check-in and WiseAI. Pick one. The phone shows how it actually works."
    >
      <div
        role="tablist"
        aria-label="Main LifeWise features"
        className="-mx-4 mb-3 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {features.map((f) => {
          const TabIcon = f.icon;
          const selected = f.key === active;
          return (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => {
                setActive(f.key);
                setRun(0);
              }}
              className={cn(
                "inline-flex min-h-[40px] shrink-0 items-center gap-2 rounded-full border px-3.5 text-sm font-semibold transition",
                selected
                  ? "border-indigo-600 bg-indigo-600 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
              )}
            >
              <TabIcon className="h-4 w-4" />
              {f.title}
            </button>
          );
        })}
      </div>

      <Reveal>
        <div className="grid gap-4 rounded-3xl border border-slate-200/80 bg-white p-4 shadow-premium sm:p-5 lg:grid-cols-2 lg:items-stretch dark:border-white/10 dark:bg-slate-900/70">
          <div className="flex min-h-full flex-col">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-100 text-indigo-700 dark:bg-indigo-400/20 dark:text-indigo-200">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
            </div>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-900 dark:text-white">
              {feature.point}
            </p>
            <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">{feature.detail}</p>

            <ol className="mt-4 flex flex-1 flex-col gap-1.5">
              {feature.screens.map((screen, i) => {
                const beat = screenBeat(screen);
                const BeatIcon = beat.icon;
                const on = i === step;
                const passed = i < step;
                return (
                  <li
                    key={`${feature.key}-${beat.label}-${i}`}
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
              Replay this feature
            </button>
          </div>

          <div className="flex items-center justify-center rounded-2xl bg-slate-50 py-3 dark:bg-slate-800/40">
            <LifeWisePhoneScene
              sceneKey={`${feature.key}-${run}`}
              screens={feature.screens}
              playing
              interval={2800}
              onStep={setStep}
            />
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
