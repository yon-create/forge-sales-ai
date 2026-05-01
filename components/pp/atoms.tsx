"use client";
import { useEffect, useState } from "react";
import { P } from "./palette";

// 5-line sheet-music staff
export function Staff({ height = 80, opacity = 0.18 }: { height?: number; opacity?: number }) {
  return (
    <div style={{ position: "relative", height, width: "100%" }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: `${(i + 0.5) * height / 5}px`,
            height: 1,
            background: P.INK,
            opacity,
          }}
        />
      ))}
    </div>
  );
}

// Animated waveform
export function Wave({
  bars = 42,
  height = 22,
  color = P.INK,
  animated = true,
  intensity = 0.85,
}: {
  bars?: number;
  height?: number;
  color?: string;
  animated?: boolean;
  intensity?: number;
}) {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!animated) return;
    const id = setInterval(() => setT((x) => x + 1), 90);
    return () => clearInterval(id);
  }, [animated]);
  return (
    <svg
      viewBox={`0 0 ${bars * 4} ${height}`}
      preserveAspectRatio="none"
      style={{ width: "100%", height, display: "block" }}
    >
      {Array.from({ length: bars }).map((_, i) => {
        const phase = (i + t) * 0.5;
        const env = Math.sin((i / bars) * Math.PI);
        const h = animated
          ? Math.max(
              2,
              (Math.sin(phase) * 0.45 + Math.sin(phase * 0.31 + 1.7) * 0.45 + 0.55) *
                height *
                0.85 *
                env *
                intensity +
                1,
            )
          : Math.max(2, (Math.sin(i * 0.4) * 0.4 + 0.5) * height * 0.7 * env);
        return <rect key={i} x={i * 4} y={(height - h) / 2} width={2} height={h} fill={color} rx={1} />;
      })}
    </svg>
  );
}

// Music note glyph
export function Note({ size = 18, color = P.INK }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 24 32" fill="none">
      <ellipse cx="8" cy="26" rx="6" ry="4.5" fill={color} transform="rotate(-22 8 26)" />
      <rect x="13" y="4" width="2" height="22" fill={color} />
      <path d="M14 4 C 22 8, 22 14, 16 16" stroke={color} strokeWidth="2" fill="none" />
    </svg>
  );
}
