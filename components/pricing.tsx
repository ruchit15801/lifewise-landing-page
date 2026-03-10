const plans = [
  {
    name: "Free",
    price: "₹0",
    badge: "Get started",
    features: ["Basic reminders", "Life score", "1 family member"],
    highlight: false
  },
  {
    name: "Basic",
    price: "₹29",
    badge: "Most popular",
    features: ["Unlimited reminders", "Voice reminders", "AI insights"],
    highlight: true
  },
  {
    name: "Family",
    price: "₹99",
    badge: "For families",
    features: ["Family dashboard", "Medicine tracking", "Shared reminders"],
    highlight: false
  },
  {
    name: "Sponsor Plan",
    price: "₹199",
    badge: "For children & parents",
    features: [
      "Monitor parents' health",
      "Remote reminder tracking",
      "Priority support"
    ],
    highlight: false
  }
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-backgroundLight dark:bg-slate-950 border-y border-slate-200/40 dark:border-slate-900"
    >
      <div className="section-max py-16 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50">
            Simple Pricing
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Start free, upgrade only when your life and family need more. No
            hidden fees, no complex tiers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`glass-panel p-6 flex flex-col justify-between ${
                plan.highlight
                  ? "bg-slate-900 text-slate-50 border-primary/60 shadow-soft-glow scale-[1.03]"
                  : "bg-white/80 dark:bg-slate-900/80 hover:-translate-y-1 transition-transform duration-300"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold">{plan.name}</h3>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] ${
                      plan.highlight
                        ? "bg-primary/20 text-primary border border-primary/40"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
                <p className="text-2xl font-semibold">
                  {plan.price}
                  <span className="text-xs font-normal text-slate-500 dark:text-slate-400 ml-1">
                    / month
                  </span>
                </p>
                <ul className="mt-3 space-y-2 text-xs text-slate-700 dark:text-slate-200">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-5 w-full rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
                  plan.highlight
                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/40"
                    : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

