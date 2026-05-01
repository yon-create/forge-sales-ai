const plans = [
  {
    name: "STARTER",
    price: "$89",
    per: "per rep / mo",
    desc: "For growing teams ready to add AI to their sales process.",
    features: [
      "AI Call Coaching (live)",
      "Pipeline risk scoring",
      "Objection library (500+)",
      "CRM integration",
      "Email sentiment analysis",
      "Weekly performance reports",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "GROWTH",
    price: "$149",
    per: "per rep / mo",
    desc: "For teams serious about dominating their market.",
    features: [
      "Everything in Starter",
      "Custom AI model training",
      "Manager coaching dashboard",
      "Deal health predictions",
      "Slack & Teams alerts",
      "Priority support",
      "Onboarding specialist",
    ],
    cta: "Book a Demo",
    highlighted: true,
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    per: "contact us",
    desc: "For large orgs with complex needs and compliance requirements.",
    features: [
      "Everything in Growth",
      "Dedicated AI training",
      "SSO & SCIM provisioning",
      "Custom integrations",
      "SLA guarantee",
      "Executive QBRs",
      "Dedicated success team",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-forge-orange-dim border border-accent/20 rounded-full px-4 py-1.5 mb-6">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">Pricing</span>
          </div>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-white leading-tight mb-4">
            Invest in performance.{" "}
            <span className="text-gradient">See the ROI.</span>
          </h2>
          <p className="font-sans text-white/50">Most teams see positive ROI within 30 days.</p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-8 flex flex-col ${
                plan.highlighted
                  ? "glow-border bg-surface-2"
                  : "border border-white/5 bg-surface"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent px-4 py-1 rounded-full font-mono text-[10px] text-white tracking-widest uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <div className="font-mono text-xs text-accent tracking-widest mb-3">{plan.name}</div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="font-syne font-extrabold text-4xl text-white">{plan.price}</span>
                  <span className="font-mono text-xs text-white/30 pb-1">{plan.per}</span>
                </div>
                <p className="font-sans text-sm text-white/50">{plan.desc}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3 5.5L6.5 2.5" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-sans text-sm text-white/70">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`block text-center py-3 rounded font-syne font-bold text-sm tracking-wide transition-all ${
                  plan.highlighted
                    ? "btn-primary"
                    : "btn-ghost"
                }`}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
