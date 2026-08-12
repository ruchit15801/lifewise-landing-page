"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Bell,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  CreditCard,
  Edit2,
  FileText,
  Heart,
  HelpCircle,
  Home,
  LayoutGrid,
  LineChart,
  LogOut,
  MessageSquare,
  Mic,
  PieChart,
  Plus,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Sun,
  Trash2,
  User,
  Users,
  Zap,
  Activity
} from "lucide-react";
import { cn } from "@/components/cn";

type TabId = "home" | "family" | "reminders" | "reports" | "profile";

const TABS: { id: TabId; label: string; icon: any }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "family", label: "Family", icon: Users },
  { id: "reminders", label: "Reminders", icon: Bell },
  { id: "reports", label: "Reports", icon: PieChart },
  { id: "profile", label: "Profile", icon: User }
];

const TAB_WIDGETS: Record<TabId, any[]> = {
  home: [
    { id: "h1", posClasses: "right-[100%] mr-3 top-20", delay: 0.1, yAnim: [0, -6, 0], title: "WiseAI Status", subtitle: "Monitoring Bills", icon: Sparkles, colorClass: "bg-amber-50 text-amber-500 border-amber-100", arrow: "left" },
    { id: "h2", posClasses: "right-[100%] mr-3 bottom-36", delay: 0.3, yAnim: [0, 6, 0], title: "Health Sync", subtitle: "Dad's BP Normal", icon: Heart, colorClass: "bg-emerald-50 text-emerald-500 border-emerald-100", arrow: "left" },
    { id: "h3", posClasses: "left-[100%] ml-3 top-36", delay: 0.2, yAnim: [0, -8, 0], title: "Score Updated", subtitle: "LifeScore: 52/100", icon: LineChart, colorClass: "bg-indigo-50 text-indigo-500 border-indigo-100", arrow: "right" },
    { id: "h4", posClasses: "left-[100%] ml-3 top-64", delay: 0.15, yAnim: [0, -5, 0], title: "Active Tab", subtitle: "Home Modules", icon: Activity, colorClass: "bg-white text-indigo-600 border-indigo-100", wrapperClass: "border-indigo-200/80 bg-indigo-50/95 shadow-[0_8px_30px_rgb(79,70,229,0.25)]", arrow: "right", isDynamic: true },
    { id: "h5", posClasses: "left-[100%] ml-3 bottom-48", delay: 0.4, yAnim: [0, 8, 0], title: "Security", subtitle: "Fully Protected", icon: ShieldCheck, colorClass: "bg-blue-50 text-blue-500 border-blue-100", arrow: "right" },
  ],
  family: [
    { id: "f1", posClasses: "right-[100%] mr-3 top-20", delay: 0.1, yAnim: [0, -6, 0], title: "Member Sync", subtitle: "All Phones Linked", icon: Users, colorClass: "bg-emerald-50 text-emerald-500 border-emerald-100", arrow: "left" },
    { id: "f2", posClasses: "right-[100%] mr-3 bottom-36", delay: 0.3, yAnim: [0, 6, 0], title: "Papa's Meds", subtitle: "Taken at 9:00 AM", icon: CheckCircle2, colorClass: "bg-blue-50 text-blue-500 border-blue-100", arrow: "left" },
    { id: "f3", posClasses: "left-[100%] ml-3 top-36", delay: 0.2, yAnim: [0, -8, 0], title: "Family Data", subtitle: "E2E Encrypted", icon: Shield, colorClass: "bg-indigo-50 text-indigo-500 border-indigo-100", arrow: "right" },
    { id: "f4", posClasses: "left-[100%] ml-3 top-64", delay: 0.15, yAnim: [0, -5, 0], title: "Active Tab", subtitle: "Family Profiles", icon: Heart, colorClass: "bg-white text-indigo-600 border-indigo-100", wrapperClass: "border-indigo-200/80 bg-indigo-50/95 shadow-[0_8px_30px_rgb(79,70,229,0.25)]", arrow: "right", isDynamic: true },
    { id: "f5", posClasses: "left-[100%] ml-3 bottom-48", delay: 0.4, yAnim: [0, 8, 0], title: "Location", subtitle: "Mummy at Home", icon: Home, colorClass: "bg-amber-50 text-amber-500 border-amber-100", arrow: "right" },
  ],
  reminders: [
    { id: "r1", posClasses: "right-[100%] mr-3 top-20", delay: 0.1, yAnim: [0, -6, 0], title: "Voice Alert", subtitle: "Hindi/English Audio", icon: Mic, colorClass: "bg-indigo-50 text-indigo-500 border-indigo-100", arrow: "left" },
    { id: "r2", posClasses: "right-[100%] mr-3 bottom-36", delay: 0.3, yAnim: [0, 6, 0], title: "Auto-repeat", subtitle: "Daily schedule set", icon: Clock, colorClass: "bg-emerald-50 text-emerald-500 border-emerald-100", arrow: "left" },
    { id: "r3", posClasses: "left-[100%] ml-3 top-36", delay: 0.2, yAnim: [0, -8, 0], title: "Missed Dose", subtitle: "Escalation active", icon: Bell, colorClass: "bg-rose-50 text-rose-500 border-rose-100", arrow: "right" },
    { id: "r4", posClasses: "left-[100%] ml-3 top-64", delay: 0.15, yAnim: [0, -5, 0], title: "Active Tab", subtitle: "Smart Reminders", icon: Bell, colorClass: "bg-white text-indigo-600 border-indigo-100", wrapperClass: "border-indigo-200/80 bg-indigo-50/95 shadow-[0_8px_30px_rgb(79,70,229,0.25)]", arrow: "right", isDynamic: true },
    { id: "r5", posClasses: "left-[100%] ml-3 bottom-48", delay: 0.4, yAnim: [0, 8, 0], title: "WhatsApp Sync", subtitle: "Alerts enabled", icon: MessageSquare, colorClass: "bg-emerald-50 text-emerald-500 border-emerald-100", arrow: "right" },
  ],
  reports: [
    { id: "p1", posClasses: "right-[100%] mr-3 top-20", delay: 0.1, yAnim: [0, -6, 0], title: "Health Trend", subtitle: "BP improved 12%", icon: LineChart, colorClass: "bg-emerald-50 text-emerald-500 border-emerald-100", arrow: "left" },
    { id: "p2", posClasses: "right-[100%] mr-3 bottom-36", delay: 0.3, yAnim: [0, 6, 0], title: "Doctor PDF", subtitle: "Ready to share", icon: FileText, colorClass: "bg-blue-50 text-blue-500 border-blue-100", arrow: "left" },
    { id: "p3", posClasses: "left-[100%] ml-3 top-36", delay: 0.2, yAnim: [0, -8, 0], title: "Weekly Scan", subtitle: "Generated today", icon: Sparkles, colorClass: "bg-amber-50 text-amber-500 border-amber-100", arrow: "right" },
    { id: "p4", posClasses: "left-[100%] ml-3 top-64", delay: 0.15, yAnim: [0, -5, 0], title: "Active Tab", subtitle: "Health Reports", icon: PieChart, colorClass: "bg-white text-indigo-600 border-indigo-100", wrapperClass: "border-indigo-200/80 bg-indigo-50/95 shadow-[0_8px_30px_rgb(79,70,229,0.25)]", arrow: "right", isDynamic: true },
    { id: "p5", posClasses: "left-[100%] ml-3 bottom-48", delay: 0.4, yAnim: [0, 8, 0], title: "Data Privacy", subtitle: "Local processing", icon: ShieldCheck, colorClass: "bg-indigo-50 text-indigo-500 border-indigo-100", arrow: "right" },
  ],
  profile: [
    { id: "pr1", posClasses: "right-[100%] mr-3 top-20", delay: 0.1, yAnim: [0, -6, 0], title: "Subscription", subtitle: "Premium Active", icon: CreditCard, colorClass: "bg-amber-50 text-amber-500 border-amber-100", arrow: "left" },
    { id: "pr2", posClasses: "right-[100%] mr-3 bottom-36", delay: 0.3, yAnim: [0, 6, 0], title: "App Settings", subtitle: "Hindi Language", icon: Settings, colorClass: "bg-slate-100 text-slate-600 border-slate-200", arrow: "left" },
    { id: "pr3", posClasses: "left-[100%] ml-3 top-36", delay: 0.2, yAnim: [0, -8, 0], title: "Support", subtitle: "24/7 Priority", icon: HelpCircle, colorClass: "bg-blue-50 text-blue-500 border-blue-100", arrow: "right" },
    { id: "pr4", posClasses: "left-[100%] ml-3 top-64", delay: 0.15, yAnim: [0, -5, 0], title: "Active Tab", subtitle: "User Profile", icon: User, colorClass: "bg-white text-indigo-600 border-indigo-100", wrapperClass: "border-indigo-200/80 bg-indigo-50/95 shadow-[0_8px_30px_rgb(79,70,229,0.25)]", arrow: "right", isDynamic: true },
    { id: "pr5", posClasses: "left-[100%] ml-3 bottom-48", delay: 0.4, yAnim: [0, 8, 0], title: "Device", subtitle: "Papa's Phone", icon: CheckCircle2, colorClass: "bg-emerald-50 text-emerald-500 border-emerald-100", arrow: "right" },
  ]
};

