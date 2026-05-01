"use client";
import { P } from "./pp/palette";
import { Note } from "./pp/atoms";

const SERIF = "var(--font-instrument-serif), serif";
const SANS = "var(--font-inter), sans-serif";

export default function PFooter() {
  return (
    <footer
      style={{
        padding: "28px 6vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
        fontFamily: SANS,
        fontSize: 12,
        color: P.DIM,
        background: P.PAPER,
      }}
    >
      <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Note size={14} color={P.RED} />
        <strong style={{ color: P.INK, letterSpacing: 3, fontSize: 13 }}>PERFECT PITCH</strong>
        <em style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 14, marginLeft: 6 }}>
          — the sales coach with perfect pitch.
        </em>
      </span>
      <span style={{ display: "flex", gap: 20 }}>
        <a href="#" style={{ color: P.INK, textDecoration: "none" }}>
          privacy
        </a>
        <a href="#" style={{ color: P.INK, textDecoration: "none" }}>
          terms
        </a>
        <a href="#" style={{ color: P.INK, textDecoration: "none" }}>
          security
        </a>
        <span>© 2026</span>
      </span>
    </footer>
  );
}
