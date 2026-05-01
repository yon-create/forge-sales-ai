"use client";
import { useEffect, useState } from "react";
import { P } from "./pp/palette";
import { Note, Staff, Wave } from "./pp/atoms";

const SERIF = "var(--font-instrument-serif), serif";
const SANS = "var(--font-inter), sans-serif";

function PScoreCard() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 1500);
    return () => clearInterval(id);
  }, []);
  const cues = [
    { mark: "mf", tag: "CUE", line: "Mirror their last phrase. They want to feel heard.", tone: P.INK },
    { mark: "p", tag: "PAUSE", line: "Wait 4 seconds. Let them fill the silence.", tone: P.DIM },
    {
      mark: "ff",
      tag: "CLOSE",
      line: "Ask: &ldquo;If we showed +47%, would that change the math?&rdquo;",
      tone: P.RED,
    },
    { mark: "mp", tag: "WARN", line: "You&rsquo;re at 64% talk-time. Bring it down.", tone: P.GOLD },
  ];
  return (
    <div style={{ border: `1px solid ${P.INK}`, borderRadius: 14, background: P.CARD, overflow: "hidden" }}>
      <div
        style={{
          padding: "14px 18px",
          borderBottom: `1px solid ${P.INK}`,
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: P.PAPER,
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: P.RED,
            animation: "p-pulse 1.4s ease-in-out infinite",
          }}
        />
        <span style={{ fontFamily: SANS, fontWeight: 700, fontSize: 11, letterSpacing: 2.5 }}>NOW PLAYING</span>
        <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 15, color: P.DIM, marginLeft: 6 }}>
          Sarah K. × Acme Corp · 14:22
        </span>
        <span style={{ flex: 1 }} />
        <span style={{ fontFamily: SANS, fontSize: 11, color: P.DIM, letterSpacing: 1.5 }}>Q2 / WK 6</span>
      </div>

      <div style={{ padding: "18px 18px 8px", position: "relative" }}>
        <Staff height={56} opacity={0.22} />
        <div style={{ position: "absolute", top: 18, left: 18, right: 18, height: 56 }}>
          {[
            { x: "8%", y: 6, c: P.INK },
            { x: "18%", y: 18, c: P.INK },
            { x: "27%", y: 30, c: P.GOLD },
            { x: "38%", y: 14, c: P.INK },
            { x: "48%", y: 8, c: P.INK },
            { x: "57%", y: 24, c: P.RED },
            { x: "67%", y: 18, c: P.INK },
            { x: "76%", y: 12, c: P.INK },
            { x: "86%", y: 30, c: P.GOLD },
          ].map((n, i) => (
            <div key={i} style={{ position: "absolute", left: n.x, top: n.y }}>
              <Note size={14} color={n.c} />
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: SANS,
            fontSize: 10,
            color: P.DIM,
            marginTop: 6,
            letterSpacing: 1.5,
          }}
        >
          <span>00:00</span>
          <span>discovery → demo → close</span>
          <span>14:22</span>
        </div>
      </div>

      <div style={{ borderTop: `1px solid ${P.INK}` }}>
        {cues.map((c, i) => {
          const flash = (t + i) % 4 === 0;
          return (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 60px 1fr",
                gap: 14,
                alignItems: "center",
                padding: "12px 18px",
                borderBottom: i < cues.length - 1 ? `1px solid ${P.DIM}1f` : "none",
                background: flash ? "rgba(232,155,77,0.08)" : "transparent",
                transition: "background 0.4s",
              }}
            >
              <span
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 22,
                  color: c.tone,
                  fontWeight: 700,
                  width: 32,
                  textAlign: "center",
                }}
              >
                {c.mark}
              </span>
              <span
                style={{
                  fontFamily: SANS,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: c.tone,
                  padding: "3px 6px",
                  border: `1px solid ${c.tone}`,
                  borderRadius: 99,
                  textAlign: "center",
                }}
              >
                {c.tag}
              </span>
              <span
                style={{ fontFamily: SANS, fontSize: 13, color: P.INK }}
                dangerouslySetInnerHTML={{ __html: c.line }}
              />
            </div>
          );
        })}
      </div>

      <div
        style={{
          padding: "12px 18px",
          background: P.PAPER,
          borderTop: `1px solid ${P.INK}`,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Wave bars={48} height={18} color={P.RED} />
        <span style={{ fontFamily: SANS, fontSize: 11, color: P.DIM, letterSpacing: 1, whiteSpace: "nowrap" }}>
          240ms latency
        </span>
      </div>
    </div>
  );
}

