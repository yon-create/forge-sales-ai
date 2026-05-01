"use client";
import { useState } from "react";
import { P } from "./pp/palette";
import { Note, Staff, Wave } from "./pp/atoms";

const SERIF = "var(--font-instrument-serif), serif";
const SANS = "var(--font-inter), sans-serif";

export default function PEncore() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section
      style={{
        padding: "88px 6vw",
        borderBottom: `1px solid ${P.INK}`,
        background: P.INVERT,
        color: P.ON_INVERT,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
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
          ENCORE
          <span style={{ flex: 1, height: 1, background: P.PAPER, opacity: 0.2 }} />
        </div>
        <h2
          style={{
            fontFamily: SERIF,
            fontWeight: 400,
            fontSize: "clamp(48px, 6vw, 88px)",
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            margin: "0 0 18px",
          }}
        >
          Ready to <em style={{ color: P.GOLD }}>play in tune?</em>
        </h2>
        <p
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: "clamp(18px, 2vw, 24px)",
            color: P.DIM,
            maxWidth: 680,
            margin: "0 0 36px",
            lineHeight: 1.4,
          }}
        >
          30-minute demo. We plug Perfect Pitch into your data, on the screen, and let you ask it anything. No credit
          card. No commitment. No slides.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          style={{
            display: "flex",
            maxWidth: 560,
            border: `1px solid ${P.ON_INVERT}`,
            borderRadius: 99,
            overflow: "hidden",
            background: "transparent",
          }}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="your@company.com"
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              color: P.ON_INVERT,
              padding: "15px 22px",
              fontFamily: SANS,
              fontSize: 14,
              outline: "none",
            }}
          />
          <button
            style={{
              background: P.RED,
              color: "#fff",
              border: "none",
              padding: "0 26px",
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
              letterSpacing: 1.5,
            }}
          >
            {sent ? "✓ SENT" : "BOOK ME →"}
          </button>
        </form>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: 15,
            color: P.DIM,
          }}
        >
          or hum the first three notes &mdash;
          <Wave bars={28} height={16} color={P.GOLD} />
          we&rsquo;ll know what you mean.
        </div>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, opacity: 0.12, pointerEvents: "none" }}>
        <Staff height={140} opacity={1} />
      </div>
    </section>
  );
}
