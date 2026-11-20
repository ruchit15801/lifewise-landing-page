"use client";

import { useEffect, useState } from "react";
import {
  BellRing,
  Bot,
  CheckCircle2,
  Gauge,
  HeartPulse,
  PieChart,
  Receipt,
  RotateCcw,
  ScanLine,
  Users,
  Wallet,
  Workflow
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
    point: "Every member gets a card. Medicines, bills and check-ins sit on the person.",
    detail: "Papa, Mummy and you share one Hub. The update is live for whoever is connected.",
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
    title: "Medicines",
    point: "Papa gets the reminder. If he misses it, you and Priya get the alert.",
    detail: "Senior Mode is one Taken button. Caregivers are not guessing in WhatsApp.",
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
    point: "Scan once. Amount and due date fill in. The family is reminded before it is late.",
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
    title: "Check-in",
    point: "Mummy taps I'm OK. SOS reaches the family circle with location.",
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
    point: "Ask in English or Hindi. It answers from your family's data.",
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
        answer: "₹8,400 on food. Two unused subscriptions are still on autopay."
      }
    ]
  },
  {
    key: "reports",
    icon: PieChart,
    title: "Reports",
    point: "One month on one page: spend, medicines, bills, then a PDF you can share.",
    detail: "Family and Pro export the PDF. Starter keeps the in-app monthly view.",
    screens: [
      {
        type: "report",
        spend: "₹32,400",
        score: 52,
        rows: [
          { label: "Papa medicines", value: "80% taken" },
          { label: "Bills on time", value: "1 due" },
          { label: "Food", value: "₹8,400" }
        ]
      },
      {
        type: "report",
        spend: "₹32,400",
        score: 68,
        pdf: true,
        rows: [
          { label: "Papa medicines", value: "80% taken" },
          { label: "Bills on time", value: "Paid" },
          { label: "PDF", value: "Oct family report" }
        ]
      }
    ]
  },
  {
    key: "automation",
    icon: Workflow,
    title: "Automation",
    point: "Missed medicine waits 30 minutes, then routes to caregivers. You do not have to remember to ping.",
    detail: "The Hub keeps working when nobody is looking at the phone.",
    screens: [
      { type: "dose", person: "Papa", medicine: "Amlodipine 5mg", when: "8:00 PM" },
      {
        type: "lock",
        clock: "8:30",
        title: "Papa missed the 8 PM dose",
        body: "Automation waited 30 min. Alerting you and Priya."
      },
      {
        type: "caregiver",
        person: "Papa",
        title: "Missed · family alerted",
        body: "You and Priya. Call him, or wait for Taken.",
        done: false
      }
    ]
  },
  {
    key: "score",
    icon: Gauge,
    title: "Life Score",
    point: "One number for household value: budget kept, bills paid, leaks closed.",
    detail: "Same score on Home and Reports. It moves when the family actually acts.",
    screens: [
      { type: "score", value: 52, budget: "48 / 50", bills: "0 / 30", leaks: "4 / 20" },
      { type: "score", value: 71, budget: "48 / 50", bills: "30 / 30", leaks: "12 / 20" }
    ]
  },
  {
    key: "conversion",
    icon: ScanLine,
    title: "Conversion",
    point: "A paper bill becomes amount, due date, then a Family Money line. One capture, not three apps.",
    detail: "Photo in. Structured bill out. Optional post to the khata when you mark paid.",
    screens: [
      { type: "scan", label: "Hold over the UGVCL bill" },
      { type: "scan", label: "Amount and due date found", amount: "₹2,458", due: "15 Oct", ready: true },
      { type: "bill", name: "UGVCL Electricity", amount: "₹2,458", due: "15 Oct", paid: true },
      {
        type: "caregiver",
        person: "Family Money",
        title: "Posted once",
        body: "₹2,458 · electricity · on Papa’s card",
        done: true
      }
    ]
  },
  {
    key: "e2e",
    icon: Workflow,
    title: "End to end",
    point: "Remind → miss → family alert → pay the bill → the month lands in Reports.",
    detail: "This is the advanced loop. One OS, not five apps glued with screenshots.",
    screens: [
      { type: "dose", person: "Papa", medicine: "Amlodipine 5mg", when: "8:00 AM" },
      {
        type: "lock",
        clock: "8:31",
        title: "Missed dose · family loop",
        body: "Automation already told you. Bill is still due 15 Oct."
      },
      { type: "bill", name: "UGVCL Electricity", amount: "₹2,458", due: "15 Oct", paid: true },
      {
        type: "report",
        spend: "₹32,400",
        score: 71,
        pdf: true,
        rows: [
          { label: "Loop closed", value: "Meds + bill" },
          { label: "PDF", value: "Ready" }
        ]
      }
    ]
  }
];

