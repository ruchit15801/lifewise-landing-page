"use client";

import { motion } from "framer-motion";
import { Sparkles, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { StoreDownloadButtons } from "@/components/StoreDownloadButtons";
import { SITE_TAGLINE } from "@/lib/seo";
import { SUPPORT_EMAIL, WHATSAPP_URL } from "@/lib/support";

export function DownloadCTA() {
  return (
    <section id="download" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="section-max relative z-10">
        <Reveal>
          <motion.div 
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden rounded-[3rem] border border-white/20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 sm:p-12 lg:p-16 shadow-[0_30px_60px_-15px_rgba(79,70,229,0.5)]"
          >
            {/* Parallax Background Orbs */}
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-400/40 blur-[80px] transition-transform duration-700 group-hover:scale-125 group-hover:bg-blue-400/50" />
            <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-purple-400/40 blur-[80px] transition-transform duration-700 group-hover:scale-125 group-hover:bg-purple-400/50" />
            <div className="absolute left-[20%] top-[50%] h-64 w-64 rounded-full bg-emerald-400/20 blur-[60px]" />

            {/* Premium SVG Vector Background */}
            <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay">
              <svg viewBox="0 0 800 400" className="w-full h-full object-cover">
                <motion.path d="M -100 200 Q 300 -50 800 200 T 1500 200" fill="none" stroke="url(#ctaGrad1)" strokeWidth="6" animate={{ x: [-700, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
                <motion.path d="M -100 300 Q 300 50 800 300 T 1500 300" fill="none" stroke="url(#ctaGrad2)" strokeWidth="4" animate={{ x: [-700, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                <motion.circle cx="400" cy="200" r="100" fill="url(#ctaGlow)" opacity="0.5" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5, repeat: Infinity }} />
                <defs>
                  <linearGradient id="ctaGrad1" x1="0" y1="0" x2="800" y2="0">
                    <stop stopColor="#ffffff" stopOpacity="0"/><stop offset="0.5" stopColor="#ffffff" stopOpacity="0.8"/><stop offset="1" stopColor="#ffffff" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="ctaGrad2" x1="0" y1="0" x2="800" y2="0">
                    <stop stopColor="#60A5FA" stopOpacity="0"/><stop offset="0.5" stopColor="#60A5FA" stopOpacity="0.8"/><stop offset="1" stopColor="#60A5FA" stopOpacity="0"/>
                  </linearGradient>
                  <radialGradient id="ctaGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 200) rotate(90) scale(100)">
                    <stop stopColor="#ffffff"/><stop offset="1" stopColor="#ffffff" stopOpacity="0"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/20 backdrop-blur-md"
                >
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                  <p className="text-xs font-bold text-emerald-100 uppercase tracking-widest">
                    {SITE_TAGLINE}
                  </p>
                </motion.div>
                
                <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                  Join the Future of Family Management.
                </h2>
                
                <p className="mt-6 text-lg text-white/80 leading-relaxed font-medium">
                  Get LifeWise on <strong>Google Play</strong> and the{" "}
                  <strong>App Store</strong> to manage Papa&apos;s medicine, bijli
                  bills, doctor visits & family routines in one place.
                </p>
                
                <ul className="mt-8 space-y-3">
                  {["One-tap install when stores go live", "Works on Android & iOS", "Hindi + English • Made for India"].map((item, i) => (
                    <motion.li 
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-[15px] font-bold text-white/90"
                    >
                      <div className="grid h-6 w-6 place-items-center rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                {/* Decorative glowing card behind */}
                <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-xl transition-all duration-700 group-hover:bg-white/10" />
                
                <div className="relative rounded-3xl border border-white/20 bg-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="inline-flex rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white border border-white/30">
                      Coming Soon
                    </div>
                  </div>
                  
                  <StoreDownloadButtons variant="hero" showSoonBadge />
                  
                  <div className="mt-8 flex items-center gap-4 before:h-px before:flex-1 before:bg-white/20 after:h-px after:flex-1 after:bg-white/20">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">Get Notified</span>
                  </div>
                  
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={`mailto:${SUPPORT_EMAIL}?subject=Notify%20me%20when%20LifeWise%20launches`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 hover:bg-white/20 px-4 py-3.5 text-[15px] font-bold text-white transition-all shadow-lg"
                    >
                      <Mail className="h-4 w-4" />
                      Email notify
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all hover:bg-[#20bd5a]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp notify
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
