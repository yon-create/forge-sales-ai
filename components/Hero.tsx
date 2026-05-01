export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(255,69,0,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="reveal-1 inline-flex items-center gap-2 bg-forge-orange-dim border border-accent/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                AI-Powered Sales Performance
              </span>
            </div>

            {/* Headline */}
            <h1 className="reveal-2 font-syne font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-6">
              <span className="block text-white">CLOSE MORE.</span>
              <span className="block text-gradient">FORECAST</span>
              <span className="block text-white">SMARTER.</span>
              <span className="block text-white/40">WIN FASTER.</span>
            </h1>

            {/* Sub */}
            <p className="reveal-3 font-sans text-lg text-white/50 leading-relaxed mb-10 max-w-md">
              FORGE gives your sales team real-time AI coaching, predictive pipeline intelligence,
              and objection-handling superpowers — so every rep performs like your best rep.
            </p>

            {/* CTAs */}
            <div className="reveal-4 flex flex-col sm:flex-row gap-4">
              <a href="#demo" className="btn-primary px-8 py-4 text-sm rounded inline-block text-center">
                Book a Demo →
              </a>
              <a href="#features" className="btn-ghost px-8 py-4 text-sm rounded inline-block text-center">
                See How It Works
              </a>
            </div>

            {/* Trust bar */}
            <div className="reveal-5 flex items-center gap-6 mt-12 pt-8 border-t border-white/5">
              <div>
                <div className="font-syne font-bold text-2xl text-white">47%</div>
                <div className="font-mono text-xs text-white/40 tracking-wider">Close Rate Lift</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="font-syne font-bold text-2xl text-white">3.2×</div>
                <div className="font-mono text-xs text-white/40 tracking-wider">Pipeline Accuracy</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="font-syne font-bold text-2xl text-white">89%</div>
                <div className="font-mono text-xs text-white/40 tracking-wider">Rep Adoption</div>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="relative hidden md:block">
            {/* Main dashboard card */}
            <div className="animate-float relative glow-border rounded-xl bg-surface p-6 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-mono text-xs text-white/30 tracking-widest mb-1">LIVE PIPELINE</div>
                  <div className="font-syne font-bold text-lg text-white">Q2 Performance</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
                  <span className="font-mono text-xs text-green-400">LIVE</span>
                </div>
              </div>

              {/* Bar chart mock */}
              <div className="flex items-end gap-2 h-28 mb-6">
                {[40, 65, 45, 80, 55, 90, 72, 95, 60, 88, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all"
                    style={{
                      height: `${h}%`,
                      background:
                        i === 11
                          ? "linear-gradient(to top, #ff4500, #ff6b35)"
                          : i > 8
                          ? "rgba(255,69,0,0.4)"
                          : "rgba(255,255,255,0.08)",
                    }}
                  />
                ))}
              </div>

              {/* Metric row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Deals Won", value: "$2.4M", delta: "+23%" },
                  { label: "Avg Deal Size", value: "$48K", delta: "+11%" },
                  { label: "Win Rate", value: "64%", delta: "+18%" },
                ].map((m) => (
                  <div key={m.label} className="bg-surface-2 rounded-lg p-3">
                    <div className="font-mono text-[10px] text-white/30 tracking-wider mb-1">{m.label}</div>
                    <div className="font-syne font-bold text-base text-white">{m.value}</div>
                    <div className="font-mono text-xs text-green-400">{m.delta}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating card: AI Alert */}
            <div className="animate-float-delayed absolute -top-6 -right-6 bg-surface border border-accent/30 rounded-xl p-4 shadow-lg w-56">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L10 6H15L11 9.5L12.5 15L8 11.5L3.5 15L5 9.5L1 6H6L8 1Z" fill="#FF4500" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-accent tracking-wider mb-0.5">AI INSIGHT</div>
                  <div className="font-sans text-xs text-white/80 leading-snug">
                    Deal with Acme Corp is at risk — 3 unanswered objections detected.
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card: Rep Score */}
            <div className="animate-float-slow absolute -bottom-6 -left-6 bg-surface border border-white/10 rounded-xl p-4 shadow-lg w-48">
              <div className="font-mono text-[10px] text-white/30 tracking-wider mb-2">REP SCORE</div>
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-syne font-bold text-lg"
                  style={{
                    background: "conic-gradient(#FF4500 0% 87%, rgba(255,255,255,0.08) 87% 100%)",
                    padding: "2px",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-surface flex items-center justify-center font-syne font-bold text-white text-sm">
                    87
                  </div>
                </div>
                <div>
                  <div className="font-syne font-bold text-white">Sarah K.</div>
                  <div className="font-mono text-[10px] text-green-400">↑ +12 pts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker bar */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-surface/80 border-t border-white/5 flex items-center overflow-hidden">
        <div className="animate-ticker flex gap-12 whitespace-nowrap">
          {[
            "AI CALL COACHING",
            "PIPELINE INTELLIGENCE",
            "OBJECTION HANDLING",
            "DEAL RISK ALERTS",
            "REP PERFORMANCE SCORES",
            "FORECAST ACCURACY",
            "REAL-TIME GUIDANCE",
            "CRM SYNC",
            "AI CALL COACHING",
            "PIPELINE INTELLIGENCE",
            "OBJECTION HANDLING",
            "DEAL RISK ALERTS",
            "REP PERFORMANCE SCORES",
            "FORECAST ACCURACY",
            "REAL-TIME GUIDANCE",
            "CRM SYNC",
          ].map((item, i) => (
            <span key={i} className="font-mono text-xs text-white/20 tracking-widest flex items-center gap-12">
              {item}
              <span className="text-accent/40">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
