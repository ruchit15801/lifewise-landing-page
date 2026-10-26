import { BadgeIndianRupee, Bot, Headphones, Languages, Lock, Smartphone } from "lucide-react";

const facts = [
  { icon: Smartphone, title: "Live on Play Store & App Store", desc: "Android and iPhone" },
  { icon: Languages, title: "7 languages", desc: "Hindi, Gujarati, Tamil and more" },
  { icon: BadgeIndianRupee, title: "Free plan, no card", desc: "Paid plans from ₹99" },
  { icon: Lock, title: "Data never sold", desc: "No ads in the app" },
  { icon: Bot, title: "Documents stay private", desc: "Images never sent to AI" },
  { icon: Headphones, title: "Real human support", desc: "Phone and WhatsApp" }
] as const;

export function TrustBar() {
  return (
    <section aria-label="Why families trust LifeWise" className="relative py-2 sm:py-3">
      <div className="section-max">
        <ul className="grid grid-cols-2 gap-2 rounded-3xl border border-slate-200/80 bg-white p-2 shadow-premium sm:grid-cols-3 sm:gap-3 sm:p-3 xl:grid-cols-6 dark:border-white/10 dark:bg-slate-900/70">
          {facts.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="flex items-center gap-2.5 rounded-2xl px-2.5 py-2.5 sm:px-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-200">
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] font-semibold leading-tight text-slate-900 dark:text-white">
                  {title}
                </span>
                <span className="mt-0.5 block text-[11px] leading-tight text-slate-500 dark:text-slate-300">
                  {desc}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
