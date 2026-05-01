const stats = [
  { value: "47%", label: "Average increase in close rate", sub: "Across all customers in year 1" },
  { value: "$2.4M", label: "Average annual revenue lift", sub: "Per 10-rep sales team" },
  { value: "3.2×", label: "Pipeline forecast accuracy", sub: "vs. manual CRM updates" },
  { value: "40%", label: "Faster new rep ramp time", sub: "From hire to quota-carrying" },
  { value: "89%", label: "Rep adoption rate", sub: "Within first 30 days" },
  { value: "6 min", label: "Avg time to first insight", sub: "After initial integration" },
];

const testimonials = [
  {
    quote:
      "Before FORGE, our forecast was basically a gut feeling. Now I can tell my CRO with confidence exactly where we'll land at end of quarter.",
    name: "Marcus Reid",
    title: "VP of Sales, Relay Technologies",
    avatar: "MR",
  },
  {
    quote:
      "Our AEs used to spend hours on call prep. Now FORGE handles that automatically and they spend that time actually selling. We closed 23% more deals last quarter.",
    name: "Priya Nair",
    title: "Director of Revenue Operations, Stackline",
    avatar: "PN",
  },
  {
    quote:
      "The objection handler alone is worth the investment. My new reps sound like 3-year veterans on their first week of calls.",
    name: "James Calvert",
    title: "Sales Manager, Drift Commerce",
    avatar: "JC",
  },
];

export default function Results() {
  return (
    <section id="results" className="relative py-32 overflow-hidden">
      {/* Dark divider */}
      <div className="absolute inset-0 bg-surface" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,69,0,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-forge-orange-dim border border-accent/20 rounded-full px-4 py-1.5 mb-6">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">Proven Results</span>
          </div>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-white leading-tight">
            Numbers that speak{" "}
            <span className="text-gradient">for themselves.</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden mb-24">
          {stats.map((s, i) => (
            <div key={i} className="bg-bg p-8 hover:bg-surface-2 transition-colors group">
              <div className="font-syne font-extrabold text-4xl md:text-5xl text-gradient mb-2 group-hover:scale-105 transition-transform origin-left">
                {s.value}
              </div>
              <div className="font-sans text-sm text-white/70 mb-1 font-medium">{s.label}</div>
              <div className="font-mono text-[10px] text-white/30 tracking-wide">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-bg border border-white/5 rounded-xl p-8 hover:border-accent/20 transition-colors">
              {/* Quote mark */}
              <div className="font-syne text-5xl text-accent/30 leading-none mb-4">&ldquo;</div>
              <p className="font-sans text-white/70 text-sm leading-relaxed mb-8">{t.quote}</p>
              <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center font-syne font-bold text-xs text-accent">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-syne font-semibold text-sm text-white">{t.name}</div>
                  <div className="font-mono text-[10px] text-white/30 tracking-wide">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
