const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="#FF4500" />
      </svg>
    ),
    tag: "CALL INTELLIGENCE",
    title: "Real-Time Call Coaching",
    description:
      "FORGE listens to every sales call and provides live, AI-generated cues — talk tracks, objection counters, and closing signals — directly to your rep while the call is happening.",
    metrics: [{ label: "Talk-to-listen ratio", value: "Optimized" }, { label: "Objections handled", value: "94%" }],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill="#FF4500" />
      </svg>
    ),
    tag: "PIPELINE AI",
    title: "Predictive Pipeline Intelligence",
    description:
      "Stop guessing which deals will close. FORGE analyzes engagement patterns, email sentiment, and CRM signals to give each deal a precise probability score and risk flag.",
    metrics: [{ label: "Forecast accuracy", value: "3.2×" }, { label: "Deals at risk caught", value: "Early" }],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" fill="#FF4500" />
      </svg>
    ),
    tag: "OBJECTION ENGINE",
    title: "AI Objection Handler",
    description:
      "Every objection your prospects raise has a proven counter. FORGE surfaces the highest-converting response in real-time, trained on your team's winning conversations.",
    metrics: [{ label: "Response library", value: "10K+" }, { label: "Avg win rate lift", value: "+31%" }],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="#FF4500" />
      </svg>
    ),
    tag: "TEAM ANALYTICS",
    title: "Performance Analytics Dashboard",
    description:
      "See exactly where each rep wins and loses. FORGE gives managers deep visibility into talk patterns, deal velocity, follow-up consistency, and coaching opportunities.",
    metrics: [{ label: "Rep insights", value: "360°" }, { label: "Avg ramp time cut", value: "40%" }],
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,69,0,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="inline-flex items-center gap-2 bg-forge-orange-dim border border-accent/20 rounded-full px-4 py-1.5 mb-6">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">Core Features</span>
          </div>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl leading-tight text-white mb-4">
            Everything your team needs to{" "}
            <span className="text-gradient">dominate quota.</span>
          </h2>
          <p className="font-sans text-white/50 text-lg">
            FORGE integrates with your existing stack in minutes — no rip-and-replace required.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="feature-card bg-surface border border-white/5 rounded-xl p-8 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  {f.icon}
                </div>
                <div>
                  <div className="font-mono text-[10px] text-accent tracking-widest mb-1">{f.tag}</div>
                  <h3 className="font-syne font-bold text-xl text-white">{f.title}</h3>
                </div>
              </div>

              <p className="font-sans text-white/50 text-sm leading-relaxed mb-6">{f.description}</p>

              <div className="flex gap-4 pt-6 border-t border-white/5">
                {f.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-syne font-bold text-lg text-white">{m.value}</div>
                    <div className="font-mono text-[10px] text-white/30 tracking-wide">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
