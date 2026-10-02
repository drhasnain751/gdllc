import { Html, OrbitControls } from "@react-three/drei";
import { useMemo } from "react";

const markets = [
  { x: 92, y: 120, label: "United States" },
  { x: 230, y: 104, label: "United Kingdom" },
  { x: 270, y: 128, label: "Germany" },
  { x: 402, y: 224, label: "Australia" },
] as const;

export function Globe() {
  return (
    <div
      style={{
        width: "100%",
        height: 360,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        viewBox="0 0 520 360"
        width="100%"
        height="100%"
        role="img"
        aria-label="Global market map"
        style={{ display: "block" }}
      >
        <defs>
          <radialGradient id="globeGlow" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#1c5d7a" />
            <stop offset="55%" stopColor="#0d2238" />
            <stop offset="100%" stopColor="#071822" />
          </radialGradient>
          <linearGradient id="arcStroke" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#7ce8ff" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#7ce8ff" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#7ce8ff" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        <circle cx="250" cy="180" r="150" fill="url(#globeGlow)" opacity="0.95" />
        <circle cx="250" cy="180" r="150" fill="none" stroke="rgba(124,232,255,0.24)" strokeWidth="1.5" />
        <ellipse cx="250" cy="180" rx="130" ry="100" fill="none" stroke="rgba(124,232,255,0.12)" strokeWidth="1" />
        <ellipse cx="250" cy="180" rx="90" ry="150" fill="none" stroke="rgba(124,232,255,0.1)" strokeWidth="1" />

        {(
          [
            [250, 180, 92, 120],
            [250, 180, 230, 104],
            [250, 180, 270, 128],
            [250, 180, 402, 224],
          ] as [number, number, number, number][]
        ).map((line, index) => (
          <path
            key={index}
            d={`M ${line[0]} ${line[1]} Q ${(line[0] + line[2]) / 2} ${(line[1] + line[3]) / 2 - 30} ${line[2]} ${
              line[3]
            }`}
            fill="none"
            stroke="url(#arcStroke)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.9"
          />
        ))}

        {markets.map(({ x, y, label }) => (
          <g key={label}>
            <circle cx={x} cy={y} r="8" fill="#7ce8ff" opacity="0.95" />
            <circle cx={x} cy={y} r="14" fill="none" stroke="#7ce8ff" strokeOpacity="0.35" />
            <rect
              x={x + 12}
              y={y - 15}
              width={label.length * 7 + 16}
              height="24"
              rx="12"
              fill="rgba(8, 15, 24, 0.8)"
              stroke="rgba(124,232,255,0.2)"
            />
            <text
              x={x + 20}
              y={y + 4}
              fill="#eafcff"
              fontSize="11"
              fontWeight="600"
              letterSpacing="0.08em"
            >
              {label.toUpperCase()}
            </text>
          </g>
        ))}

        <circle cx="250" cy="180" r="24" fill="rgba(124,232,255,0.08)" stroke="rgba(124,232,255,0.22)" />
      </svg>
    </div>
  );
}
