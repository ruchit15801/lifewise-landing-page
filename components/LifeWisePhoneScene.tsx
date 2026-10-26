"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  Battery,
  Bell,
  BellRing,
  Camera,
  CheckCircle2,
  Home,
  MessageCircle,
  Paperclip,
  Phone,
  PieChart,
  Pill,
  Receipt,
  Signal,
  Smile,
  Sparkles,
  User,
  Users,
  Video,
  Wifi
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/components/cn";

export type ChatLine = { from: "them" | "you"; name?: string; text: string; time: string };

export type PhoneScreen =
  | { type: "chat"; title: string; lines: ChatLine[] }
  | { type: "lock"; clock: string; title: string; body: string }
  | { type: "dose"; person: string; medicine: string; when: string; taken?: boolean }
  | { type: "caregiver"; person: string; title: string; body: string; done?: boolean }
  | { type: "bill"; name: string; amount: string; due: string; paid?: boolean }
  | { type: "hub"; people: { name: string; note: string; ok: boolean }[] }
  | { type: "checkin"; person: string; ok?: boolean }
  | { type: "ai"; question: string; answer: string };

export function screenBeat(screen: PhoneScreen): { icon: LucideIcon; label: string } {
  switch (screen.type) {
    case "chat":
      return { icon: MessageCircle, label: `${screen.title} chat` };
    case "lock":
      return { icon: BellRing, label: screen.title };
    case "dose":
      return { icon: Pill, label: screen.taken ? `${screen.medicine} taken` : `${screen.medicine} due` };
    case "caregiver":
      return { icon: BellRing, label: screen.title };
    case "bill":
      return { icon: Receipt, label: screen.paid ? `${screen.name} paid` : `${screen.name} due` };
    case "hub":
      return { icon: Users, label: "Family Hub live" };
    case "ai":
      return { icon: MessageCircle, label: "WiseAI" };
    default:
      return { icon: CheckCircle2, label: screen.ok ? `${screen.person} is OK` : `Waiting on ${screen.person}` };
  }
}

function LiveDot({ tone = "ok" }: { tone?: "ok" | "wait" | "alert" }) {
  return (
    <span className="relative inline-flex h-2 w-2">
      <span
        className={cn(
          "absolute inset-0 animate-ping rounded-full opacity-70",
          tone === "ok" && "bg-emerald-400",
          tone === "wait" && "bg-amber-400",
          tone === "alert" && "bg-rose-400"
        )}
      />
      <span
        className={cn(
          "relative h-2 w-2 rounded-full",
          tone === "ok" && "bg-emerald-500",
          tone === "wait" && "bg-amber-500",
          tone === "alert" && "bg-rose-500"
        )}
      />
    </span>
  );
}

const TABS = [
  { id: "home", label: "Home", icon: Home },
  { id: "family", label: "Family", icon: Users },
  { id: "reminders", label: "Remind", icon: Bell },
  { id: "reports", label: "Reports", icon: PieChart },
  { id: "profile", label: "Me", icon: User }
] as const;

