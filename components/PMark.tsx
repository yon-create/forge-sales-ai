"use client";
import { P } from "./pp/palette";
import { Note } from "./pp/atoms";

export default function PMark() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: P.PAPER,
        borderBottom: `1px solid ${P.INK}`,
        padding: "14px 28px",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        gap: 24,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Note size={20} color={P.RED} />
        <span style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, letterSpacing: 3, fontSize: 13 }}>
          PERFECT PITCH
        </span>
        <span
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontStyle: "italic",
            fontSize: 14,
            color: P.DIM,
            marginLeft: 6,
          }}
        >
          — the sales coach with perfect pitch
        </span>
      </div>
      <nav
        style={{
          display: "flex",
          gap: 24,
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 13,
          fontWeight: 500,
          justifySelf: "center",
        }}
      >
        {["Score", "Rehearsal", "Recital", "Pricing"].map((x) => (
          <a
            key={x}
            href="#"
            style={{
              color: P.INK,
              textDecoration: "none",
              borderBottom: `1px solid transparent`,
              paddingBottom: 2,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = P.INK)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
          >
            {x}
          </a>
        ))}
      </nav>
      <div style={{ justifySelf: "end", display: "flex", alignItems: "center", gap: 10 }}>
        <a href="#" style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: 13, color: P.INK, textDecoration: "none" }}>
          Sign in
        </a>
        <button
          style={{
            background: P.INVERT,
            color: P.ON_INVERT,
            border: "none",
            padding: "9px 16px",
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 600,
            fontSize: 13,
            cursor: "pointer",
            borderRadius: 99,
          }}
        >
          Book a demo →
        </button>
      </div>
    </header>
  );
}
