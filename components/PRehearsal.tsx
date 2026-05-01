"use client";
import { P } from "./pp/palette";
import { Note } from "./pp/atoms";

const SERIF = "var(--font-instrument-serif), serif";
const SANS = "var(--font-inter), sans-serif";

export default function PRehearsal() {
  const items: [string, string, string][] = [
    [
      "HOUR 0",
      "Tune up.",
      "Plug into Salesforce, HubSpot, Gong, Outreach. Read-only. Ten minutes. We don&rsquo;t change a thing in your CRM.",
    ],
    [
      "HOUR 24",
      "Listen.",
      "Every winning call you ever recorded. Every objection. Every silence that closed a deal. Pattern, not template.",
    ],
    [
      "HOUR 48",
      "Conduct.",
      "Cues to reps mid-call. Risk to managers. Strategy to execs. In plain language. Out loud or on screen — your call.",
    ],
  ];
  const marks = ["ƒ", "mf", "ƒƒ"];
  return (
    <section style={{ padding: "72px 6vw", borderBottom: `1px solid ${P.INK}`, background: P.CARD }}>
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
          OPUS 3 · REHEARSAL
          <span style={{ flex: 1, height: 1, background: P.INK, opacity: 0.15 }} />
        </div>
        <h2
          style={{
            fontFamily: SERIF,
            fontWeight: 400,
            fontSize: "clamp(36px, 4.5vw, 64px)",
            lineHeight: 1.05,
            margin: "0 0 12px",
            letterSpacing: "-0.02em",
          }}
        >
          You don&rsquo;t train it.
        </h2>
        <p
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: "clamp(22px, 2.6vw, 32px)",
            color: P.DIM,
            margin: "0 0 40px",
            maxWidth: 760,
            lineHeight: 1.3,
          }}
        >
          It listens to the music your top reps make &mdash; then teaches the rest of the section.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            border: `1px solid ${P.INK}`,
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {items.map(([t, h, d], i) => (
            <div
              key={t}
              style={{
                padding: "28px 26px",
                borderRight: i < 2 ? `1px solid ${P.DIM}33` : "none",
                background: i === 1 ? P.PAPER : P.CARD,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <span
                  style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 22, color: P.RED, fontWeight: 700 }}
                >
                  {marks[i]}
                </span>
                <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 700, letterSpacing: 2.5, color: P.RED }}>
                  {t}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: SERIF,
                  fontSize: 32,
                  fontWeight: 400,
                  margin: "0 0 10px",
                  lineHeight: 1.05,
                  letterSpacing: "-0.015em",
                }}
              >
                {h}
              </h3>
              <p
                style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.55, color: P.INK, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: d }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
