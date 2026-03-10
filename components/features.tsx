const whatCards = [
  {
    title: "Bill reminders",
    icon: "💡",
    description: "Never miss an electricity, water, or subscription payment again."
  },
  {
    title: "Medicine reminders",
    icon: "💊",
    description: "Timely nudges for you and your family to take medicines on time."
  },
  {
    title: "Family safety",
    icon: "👨‍👩‍👧",
    description: "Stay in sync with the people who matter the most."
  }
];

const aiMemoryItems = [
  "Doctor preferences",
  "Monthly expense patterns",
  "Festival habits",
  "Regular food orders",
  "Mood and lifestyle patterns"
];

export function Features() {
  return (
    <section
      id="features"
      className="bg-backgroundLight dark:bg-slate-950 border-b border-slate-200/40 dark:border-slate-900"
    >
      <div className="section-max py-16 space-y-16">
        <div className="grid lg:grid-cols-[1.1fr,1.1fr] gap-10 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50">
              Your Personal Life Assistant
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl">
              LifeWise remembers the important things in your life so you never
              miss them — from bills and medicines to the tiny routines that
              quietly shape your day.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {whatCards.map((card) => (
              <div
                key={card.title}
                className="glass-panel bg-white/60 dark:bg-slate-900/70 p-4 flex flex-col gap-2 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="text-2xl">{card.icon}</span>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          id="how-it-works"
          className="grid lg:grid-cols-[1.2fr,1.1fr] gap-10 items-center"
        >
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50">
              AI Memory That Understands Your Life
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl">
              LifeWise quietly learns from your routines, spending, and habits —
              then organizes your life in the background so you never have to
              think about it.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-700 dark:text-slate-200">
              {aiMemoryItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 px-3 py-2 border border-slate-200/70 dark:border-slate-800/80"
                >
                  <span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass-panel bg-slate-950 p-4 space-y-3 transition-transform duration-300 hover:-translate-y-1">
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                This month
              </p>
              <div className="space-y-2 text-xs text-slate-200">
                <p>Can I afford a new phone this month?</p>
                <p className="rounded-xl bg-slate-900/90 px-3 py-2">
                  Based on your patterns, you can spend up to{" "}
                  <span className="text-accent font-medium">₹8,500</span> safely
                  without impacting bills or savings.
                </p>
              </div>
            </div>
            <div className="glass-panel bg-white/80 dark:bg-slate-900/80 p-4 space-y-3 transition-transform duration-300 hover:-translate-y-1">
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Subtle automations
              </p>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="mt-[3px] text-primary">●</span>
                  <span>
                    Detects recurring bills from SMS and quietly prepares
                    reminders.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[3px] text-primary">●</span>
                  <span>
                    Notices festive months and adjusts budgets and reminders.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[3px] text-primary">●</span>
                  <span>
                    Understands the food, doctors, and routines you rely on.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