export function FeatureShowcase({
  embedded = false
}: {
  /** When true, nest under FeatureFocus without duplicating #in-the-app */
  embedded?: boolean;
}) {
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
      id={embedded ? "all-features" : "in-the-app"}
      className="py-4 sm:py-6"
      eyebrow={embedded ? "All features" : "Inside the app"}
      title={
        embedded
          ? "Every module. Pick one — the phone shows the loop."
          : "The main features. Then reports, automation, and the full loop."
      }
      subtitle="Hub, medicines, bills, money, check-in, WiseAI — plus Reports, Automation, Life Score, Conversion, and end-to-end. Pick one. The phone is the product."
    >
      <div
        role="tablist"
        aria-label="Main LifeWise features"
        className="-mx-4 mb-2 flex gap-1.5 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {features.map((f) => {
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
                "inline-flex min-h-[34px] shrink-0 items-center rounded-lg border px-2.5 text-[12px] font-semibold transition",
                selected
                  ? "border-slate-950 bg-slate-950 text-white dark:border-white dark:bg-white dark:text-slate-950"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-400 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
              )}
            >
              {f.title}
            </button>
          );
        })}
      </div>

      <Reveal>
        <div className="grid gap-3 rounded-2xl border border-slate-200/70 bg-[#FAF8F5] p-3 lg:grid-cols-[1fr_auto] lg:items-start dark:border-white/10 dark:bg-slate-950">
          <div className="flex min-h-0 flex-col">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
            </div>
            <p className="mt-2 text-sm font-semibold leading-snug text-slate-900 dark:text-white">
              {feature.point}
            </p>
            <p className="mt-1 text-[13px] leading-snug text-slate-600 dark:text-slate-300">{feature.detail}</p>

            <ol className="mt-3 flex flex-col gap-1">
              {feature.screens.map((screen, i) => {
                const beat = screenBeat(screen);
                const BeatIcon = beat.icon;
                const on = i === step;
                const passed = i < step;
                return (
                  <li
                    key={`${feature.key}-${beat.label}-${i}`}
                    className={cn(
                      "flex items-center gap-2 rounded-xl border px-2.5 py-1.5 text-[13px]",
                      on
                        ? "border-slate-900 bg-white dark:border-white dark:bg-slate-900"
                        : passed
                          ? "border-emerald-200/80 bg-white/70 dark:border-emerald-400/20"
                          : "border-transparent bg-white/50 dark:bg-slate-900/40"
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-7 w-7 shrink-0 place-items-center rounded-lg",
                        on
                          ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                          : passed
                            ? "bg-emerald-700 text-white"
                            : "bg-white text-slate-500 dark:bg-slate-800"
                      )}
                    >
                      <BeatIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="min-w-0 flex-1 font-medium text-slate-800 dark:text-slate-100">
                      {beat.label}
                    </span>
                    {on ? (
                      <span className="h-1.5 w-1.5 shrink-0 animate-ping rounded-full bg-slate-900 dark:bg-white" />
                    ) : passed ? (
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-700" />
                    ) : (
                      <span className="text-[10px] font-semibold text-slate-400">{i + 1}</span>
                    )}
                  </li>
                );
              })}
            </ol>

            <button
              type="button"
              onClick={() => setRun((n) => n + 1)}
              className="mt-3 inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
            >
              <RotateCcw className="h-4 w-4" />
              Replay this feature
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
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
