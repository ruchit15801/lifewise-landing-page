"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  BarChart3,
  Bell,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock,
  CreditCard,
  Home,
  Mic,
  Pill,
  Sparkles,
  TrendingDown,
  User,
  Users,
  Zap
} from "lucide-react";
import { cn } from "@/components/cn";

type TabId = "home" | "family" | "alerts" | "insights" | "profile";

const TABS: { id: TabId; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "family", label: "Family", icon: Users },
  { id: "alerts", label: "Alerts", icon: Bell },
  { id: "insights", label: "Insights", icon: BarChart3 },
  { id: "profile", label: "Profile", icon: User }
];

const QUICK_ACTIONS = [
  { label: "Voice", icon: Mic },
  { label: "Scan", icon: Camera },
  { label: "WiseAI", icon: Sparkles }
] as const;

const HOME_STATS = [
  { label: "Today", value: "5" },
  { label: "Papa health", value: "80%" },
  { label: "Bills due", value: "2" },
  { label: "Family", value: "4" }
] as const;

const HOME_REMINDERS = [
  { who: "Papa", what: "BP Tablet", time: "8:00 PM", status: "Today" },
  { who: "Mummy", what: "Doctor visit", time: "10:00 AM", status: "Done" },
  { who: "Child", what: "School fee", time: "15th Jun", status: "Due" }
] as const;

const HOME_TRANSACTIONS = [
  { label: "Bijli bill paid", amount: "₹1,240", type: "debit" as const },
  { label: "Grocery UPI", amount: "₹680", type: "debit" as const },
  { label: "Salary credited", amount: "₹45,000", type: "credit" as const }
] as const;

const FAMILY_MEMBERS = [
  { name: "Papa", detail: "Medicine 8 AM & 8 PM", health: "80%", icon: Pill },
  { name: "Mummy", detail: "Doctor, Friday 10 AM", health: "92%", icon: Clock },
  { name: "Child", detail: "School fee due 15th", health: "100%", icon: Users },
  { name: "You", detail: "3 bills this week", health: "75%", icon: User }
] as const;

const ALERTS = [
  { title: "MISSED: Papa medicine", detail: "30 min overdue", tone: "danger" as const },
  { title: "Bijli bill due tomorrow", detail: "₹1,240 • Adani", tone: "warn" as const },
  { title: "Insurance renewal", detail: "7 days left", tone: "info" as const },
  { title: "Mummy appointment", detail: "Friday 10:00 AM", tone: "info" as const }
] as const;

const INSIGHTS = [
  { label: "Food this month", value: "₹8,420", trend: "+12%" },
  { label: "Health compliance", value: "78%", trend: "Family avg" },
  { label: "Money leak found", value: "₹299/mo", trend: "Unused OTT" }
] as const;

function StatGrid() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {HOME_STATS.map((c) => (
        <div
          key={c.label}
          className="rounded-xl border border-primary/10 bg-white p-2.5 shadow-sm"
        >
          <div className="text-[10px] font-medium text-slate-500">{c.label}</div>
          <div className="mt-0.5 text-base font-bold text-slate-900">{c.value}</div>
        </div>
      ))}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] font-bold uppercase tracking-wide text-primary/80">
      {children}
    </div>
  );
}