// Reusable Top Header
function ScreenHeader({ title, subtitle, rightIcon: RightIcon, rightAction: RightAction }: any) {
  return (
    <div className="flex shrink-0 items-start justify-between z-10 px-1 pt-1 pb-2">
      <div>
        <h1 className="text-[22px] font-bold text-slate-900 tracking-tight leading-tight">{title}</h1>
        {subtitle && <p className="text-[11px] font-medium text-slate-500 mt-0.5">{subtitle}</p>}
      </div>
      <div className="flex gap-2">
        {RightIcon && (
          <button className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
            <RightIcon className="h-4 w-4 text-slate-600" />
          </button>
        )}
        {RightAction && (
          <button className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 shadow-sm">
            <RightAction className="h-4 w-4 text-white" />
          </button>
        )}
      </div>
    </div>
  );
}

function HomeContent() {
  return (
    <div className="space-y-4 pb-4">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between z-10 px-1 pt-1">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500">
            <Sun className="h-6 w-6" fill="currentColor" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-orange-500 uppercase tracking-wide">Good Morning</div>
            <div className="text-[17px] font-bold text-slate-900 tracking-tight leading-tight mt-0.5">Alex W.</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="relative flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
            <Bell className="h-4 w-4 text-slate-600" />
            <div className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
            <HelpCircle className="h-4 w-4 text-slate-600" />
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3 px-1 mt-2">
        {[
          { label: "Voice Reminder", icon: Mic, color: "text-indigo-500", border: "border-indigo-100", bg: "bg-indigo-50/50" },
          { label: "Scan Bills", icon: Camera, color: "text-blue-500", border: "border-blue-100", bg: "bg-blue-50/50" },
          { label: "Wise AI", icon: MessageSquare, color: "text-amber-500", border: "border-amber-100", bg: "bg-amber-50/50" },
        ].map((action, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5 cursor-pointer active:scale-95 transition-transform">
            <div className={cn("flex h-[52px] w-[52px] items-center justify-center rounded-full border bg-white shadow-sm", action.border)}>
              <action.icon className={cn("h-[22px] w-[22px]", action.color)} />
            </div>
            <span className="text-[10px] font-medium text-slate-500 text-center">{action.label}</span>
          </div>
        ))}
      </div>

      {/* Main Card */}
      <div className="rounded-[20px] bg-indigo-50/40 p-4 shadow-sm border border-indigo-100/50 mx-1 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex justify-between items-start relative z-10">
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">This Month</div>
            <div className="text-[32px] font-black text-slate-900 mt-0.5 tracking-tighter">₹12,860</div>
          </div>
          <div className="relative flex h-[64px] w-[64px] items-center justify-center rounded-full border-4 border-orange-50 bg-white">
            <svg className="absolute inset-0 h-full w-full -rotate-90 drop-shadow-sm" viewBox="0 0 36 36">
              <path
                className="text-orange-400"
                strokeDasharray="75, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="flex flex-col items-center pt-0.5">
              <span className="text-[18px] font-black text-slate-900 leading-none">44</span>
              <span className="text-[8px] font-bold text-slate-400 mt-0.5">Score</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="h-1.5 w-full rounded-full bg-indigo-100/50 overflow-hidden">
            <div className="h-full w-[13%] rounded-full bg-indigo-500 shadow-sm" />
          </div>
          <div className="text-[10px] font-medium text-slate-400 mt-1.5">13% of ₹1.0L</div>
        </div>

        <div className="mt-4 grid grid-cols-3 divide-x divide-slate-200/60 pt-4 border-t border-slate-200/60">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-medium text-slate-400">Today</span>
            <span className="text-[12px] font-bold text-slate-900 mt-0.5">₹0</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-medium text-slate-400">Daily Avg</span>
            <span className="text-[12px] font-bold text-slate-900 mt-0.5">₹1,169</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-medium text-slate-400">Remaining</span>
            <span className="text-[12px] font-bold text-slate-900 mt-0.5">₹87,140</span>
          </div>
        </div>
      </div>

      {/* Upcoming Reminders */}
      <div className="px-1 mt-3">
        <h2 className="text-[14px] font-bold text-slate-900 mb-3">Upcoming Reminders</h2>
        <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
          <div className="flex w-[220px] shrink-0 items-center justify-between rounded-[18px] border border-slate-100 bg-white p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <Zap className="h-[18px] w-[18px]" fill="currentColor" />
              </div>
              <div>
                <div className="text-[12px] font-bold text-slate-900">Netflix - standard</div>
                <div className="text-[10px] font-medium text-slate-400 mt-0.5">11 Aug • Monthly</div>
              </div>
            </div>
            <div className="text-[12px] font-bold text-indigo-500">₹499</div>
          </div>
          <div className="flex w-[220px] shrink-0 items-center justify-between rounded-[18px] border border-slate-100 bg-white p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <Zap className="h-[18px] w-[18px]" fill="currentColor" />
              </div>
              <div>
                <div className="text-[12px] font-bold text-slate-900">Electricity</div>
                <div className="text-[10px] font-medium text-slate-400 mt-0.5">11 Aug • Monthly</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Cards Row */}
      <div className="grid grid-cols-3 gap-2.5 px-1 pt-1">
        <div className="rounded-[18px] border border-slate-100 bg-white p-3 shadow-sm flex flex-col justify-between">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-500 mb-2">
            <span className="text-[14px] font-bold">💧</span>
          </div>
          <div>
            <div className="text-[10px] text-slate-400 font-medium">Leaks</div>
            <div className="text-[14px] font-bold text-slate-900 mt-0.5">₹25,03</div>
          </div>
        </div>
        <div className="rounded-[18px] border border-slate-100 bg-white p-3 shadow-sm flex flex-col justify-between">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-500 mb-2">
            <Bell className="h-4 w-4" fill="currentColor" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 font-medium">Due</div>
            <div className="text-[14px] font-bold text-slate-900 mt-0.5">4</div>
          </div>
        </div>
        <div className="rounded-[18px] border border-slate-100 bg-white p-3 shadow-sm flex flex-col justify-between">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-500 mb-2">
            <CheckCircle2 className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 font-medium">Total</div>
            <div className="text-[14px] font-bold text-slate-900 mt-0.5">7</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FamilyContent() {
  const members = [
    { name: "Austin", role: "Child", features: 2, image: "https://i.pravatar.cc/100?img=11" },
    { name: "Mia kaye", role: "spouse", features: 5, image: "https://i.pravatar.cc/100?img=5" },
    { name: "Dad", role: "parent", features: 9, image: "https://i.pravatar.cc/100?img=12" },
    { name: "Alex w.", role: "Self", features: 5, image: "https://i.pravatar.cc/100?img=33" }
  ];

  return (
    <div className="space-y-4 pb-4">
      <ScreenHeader 
        title="Family Hub" 
        subtitle="Manage medicines, health, bills & more"
        rightIcon={Users}
        rightAction={Plus}
      />
      
      <div className="space-y-3 px-1 mt-2">
        {members.map((m, i) => (
          <div key={i} className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm flex flex-col hover:border-indigo-100 transition-colors">
            <div className="flex items-center justify-between border-b border-slate-50 pb-3 mb-3">
              <div className="flex items-center gap-3">
                <img src={m.image} alt={m.name} className="h-11 w-11 rounded-full object-cover border-2 border-slate-50 shadow-sm" />
                <div>
                  <h3 className="text-[14px] font-bold text-slate-900">{m.name}</h3>
                  <p className="text-[11px] font-medium text-slate-400 capitalize">{m.role}</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                <button className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-emerald-50 text-emerald-600 active:scale-95 transition-transform">
                  <Users className="h-[14px] w-[14px]" />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-indigo-50 text-indigo-600 active:scale-95 transition-transform">
                  <Edit2 className="h-[14px] w-[14px]" />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-red-50 text-red-500 active:scale-95 transition-transform">
                  <Trash2 className="h-[14px] w-[14px]" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-400">{m.features} features managed</span>
              <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RemindersContent() {
  return (
    <div className="space-y-4 pb-4">
      <ScreenHeader 
        title="Reminders" 
        subtitle="Bills, subscriptions & payments"
        rightIcon={Settings}
        rightAction={Plus}
      />

      {/* Summary Box */}
      <div className="mx-1 mt-2 rounded-[20px] bg-indigo-50/50 p-4 flex justify-between items-center border border-indigo-100/50 shadow-sm">
        <div className="flex flex-col items-center flex-1 border-r border-indigo-100/50">
          <span className="text-[10px] text-slate-400 font-medium">Pending</span>
          <span className="text-[15px] font-black text-slate-900 mt-0.5">₹2,957</span>
        </div>
        <div className="flex flex-col items-center flex-1 border-r border-indigo-100/50 relative">
          <span className="text-[10px] text-slate-400 font-medium">Urgent</span>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-[15px] font-black text-red-500">2</span>
            <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
          </div>
        </div>
        <div className="flex flex-col items-center flex-1">
          <span className="text-[10px] text-slate-400 font-medium">Subs</span>
          <span className="text-[15px] font-black text-slate-900 mt-0.5">₹499</span>
        </div>
      </div>

      <div className="px-1 mt-4 space-y-4">
        {/* Filter */}
        <button className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-sm active:bg-slate-50 transition-colors">
          <div className="flex items-center gap-2">
            <LayoutGrid className="h-4 w-4 text-indigo-600" />
            <span className="text-[12px] font-bold text-slate-800">All time</span>
          </div>
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </button>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          <button className="flex shrink-0 items-center gap-1.5 rounded-xl bg-indigo-500 px-4 py-2 text-white shadow-sm">
            <LayoutGrid className="h-3.5 w-3.5" />
            <span className="text-[11px] font-bold">All</span>
          </button>
          <button className="flex shrink-0 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-600 shadow-sm active:bg-slate-50">
            <FileText className="h-3.5 w-3.5" />
            <span className="text-[11px] font-bold">Bills</span>
          </button>
          <button className="flex shrink-0 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-600 shadow-sm active:bg-slate-50">
            <Heart className="h-3.5 w-3.5" />
            <span className="text-[11px] font-bold">Health</span>
          </button>
        </div>

        {/* Toggles */}
        <div className="flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
          <div className="flex-1 rounded-[10px] bg-indigo-500 py-2 text-center shadow-sm">
            <span className="text-[11px] font-bold text-white">Today (2)</span>
          </div>
          <div className="flex-1 py-2 text-center cursor-pointer">
            <span className="text-[11px] font-bold text-slate-500">Upcoming (0)</span>
          </div>
        </div>

        {/* List items */}
        <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-red-50 text-red-500">
                <Zap className="h-5 w-5" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-slate-900">Electricity Bill</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="rounded bg-orange-100 px-1.5 py-0.5 text-[8px] font-bold text-orange-600 uppercase">Bills</span>
                  <span className="text-[10px] text-slate-400 font-medium">↻ Monthly</span>
                </div>
                <div className="text-[10px] mt-1.5 font-medium text-red-500">Overdue <span className="text-slate-400 ml-1">11 Aug 2026</span></div>
              </div>
            </div>
            <span className="text-[16px] font-black text-slate-900 tracking-tight">₹2,458</span>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="flex h-8 flex-1 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 active:scale-95 transition-transform"><Check className="h-4 w-4" /></button>
            <button className="flex h-8 flex-1 items-center justify-center rounded-xl bg-blue-50 text-blue-600 active:scale-95 transition-transform"><Clock className="h-4 w-4" /></button>
            <button className="flex h-8 flex-1 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 active:scale-95 transition-transform"><Edit2 className="h-4 w-4" /></button>
            <button className="flex h-8 flex-1 items-center justify-center rounded-xl bg-red-50 text-red-500 active:scale-95 transition-transform"><Trash2 className="h-4 w-4" /></button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-red-50 text-red-500">
                <Zap className="h-5 w-5" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-slate-900">Netflix - Standard</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[8px] font-bold text-blue-600 uppercase">Subscriptions</span>
                  <span className="text-[10px] text-slate-400 font-medium">↻ One-time</span>
                </div>
                <div className="text-[10px] mt-1.5 font-medium text-red-500">Overdue <span className="text-slate-400 ml-1">11 Aug 2026</span></div>
              </div>
            </div>
            <span className="text-[16px] font-black text-slate-900 tracking-tight">₹499</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportsContent() {
  return (
    <div className="space-y-4 pb-4">
      <ScreenHeader 
        title="Reports" 
        subtitle="Last 6 months • vs prev 6 months"
      />
      
      <div className="px-1 flex justify-end -mt-10 mb-5 z-20 relative">
        <button className="flex h-8 items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 text-[11px] font-bold text-white shadow-sm active:scale-95 transition-transform">
          <FileText className="h-3.5 w-3.5" /> PDF Report
        </button>
      </div>

      <div className="px-1 space-y-4">
        <button className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-sm active:bg-slate-50 transition-colors">
          <div className="flex items-center gap-2">
            <LayoutGrid className="h-4 w-4 text-indigo-600" />
            <span className="text-[12px] font-bold text-slate-800">Last 6 months</span>
          </div>
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </button>

        <div className="rounded-[20px] bg-indigo-50/50 p-4 border border-indigo-100/50 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">Total Spending</div>
              <div className="text-[34px] font-black text-slate-900 tracking-tighter mt-0.5 leading-none">₹3.4L</div>
              <div className="text-[10px] text-slate-400 mt-2.5 leading-relaxed font-medium">
                Spent +₹3.1L vs Previous 6 months<br/>
                Reminders +1 • LifeScore -46
              </div>
            </div>
            <div className="flex h-[76px] w-[76px] flex-col items-center justify-center rounded-full bg-indigo-100/60 border-2 border-indigo-200">
              <span className="text-[22px] font-black text-indigo-600 leading-none">52</span>
              <span className="text-[7px] font-bold text-indigo-400 mt-1 uppercase text-center leading-tight">Estimated<br/>Score</span>
            </div>
          </div>

          <div className="mt-5 border-t border-slate-200/60 pt-5 grid grid-cols-2 gap-y-5">
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-1.5">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <span className="text-[14px] font-black text-slate-900">1</span>
              <span className="text-[9px] text-slate-400 font-medium">Reminders Done</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-1.5">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span className="text-[14px] font-black text-slate-900">0</span>
              <span className="text-[9px] text-slate-400 font-medium">Medicines Taken</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-1.5">
                <Bell className="h-4 w-4" fill="currentColor" />
              </div>
              <span className="text-[14px] font-black text-slate-900">1</span>
              <span className="text-[9px] text-slate-400 font-medium">Bills Due</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-1.5">
                <Zap className="h-4 w-4" fill="currentColor" />
              </div>
              <span className="text-[14px] font-black text-slate-900">0</span>
              <span className="text-[9px] text-slate-400 font-medium">Habits Done</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-[14px] font-bold text-slate-900 mb-2.5">Trend</h2>
          <div className="h-24 w-full rounded-[16px] border border-slate-100 bg-white flex items-end px-2 pt-2 pb-1 gap-1.5 shadow-sm">
            {[40, 60, 30, 80, 50, 90].map((h, i) => (
              <div key={i} className="flex-1 bg-indigo-100 rounded-t-sm relative group" style={{ height: `${h}%` }}>
                <div className="bg-indigo-500 w-full rounded-t-sm absolute bottom-0 transition-all duration-300" style={{ height: '40%' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileContent() {
  return (
    <div className="space-y-4 pb-4">
      <ScreenHeader title="Profile" />
      
      <div className="px-1 mt-2">
        <div className="flex items-center gap-3.5 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm">
          <img src="https://i.pravatar.cc/100?img=33" alt="Profile" className="h-[52px] w-[52px] rounded-full border-2 border-indigo-100 shadow-sm" />
          <div className="flex-1">
            <h3 className="text-[16px] font-bold text-slate-900">Alex W.</h3>
            <p className="text-[11px] font-medium text-slate-500 mt-0.5">alex@lifewise.com</p>
          </div>
          <button className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg active:scale-95 transition-transform">Edit</button>
        </div>

        <div className="mt-5 space-y-4">
          <div className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
            {[
              { icon: User, label: "Account Details" },
              { icon: Shield, label: "Privacy & Security" },
              { icon: CreditCard, label: "Subscription Plan" },
              { icon: Bell, label: "Notification Preferences" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3.5 border-b border-slate-50 last:border-0 hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 text-slate-600 border border-slate-100">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="text-[12px] font-bold text-slate-700">{item.label}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-300" />
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
            {[
              { icon: HelpCircle, label: "Help & Support" },
              { icon: FileText, label: "Terms and Conditions" },
              { icon: ShieldCheck, label: "Privacy Policy" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3.5 border-b border-slate-50 last:border-0 hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 text-slate-600 border border-slate-100">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="text-[12px] font-bold text-slate-700">{item.label}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-300" />
              </div>
            ))}
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-100 bg-red-50 p-3.5 text-red-600 active:scale-[0.98] transition-transform">
            <LogOut className="h-4 w-4" />
            <span className="text-[12px] font-bold">Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const TAB_CONTENT: Record<TabId, () => JSX.Element> = {
  home: HomeContent,
  family: FamilyContent,
  reminders: RemindersContent,
  reports: ReportsContent,
  profile: ProfileContent
};

// SVG Animated Solid Arrow Pointing to Phone
function SolidArrow({ direction, className }: { direction: "left" | "right", className?: string }) {
  // SVG Arrow points from Widget -> Phone
  return (
    <svg 
      className={cn("absolute top-1/2 -translate-y-1/2 pointer-events-none -z-10", className, direction === "left" ? "left-full" : "right-full")} 
      width="32" 
      height="12" 
      viewBox="0 0 32 12" 
      overflow="visible"
    >
      <defs>
        {/* Solid proper arrowhead */}
        <marker id={`solid-arrow-${direction}`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse">
          <path d="M 0 0 L 8 4 L 0 8 Z" fill="#6366f1" />
        </marker>
      </defs>
      <motion.path
        // If widget is on left, line goes from 0 -> 24 (points right to phone)
        // If widget is on right, line goes from 32 -> 8 (points left to phone)
        d={direction === "left" ? "M 0 6 L 24 6" : "M 32 6 L 8 6"}
        fill="none"
        stroke="#6366f1"
        strokeWidth="2"
        strokeDasharray="4 4"
        markerEnd={direction === "left" ? "url(#solid-arrow-left)" : undefined}
        markerStart={direction === "right" ? "url(#solid-arrow-right)" : undefined}
        animate={{ strokeDashoffset: direction === "left" ? [16, 0] : [-16, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}

export function PhoneMock({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<TabId>("home");

  const ActiveContent = TAB_CONTENT[activeTab];

  return (
    <div className={cn("relative mx-auto w-full max-w-[28rem] lg:max-w-[30rem] pt-6 pb-6", className)}>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] -z-20 pointer-events-none">
        <motion.div 
          className="absolute inset-0 rounded-full"
          style={{ 
            background: "radial-gradient(circle at center, rgba(79,70,229,0.08) 0%, rgba(79,70,229,0) 70%)",
            willChange: "transform, opacity", 
            transform: "translateZ(0)" 
          }}
          animate={reduceMotion ? undefined : { scale: [1, 1.05, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Widgets Array - z-20 to be FULLY visible, positioned precisely to TOUCH the border symmetrically */}
      {!reduceMotion && (
        <div className="absolute inset-0 z-20 pointer-events-none hidden md:block">
          
          <AnimatePresence mode="wait">
            {TAB_WIDGETS[activeTab].map((widget) => {
              const Icon = widget.icon;
              return (
                <motion.div
                  key={widget.id}
                  className={cn(
                    "absolute flex w-max items-center gap-3 rounded-[18px] p-3 backdrop-blur-md",
                    widget.posClasses,
                    widget.wrapperClass || "border border-white bg-white/95 shadow-xl"
                  )}
                  initial={{ opacity: 0, scale: widget.isDynamic ? 0.9 : 1, x: widget.arrow === "left" ? 20 : -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: widget.yAnim }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
                  transition={{
                    opacity: { duration: 0.3, delay: widget.delay },
                    scale: { type: "spring", stiffness: 300, delay: widget.delay },
                    x: { type: "spring", stiffness: 200, delay: widget.delay },
                    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: widget.delay * 2 }
                  }}
                >
                  {widget.arrow === "left" && <SolidArrow direction="left" />}
                  {widget.arrow === "right" && widget.isDynamic && <SolidArrow direction="right" />}
                  {widget.arrow === "right" && !widget.isDynamic && <SolidArrow direction="right" />}
                  
                  <div className={cn("flex h-10 w-10 items-center justify-center rounded-full shadow-inner border", widget.colorClass)}>
                    <Icon className="h-5 w-5" fill={widget.isDynamic ? "none" : "currentColor"} />
                  </div>
                  <div className="pr-2">
                    <div className={cn("text-[10px] font-bold uppercase tracking-wider", widget.isDynamic ? "text-indigo-500" : "text-slate-400")}>
                      {widget.title}
                    </div>
                    <div className={cn("text-[12px] font-black mt-0.5", widget.isDynamic ? "text-indigo-900" : "text-slate-800")}>
                      {widget.subtitle}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

        </div>
      )}

      {/* Main Phone Mockup */}
      <div
        className="relative z-10 w-full"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      >
        <div className="relative aspect-[78/163.4] w-full rounded-[3.05rem] bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 p-[4px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3),_0_0_0_1px_rgba(255,255,255,0.8)_inset]">
          <div className="relative h-full w-full rounded-[2.85rem] bg-black p-[6px] shadow-inner">
            {/* Phone Screen Container */}
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2.5rem] bg-[#FAFAFA]">
              
              {/* Dynamic Island */}
              <div className="pointer-events-none absolute left-1/2 top-2.5 z-40 -translate-x-1/2">
                <div className="h-7 w-28 rounded-full bg-black flex items-center justify-between px-2.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-900/80 shadow-inner" />
                  <div className="flex gap-1.5 items-center">
                    <div className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.8)]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-800 shadow-inner" />
                  </div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 z-30 flex justify-between items-center px-6 pt-3.5">
                <div className="text-[10px] font-bold text-slate-900 tracking-tight">9:41</div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-3.5 rounded-[3px] border-[1.5px] border-slate-900 flex items-center justify-end p-[0.5px]">
                    <div className="h-full w-[80%] bg-slate-900 rounded-[1px]" />
                  </div>
                </div>
              </div>

              <div className="relative flex min-h-0 flex-1 flex-col px-3 pb-2 pt-12 z-10 w-full">
                
                {/* Tab Content */}
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden relative w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={reduceMotion ? false : { opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, x: -15 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute inset-0 w-full"
                      style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
                    >
                      <ActiveContent />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom Navigation */}
                <nav className="shrink-0 w-full rounded-[1.25rem] bg-white p-1.5 shadow-[0_0_20px_rgb(0,0,0,0.05)] border border-slate-100 relative z-20 mt-1">
                  <div className="flex justify-between items-center px-1 relative">
                    <div 
                      className="absolute left-[4px] top-0 bottom-0 rounded-xl bg-indigo-500 transition-transform duration-300 ease-out"
                      style={{
                        transform: `translateX(${TABS.findIndex(t => t.id === activeTab) * 100}%)`,
                        width: "calc((100% - 8px) / 5)",
                        willChange: "transform",
                      }}
                    />
                    
                    {TABS.map((tab) => {
                      const Icon = tab.icon;
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setActiveTab(tab.id)}
                          className={cn(
                            "relative flex items-center justify-center w-[46px] h-11 rounded-xl z-10 transition-colors duration-300",
                            isActive ? "text-white" : "text-slate-400 hover:text-slate-600"
                          )}
                        >
                          <Icon className={cn("h-5 w-5 transition-transform duration-300")} strokeWidth={isActive ? 2.5 : 2} />
                        </button>
                      );
                    })}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
