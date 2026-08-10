import { Reveal } from "@/components/Reveal";
import { StoreDownloadButtons } from "@/components/StoreDownloadButtons";
import { SITE_TAGLINE } from "@/lib/seo";
import { SUPPORT_EMAIL, WHATSAPP_URL } from "@/lib/support";

export function DownloadCTA() {
  return (
    <section id="download" className="py-16 sm:py-20 content-auto">
      <div className="section-max">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-primary to-indigo-600 p-8 sm:p-12 shadow-lift">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal blur={false}>
                <p className="text-sm font-semibold text-white/80 uppercase tracking-wide">
                  {SITE_TAGLINE}
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Download LifeWise App
                </h2>
              </Reveal>
              <Reveal delay={0.06} blur={false}>
                <p className="mt-3 text-white/85 leading-relaxed">
                  Get LifeWise on <strong>Google Play</strong> and the{" "}
                  <strong>App Store</strong> to manage Papa&apos;s medicine, bijli
                  bills, doctor visits &amp; family routines. Free to start, Premium
                  Rs. 199/month.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li>✓ One-tap install when stores go live</li>
                  <li>✓ Works on Android phones &amp; iPhone</li>
                  <li>✓ Hindi + English • Made for India</li>
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.1} blur={false}>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6 backdrop-blur-xl">
                <StoreDownloadButtons variant="hero" showSoonBadge />
                <div className="mt-5 flex flex-col gap-2 border-t border-white/15 pt-5 sm:flex-row">
                  <a
                    href={`mailto:${SUPPORT_EMAIL}?subject=Notify%20me%20when%20LifeWise%20launches`}
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white"
                  >
                    Email notify me
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950"
                  >
                    WhatsApp notify
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
