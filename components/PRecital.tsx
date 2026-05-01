"use client";
import { P } from "./pp/palette";
import { Note } from "./pp/atoms";

const SERIF = "var(--font-instrument-serif), serif";
const SANS = "var(--font-inter), sans-serif";

export default function PRecital() {
  const stats: [string, string][] = [
    ["+47%", "close rate"],
    ["$2.4M", "rev / 10-rep team"],
    ["3.2×", "forecast accuracy"],
    ["−40%", "ramp time"],
    ["89%", "rep adoption"],
    ["6 min", "time to insight"],
  ];
  const quotes: [string, string, string][] = [
    [
      "Marcus Reid",
      "VP Sales · Relay Technologies",
      "Before Perfect Pitch my forecast was a gut feeling. Now I tell my CRO with confidence exactly where we land.",
    ],
    [
      "Priya Nair",
      "Director RevOps · Stackline",
      "AEs used to spend hours prepping. Now Perfect Pitch handles it and they spend that time selling. We closed 23% more deals last quarter.",
    ],
    [
      "James Calvert",
      "Sales Manager · Drift Commerce",
      "The objection counter is a cheat code. New reps sound like 3-year vets in their first week.",
    ],
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
          OPUS 4 · RECITAL
          <span style={{ flex: 1, height: 1, background: P.INK, opacity: 0.15 }} />
        </div>
        <h2
          style={{
            fontFamily: SERIF,
            fontWeight: 400,
            fontSize: "clamp(36px, 4.5vw, 64px)",
            lineHeight: 1.05,
            margin: "0 0 32px",
            letterSpacing: "-0.02em",
          }}
        >
          What our customers <em>actually said.</em>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 0,
            border: `1px solid ${P.INK}`,
            borderRadius: 12,
            overflow: "hidden",
            background: P.CARD,
            marginBottom: 36,
          }}
        >
          {stats.map(([v, k], i) => (
            <div
              key={k}
              style={{
                padding: "18px 16px",
                borderRight: i < 5 ? `1px solid ${P.DIM}26` : "none",
              }}
            >
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: 36,
                  lineHeight: 0.95,
                  color: i % 2 === 0 ? P.RED : P.INK,
                  fontStyle: i % 2 === 0 ? "normal" : "italic",
                }}
              >
                {v}
              </div>
              <div style={{ fontFamily: SANS, fontSize: 11, color: P.DIM, marginTop: 6 }}>{k}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {quotes.map(([n, t, q]) => (
            <figure
              key={n}
              style={{
                margin: 0,
                padding: "22px 22px",
                border: `1px solid ${P.INK}`,
                borderRadius: 12,
                background: P.CARD,
              }}
            >
              <Note size={18} color={P.RED} />
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 19,
                  lineHeight: 1.4,
                  margin: "12px 0 18px",
                  color: P.INK,
                }}
              >
                &ldquo;{q}&rdquo;
              </p>
              <figcaption style={{ fontFamily: SANS, fontSize: 12, color: P.DIM }}>
                <strong style={{ color: P.INK }}>{n}</strong> · {t}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
