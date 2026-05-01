const steps = [
  {
    num: "01",
    title: "Connect Your Stack",
    desc: "Integrate with Salesforce, HubSpot, Gong, Outreach, or any CRM in under 10 minutes. FORGE reads your existing data without disrupting workflows.",
    detail: ["Salesforce & HubSpot sync", "Call platform integration", "Email & calendar access", "Custom API available"],
  },
  {
    num: "02",
    title: "AI Learns Your Playbook",
    desc: "FORGE analyzes your historical deals, winning call recordings, and top-performer behavior to build a model tuned to your specific product, market, and ICP.",
    detail: ["Win/loss pattern analysis", "Custom objection library", "Rep benchmark profiles", "Ready in 48 hours"],
  },
  {
    num: "03",
    title: "Reps Get Real-Time Guidance",
    desc: "During every call, email thread, and deal interaction, FORGE delivers context-aware coaching cards, next-step recommendations, and risk alerts to each rep.",
    detail: ["Live call overlay", "Deal health scores", "Manager alerts", "Weekly AI reports"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32">
      {/* Vertical line decoration */}
      <div className="absolute left-1/2 top-48 bottom-48 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-forge-orange-dim border border-accent/20 rounded-full px-4 py-1.5 mb-6">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">How It Works</span>
          </div>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-white leading-tight">
            From zero to AI-powered in{" "}
            <span className="text-gradient">48 hours.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`group grid md:grid-cols-2 gap-0 items-stretch border border-white/5 rounded-xl overflow-hidden hover:border-accent/20 transition-colors ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Number + title side */}
              <div
                className={`bg-surface p-10 flex flex-col justify-center ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="font-syne font-extrabold text-7xl text-gradient leading-none mb-4 opacity-60">
                  {step.num}
                </div>
                <h3 className="font-syne font-bold text-2xl text-white mb-3">{step.title}</h3>
                <p className="font-sans text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>

              {/* Detail side */}
              <div
                className={`bg-surface-2 p-10 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}
              >
                <div className="font-mono text-[10px] text-accent tracking-widest mb-4">INCLUDED</div>
                <ul className="space-y-3">
                  {step.detail.map((d, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5L4 7L8 3" stroke="#FF4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="font-sans text-sm text-white/70">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
