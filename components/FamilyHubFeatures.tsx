"use client";

import { useState, useEffect } from "react";
import {
  Pill, HeartPulse, Receipt, CalendarClock, Wallet, MapPin,
  ShieldCheck, Bell, FileText, Briefcase, Plane, Home, Car,
  Dumbbell, Brain, BookOpen, Key, UtensilsCrossed, Smartphone,
  Mic, Camera, Zap, CreditCard, Globe, Users, Lock, Activity,
  TrendingUp, CheckCircle2, ChevronRight, Sparkles, Timer,
  RefreshCw, BatteryMedium, Navigation, AlertTriangle, PiggyBank,
  QrCode, BarChart3, Star,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type ModuleGroup = "Care" | "Money" | "Daily" | "Home";

interface Mod {
  key: string;
  label: string;
  group: ModuleGroup;
  icon: React.ComponentType<{ className?: string }>;
  // tailwind classes
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  exBg: string;
  exBorder: string;
  exText: string;
  tagline: string;
  example: string;
}

// ─── Module Data ──────────────────────────────────────────────────────────────

const GROUP_PILL: Record<ModuleGroup, string> = {
  Care: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/25",
  Money: "bg-amber-50  text-amber-700  border-amber-200  dark:bg-amber-500/10  dark:text-amber-400  dark:border-amber-500/25",
  Daily: "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/25",
  Home: "bg-rose-50   text-rose-700   border-rose-200   dark:bg-rose-500/10   dark:text-rose-400   dark:border-rose-500/25",
};

function m(
  key: string, label: string, group: ModuleGroup,
  icon: Mod["icon"],
  c: { ic: string; ib: string; ibr: string; bb: string; bbr: string; bt: string; eb: string; ebr: string; et: string },
  tagline: string, example: string,
): Mod {
  return { key, label, group, icon, iconBg: c.ib, iconBorder: c.ibr, iconColor: c.ic, badgeBg: c.bb, badgeBorder: c.bbr, badgeText: c.bt, exBg: c.eb, exBorder: c.ebr, exText: c.et, tagline, example };
}

const MODS: Mod[] = [
  // ── Care ──────────────────────────────────────────────────────────────────
  m("medicines", "Medicines", "Care", Pill, { ic: "text-violet-600 dark:text-violet-400", ib: "bg-violet-50 dark:bg-violet-500/10", ibr: "border-violet-200 dark:border-violet-500/20", bb: "bg-violet-50 dark:bg-violet-500/10", bbr: "border-violet-200 dark:border-violet-500/20", bt: "text-violet-700 dark:text-violet-300", eb: "bg-violet-50/70 dark:bg-violet-500/5", ebr: "border-violet-100 dark:border-violet-500/15", et: "text-violet-700 dark:text-violet-300" }, "Dose schedule + caregiver mark-done", "Papa's Metformin 500mg at 8 AM & 8 PM  caregiver confirms remotely"),
  m("stock", "Med Stock", "Care", Activity, { ic: "text-rose-600 dark:text-rose-400", ib: "bg-rose-50 dark:bg-rose-500/10", ibr: "border-rose-200 dark:border-rose-500/20", bb: "bg-rose-50 dark:bg-rose-500/10", bbr: "border-rose-200 dark:border-rose-500/20", bt: "text-rose-700 dark:text-rose-300", eb: "bg-rose-50/70 dark:bg-rose-500/5", ebr: "border-rose-100 dark:border-rose-500/15", et: "text-rose-700 dark:text-rose-300" }, "Low-stock alerts → pharmacy deep links", "5 tablets left → 'Metformin running low. Refill from Apollo?'"),
  m("appointments", "Appointments", "Care", CalendarClock, { ic: "text-sky-600 dark:text-sky-400", ib: "bg-sky-50 dark:bg-sky-500/10", ibr: "border-sky-200 dark:border-sky-500/20", bb: "bg-sky-50 dark:bg-sky-500/10", bbr: "border-sky-200 dark:border-sky-500/20", bt: "text-sky-700 dark:text-sky-300", eb: "bg-sky-50/70 dark:bg-sky-500/5", ebr: "border-sky-100 dark:border-sky-500/15", et: "text-sky-700 dark:text-sky-300" }, "Doctor visits, follow-ups & reminders", "Mom's cardio checkup Oct 5 → reminder 1 day + 1 hour before"),
  m("health", "Health", "Care", HeartPulse, { ic: "text-emerald-600 dark:text-emerald-400", ib: "bg-emerald-50 dark:bg-emerald-500/10", ibr: "border-emerald-200 dark:border-emerald-500/20", bb: "bg-emerald-50 dark:bg-emerald-500/10", bbr: "border-emerald-200 dark:border-emerald-500/20", bt: "text-emerald-700 dark:text-emerald-300", eb: "bg-emerald-50/70 dark:bg-emerald-500/5", ebr: "border-emerald-100 dark:border-emerald-500/15", et: "text-emerald-700 dark:text-emerald-300" }, "Vitals + Apple Health / Health Connect sync", "Apple Watch syncs heart rate 72 bpm → 'Synced 3 min ago'"),
  m("emergency", "Emergency", "Care", ShieldCheck, { ic: "text-red-600 dark:text-red-400", ib: "bg-red-50 dark:bg-red-500/10", ibr: "border-red-200 dark:border-red-500/20", bb: "bg-red-50 dark:bg-red-500/10", bbr: "border-red-200 dark:border-red-500/20", bt: "text-red-700 dark:text-red-300", eb: "bg-red-50/70 dark:bg-red-500/5", ebr: "border-red-100 dark:border-red-500/15", et: "text-red-700 dark:text-red-300" }, "SOS circle, Medical ID (never paywalled)", "Crash detected → 'Possible crash. Send SOS?' → Ruchit notified"),
  m("diet", "Diet & Food", "Care", UtensilsCrossed, { ic: "text-orange-600 dark:text-orange-400", ib: "bg-orange-50 dark:bg-orange-500/10", ibr: "border-orange-200 dark:border-orange-500/20", bb: "bg-orange-50 dark:bg-orange-500/10", bbr: "border-orange-200 dark:border-orange-500/20", bt: "text-orange-700 dark:text-orange-300", eb: "bg-orange-50/70 dark:bg-orange-500/5", ebr: "border-orange-100 dark:border-orange-500/15", et: "text-orange-700 dark:text-orange-300" }, "Meal logging + offline kcal lookup", "Log 'Poha' → 180 kcal + emoji auto-matched from Indian food DB"),
  m("fitness", "Fitness", "Care", Dumbbell, { ic: "text-lime-600 dark:text-lime-400", ib: "bg-lime-50 dark:bg-lime-500/10", ibr: "border-lime-200 dark:border-lime-500/20", bb: "bg-lime-50 dark:bg-lime-500/10", bbr: "border-lime-200 dark:border-lime-500/20", bt: "text-lime-700 dark:text-lime-300", eb: "bg-lime-50/70 dark:bg-lime-500/5", ebr: "border-lime-100 dark:border-lime-500/15", et: "text-lime-700 dark:text-lime-300" }, "Workouts, streaks & automation nudges", "No workout in 5 days → 'Nudge Aarav?' push sent to family"),
  m("wellness", "Wellness", "Care", Brain, { ic: "text-fuchsia-600 dark:text-fuchsia-400", ib: "bg-fuchsia-50 dark:bg-fuchsia-500/10", ibr: "border-fuchsia-200 dark:border-fuchsia-500/20", bb: "bg-fuchsia-50 dark:bg-fuchsia-500/10", bbr: "border-fuchsia-200 dark:border-fuchsia-500/20", bt: "text-fuchsia-700 dark:text-fuchsia-300", eb: "bg-fuchsia-50/70 dark:bg-fuchsia-500/5", ebr: "border-fuchsia-100 dark:border-fuchsia-500/15", et: "text-fuchsia-700 dark:text-fuchsia-300" }, "Mood tracking + self-care reminders", "Daily mood check-in + 'Remember to breathe' reminder at 10 PM"),
  // ── Money ─────────────────────────────────────────────────────────────────
  m("bills", "Bills", "Money", Receipt, { ic: "text-amber-600 dark:text-amber-400", ib: "bg-amber-50 dark:bg-amber-500/10", ibr: "border-amber-200 dark:border-amber-500/20", bb: "bg-amber-50 dark:bg-amber-500/10", bbr: "border-amber-200 dark:border-amber-500/20", bt: "text-amber-700 dark:text-amber-300", eb: "bg-amber-50/70 dark:bg-amber-500/5", ebr: "border-amber-100 dark:border-amber-500/15", et: "text-amber-700 dark:text-amber-300" }, "Due bills, separate from Family Money", "Electricity ₹2,400 due 15 Oct → Mark Paid → 'Add to Family Money?'"),
  m("subscriptions", "Subscriptions", "Money", CreditCard, { ic: "text-indigo-600 dark:text-indigo-400", ib: "bg-indigo-50 dark:bg-indigo-500/10", ibr: "border-indigo-200 dark:border-indigo-500/20", bb: "bg-indigo-50 dark:bg-indigo-500/10", bbr: "border-indigo-200 dark:border-indigo-500/20", bt: "text-indigo-700 dark:text-indigo-300", eb: "bg-indigo-50/70 dark:bg-indigo-500/5", ebr: "border-indigo-100 dark:border-indigo-500/15", et: "text-indigo-700 dark:text-indigo-300" }, "OTT & renewal tracking per member", "Netflix ₹649/mo renewal on 20th → alert 3 days before"),
  m("expenses", "Family Money", "Money", Wallet, { ic: "text-teal-600 dark:text-teal-400", ib: "bg-teal-50 dark:bg-teal-500/10", ibr: "border-teal-200 dark:border-teal-500/20", bb: "bg-teal-50 dark:bg-teal-500/10", bbr: "border-teal-200 dark:border-teal-500/20", bt: "text-teal-700 dark:text-teal-300", eb: "bg-teal-50/70 dark:bg-teal-500/5", ebr: "border-teal-100 dark:border-teal-500/15", et: "text-teal-700 dark:text-teal-300" }, "Shared khata, splits, settle. Auto-capture.", "Dad ₹10,000 groceries + Ruchit ₹2,000 dinner = ₹12,000 family"),
  m("insurance", "Insurance & Docs", "Money", FileText, { ic: "text-blue-600 dark:text-blue-400", ib: "bg-blue-50 dark:bg-blue-500/10", ibr: "border-blue-200 dark:border-blue-500/20", bb: "bg-blue-50 dark:bg-blue-500/10", bbr: "border-blue-200 dark:border-blue-500/20", bt: "text-blue-700 dark:text-blue-300", eb: "bg-blue-50/70 dark:bg-blue-500/5", ebr: "border-blue-100 dark:border-blue-500/15", et: "text-blue-700 dark:text-blue-300" }, "Vault + Quick Card + family coverage glance", "Mom's health insurance expires Nov 15 → 30 / 7 / 1-day alerts"),
  m("digitalKeys", "Digital Keys", "Money", Key, { ic: "text-yellow-600 dark:text-yellow-400", ib: "bg-yellow-50 dark:bg-yellow-500/10", ibr: "border-yellow-200 dark:border-yellow-500/20", bb: "bg-yellow-50 dark:bg-yellow-500/10", bbr: "border-yellow-200 dark:border-yellow-500/20", bt: "text-yellow-700 dark:text-yellow-300", eb: "bg-yellow-50/70 dark:bg-yellow-500/5", ebr: "border-yellow-100 dark:border-yellow-500/15", et: "text-yellow-700 dark:text-yellow-300" }, "Wifi, gate codes, household secrets", "Home WiFi, gate OTP, society code  encrypted & family-shared"),
  // ── Daily ─────────────────────────────────────────────────────────────────
  m("routine", "Daily Routine", "Daily", RefreshCw, { ic: "text-cyan-600 dark:text-cyan-400", ib: "bg-cyan-50 dark:bg-cyan-500/10", ibr: "border-cyan-200 dark:border-cyan-500/20", bb: "bg-cyan-50 dark:bg-cyan-500/10", bbr: "border-cyan-200 dark:border-cyan-500/20", bt: "text-cyan-700 dark:text-cyan-300", eb: "bg-cyan-50/70 dark:bg-cyan-500/5", ebr: "border-cyan-100 dark:border-cyan-500/15", et: "text-cyan-700 dark:text-cyan-300" }, "Timed routines with completion tracking", "Mom: 7AM Walk → 8AM Medicine → 9PM Sleep. Caregiver sees ✓"),
  m("tasks", "Tasks", "Daily", CheckCircle2, { ic: "text-green-600 dark:text-green-400", ib: "bg-green-50 dark:bg-green-500/10", ibr: "border-green-200 dark:border-green-500/20", bb: "bg-green-50 dark:bg-green-500/10", bbr: "border-green-200 dark:border-green-500/20", bt: "text-green-700 dark:text-green-300", eb: "bg-green-50/70 dark:bg-green-500/5", ebr: "border-green-100 dark:border-green-500/15", et: "text-green-700 dark:text-green-300" }, "Custom tasks + reminders across modules", "Get Aarav's school report → reminder on 10th at 9 AM"),
  m("checkin", "Check-in", "Daily", Bell, { ic: "text-pink-600 dark:text-pink-400", ib: "bg-pink-50 dark:bg-pink-500/10", ibr: "border-pink-200 dark:border-pink-500/20", bb: "bg-pink-50 dark:bg-pink-500/10", bbr: "border-pink-200 dark:border-pink-500/20", bt: "text-pink-700 dark:text-pink-300", eb: "bg-pink-50/70 dark:bg-pink-500/5", ebr: "border-pink-100 dark:border-pink-500/15", et: "text-pink-700 dark:text-pink-300" }, "I'm OK tap + scheduled call reminders", "Mom taps 'I'm OK' → Ruchit notified. No call needed."),
  m("work", "Work & Shifts", "Daily", Briefcase, { ic: "text-slate-700 dark:text-slate-300", ib: "bg-slate-100 dark:bg-slate-700/40", ibr: "border-slate-300 dark:border-slate-600/40", bb: "bg-slate-100 dark:bg-slate-700/40", bbr: "border-slate-300 dark:border-slate-600/40", bt: "text-slate-700 dark:text-slate-300", eb: "bg-slate-50/70 dark:bg-slate-700/20", ebr: "border-slate-200 dark:border-slate-600/20", et: "text-slate-700 dark:text-slate-300" }, "Clock in/out, away prompt, week totals, CSV", "Clock in 9:02 AM → away 6:15 PM → 'Shift over' → 9h 13min"),
  m("travel", "Travel & Visits", "Daily", Plane, { ic: "text-violet-600 dark:text-violet-400", ib: "bg-violet-50 dark:bg-violet-500/10", ibr: "border-violet-200 dark:border-violet-500/20", bb: "bg-violet-50 dark:bg-violet-500/10", bbr: "border-violet-200 dark:border-violet-500/20", bt: "text-violet-700 dark:text-violet-300", eb: "bg-violet-50/70 dark:bg-violet-500/5", ebr: "border-violet-100 dark:border-violet-500/15", et: "text-violet-700 dark:text-violet-300" }, "Visits + Family Trips readiness checklist", "Dad's Dubai flight 10 Oct → countdown + visa: eVisa (ready)"),
  m("study", "Study", "Daily", BookOpen, { ic: "text-blue-600 dark:text-blue-400", ib: "bg-blue-50 dark:bg-blue-500/10", ibr: "border-blue-200 dark:border-blue-500/20", bb: "bg-blue-50 dark:bg-blue-500/10", bbr: "border-blue-200 dark:border-blue-500/20", bt: "text-blue-700 dark:text-blue-300", eb: "bg-blue-50/70 dark:bg-blue-500/5", ebr: "border-blue-100 dark:border-blue-500/15", et: "text-blue-700 dark:text-blue-300" }, "Homework, exams & education deadlines", "Aarav's Math exam 15 Oct → 3-day advance reminders"),
  // ── Home ──────────────────────────────────────────────────────────────────
  m("vehicles", "Vehicles", "Home", Car, { ic: "text-orange-600 dark:text-orange-400", ib: "bg-orange-50 dark:bg-orange-500/10", ibr: "border-orange-200 dark:border-orange-500/20", bb: "bg-orange-50 dark:bg-orange-500/10", bbr: "border-orange-200 dark:border-orange-500/20", bt: "text-orange-700 dark:text-orange-300", eb: "bg-orange-50/70 dark:bg-orange-500/5", ebr: "border-orange-100 dark:border-orange-500/15", et: "text-orange-700 dark:text-orange-300" }, "RC, insurance, PUC, EMI & service records", "Scan RC → MH12AB1234 · Swift · Insurance exp 20 Dec auto-filled"),
  m("homeMaintenance", "Home Maint.", "Home", Home, { ic: "text-emerald-600 dark:text-emerald-400", ib: "bg-emerald-50 dark:bg-emerald-500/10", ibr: "border-emerald-200 dark:border-emerald-500/20", bb: "bg-emerald-50 dark:bg-emerald-500/10", bbr: "border-emerald-200 dark:border-emerald-500/20", bt: "text-emerald-700 dark:text-emerald-300", eb: "bg-emerald-50/70 dark:bg-emerald-500/5", ebr: "border-emerald-100 dark:border-emerald-500/15", et: "text-emerald-700 dark:text-emerald-300" }, "AMC, appliance reminders, service schedule", "AC service due 1 Nov → reminder 3 days before + Detail Assist tips"),
  m("location", "Family Location", "Home", MapPin, { ic: "text-rose-600 dark:text-rose-400", ib: "bg-rose-50 dark:bg-rose-500/10", ibr: "border-rose-200 dark:border-rose-500/20", bb: "bg-rose-50 dark:bg-rose-500/10", bbr: "border-rose-200 dark:border-rose-500/20", bt: "text-rose-700 dark:text-rose-300", eb: "bg-rose-50/70 dark:bg-rose-500/5", ebr: "border-rose-100 dark:border-rose-500/15", et: "text-rose-700 dark:text-rose-300" }, "Consent map, battery monitor & vehicle pin", "Aarav at 45 km/h → car pin glides on map, battery 32% chip shown"),
];

const SMART = [
  { id: "wiseai", icon: Sparkles, label: "WiseAI Assistant", grad: "from-violet-500 to-indigo-600", tc: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-500/10", br: "border-violet-200 dark:border-violet-500/20", tagline: "In-app AI scoped only to LifeWise data", points: ["Spending insights on demand", "30+ deep-link actions", "Bills, health & family context", "Never leaves the app"], q: "Who spent the most this month?", a: "Dad  ₹15,200 (groceries + transport)" },
  { id: "voice", icon: Mic, label: "Voice Entry", grad: "from-rose-500 to-pink-600", tc: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-500/10", br: "border-rose-200 dark:border-rose-500/20", tagline: "Speak expenses in Hindi/English", points: ["Mixed Hindi-English NLP", "Auto-prefills add form", "Expense, bill, task, reminder", "No typing needed on the go"], q: "₹500 Swiggy food for family yesterday", a: "Amount ₹500 · Food · For Family · Yesterday" },
  { id: "capture", icon: Camera, label: "Smart Capture (OCR)", grad: "from-amber-500 to-orange-500", tc: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-500/10", br: "border-amber-200 dark:border-amber-500/20", tagline: "One camera → any module, prefilled", points: ["Bill, medicine, RC, ticket", "Server OCR + confidence score", "Auto-routes to correct add form", "Partial data + review banner"], q: "Scan electricity bill", a: "Bill ₹2,400 · Due 15 Oct · fields auto-filled" },
  { id: "autofetch", icon: Zap, label: "Auto-Fetch Inbox", grad: "from-teal-500 to-cyan-500", tc: "text-teal-600 dark:text-teal-400", bg: "bg-teal-50 dark:bg-teal-500/10", br: "border-teal-200 dark:border-teal-500/20", tagline: "Gmail, clipboard & share-sheet", points: ["Train booking auto-detected", "3 confirms → HIGH_TRUST mode", "7-day auto-expire unactioned", "Zero SMS read (Play policy clean)"], q: "Train confirmation email arrives", a: "Confirm chip: 'Add trip?' → countdown created" },
  { id: "automation", icon: RefreshCw, label: "Automation Engine", grad: "from-green-500 to-emerald-600", tc: "text-green-600 dark:text-green-400", bg: "bg-green-50 dark:bg-green-500/10", br: "border-green-200 dark:border-green-500/20", tagline: "Proactive nudges without asking", points: ["Fitness stall alerts", "Spend jump detection", "Weekly family digest", "Health gap nudges"], q: "No workout logged in 5 days", a: "'Aarav hasn't worked out this week. Nudge him?'" },
  { id: "countdown", icon: Timer, label: "Countdown & Live Transit", grad: "from-blue-500 to-sky-600", tc: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-500/10", br: "border-blue-200 dark:border-blue-500/20", tagline: "Live flight/train + lock-screen card", points: ["T-3h / T-1h / T-30min push tiers", "Real-time delayed / landed status", "Dynamic Island-style lock screen", "Auto-clears 30 min after event"], q: "Dad's IndiGo 6E 204", a: "Live: Running on time · Gate B3 · Departs in 47 min" },
];

const EXTRA = [
  { icon: Lock, label: "App Lock", desc: "Face ID / Fingerprint / device PIN. LifeWise stores zero PIN  OS owns it.", ic: "text-indigo-600 dark:text-indigo-400", ib: "bg-indigo-50 dark:bg-indigo-500/10", ibr: "border-indigo-200 dark:border-indigo-500/20" },
  { icon: Globe, label: "Multi-Currency", desc: "All amounts stored in INR. Display in any currency via Frankfurter ECB rates.", ic: "text-teal-600 dark:text-teal-400", ib: "bg-teal-50 dark:bg-teal-500/10", ibr: "border-teal-200 dark:border-teal-500/20" },
  { icon: Users, label: "Caregiver Scopes", desc: "Per-module permissions per member. Server enforces limits. Pending invites = 1 slot.", ic: "text-violet-600 dark:text-violet-400", ib: "bg-violet-50 dark:bg-violet-500/10", ibr: "border-violet-200 dark:border-violet-500/20" },
  { icon: BatteryMedium, label: "Battery Monitor", desc: "≤25% warning · ≤15% low · ≤10% critical push. Never paywalled for family.", ic: "text-green-600 dark:text-green-400", ib: "bg-green-50 dark:bg-green-500/10", ibr: "border-green-200 dark:border-green-500/20" },
  { icon: Navigation, label: "Vehicle Pin Glide", desc: "Speed-matched walk/bike/car pin glides at real GPS speed, rotates with heading.", ic: "text-blue-600 dark:text-blue-400", ib: "bg-blue-50 dark:bg-blue-500/10", ibr: "border-blue-200 dark:border-blue-500/20" },
  { icon: AlertTriangle, label: "Crash Auto-SOS", desc: "Sustained high speed → hard stop → banner + optional auto-notify emergency contacts.", ic: "text-red-600 dark:text-red-400", ib: "bg-red-50 dark:bg-red-500/10", ibr: "border-red-200 dark:border-red-500/20" },
  { icon: PiggyBank, label: "Safety Net Funds", desc: "Shared savings pools: medical, education, wedding. Approve withdrawals in-app.", ic: "text-amber-600 dark:text-amber-400", ib: "bg-amber-50 dark:bg-amber-500/10", ibr: "border-amber-200 dark:border-amber-500/20" },
  { icon: QrCode, label: "UPI Pay", desc: "Pay bills via GPay / PhonePe / Paytm / UPI chooser  one tap from the bill card.", ic: "text-orange-600 dark:text-orange-400", ib: "bg-orange-50 dark:bg-orange-500/10", ibr: "border-orange-200 dark:border-orange-500/20" },
  { icon: BarChart3, label: "Life Score", desc: "0–100 score: budget 50% + bills paid 30% + money leaks 20%. Same on Home & Reports.", ic: "text-slate-700 dark:text-slate-300", ib: "bg-slate-100 dark:bg-slate-700/40", ibr: "border-slate-300 dark:border-slate-600/40" },
];

const TABS = [
  { id: "all", label: "All", count: MODS.length },
  { id: "Care", label: "Care", count: MODS.filter(m => m.group === "Care").length },
  { id: "Money", label: "Money", count: MODS.filter(m => m.group === "Money").length },
  { id: "Daily", label: "Daily", count: MODS.filter(m => m.group === "Daily").length },
  { id: "Home", label: "Home", count: MODS.filter(m => m.group === "Home").length },
];

// ─── ModuleCard ───────────────────────────────────────────────────────────────

function ModuleCard({ mod }: { mod: Mod }) {
  const Icon = mod.icon;
  return (
    <article className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-slate-300 dark:border-slate-700/60 dark:bg-slate-800/90 dark:hover:border-slate-600 h-full">
      {/* Top: icon + group pill */}
      <div className="flex items-center justify-between mb-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 ${mod.iconBg} ${mod.iconBorder}`}>
          <Icon className={`h-5 w-5 ${mod.iconColor}`} />
        </div>
        <span className={`rounded-full border px-2 py-0.5 text-[9px] font-black uppercase tracking-widest ${GROUP_PILL[mod.group]}`}>
          {mod.group}
        </span>
      </div>

      {/* Label + tagline */}
      <h4 className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight">{mod.label}</h4>
      <p className="mt-1 text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-snug flex-1">{mod.tagline}</p>

      {/* Example  always in DOM, slides in on hover */}
      <div className={`mt-3 overflow-hidden transition-all duration-300 ${
        // We use max-h trick; always rendered so no layout jump
        "max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100"
        }`}>
        <p className={`text-[10px] font-semibold leading-relaxed rounded-lg px-2.5 py-2 border ${mod.exBg} ${mod.exBorder} ${mod.exText}`}>
          <span className="opacity-55">e.g. </span>{mod.example}
        </p>
      </div>
    </article>
  );
}

// ─── SmartCard ────────────────────────────────────────────────────────────────

function SmartCard({ feat, i }: { feat: typeof SMART[0]; i: number }) {
  const Icon = feat.icon;
  const [open, setOpen] = useState(false);
  return (
    <div
      className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-slate-300 dark:border-slate-700/60 dark:bg-slate-800/90 dark:hover:border-slate-600 cursor-pointer"
      onClick={() => setOpen(p => !p)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === "Enter" && setOpen(p => !p)}
    >
      {/* Gradient top accent */}
      <div className={`h-[3px] w-full bg-gradient-to-r ${feat.grad} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="p-5 flex items-start gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${feat.bg} ${feat.br}`}>
          <Icon className={`h-5 w-5 ${feat.tc}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1">
            <h4 className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight">{feat.label}</h4>
            <ChevronRight className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 ${open ? "rotate-90" : ""}`} />
          </div>
          <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{feat.tagline}</p>
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-350 px-5 ${open ? "max-h-56 pb-4 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="grid grid-cols-2 gap-x-2 gap-y-1 mb-3">
          {feat.points.map(p => (
            <li key={p} className={`flex items-start gap-1.5 text-[10px] font-semibold leading-snug ${feat.tc}`}>
              <CheckCircle2 className="h-3 w-3 shrink-0 mt-0.5" />
              <span className="text-slate-600 dark:text-slate-300">{p}</span>
            </li>
          ))}
        </ul>
        <div className={`rounded-xl border p-2.5 ${feat.bg} ${feat.br}`}>
          <div className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1.5">Live Example</div>
          <p className="text-[10px] font-semibold text-slate-700 dark:text-slate-200">
            <span className="opacity-50">You: </span>"{feat.q}"
          </p>
          <p className={`text-[10px] font-bold mt-1 ${feat.tc}`}>
            <span className="opacity-50">LifeWise: </span>{feat.a}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Live Phone Mockup ────────────────────────────────────────────────────────

function PhoneMockup() {
  const [tick, setTick] = useState(0);
  const members = [
    { name: "Papa", age: "67y", i: "P", c: "bg-blue-500/15 text-blue-600 border-blue-300 dark:border-blue-500/30 dark:text-blue-400", dot: "bg-blue-500", st: "Medicine due · 8 PM", alert: true },
    { name: "Mummy", age: "62y", i: "M", c: "bg-rose-500/15 text-rose-600 border-rose-300 dark:border-rose-500/30 dark:text-rose-400", dot: "bg-rose-500", st: "BP check · done ✓", alert: false },
    { name: "Aarav", age: "24y", i: "A", c: "bg-amber-500/15 text-amber-600 border-amber-300 dark:border-amber-500/30 dark:text-amber-400", dot: "bg-amber-500", st: "At work · 45 km/h 🚗", alert: false },
    { name: "Ruchit", age: "28y", i: "R", c: "bg-violet-500/15 text-violet-600 border-violet-300 dark:border-violet-500/30 dark:text-violet-400", dot: "bg-violet-500", st: "Bill due · 15 Oct", alert: true },
  ];
  useEffect(() => {
    const id = setInterval(() => setTick(p => (p + 1) % members.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative mx-auto w-[260px] sm:w-[290px]">
      {/* Shell */}
      <div className="relative rounded-[2.2rem] border-2 border-slate-200 bg-white shadow-2xl overflow-hidden dark:border-slate-700/50 dark:bg-slate-900/95">
        {/* Status row */}
        <div className="flex items-center justify-between px-5 pt-4 pb-1">
          <span className="text-[9px] font-bold text-slate-400">9:41</span>
          <div className="flex gap-1 items-center">
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div className="h-1 w-1 rounded-full bg-slate-300" />
          </div>
        </div>
        {/* Hub header */}
        <div className="flex items-center justify-between px-4 pb-2.5 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="text-[9px] font-black uppercase tracking-widest text-indigo-500">LifeWise</div>
            <div className="text-[13px] font-black text-slate-900 dark:text-white">Family Hub</div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-5 w-5 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center">
              <MapPin className="h-2.5 w-2.5 text-emerald-500" />
            </div>
            <Bell className="h-3.5 w-3.5 text-slate-400" />
          </div>
        </div>
        {/* Family Money card */}
        <div className="mx-3 mt-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 p-2.5 text-white">
          <div className="text-[8px] font-black uppercase tracking-widest opacity-70 mb-0.5">Family Money</div>
          <div className="flex items-center justify-between">
            <div className="text-[16px] font-black">₹32,400</div>
            <div className="text-[8px] font-bold bg-white/20 rounded-full px-1.5 py-0.5">Oct 2026</div>
          </div>
          <div className="text-[8px] font-medium opacity-70 mt-0.5">Dad ₹18k · Ruchit ₹9k · Auto-tracked</div>
        </div>
        {/* Members */}
        <div className="p-2.5 space-y-1.5">
          {members.map((mb, idx) => (
            <div key={mb.name} className={`flex items-center gap-2 rounded-xl border p-2 transition-all duration-500 ${idx === tick ? "border-indigo-200 bg-indigo-50/80 dark:border-indigo-500/30 dark:bg-indigo-500/10" : "border-slate-100 bg-slate-50/80 dark:border-slate-700/40 dark:bg-slate-800/40"}`}>
              <div className={`h-7 w-7 shrink-0 rounded-full border flex items-center justify-center font-bold text-[10px] ${mb.c}`}>{mb.i}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1"><span className="text-[11px] font-bold text-slate-900 dark:text-white">{mb.name}</span><span className="text-[8px] text-slate-400">{mb.age}</span></div>
                <div className={`text-[9px] font-medium truncate ${mb.alert ? "text-amber-600 dark:text-amber-400" : "text-slate-500 dark:text-slate-400"}`}>{mb.st}</div>
              </div>
              <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${mb.alert ? "bg-amber-500 animate-pulse" : mb.dot}`} />
            </div>
          ))}
        </div>
        {/* Bottom nav */}
        <div className="grid grid-cols-5 border-t border-slate-100 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90">
          {[{ icon: Home, l: "Home" }, { icon: Users, l: "Family", a: true }, { icon: Bell, l: "Remind" }, { icon: TrendingUp, l: "Reports" }, { icon: Star, l: "More" }].map(t => (
            <div key={t.l} className={`flex flex-col items-center py-2 gap-0.5 ${t.a ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400"}`}>
              <t.icon className="h-3.5 w-3.5" />
              <span className="text-[7px] font-bold">{t.l}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Floating chips */}
      <div className="absolute -right-10 top-10 flex flex-col gap-2">
        <div className="flex items-center gap-1 rounded-full border border-emerald-200 bg-white px-2 py-1 shadow-md dark:border-emerald-500/25 dark:bg-slate-900">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[8px] font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">Live Sync</span>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-indigo-200 bg-white px-2 py-1 shadow-md dark:border-indigo-500/25 dark:bg-slate-900">
          <Sparkles className="h-2.5 w-2.5 text-indigo-500" />
          <span className="text-[8px] font-bold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">WiseAI On</span>
        </div>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export function FamilyHubFeatures() {
  const [tab, setTab] = useState<string>("all");
  const visible = tab === "all" ? MODS : MODS.filter(m => m.group === tab);

  return (
    <section
      id="family-hub-features"
      className="relative scroll-mt-24 py-14 sm:py-20 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-60 top-0 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute -right-60 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.02]"
          style={{ backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ── Section Identity ───────────────────────────────────── */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            {/* Eyebrow  makes it unmistakably "Family Hub" */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 dark:border-indigo-500/30 dark:bg-indigo-500/10">
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-700 dark:text-indigo-400">Family Hub</span>
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-800">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">22 Shipped Modules</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Family Hub {" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
                every module,
              </span>
              <br />
              one card per person.
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400 max-w-lg">
              Each Family Hub member card shows only the modules you enable. Pick what Papa needs, what Mummy needs  everything else stays hidden. Caregivers see the same card in real time.
            </p>

            {/* Stat pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { v: "22", l: "Modules", c: "bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-500/10 dark:border-indigo-500/25 dark:text-indigo-400" },
                { v: "4", l: "Groups: Care · Money · Daily · Home", c: "bg-violet-50 border-violet-200 text-violet-700 dark:bg-violet-500/10 dark:border-violet-500/25 dark:text-violet-400" },
                { v: "7", l: "Languages", c: "bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/25 dark:text-emerald-400" },
                { v: "∞", l: "Family Members", c: "bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-500/10 dark:border-amber-500/25 dark:text-amber-400" },
              ].map(s => (
                <div key={s.l} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 ${s.c}`}>
                  <span className="text-[13px] font-black">{s.v}</span>
                  <span className="text-[10px] font-bold">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phone  right column */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>

        {/* ── Filter Tabs ───────────────────────────────────────── */}
        <div className="mb-6 flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
          {TABS.map(t => {
            const active = tab === t.id;
            return (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-[11px] font-bold transition-all duration-200 ${active
                    ? "border-indigo-400 bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                    : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300"
                  }`}>
                {t.label}
                <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-black ${active ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400"}`}>
                  {t.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Module Grid ───────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-14">
          {visible.map((mod, i) => (
            <div key={mod.key}
              className="transition-all duration-300"
              style={{ transitionDelay: `${Math.min(i * 25, 240)}ms`, animationFillMode: "both" }}>
              <ModuleCard mod={mod} />
            </div>
          ))}
        </div>

        {/* ── AI & Smart Features ──────────────────────────────── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 dark:border-violet-500/30 dark:bg-violet-500/10">
              <Sparkles className="h-3 w-3 text-violet-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-violet-700 dark:text-violet-400">Family Hub AI & Smart Features</span>
            </div>
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Tap a card to expand</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SMART.map((f, i) => <SmartCard key={f.id} feat={f} i={i} />)}
          </div>
        </div>

        {/* ── Security & Extra ─────────────────────────────────── */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 dark:border-slate-700 dark:bg-slate-800">
              <ShieldCheck className="h-3 w-3 text-slate-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">Family Hub Security & Extra</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {EXTRA.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.label}
                  className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700/60 dark:bg-slate-800/90"
                  style={{ transitionDelay: `${i * 20}ms` }}>
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 ${f.ib} ${f.ibr}`}>
                    <Icon className={`h-4 w-4 ${f.ic}`} />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-slate-900 dark:text-white">{f.label}</h4>
                    <p className="mt-0.5 text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Real-Time Sync callout ───────────────────────────── */}
        <div className="relative overflow-hidden rounded-2xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50 via-violet-50/40 to-white p-6 sm:p-10 dark:border-indigo-500/20 dark:from-indigo-500/8 dark:via-violet-500/4 dark:to-slate-800/40">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 dark:border-emerald-500/30 dark:bg-emerald-500/10 mb-3">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400">Family Hub Real-Time Sync</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-3">
                Save once. Every caregiver<br />sees it instantly.
              </h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Family socket rooms push every change  ledger, health, location, bills  to all authorized family clients. No refresh. No delay.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {[
                { n: "01", t: "Ruchit saves ₹2,000 expense", c: "text-violet-700 bg-violet-50 border-violet-100 dark:bg-violet-500/10 dark:border-violet-500/15 dark:text-violet-300" },
                { n: "02", t: "POST → DB commit → socket emit", c: "text-slate-600 bg-slate-50 border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300" },
                { n: "03", t: "Family socket room receives", c: "text-indigo-700 bg-indigo-50 border-indigo-100 dark:bg-indigo-500/10 dark:border-indigo-500/15 dark:text-indigo-300" },
                { n: "04", t: "All caregivers' UI refreshes ✓", c: "text-emerald-700 bg-emerald-50 border-emerald-100 dark:bg-emerald-500/10 dark:border-emerald-500/15 dark:text-emerald-300" },
              ].map(item => (
                <div key={item.n} className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 text-[11px] font-bold ${item.c}`}>
                  <span className="shrink-0 font-black text-[9px] opacity-40">{item.n}</span>
                  {item.t}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
