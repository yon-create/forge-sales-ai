"use client";
import { P } from "./pp/palette";
import { Note, Wave } from "./pp/atoms";

const SERIF = "var(--font-instrument-serif), serif";
const SANS = "var(--font-inter), sans-serif";

type ExchangeProps = {
  name: string;
  role: string;
  time: string;
  ask: string;
  mark: string;
  status: string;
  answer: string;
  chips?: string[];
  accent?: string;
  dark?: boolean;
};

function PExchange({
  name,
  role,
  time,
  ask,
  mark,
  status,
  answer,
  chips,
  accent = P.RED,
  dark = false,
}: ExchangeProps) {
  const bg = dark ? P.INVERT : "transparent";
  const fg = dark ? P.ON_INVERT : P.INK;
  const dim = P.DIM;
  return (
    <article
      style={{
        padding: "48px 6vw",
        borderBottom: `1px solid ${P.INK}`,
        background: bg,
        color: fg,
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
            fontFamily: SANS,
            fontSize: 11,
            letterSpacing: 2,
            color: dim,
          }}
        >
          <span
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 22,
              color: accent,
              fontWeight: 700,
              marginRight: 4,
            }}
          >
            {mark}
          </span>
          <strong style={{ color: fg, letterSpacing: 0, fontWeight: 700, fontSize: 13 }}>{name}</strong>
          <span>· {role}</span>
          <span style={{ flex: 1, height: 1, background: fg, opacity: dark ? 0.2 : 0.12 }} />
          <span>{time}</span>
        </div>

        <p
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(28px, 3.6vw, 52px)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            margin: "0 0 24px",
            color: fg,
          }}
        >
          &ldquo;{ask}&rdquo;
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: 18,
            alignItems: "flex-start",
            padding: "18px 20px",
            border: `1px solid ${dark ? `${P.DIM}55` : P.INK}`,
            borderRadius: 10,
            background: dark ? `${P.DIM}14` : P.CARD,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, paddingTop: 2 }}>
            <Note size={18} color={accent} />
            <span style={{ fontFamily: SANS, fontSize: 9, fontWeight: 700, letterSpacing: 2, color: accent }}>PP</span>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 700, letterSpacing: 2, color: accent }}>
                {status}
              </span>
              <span style={{ flex: 1 }} />
              <Wave bars={36} height={14} color={accent} intensity={1} />
            </div>
            <div
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(20px, 2.4vw, 30px)",
                lineHeight: 1.32,
                color: fg,
                margin: "0 0 14px",
                letterSpacing: "-0.01em",
              }}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
            {chips && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
                {chips.map((c) => (
                  <button
                    key={c}
                    style={{
                      background: "transparent",
                      border: `1px solid ${dark ? `${P.DIM}88` : P.INK}`,
                      color: fg,
                      padding: "6px 12px",
                      borderRadius: 99,
                      fontFamily: SANS,
                      fontSize: 12,
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = accent;
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.borderColor = accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = fg;
                      e.currentTarget.style.borderColor = dark ? `${P.DIM}88` : P.INK;
                    }}
                  >
                    {c} →
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PExchanges() {
  return (
    <>
      <PExchange
        name="Sarah Kim"
        role="AE · 14 days into Acme deal"
        time="14:22 UTC · live call"
        mark="ƒ"
        status="LISTENING · 240ms"
        ask="How do I close Acme this week?"
        answer="<strong>You don&rsquo;t — not this week.</strong> Procurement ghosted Monday. Their CFO liked a competitor on LinkedIn Tuesday. Push and you lose. Send case study C-204 to their VP Eng by Wednesday, loop your CRO Tuesday — P(win) goes 31% → 78%."
        chips={["Draft the email", "Book the CRO", "Why C-204?", "Show me Acme"]}
      />
      <PExchange
        name="Marcus Reid"
        role="VP Sales · Relay Tech"
        time="08:14 EST · Monday"
        mark="mf"
        status="MODELING · 91% confident"
        accent={P.GOLD}
        ask="Will I hit Q2?"
        answer="Yes — if Vantage <em>or</em> Stackline closes, you land at <strong>104% of plan</strong>. If both slip, 91%. The cheap move is booking Vantage&rsquo;s exec sponsor by Thursday."
        chips={["Show me Vantage", "Why is Stackline at risk?", "Email the team", "What about Q3?"]}
      />
      <PExchange
        name="Jordan T."
        role="AE · in a discovery call right now"
        time="11:47 EST · LIVE"
        mark="ƒƒ"
        status="COUNTER · 240ms"
        dark
        ask="They just said the ROI isn't obvious."
        answer="Don&rsquo;t defend. Ask: <em>&ldquo;If we showed +47% close rate in your first quarter — would that change the math?&rdquo;</em> Then pull Relay slide 4. That objection dies at minute 11 in 9 of your last 10 wins."
        chips={["Push the slide", "Show the clip", "Skip — try another"]}
        accent={P.RED}
      />
      <PExchange
        name="Devon W."
        role="New AE · ramping"
        time="Tuesday 10:08"
        mark="p"
        status="STUDYING · 96% match"
        accent={P.GOLD}
        ask="How did Marcus close the Drift deal?"
        answer="He <em>paused.</em> Twice. Three minutes of silence on a 38-min call. He let them sell themselves on urgency. Listen at <strong>14:08</strong> and <strong>22:41</strong> — clips queued."
        chips={["Play the clip", "Show me where I talk too much", "Drill objections"]}
      />
    </>
  );
}
