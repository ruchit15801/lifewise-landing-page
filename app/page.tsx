import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { motion } from "framer-motion";

const smartReminderCards = [
  {
    title: "Voice Reminder",
    icon: "🎤",
    example: `"Remind me to take medicine at 8 PM"`
  },
  {
    title: "Photo Reminder",
    icon: "📷",
    example: `"Pay electricity bill tomorrow"`
  },
  {
    title: "Chat Reminder",
    icon: "💬",
    example: `"Renew Netflix subscription on Friday"`
  }
];

export default function HomePage() {
  return (
    <main className="bg-backgroundLight dark:bg-backgroundDark">
      <Hero />
      <Features />

      <section className="bg-slate-950 text-slate-50 border-b border-slate-900">
        <div className="section-max py-16 space-y-10">
          <div className="max-w-xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Reminders Made Effortless
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Speak, snap, or type. LifeWise understands natural language and
              turns it into smart reminders that adapt to your routines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {smartReminderCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="glass-panel bg-slate-900/80 border-slate-700/80 p-5 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{card.icon}</span>
                  <h3 className="text-sm font-semibold">{card.title}</h3>
                </div>
                <p className="text-xs text-slate-300">{card.example}</p>
                <p className="text-[11px] text-slate-400">
                  LifeWise automatically creates the right reminder with time,
                  context, and follow-ups.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-backgroundLight dark:bg-slate-950 border-b border-slate-200/40 dark:border-slate-900">
        <div className="section-max py-16 space-y-10">
          <div className="grid lg:grid-cols-[1.1fr,1.1fr] gap-10 items-start">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50">
                Take Care of Your Family
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Add your parents, partner, and children into one calm, shared
                family dashboard.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <li>• Medicine reminders</li>
                <li>• Emergency alerts</li>
                <li>• Shared family tasks</li>
                <li>• Family health tracking</li>
              </ul>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { name: "Papa", desc: "Medicine reminders" },
                { name: "Mummy", desc: "Health reminders" },
                { name: "Child", desc: "School fee alerts" }
              ].map((member) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel bg-white/80 dark:bg-slate-900/80 p-4 space-y-1"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    {member.name}
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    {member.desc}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Managed by you from anywhere in the world.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.1fr,1.1fr] gap-10 items-center">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50">
                Smart Decisions with AI
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                LifeWise looks at your spending, bills, and patterns to help you
                decide with confidence.
              </p>
              <div className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <p>Can I afford a new phone this month?</p>
                <p>Should I renew this subscription?</p>
                <p>When should I travel?</p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4 }}
              className="glass-panel bg-slate-950 text-slate-50 p-5 space-y-3"
            >
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                AI Decision Preview
              </p>
              <p className="text-sm">
                \"Should I renew this ₹799 OTT subscription?\"{" "}
              </p>
              <p className="text-xs text-slate-300">
                You used it 3 days last month. Renew only if entertainment
                budget is above{" "}
                <span className="text-accent font-medium">₹1,200</span>. Your
                current buffer is{" "}
                <span className="text-accent font-medium">₹640</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-slate-50 border-b border-slate-900">
        <div className="section-max py-16 space-y-10">
          <div className="grid lg:grid-cols-[1.1fr,1.1fr] gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Your Daily Life Score
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                See how in-control your life feels today. Not as judgment —
                just as a gentle mirror.
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>• Bills paid on time</li>
                <li>• Medicines taken</li>
                <li>• Spending under control</li>
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4 }}
              className="glass-panel bg-slate-900/90 border-slate-700/80 p-6 flex flex-col md:flex-row items-center gap-8"
            >
              <div className="relative h-40 w-40">
                <div className="absolute inset-0 rounded-full border-2 border-slate-700" />
                <div className="absolute inset-1.5 rounded-full border-[6px] border-primary/80 border-t-accent/80 border-r-accent/60 border-b-slate-700/80" />
                <div className="absolute inset-6 rounded-full bg-slate-950 flex flex-col items-center justify-center">
                  <span className="text-xs text-slate-400">Life Score</span>
                  <span className="text-4xl font-semibold text-slate-50">
                    78
                  </span>
                </div>
              </div>
              <div className="space-y-3 text-sm text-slate-200 w-full">
                <p>Calm week ahead. Medicines and bills are on track.</p>
                <button className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-white shadow-lg shadow-primary/40 hover:bg-primary/90 transition">
                  Share Life Score
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-backgroundLight dark:bg-slate-950 border-b border-slate-200/40 dark:border-slate-900">
        <div className="section-max py-16 space-y-12">
          <div className="grid lg:grid-cols-[1.1fr,1.1fr] gap-10 items-start">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50">
                Designed for Everyone — Even Seniors
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Big Button Mode keeps LifeWise simple for older parents and
                grandparents without losing intelligence.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: "💰", label: "Money" },
                { icon: "❤️", label: "Health" },
                { icon: "👨‍👩‍👧", label: "Family" },
                { icon: "🔔", label: "Reminders" }
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-panel bg-white/80 dark:bg-slate-900/80 flex flex-col items-center justify-center py-6 gap-2"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-slate-800 dark:text-slate-100">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.1fr,1.1fr] gap-10 items-center">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50">
                Automation That Works For You
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                LifeWise quietly runs in the background — watching for signals,
                not your secrets.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <li>• Detects upcoming bills</li>
                <li>• Sends medicine reminders</li>
                <li>• Warns about overspending</li>
                <li>• Suggests financial improvements</li>
              </ul>
            </div>
            <div className="glass-panel bg-slate-950 text-slate-50 p-5 space-y-3">
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Silent automation
              </p>
              <ul className="space-y-2 text-xs text-slate-200">
                <li>✓ SMS shows electricity bill due on 7th → Reminder created</li>
                <li>✓ Credit card spends increase → Overspend warning prepared</li>
                <li>✓ Long medicine schedule → Gentle, precise nudges only</li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.1fr,1.1fr] gap-10 items-start">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50">
                Help When You Need It
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                LifeWise connects you to trusted local services when reminders
                turn into real-world tasks.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              {[
                "Nurse assistance",
                "Medicine delivery",
                "Electrician",
                "Plumber"
              ].map((service) => (
                <div
                  key={service}
                  className="glass-panel bg-white/80 dark:bg-slate-900/80 px-4 py-3 text-slate-800 dark:text-slate-100"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Pricing />

      <section
        id="download"
        className="bg-slate-950 text-slate-50 border-y border-slate-900"
      >
        <div className="section-max py-16">
          <div className="glass-panel bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-slate-800 px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-md">
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Start Living Smarter Today
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Turn chaos into calm. LifeWise keeps track of your money,
                medicines, and family, so your mind can rest.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full max-w-xs">
              <button className="w-full rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-lg shadow-primary/40 hover:bg-primary/90 transition">
                Download on Google Play
              </button>
              <p className="text-[11px] text-slate-400 text-center">
                iOS coming soon · Works great in India and beyond
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

