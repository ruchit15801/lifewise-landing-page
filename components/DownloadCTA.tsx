"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck } from "lucide-react";
import { StoreDownloadButtons } from "@/components/StoreDownloadButtons";
import { SITE_NAME } from "@/lib/seo";

export function DownloadCTA() {
  return (
    <section id="download" className="relative overflow-hidden bg-white py-24 sm:py-32 dark:bg-[#050508] transition-colors duration-500">
      <div className="section-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-indigo-600 px-6 py-20 text-center shadow-2xl dark:bg-[#0a0a12] sm:px-16"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 border-[8px] border-indigo-700/50 rounded-[3rem] dark:border-indigo-500/20" />
          <div className="absolute inset-0 opacity-[0.1] dark:opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/30 blur-[120px] pointer-events-none dark:bg-indigo-500/20" />
          
          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-400/50 bg-indigo-500/20 px-4 py-1.5 text-[13px] font-bold uppercase tracking-widest text-indigo-100 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-400">
              <Sparkles className="h-4 w-4" />
              Start For Free
            </div>
            
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Ready to simplify your family's life?
            </h2>
            
            <p className="mx-auto mb-10 max-w-xl text-lg font-medium leading-relaxed text-indigo-100 dark:text-slate-400">
              Join thousands of Indian families using {SITE_NAME} to manage medicines, bills, and daily routines securely in one place.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <StoreDownloadButtons className="justify-center" />
              
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] font-bold text-indigo-200 dark:text-slate-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  Bank-Grade Security
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  No Credit Card Required
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  DPDP Act Compliant
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