function HomeContent() {
  return (
    <div className="space-y-2.5">
      <StatGrid />
      <div className="rounded-xl border border-primary/10 bg-white p-2.5 shadow-sm">
        <SectionTitle>Reminders</SectionTitle>
        <div className="mt-1.5 space-y-1.5">
          {HOME_REMINDERS.map((r) => (
            <div
              key={`${r.who}-${r.what}`}
              className="flex items-center justify-between gap-2 rounded-lg bg-primary/[0.04] px-2 py-1.5"
            >
              <div className="min-w-0">
                <div className="truncate text-[11px] font-semibold text-slate-900">
                  {r.who}: {r.what}
                </div>
                <div className="text-[10px] text-slate-500">{r.time}</div>
              </div>
              <span
                className={cn(
                  "shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-bold",
                  r.status === "Done"
                    ? "bg-emerald-100 text-emerald-700"
                    : r.status === "Due"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-primary/15 text-primary"
                )}
              >
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-primary/10 bg-white p-2.5 shadow-sm">
        <SectionTitle>Transactions</SectionTitle>
        <div className="mt-1.5 space-y-1.5">
          {HOME_TRANSACTIONS.map((t) => (
            <div
              key={t.label}
              className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-2 py-1.5"
            >
              <div className="flex min-w-0 items-center gap-1.5">
                <CreditCard className="h-3 w-3 shrink-0 text-primary" />
                <span className="truncate text-[11px] font-medium text-slate-800">
                  {t.label}
                </span>
              </div>
              <span
                className={cn(
                  "shrink-0 text-[11px] font-bold",
                  t.type === "credit" ? "text-emerald-600" : "text-slate-900"
                )}
              >
                {t.type === "credit" ? "+" : "-"}
                {t.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FamilyContent() {
  return (
    <div className="space-y-2">
      {FAMILY_MEMBERS.map((m) => {
        const Icon = m.icon;
        return (
          <div
            key={m.name}
            className="flex items-center gap-2.5 rounded-xl border border-primary/10 bg-white p-2.5 shadow-sm"
          >
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-4 w-4" strokeWidth={2} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-bold text-slate-900">{m.name}</div>
              <div className="truncate text-[10px] text-slate-500">{m.detail}</div>
            </div>
            <div className="shrink-0 text-right">
              <div className="text-[11px] font-bold text-primary">{m.health}</div>
              <div className="text-[9px] text-slate-400">health</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AlertsContent() {
  return (
    <div className="space-y-2">
      {ALERTS.map((a) => (
        <div
          key={a.title}
          className={cn(
            "flex items-start gap-2 rounded-xl border p-2.5 shadow-sm",
            a.tone === "danger"
              ? "border-red-200 bg-red-50"
              : a.tone === "warn"
                ? "border-amber-200 bg-amber-50"
                : "border-primary/10 bg-white"
          )}
        >
          <AlertTriangle
            className={cn(
              "mt-0.5 h-3.5 w-3.5 shrink-0",
              a.tone === "danger"
                ? "text-red-500"
                : a.tone === "warn"
                  ? "text-amber-500"
                  : "text-primary"
            )}
          />
          <div className="min-w-0">
            <div className="text-[11px] font-bold text-slate-900">{a.title}</div>
            <div className="text-[10px] text-slate-500">{a.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function InsightsContent() {
  return (
    <div className="space-y-2.5">
      {INSIGHTS.map((i) => (
        <div
          key={i.label}
          className="rounded-xl border border-primary/10 bg-white p-2.5 shadow-sm"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="text-[10px] font-medium text-slate-500">{i.label}</div>
            <TrendingDown className="h-3 w-3 text-emerald-500" />
          </div>
          <div className="mt-0.5 text-base font-bold text-slate-900">{i.value}</div>
          <div className="text-[10px] text-primary">{i.trend}</div>
        </div>
      ))}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
          <Zap className="h-3.5 w-3.5" />
          Save ₹3,600/year
        </div>
        <div className="mt-0.5 text-[10px] text-emerald-700">
          Cancel unused Netflix if not watching
        </div>
      </div>
    </div>
  );
}

function ProfileContent() {
  return (
    <div className="space-y-2.5">
      <div className="rounded-xl border border-primary/10 bg-gradient-to-br from-primary to-indigo-500 p-3 text-white shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-sm font-bold">
            R
          </div>
          <div>
            <div className="text-sm font-bold">Raj Patel</div>
            <div className="text-[10px] text-white/80">Premium • 4 members</div>
          </div>
        </div>
      </div>
      {[
        { label: "Family Hub", value: "4 members active" },
        { label: "Subscription", value: "₹199/month" },
        { label: "Language", value: "English + Hindi" },
        { label: "Documents", value: "12 files stored" }
      ].map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between rounded-xl border border-primary/10 bg-white px-2.5 py-2 shadow-sm"
        >
          <span className="text-[11px] font-medium text-slate-700">{row.label}</span>
          <span className="flex items-center gap-0.5 text-[10px] font-semibold text-primary">
            {row.value}
            <ChevronRight className="h-3 w-3" />
          </span>
        </div>
      ))}
      <div className="flex items-center gap-1.5 rounded-xl bg-primary/10 px-2.5 py-2">
        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
        <span className="text-[10px] font-semibold text-primary">
          All caregivers synced
        </span>
      </div>
    </div>
  );
}

const TAB_CONTENT: Record<TabId, () => JSX.Element> = {
  home: HomeContent,
  family: FamilyContent,
  alerts: AlertsContent,
  insights: InsightsContent,
  profile: ProfileContent
};

export function PhoneMock({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const [enableTilt, setEnableTilt] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    setEnableTilt(fine && wide);
  }, []);

  const ActiveContent = TAB_CONTENT[activeTab];

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[24rem] sm:max-w-[26rem] lg:max-w-[28rem]",
        className
      )}
    >
      <div className="absolute -inset-14 -z-10 blur-3xl pointer-events-none">
        <div className="absolute left-6 top-10 h-56 w-56 rounded-full bg-primary/20" />
        <div className="absolute right-6 bottom-10 h-56 w-56 rounded-full bg-primary/10" />
      </div>

      <motion.div
        className="relative"
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <div className="relative aspect-[78/163.4] rounded-[3.05rem] bg-black p-[2px] shadow-lift">
          <div className="relative h-full rounded-[2.92rem] bg-black p-[6px]">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[2.45rem] bg-[#F5F3FF]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(109,93,246,0.12),transparent_55%)]" />

              <div className="pointer-events-none absolute left-1/2 top-3 z-20 -translate-x-1/2">
                <div className="h-7 w-32 rounded-full bg-black/90 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]" />
              </div>

              <div className="relative flex min-h-0 flex-1 flex-col px-3.5 pb-2 pt-10">
                <div className="flex shrink-0 items-center justify-between">
                  <div className="text-sm font-bold text-slate-900">LifeWise</div>
                  <div className="text-[10px] font-medium text-slate-500">
                    Sat, 30 May 2026
                  </div>
                </div>

                {activeTab === "home" ? (
                  <div className="mt-2.5 grid shrink-0 grid-cols-3 gap-1.5">
                    {QUICK_ACTIONS.map((c) => {
                      const Icon = c.icon;
                      return (
                        <div
                          key={c.label}
                          className="flex flex-col items-center rounded-xl border border-primary/15 bg-white py-2 shadow-sm"
                        >
                          <div className="grid h-7 w-7 place-items-center rounded-lg bg-primary/10 text-primary">
                            <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                          </div>
                          <div className="mt-1 text-[9px] font-bold text-slate-700">
                            {c.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="mt-2 shrink-0 rounded-xl border border-primary/10 bg-white px-2.5 py-1.5 shadow-sm">
                    <div className="text-[10px] font-bold text-primary">
                      {TABS.find((t) => t.id === activeTab)?.label}
                    </div>
                  </div>
                )}

                <div className="mt-2 min-h-0 flex-1 overflow-y-auto overscroll-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
                      transition={{ duration: 0.18 }}
                    >
                      <ActiveContent />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <nav
                  className="mt-2 shrink-0 rounded-2xl border border-primary/10 bg-white p-1 shadow-sm"
                  aria-label="App navigation preview"
                >
                  <div className="grid grid-cols-5 gap-0.5">
                    {TABS.map((tab) => {
                      const Icon = tab.icon;
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setActiveTab(tab.id)}
                          className={cn(
                            "flex flex-col items-center rounded-xl py-1.5 transition-colors",
                            isActive
                              ? "bg-primary text-white shadow-sm"
                              : "text-slate-500 hover:bg-primary/5 hover:text-primary"
                          )}
                          aria-label={tab.label}
                          aria-current={isActive ? "page" : undefined}
                        >
                          <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                          <span className="mt-0.5 text-[8px] font-bold leading-none">
                            {tab.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {enableTilt ? (
        <span className="sr-only">Interactive phone preview on desktop</span>
      ) : null}
    </div>
  );
}
