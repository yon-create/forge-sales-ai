"use client";

export default function CTA() {
  return (
    <section id="demo" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255,69,0,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-forge-orange-dim border border-accent/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
          <span className="font-mono text-xs text-accent tracking-widest uppercase">Request Access</span>
        </div>

        <h2 className="font-syne font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-white mb-6">
          Your team is one{" "}
          <span className="text-gradient">FORGE</span>{" "}
          away from hitting quota.
        </h2>

        <p className="font-sans text-white/50 text-lg mb-12 max-w-2xl mx-auto">
          See FORGE in action with a 30-minute live demo. We&apos;ll show you exactly what AI can do for your pipeline — using your actual data.
        </p>

        {/* Form */}
        <form
          className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@company.com"
            className="flex-1 bg-bg border border-white/10 rounded px-4 py-3.5 font-sans text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent/50 transition-colors"
          />
          <button type="submit" className="btn-primary px-8 py-3.5 text-sm rounded whitespace-nowrap">
            Book My Demo →
          </button>
        </form>

        <p className="font-mono text-xs text-white/20 tracking-wide mt-4">
          No credit card. No commitment. 30 minutes.
        </p>

        {/* Logos row (placeholder) */}
        <div className="mt-20 pt-12 border-t border-white/5">
          <p className="font-mono text-xs text-white/20 tracking-widest uppercase mb-8">
            Trusted by revenue teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-30">
            {["RELAY", "STACKLINE", "DRIFTCO", "NEXUM", "VANTAGE", "ARCUS"].map((name) => (
              <span key={name} className="font-syne font-bold text-xl text-white tracking-widest">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