function AppShell({
  tab,
  title,
  subtitle,
  children
}: {
  tab: (typeof TABS)[number]["id"];
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col bg-[#F4F6FB]">
      <div className="flex items-start justify-between px-3 pb-2 pt-1">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">LifeWise</p>
          <p className="text-[16px] font-bold leading-tight text-slate-900">{title}</p>
          {subtitle ? <p className="text-[11px] text-slate-500">{subtitle}</p> : null}
        </div>
        <span className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 bg-white text-slate-600">
          <Bell className="h-4 w-4" />
        </span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden px-3">{children}</div>
      <div className="grid grid-cols-5 border-t border-slate-200 bg-white pb-4 pt-1.5">
        {TABS.map((item) => {
          const Icon = item.icon;
          const on = item.id === tab;
          return (
            <div
              key={item.id}
              className={cn(
                "flex flex-col items-center gap-0.5 text-[9px] font-semibold",
                on ? "text-indigo-600" : "text-slate-400"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Chrome({ clock, children, dark }: { clock: string; children: ReactNode; dark?: boolean }) {
  return (
    <div className="relative mx-auto w-[270px] shrink-0">
      <div className="absolute -left-[3px] top-24 h-8 w-[3px] rounded-l-sm bg-slate-700" />
      <div className="absolute -left-[3px] top-36 h-12 w-[3px] rounded-l-sm bg-slate-700" />
      <div className="absolute -right-[3px] top-32 h-16 w-[3px] rounded-r-sm bg-slate-700" />
      <div className="relative overflow-hidden rounded-[2.15rem] bg-slate-950 p-[8px] shadow-[0_24px_50px_rgba(15,23,42,0.32)] ring-1 ring-black/50">
        <div
          className={cn(
            "relative flex h-[500px] flex-col overflow-hidden rounded-[1.65rem]",
            dark ? "bg-slate-950" : "bg-white"
          )}
        >
          <div className="absolute left-1/2 top-[6px] z-30 h-[21px] w-[86px] -translate-x-1/2 rounded-full bg-black" />
          <div
            className={cn(
              "relative z-10 flex shrink-0 items-center justify-between px-6 pb-0.5 pt-2.5 text-[11px] font-semibold",
              dark ? "text-white" : "text-slate-900"
            )}
          >
            <span>{clock}</span>
            <span className="flex items-center gap-1">
              <Signal className="h-3 w-3" />
              <Wifi className="h-3 w-3" />
              <Battery className="h-3.5 w-3.5" />
            </span>
          </div>
          <div className="relative min-h-0 flex-1 overflow-hidden">{children}</div>
        </div>
      </div>
    </div>
  );
}

function ScreenBody({ screen }: { screen: PhoneScreen }) {
  if (screen.type === "chat") {
    return (
      <div className="flex h-full flex-col bg-[#efeae2]">
        <div className="flex items-center gap-2 bg-[#075e54] px-2 py-2 text-white">
          <ArrowLeft className="h-4 w-4 shrink-0" />
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20 text-[11px] font-bold">
            {screen.title.charAt(0)}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[13px] font-semibold">{screen.title}</span>
            <span className="flex items-center gap-1 text-[10px] text-emerald-200">
              <LiveDot tone="ok" />
              online
            </span>
          </span>
          <Video className="h-4 w-4" />
          <Phone className="h-4 w-4" />
        </div>
        <p className="py-1.5 text-center text-[10px] font-semibold text-slate-500">Today</p>
        <div className="flex flex-1 flex-col justify-end gap-2 overflow-hidden px-2.5 pb-2">
          {screen.lines.map((line, i) => (
            <motion.div
              key={`${line.time}-${line.text}`}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.35 + i * 0.55, duration: 0.4 }}
              className={cn(
                "max-w-[88%] rounded-lg px-2.5 py-1.5 text-[12px] leading-snug shadow-sm",
                line.from === "you" ? "ml-auto rounded-tr-sm bg-[#d9fdd3]" : "rounded-tl-sm bg-white"
              )}
            >
              {line.name ? (
                <span className="block text-[10px] font-bold text-[#075e54]">{line.name}</span>
              ) : null}
              {line.text}
              <span className="mt-0.5 block text-right text-[9px] text-slate-500">{line.time}</span>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-1.5 bg-[#f0f2f5] px-2 py-2">
          <Smile className="h-4 w-4 text-slate-500" />
          <div className="h-8 flex-1 rounded-full bg-white px-3 text-[11px] leading-8 text-slate-400">
            Message
          </div>
          <Paperclip className="h-4 w-4 text-slate-500" />
          <Camera className="h-4 w-4 text-slate-500" />
        </div>
      </div>
    );
  }

  if (screen.type === "lock") {
    return (
      <div className="flex h-full flex-col bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 px-4 pt-8 text-white">
        <p className="text-center font-display text-[48px] font-semibold leading-none tracking-tight">
          {screen.clock}
        </p>
        <p className="mt-1 text-center text-[12px] text-white/70">Monday</p>
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-8 w-full rounded-2xl bg-white/12 p-3.5 ring-1 ring-white/15 backdrop-blur"
        >
          <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-indigo-200">
            <BellRing className="h-3.5 w-3.5" />
            LifeWise
            <span className="ml-auto">
              <LiveDot tone="alert" />
            </span>
          </p>
          <p className="mt-1 text-[14px] font-semibold">{screen.title}</p>
          <p className="mt-0.5 text-[12px] text-white/80">{screen.body}</p>
        </motion.div>
        <div className="mt-3 w-full rounded-2xl bg-white/8 p-3 ring-1 ring-white/10">
          <p className="text-[11px] font-semibold text-white/60">Also today</p>
          <p className="mt-1 text-[12px] text-white/90">Mummy check-in · 9:00 AM</p>
        </div>
        <div className="mt-auto flex items-center justify-between px-4 pb-8">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
            <Camera className="h-4 w-4" />
          </span>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
            <Bell className="h-4 w-4" />
          </span>
        </div>
      </div>
    );
  }

  if (screen.type === "dose") {
    return (
      <AppShell tab="reminders" title={screen.person} subtitle="Senior Mode · medicines">
        <div className="flex h-full flex-col pb-2">
          <div className="flex flex-1 flex-col items-center rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-600">
              <Pill className="h-5 w-5" />
            </span>
            <p className="mt-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {screen.taken ? "Done" : "Due now"}
              {screen.taken ? null : <LiveDot tone="wait" />}
            </p>
            <p className="mt-1 text-center text-[22px] font-black leading-tight text-slate-900">
              {screen.medicine}
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-500">{screen.when}</p>
            <div
              className={cn(
                "mt-4 w-full rounded-2xl py-3 text-center text-[15px] font-bold text-white",
                screen.taken ? "bg-emerald-600" : "bg-indigo-600"
              )}
            >
              {screen.taken ? "Taken" : "I took it"}
            </div>
            {screen.taken ? null : (
              <p className="mt-2 text-[12px] font-semibold text-slate-400">Snooze 10 min</p>
            )}
          </div>
          <div className="mt-2 rounded-2xl bg-white px-3 py-2 ring-1 ring-slate-200">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Next</p>
            <p className="text-[12px] font-semibold text-slate-800">BP tablet · 8:00 PM</p>
          </div>
        </div>
      </AppShell>
    );
  }

  if (screen.type === "caregiver") {
    return (
      <AppShell tab="home" title="Home" subtitle="Your family, right now">
        <div className="flex h-full flex-col gap-2 pb-2">
          <div className="rounded-2xl border border-indigo-100 bg-white p-3 shadow-sm">
            <p className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
              <BellRing className="h-4 w-4 text-indigo-600" />
              {screen.person}
              <span className="ml-auto">
                <LiveDot tone={screen.done ? "ok" : "wait"} />
              </span>
            </p>
            <p className="mt-1 text-[15px] font-bold text-slate-900">{screen.title}</p>
            <p className="mt-0.5 text-[12px] leading-relaxed text-slate-600">{screen.body}</p>
            {screen.done ? (
              <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white">
                <CheckCircle2 className="h-3 w-3" />
                Synced
              </p>
            ) : (
              <p className="mt-2 flex items-center gap-2 text-[11px] font-semibold text-amber-700">
                <LiveDot tone="wait" />
                Waiting…
              </p>
            )}
          </div>
          <div className="rounded-2xl bg-white px-3 py-2 ring-1 ring-slate-200">
            <p className="text-[12px] font-semibold text-slate-800">Mummy · I&apos;m OK</p>
            <p className="text-[11px] text-slate-500">9:03 AM · Ahmedabad</p>
          </div>
          <div className="rounded-2xl bg-white px-3 py-2 ring-1 ring-slate-200">
            <p className="text-[12px] font-semibold text-slate-800">Electricity · due 15 Oct</p>
            <p className="text-[11px] text-slate-500">₹2,458 · reminder on</p>
          </div>
        </div>
      </AppShell>
    );
  }

  if (screen.type === "bill") {
    return (
      <AppShell tab="reminders" title="Bills" subtitle="Home · this month">
        <div className="flex h-full flex-col pb-2">
          <div className="rounded-2xl bg-white p-3 ring-1 ring-slate-200">
            <p className="flex items-center gap-2 text-[12px] font-semibold text-slate-500">
              <Receipt className="h-4 w-4 text-indigo-600" />
              {screen.name}
            </p>
            <p className="mt-2 font-display text-[28px] font-semibold tracking-tight text-slate-900">
              {screen.amount}
            </p>
            <p className="text-[12px] text-slate-500">Due {screen.due}</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
              <div className="rounded-xl bg-slate-50 p-2">Account · 4821</div>
              <div className="rounded-xl bg-slate-50 p-2">UGVCL</div>
            </div>
            <div
              className={cn(
                "mt-3 rounded-2xl py-2.5 text-center text-sm font-bold text-white",
                screen.paid ? "bg-emerald-600" : "bg-amber-500"
              )}
            >
              {screen.paid ? "Paid · family notified" : "Pay before due"}
            </div>
          </div>
          <div className="mt-2 rounded-2xl bg-white px-3 py-2 ring-1 ring-slate-200">
            <p className="text-[11px] font-semibold text-slate-500">Last month</p>
            <p className="text-[13px] font-semibold text-slate-800">₹2,210 · paid on time</p>
          </div>
        </div>
      </AppShell>
    );
  }

  if (screen.type === "hub") {
    return (
      <AppShell tab="family" title="Family Hub" subtitle="Everyone sees the same card">
        <div className="flex h-full flex-col gap-2 pb-2">
          <div className="rounded-2xl bg-gradient-to-r from-teal-500 to-indigo-600 p-3 text-white">
            <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">Family Money</p>
            <p className="text-[20px] font-black">₹32,400</p>
            <p className="text-[10px] text-white/80">Oct · shared khata</p>
          </div>
          <div className="flex min-h-0 flex-1 flex-col gap-1.5">
            {screen.people.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2 rounded-2xl bg-white px-2.5 py-2 ring-1 ring-slate-200"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-indigo-600 text-[11px] font-bold text-white">
                  {p.name.charAt(0)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] font-semibold text-slate-900">{p.name}</span>
                  <span className="block truncate text-[11px] text-slate-500">{p.note}</span>
                </span>
                <LiveDot tone={p.ok ? "ok" : "wait"} />
              </div>
            ))}
          </div>
        </div>
      </AppShell>
    );
  }

  if (screen.type === "ai") {
    return (
      <AppShell tab="home" title="WiseAI" subtitle="Ask about your family">
        <div className="flex h-full flex-col gap-2 pb-2">
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-indigo-600 px-3 py-2 text-[12px] font-medium text-white">
            {screen.question}
          </div>
          <div className="flex gap-2">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-violet-100 text-violet-600">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <div className="rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[12px] leading-relaxed text-slate-700 ring-1 ring-slate-200">
              {screen.answer}
            </div>
          </div>
          <div className="mt-auto rounded-full bg-white px-3 py-2 text-[11px] text-slate-400 ring-1 ring-slate-200">
            Ask about Papa, bills, or this month…
          </div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell tab="family" title="Check-in" subtitle={`${screen.person} · daily`}>
      <div className="flex h-full flex-col pb-2">
        <div className="flex flex-1 flex-col items-center justify-center rounded-2xl bg-white p-4 ring-1 ring-slate-200">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-400">
            {screen.person}
          </p>
          <p className="mt-1 text-[18px] font-bold text-slate-900">Are you OK?</p>
          <div
            className={cn(
              "mt-5 w-full rounded-2xl py-3.5 text-center text-lg font-bold",
              screen.ok ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-700"
            )}
          >
            {screen.ok ? "I'm OK" : "Tap if you are OK"}
          </div>
        </div>
        <div className="mt-2 rounded-2xl bg-white px-3 py-2 ring-1 ring-slate-200">
          <p className="flex items-center gap-2 text-[12px] font-semibold text-slate-700">
            <LiveDot tone={screen.ok ? "ok" : "wait"} />
            {screen.ok ? "Family notified" : "Waiting for tap"}
          </p>
        </div>
      </div>
    </AppShell>
  );
}

export function LifeWisePhoneScene({
  screens,
  sceneKey,
  playing = false,
  interval = 2800,
  onComplete,
  onStep
}: {
  screens: PhoneScreen[];
  sceneKey?: string;
  playing?: boolean;
  interval?: number;
  onComplete?: () => void;
  onStep?: (index: number) => void;
}) {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { amount: 0.35, once: false });
  const [step, setStep] = useState(0);
  const doneRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  const onStepRef = useRef(onStep);
  onCompleteRef.current = onComplete;
  onStepRef.current = onStep;

  const shouldPlay = playing && inView && screens.length > 0;

  useEffect(() => {
    setStep(0);
    doneRef.current = false;
    onStepRef.current?.(0);
  }, [sceneKey]);

  useEffect(() => {
    if (!shouldPlay) return;
    if (reduce) {
      const last = Math.max(screens.length - 1, 0);
      setStep(last);
      onStepRef.current?.(last);
      onCompleteRef.current?.();
      return;
    }
    if (screens.length === 1) {
      onCompleteRef.current?.();
      return;
    }

    const t = window.setInterval(() => {
      setStep((s) => {
        if (s >= screens.length - 1) {
          if (!doneRef.current) {
            doneRef.current = true;
            window.setTimeout(() => onCompleteRef.current?.(), 0);
          }
          return s;
        }
        const next = s + 1;
        onStepRef.current?.(next);
        return next;
      });
    }, interval);
    return () => window.clearInterval(t);
  }, [shouldPlay, screens.length, interval, reduce, sceneKey]);

  const screen = screens[Math.min(step, Math.max(screens.length - 1, 0))];
  if (!screen) return null;
  const clock = screen.type === "lock" ? screen.clock : "9:41";

  return (
    <div ref={wrapRef} className="flex justify-center">
      <Chrome clock={clock} dark={screen.type === "lock"}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${sceneKey ?? "scene"}-${step}-${screen.type}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="h-full"
          >
            <ScreenBody screen={screen} />
          </motion.div>
        </AnimatePresence>
      </Chrome>
    </div>
  );
}
