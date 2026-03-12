"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function DownloadCTA() {
  return (
    <section id="download" className="py-16 sm:py-20">
      <div className="section-max">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-primary to-indigo-600 p-8 sm:p-12 shadow-lift">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Start Living Smarter Today
                </h2>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="mt-3 text-white/85 leading-relaxed">
                  Download LifeWise and let a calm assistant handle the details — bills,
                  medicines, family routines, and smarter spending.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-premium transition hover:shadow-lift"
                >
                  <Download className="h-4 w-4" />
                  Download on Google Play
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl"
                >
                  Explore Features
                </motion.a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

