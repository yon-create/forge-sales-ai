"use client";
import { P } from "./pp/palette";
import { Note } from "./pp/atoms";

const SERIF = "var(--font-instrument-serif), serif";
const SANS = "var(--font-inter), sans-serif";

export default function PPricing() {
  const plans = [
    {
      name: "PIANO",
      notation: "p",
      price: "$89",
      per: "/rep · mo",
      tagline: "Quiet but on key.",
      desc: "Live coaching for a small section.",
      f: [
        "Live AI coaching",
        "Pipe risk scoring",
        "500+ counter library",
        "CRM sync",
        "Email sentiment",
        "Weekly reports",
      ],
    },
    {
      name: "MEZZO",
      notation: "mf",
      price: "$149",
      per: "/rep · mo",
      hi: true,
      tagline: "Full ensemble.",
      desc: "Most teams pick this one.",
      f: [
        "Everything in Piano",
        "Custom AI model",
        "Manager dashboard",
        "Deal-health predictions",
        "Slack & Teams alerts",
        "Priority support",
        "Onboarding specialist",
      ],
    },
    {
      name: "FORTE",
      notation: "ƒƒ",
      price: "Talk",
      per: "with us",
      tagline: "Fill the hall.",
      desc: "For organizations at scale.",
      f: [
        "Everything in Mezzo",
        "Dedicated training",
        "SSO + SCIM",
        "Custom integrations",
        "SLA guarantee",
        "Exec QBRs",
        "Dedicated success",
      ],
    },
  ];
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
          OPUS 5 · PRICING
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
          }}
        >
          Three dynamics. <em style={{ color: P.DIM }}>Pick the volume.</em>
        </h2>
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
          {plans.map((p, i) => (
            <div
              key={p.name}
              style={{
                padding: "28px 26px",
                borderRight: i < 2 ? `1px solid ${P.DIM}33` : "none",
                background: p.hi ? P.INVERT : "transparent",
                color: p.hi ? P.ON_INVERT : P.INK,
                position: "relative",
              }}
            >
              {p.hi && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: 24,
                    background: P.RED,
                    color: "#fff",
                    padding: "4px 12px",
                    borderRadius: 99,
                    fontFamily: SANS,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 2,
                  }}
                >
                  MOST PICKED
                </div>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 36,
                    color: p.hi ? P.GOLD : P.RED,
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {p.notation}
                </span>
                <div>
                  <div style={{ fontFamily: SANS, fontSize: 12, fontWeight: 700, letterSpacing: 3 }}>{p.name}</div>
                  <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 13, color: P.DIM, marginTop: 2 }}>
                    {p.tagline}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 8,
                  marginTop: 18,
                  marginBottom: 14,
                  paddingBottom: 18,
                  borderBottom: `1px solid ${p.hi ? `${P.DIM}55` : `${P.DIM}33`}`,
                }}
              >
                <span style={{ fontFamily: SERIF, fontSize: 48, lineHeight: 0.95 }}>{p.price}</span>
                <span style={{ fontFamily: SANS, fontSize: 12, opacity: 0.6 }}>{p.per}</span>
              </div>
              <p style={{ fontFamily: SANS, fontSize: 13, color: P.DIM, margin: "0 0 16px" }}>{p.desc}</p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 7,
                  fontFamily: SANS,
                  fontSize: 13,
                }}
              >
                {p.f.map((x) => (
                  <li key={x} style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
                    <span style={{ color: p.hi ? P.GOLD : P.RED, fontWeight: 700 }}>•</span> {x}
                  </li>
                ))}
              </ul>
              <button
                style={{
                  width: "100%",
                  background: p.hi ? P.RED : P.INVERT,
                  color: P.ON_INVERT,
                  border: "none",
                  padding: "12px",
                  borderRadius: 99,
                  fontFamily: SANS,
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  letterSpacing: 1.5,
                }}
              >
                {p.name === "FORTE" ? "Talk to sales" : "Book a demo"} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
