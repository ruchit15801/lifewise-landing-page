"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  CreditCard,
  Scale,
  HeartHandshake,
  BellRing,
  Users
} from "lucide-react";
import { StoreDownloadButtons } from "@/components/StoreDownloadButtons";
import { SITE_NAME } from "@/lib/seo";

const trustItems = [
  {
    icon: ShieldCheck,
    label: "Bank-Grade Security",
    tint: "from-emerald-400/20 to-emerald-500/5 text-emerald-300"
  },
  {
    icon: CreditCard,
    label: "No Credit Card Required",
    tint: "from-sky-400/20 to-sky-500/5 text-sky-300"
  },
  {
    icon: Scale,
    label: "DPDP Act Compliant",
    tint: "from-violet-300/20 to-violet-500/5 text-violet-200"
  }
] as const;

const floatIcons = [
  { icon: HeartHandshake, x: "8%", y: "18%", delay: 0 },
  { icon: BellRing, x: "86%", y: "22%", delay: 0.4 },
  { icon: Users, x: "12%", y: "72%", delay: 0.8 },
  { icon: ShieldCheck, x: "88%", y: "68%", delay: 1.2 }
] as const;

export function DownloadCTA() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-white dark:bg-slate-800/90 py-12 sm:py-16 transition-colors duration-500"
    >
      <div className="section-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 px-5 py-14 text-center shadow-2xl shadow-indigo-500/25 sm:rounded-[3rem] sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/15" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "28px 28px"
            }}
          />

          {/* Soft motion orbs */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-sky-400/30 blur-[90px]"
            animate={{ x: [0, 24, 0], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-fuchsia-400/25 blur-[100px]"
            animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute bottom-[-20%] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-[80px]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Vertical accent rails */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-8 left-4 hidden w-px bg-gradient-to-b from-transparent via-white/35 to-transparent sm:left-8 lg:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-8 right-4 hidden w-px bg-gradient-to-b from-transparent via-white/35 to-transparent sm:right-8 lg:block"
          />

          {/* Floating icon cards */}
          {floatIcons.map(({ icon: Icon, x, y, delay }) => (
            <motion.div
              key={x + y}
              aria-hidden
              className="pointer-events-none absolute z-[1] hidden rounded-2xl border border-white/20 bg-white/10 p-3 text-white shadow-lg backdrop-blur-md lg:block"
              style={{ left: x, top: y }}
              animate={{ y: [0, -12, 0], rotate: [-4, 4, -4] }}
              transition={{
                duration: 5.5,
                delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Icon className="h-5 w-5" strokeWidth={2.25} />
            </motion.div>
          ))}

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-indigo-50 backdrop-blur-md"
            >
              <motion.span
                animate={{ rotate: [0, 15, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <Sparkles className="h-4 w-4 text-amber-200" />
              </motion.span>
              Start For Free
            </motion.div>

            <h2 className="mb-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              Ready to simplify your family&apos;s life?
            </h2>

            <p className="mb-8 max-w-xl text-base font-medium leading-relaxed text-indigo-100 sm:text-lg">
              Join thousands of Indian families using {SITE_NAME} to manage
              medicines, bills, and daily routines securely in one place.
            </p>

            <div className="mb-8 flex w-full max-w-md flex-col items-center">
              <StoreDownloadButtons
                variant="dark"
                align="center"
                className="w-full"
              />
            </div>

            <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
              {trustItems.map(({ icon: Icon, label, tint }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className={`flex items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-gradient-to-br ${tint} px-4 py-3 backdrop-blur-md`}
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/10">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={2.4} />
                  </span>
                  <span className="text-left font-display text-[13px] font-semibold leading-snug text-white">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