export default function PHero() {
  return (
    <section style={{ padding: "72px 6vw 56px", borderBottom: `1px solid ${P.INK}`, position: "relative" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 28,
            fontFamily: SANS,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 3,
            color: P.RED,
          }}
        >
          <Note size={14} color={P.RED} />
          OPUS 1 · IN THE KEY OF QUOTA
          <span style={{ flex: 1, height: 1, background: P.INK, opacity: 0.15 }} />
          <span style={{ color: P.DIM, letterSpacing: 2 }}>EST. 2026</span>
        </div>

        <h1
          style={{
            fontFamily: SERIF,
            fontWeight: 400,
            fontSize: "clamp(48px, 6.5vw, 96px)",
            lineHeight: 0.98,
            letterSpacing: "-0.022em",
            margin: "0 0 20px",
            color: P.INK,
          }}
        >
          Every sales call is <em>a performance.</em>
          <br />
          Most reps play it{" "}
          <span style={{ background: P.HIGH, padding: "0 10px", borderRadius: 3, fontStyle: "italic" }}>off-key.</span>
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 48,
            alignItems: "start",
            marginTop: 48,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: SANS,
                fontSize: 17,
                lineHeight: 1.6,
                color: P.INK,
                margin: "0 0 20px",
                maxWidth: 540,
              }}
            >
              <strong>Perfect Pitch</strong> is the AI in every closer&rsquo;s ear &mdash; an always-on conductor that
              listens to the call, hears what your buyer means (not just what they said), and feeds your rep the right
              note at the right tempo.
            </p>
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 21,
                lineHeight: 1.4,
                color: P.DIM,
                margin: "0 0 32px",
                maxWidth: 540,
              }}
            >
              You don&rsquo;t train it. <span style={{ color: P.INK }}>It learns the music your top reps make.</span>
            </p>

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <button
                style={{
                  background: P.INVERT,
                  color: P.ON_INVERT,
                  border: "none",
                  padding: "13px 22px",
                  fontFamily: SANS,
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: "pointer",
                  borderRadius: 99,
                }}
              >
                Book a demo →
              </button>
              <button
                style={{
                  background: "transparent",
                  color: P.INK,
                  border: `1px solid ${P.INK}`,
                  padding: "12px 20px",
                  fontFamily: SANS,
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: "pointer",
                  borderRadius: 99,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: P.RED }} /> Hear a 90-sec call
              </button>
            </div>

            <div
              style={{
                display: "flex",
                gap: 36,
                marginTop: 40,
                paddingTop: 24,
                borderTop: `1px solid ${P.DIM}33`,
              }}
            >
              {[
                ["+47%", "close rate"],
                ["3.2×", "forecast accuracy"],
                ["89%", "rep adoption"],
                ["6 min", "time to first cue"],
              ].map(([v, k]) => (
                <div key={k}>
                  <div style={{ fontFamily: SERIF, fontSize: 30, color: P.INK, lineHeight: 1 }}>{v}</div>
                  <div style={{ fontFamily: SANS, fontSize: 11, color: P.DIM, marginTop: 4, letterSpacing: 0.5 }}>
                    {k}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <PScoreCard />
        </div>
      </div>
    </section>
  );
}
