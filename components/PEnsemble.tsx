"use client";
import { P } from "./pp/palette";
import { Note } from "./pp/atoms";

const SERIF = "var(--font-instrument-serif), serif";
const SANS = "var(--font-inter), sans-serif";

export default function PEnsemble() {
  const parts = [
    {
      inst: "Strings",
      tag: "CALL INTEL",
      title: "The Coach",
      copy: "Listens to every call. Feeds your rep cues, counters, closing signals — at 240ms, while the buyer is still speaking.",
      m: [
        ["LATENCY", "240ms"],
        ["ACC", "94%"],
      ],
    },
    {
      inst: "Brass",
      tag: "PIPELINE AI",
      title: "The Conductor",
      copy: "Scores every deal on engagement, sentiment, and momentum. Flags the at-risk ones before your rep notices the silence.",
      m: [
        ["FORECAST", "3.2×"],
        ["EARLY", "12 d"],
      ],
    },
    {
      inst: "Woodwind",
      tag: "OBJECTION ENG.",
      title: "The Counter",
      copy: "10,000+ counter-moves trained on your team’s winning calls. The right answer surfaces before the buyer finishes the question.",
      m: [
        ["LIB", "10K+"],
        ["LIFT", "+31%"],
      ],
    },
    {
      inst: "Percussion",
      tag: "TEAM ANALYTICS",
      title: "The Section Leader",
      copy: "Talk patterns, deal velocity, follow-up consistency. Coaching hot-spots flagged automatically for managers.",
      m: [
        ["VIEW", "360°"],
        ["RAMP", "−40%"],
      ],
    },
  ];
  return (
    <section style={{ padding: "72px 6vw", borderBottom: `1px solid ${P.INK}`, background: P.PAPER }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 24,
            fontFamily: SANS,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 3,
            color: P.RED,
          }}
        >
          <Note size={14} color={P.RED} />
          OPUS 2 · THE ENSEMBLE
          <span style={{ flex: 1, height: 1, background: P.INK, opacity: 0.15 }} />
        </div>
        <h2
          style={{
            fontFamily: SERIF,
            fontWeight: 400,
            fontSize: "clamp(36px, 4.5vw, 64px)",
            lineHeight: 1.05,
            margin: "0 0 40px",
            letterSpacing: "-0.02em",
            maxWidth: 880,
          }}
        >
          Four parts. One orchestra. <em style={{ color: P.DIM }}>Every closer plays in tune.</em>
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 0,
            border: `1px solid ${P.INK}`,
            borderRadius: 12,
            overflow: "hidden",
            background: P.CARD,
          }}
        >
          {parts.map((p, i) => (
            <div
              key={p.title}
              style={{
                padding: "24px 26px",
                borderRight: i % 2 === 0 ? `1px solid ${P.DIM}33` : "none",
                borderBottom: i < 2 ? `1px solid ${P.DIM}33` : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <Note size={16} color={P.RED} />
                <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 2.5, color: P.RED }}>
                  {p.tag}
                </span>
                <span style={{ flex: 1 }} />
                <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 13, color: P.DIM }}>{p.inst}</span>
              </div>
              <h3
                style={{
                  fontFamily: SERIF,
                  fontWeight: 400,
                  fontSize: 30,
                  margin: "0 0 10px",
                  letterSpacing: "-0.01em",
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.55, color: P.INK, margin: "0 0 16px" }}>
                {p.copy}
              </p>
              <div style={{ display: "flex", gap: 24, paddingTop: 12, borderTop: `1px solid ${P.DIM}26` }}>
                {p.m.map(([k, v]) => (
                  <div key={k}>
                    <div style={{ fontFamily: SANS, fontSize: 10, color: P.DIM, letterSpacing: 1.5 }}>{k}</div>
                    <div style={{ fontFamily: SERIF, fontSize: 22, color: P.INK, lineHeight: 1.1 }}>{v}</div>
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
