"use client";

import { motion } from "framer-motion";
import { GrainOverlay, RoomDefs, ink } from "@/components/apartment/primitives";
import type { RoomId } from "@/types/store";
import { useEffect, useState } from "react";

export function RoomScene({ roomId }: { roomId: RoomId }) {
  switch (roomId) {
    case "room-1":
      return <LivingRoom />;
    case "room-2":
      return <Bedroom />;
    case "room-3":
      return <Kitchen />;
    case "room-4":
      return <Den />;
    case "room-5":
      return <Attic />;
    default:
      return <LivingRoom />;
  }
}

function LivingRoom() {
  const [channel, setChannel] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setChannel((value) => (value + 1) % 3), 3400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <svg viewBox="0 0 1600 900" className="h-full w-full" role="img" aria-label="Room 1 sitting room">
      <RoomDefs />
      <rect width="1600" height="900" fill="#d9b48a" />
      <path d="M0 0h1600v520H0z" fill="url(#wall-paper)" />
      <path d="M0 520h1600v380H0z" fill="url(#wood-floor)" />
      <path d="M0 510h1600" {...ink} />

      <rect x="760" y="96" width="220" height="250" fill="url(#dusk-sky)" {...ink} />
      <SwayCurtain x={750} y={90} color="#c45c4a" />
      <SwayCurtain x={930} y={90} color="#c45c4a" />
      <rect x="808" y="150" width="70" height="28" fill="#f4e8c8" {...ink} />

      <Door x={70} y={230} label="2" />
      <Door x={1415} y={226} label="3" />
      <g transform="translate(980 206)">
        <rect width="120" height="236" fill="#6d4a30" {...ink} />
        <rect x="14" y="16" width="92" height="200" fill="#4f7a6d" {...ink} />
        <text x="60" y="120" textAnchor="middle" fill="#f4e8c8" fontSize="18" fontFamily="Pangolin, cursive">
          4
        </text>
      </g>
      <g transform="translate(1160 28)">
        <path d="M20 90L90 8l90 82" fill="#8a6238" {...ink} />
        <rect x="46" y="90" width="88" height="18" fill="#6b4424" {...ink} />
        <text x="90" y="78" textAnchor="middle" fill="#f4e8c8" fontSize="16" fontFamily="Pangolin, cursive">
          5
        </text>
      </g>

      <rect x="1078" y="132" width="136" height="168" fill="#2c3a4a" {...ink} />
      <circle cx="1146" cy="200" r="28" fill="#e8d2a0" />
      <path d="M1110 250c40-30 80 10 90-20" fill="none" stroke="#f0c48a" strokeWidth="3" />

      <g transform="translate(250 276)">
        <motion.g
          animate={{ opacity: [0.75, 1, 0.82, 1, 0.7] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        >
          <path d="M18 8h42l28 54H0z" fill="#f3d27a" {...ink} />
        </motion.g>
        <path d="M36 62v250" {...ink} />
        <ellipse cx="38" cy="318" rx="36" ry="10" fill="#8a5a32" {...ink} />
      </g>

      <g transform="translate(150 298)">
        <motion.g
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "40px 0px" }}
        >
          <path d="M8 8l28-10 26 18 8 120-28 8-32-8z" fill="#3d4a3a" {...ink} />
        </motion.g>
        <circle cx="18" cy="8" r="6" fill="#8a5a32" {...ink} />
      </g>

      <g transform="translate(360 470)">
        <path d="M0 70c40-80 360-80 400 0v70H0z" fill="#7a4a3a" {...ink} />
        <path d="M20 40c20-40 80-40 90 8" fill="#8d5846" {...ink} />
        <path d="M300 40c20-40 80-40 90 8" fill="#8d5846" {...ink} />
        <motion.g
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M70 8c30-20 90-10 110 16l-8 40H86z" fill="#4a3b2f" {...ink} />
        </motion.g>
        <path d="M200 28c18 0 28 10 34 22" fill="none" stroke="#2b1c12" strokeWidth="6" />
      </g>

      <g transform="translate(690 328)">
        <rect width="224" height="188" fill="#5a3a24" {...ink} />
        <rect x="16" y="16" width="192" height="120" fill={["#7ea7b8", "#5a7a4a", "#c45c4a"][channel]} {...ink} />
        {channel === 0 && <path d="M40 90c40-30 80 10 140-20" fill="none" stroke="#f4e8c8" strokeWidth="4" />}
        {channel === 1 && <circle cx="112" cy="76" r="22" fill="#f3d27a" />}
        {channel === 2 && (
          <g fill="#f4e8c8">
            <circle cx="70" cy="70" r="8" />
            <circle cx="150" cy="50" r="5" />
            <circle cx="120" cy="90" r="4" />
          </g>
        )}
        <rect x="70" y="148" width="84" height="22" fill="#3d2818" {...ink} />
      </g>

      <ellipse cx="330" cy="728" rx="58" ry="18" fill="#e6d2a8" {...ink} />
      <path d="M286 718c20-16 50-12 70-2" fill="none" stroke="#2b1c12" strokeWidth="3" />

      <Plant x={1280} y={430} />
      <g transform="translate(620 640)">
        <ellipse cx="70" cy="40" rx="90" ry="18" fill="#8a3a2a" {...ink} />
        <rect x="20" y="8" width="36" height="28" fill="#1a120c" {...ink} />
        <rect x="64" y="4" width="36" height="32" fill="#2b1c12" {...ink} />
      </g>
      <GrainOverlay />
    </svg>
  );
}

function Bedroom() {
  return (
    <svg viewBox="0 0 1600 900" className="h-full w-full" role="img" aria-label="Room 2 wardrobe">
      <RoomDefs />
      <rect width="1600" height="900" fill="#c9b48c" />
      <rect width="1600" height="540" fill="#e0c49a" />
      <g opacity="0.35">
        {Array.from({ length: 18 }).map((_, index) => (
          <rect key={index} x={index * 90} width="40" height="540" fill="#d2a878" />
        ))}
      </g>
      <rect y="540" width="1600" height="360" fill="url(#wood-floor)" />
      <path d="M0 540h1600" {...ink} />

      <rect x="90" y="110" width="200" height="240" fill="url(#dusk-sky)" {...ink} />
      <SwayCurtain x={80} y={104} color="#4a6b66" />
      <SwayCurtain x={236} y={104} color="#4a6b66" />

      <g transform="translate(220 250)">
        <rect width="620" height="360" fill="#6b4428" {...ink} />
        <rect x="16" y="16" width="180" height="328" fill="#ead4b0" {...ink} />
        <rect x="214" y="16" width="180" height="328" fill="#ead4b0" {...ink} />
        <rect x="412" y="16" width="190" height="328" fill="#ead4b0" {...ink} />
        <motion.g animate={{ rotate: [-1.5, 1.5, -1.5] }} transition={{ duration: 5, repeat: Infinity }} style={{ transformOrigin: "80px 20px" }}>
          <path d="M40 80l40-20 36 20v130H40z" fill="#b85c38" {...ink} />
        </motion.g>
        <path d="M250 50l36-16 34 16v140H250z" fill="#5a7a4a" {...ink} />
        <path d="M450 60l40-18 40 18v148H450z" fill="#4a3b2f" {...ink} />
        <path d="M170 300h150l10 40H170z" fill="#c4a06a" {...ink} />
      </g>

      <g transform="translate(900 300)">
        <rect width="280" height="280" fill="#8a5a38" {...ink} />
        <rect x="18" y="18" width="244" height="160" fill="#d7b88a" {...ink} />
        <circle cx="140" cy="200" r="18" fill="#e6b54a" {...ink} />
        <g transform="translate(80 40)">
          <rect width="40" height="48" fill="#f4e8c8" {...ink} />
          <rect x="48" width="40" height="48" fill="#d9c4a0" {...ink} />
          <rect x="96" width="40" height="48" fill="#f0d8b0" {...ink} />
        </g>
      </g>

      <g transform="translate(960 230)">
        <ellipse cx="36" cy="48" rx="34" ry="12" fill="#5a3a2a" {...ink} />
        <path d="M14 46c6-34 44-34 50 0" fill="#8b3a2a" {...ink} />
      </g>

      <g transform="translate(1100 290)">
        <motion.g animate={{ rotate: [1, -2, 1] }} transition={{ duration: 6, repeat: Infinity }} style={{ transformOrigin: "40px 0px" }}>
          <path d="M10 10l34-16 36 20 6 150-40 10-36-8z" fill="#3d4a3a" {...ink} />
        </motion.g>
      </g>

      <g transform="translate(1180 676)">
        <ellipse cx="50" cy="22" rx="56" ry="16" fill="#e6d2a8" {...ink} />
      </g>

      <g transform="translate(1380 154)">
        <rect width="92" height="42" fill="#7a1f1f" {...ink} />
        <motion.text
          x="46"
          y="28"
          textAnchor="middle"
          fill="#ff6b5a"
          fontSize="13"
          fontFamily="Pangolin, cursive"
          animate={{ opacity: [1, 0.35, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          RECORDING
        </motion.text>
      </g>

      <Door x={1418} y={228} label="1" />
      <g transform="translate(860 620)">
        <ellipse cx="90" cy="50" rx="160" ry="24" fill="#7a4a3a" {...ink} />
        <rect x="40" y="10" width="180" height="28" fill="#9a6250" {...ink} />
      </g>
      <Plant x={40} y={500} />
      <GrainOverlay />
    </svg>
  );
}

function Kitchen() {
  return (
    <svg viewBox="0 0 1600 900" className="h-full w-full" role="img" aria-label="Room 3 kitchen">
      <RoomDefs />
      <rect width="1600" height="900" fill="#d8c29a" />
      <rect width="1600" height="500" fill="url(#sage-wall)" />
      <rect y="500" width="1600" height="400" fill="#d7c2a0" />
      {Array.from({ length: 14 }).map((_, index) => (
        <rect key={index} x={index * 120} y="500" width="118" height="70" fill={index % 2 ? "#eee4cc" : "#e4d4b0"} {...ink} />
      ))}
      <rect y="570" width="1600" height="330" fill="url(#wood-floor)" />

      <rect x="180" y="90" width="210" height="230" fill="url(#dusk-sky)" {...ink} />
      <SwayCurtain x={170} y={86} color="#e6b54a" />
      <SwayCurtain x={336} y={86} color="#e6b54a" />

      <rect x="160" y="300" width="980" height="210" fill="#8a6238" {...ink} />
      <rect x="176" y="316" width="948" height="36" fill="#c4a06a" {...ink} />

      <g transform="translate(250 298)">
        <motion.g animate={{ opacity: [0.7, 1, 0.8] }} transition={{ duration: 2.4, repeat: Infinity }}>
          <path d="M10 10h28l16 36H0z" fill="#f3d27a" {...ink} />
        </motion.g>
        <path d="M18 46v70" {...ink} />
      </g>

      <g transform="translate(430 328)">
        <rect width="108" height="108" rx="8" fill="#4a3a32" {...ink} />
        <rect x="14" y="-28" width="46" height="30" fill="#d7b88a" {...ink} />
        <path d="M40 40h20v36H40z" fill="#7a3b22" />
      </g>
      <g transform="translate(580 338)">
        <path d="M8 40c0-34 64-34 64 8v36H8z" fill="#c4783a" {...ink} />
        <path d="M72 54c20 0 22 20 6 24" fill="none" {...ink} />
      </g>
      <g transform="translate(700 358)">
        <rect width="100" height="68" rx="10" fill="#d4a574" {...ink} />
        <rect x="16" y="-16" width="24" height="18" fill="#7a3b22" {...ink} />
        <rect x="50" y="-16" width="24" height="18" fill="#7a3b22" {...ink} />
      </g>
      <g transform="translate(980 348)">
        <rect width="82" height="58" rx="12" fill="#d9a25a" {...ink} />
        <circle cx="62" cy="30" r="10" fill="#f4e8c8" />
      </g>

      <g transform="translate(1160 210)">
        <rect width="180" height="300" rx="10" fill="#cfd6c4" {...ink} />
        <rect x="16" y="16" width="148" height="160" fill="#9aaa7c" {...ink} />
        <g fill="#c45c4a">
          <circle cx="50" cy="60" r="10" />
          <rect x="80" y="48" width="50" height="18" rx="4" />
          <circle cx="54" cy="100" r="8" fill="#e6b54a" />
          <rect x="90" y="92" width="40" height="16" fill="#2c3a4a" />
        </g>
      </g>

      <g transform="translate(210 428)">
        <rect width="68" height="46" fill="#7a3b22" {...ink} />
        <path d="M8 8h52" stroke="#f4e8c8" />
      </g>

      {["#4a6b66", "#c45c4a", "#e6b54a"].map((color, index) => (
        <g key={color} transform={`translate(${760 + index * 70} 210)`}>
          <ellipse cx="20" cy="8" rx="18" ry="6" fill="#8a5a32" {...ink} />
          <path d="M8 8c-6 40 30 40 24 70" fill="none" stroke={color} strokeWidth="6" />
        </g>
      ))}

      <Door x={70} y={228} label="1" />
      <Door x={1426} y={236} label="4" />
      <Plant x={1480} y={500} />
      <GrainOverlay />
    </svg>
  );
}

function Den() {
  return (
    <svg viewBox="0 0 1600 900" className="h-full w-full" role="img" aria-label="Room 4 den">
      <RoomDefs />
      <rect width="1600" height="900" fill="#3d2a1c" />
      <rect width="1600" height="530" fill="url(#den-panel)" />
      <rect y="530" width="1600" height="370" fill="#5a3d28" />
      {Array.from({ length: 20 }).map((_, index) => (
        <path key={index} d={`M0 ${548 + index * 16}h1600`} stroke="#4a2f1e" strokeWidth="2" />
      ))}

      <rect x="200" y="120" width="180" height="210" fill="url(#night-sky)" {...ink} />
      <SwayCurtain x={190} y={114} color="#8b3a32" />
      <circle cx="250" cy="170" r="3" fill="#f4e8c8" />
      <circle cx="310" cy="150" r="2" fill="#f4e8c8" />

      <g transform="translate(640 276)">
        <rect width="286" height="208" fill="#2b1c12" {...ink} />
        <rect x="16" y="16" width="254" height="150" fill="#3d6b66" />
        <motion.g animate={{ opacity: [0.65, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity }}>
          <rect x="40" y="40" width="90" height="60" fill="#f0c48a" />
          <circle cx="190" cy="80" r="18" fill="#e6b54a" />
        </motion.g>
      </g>

      <g transform="translate(260 428)">
        <rect width="88" height="142" rx="8" fill="#7a4a28" {...ink} />
        <circle cx="44" cy="50" r="20" fill="#1a120c" />
        <circle cx="44" cy="100" r="14" fill="#1a120c" />
      </g>
      <g transform="translate(1220 428)">
        <rect width="88" height="142" rx="8" fill="#7a4a28" {...ink} />
        <circle cx="44" cy="50" r="20" fill="#1a120c" />
        <circle cx="44" cy="100" r="14" fill="#1a120c" />
      </g>

      <g transform="translate(980 518)">
        <rect width="150" height="82" rx="8" fill="#8b3a32" {...ink} />
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "52px 42px" }}
        >
          <circle cx="52" cy="42" r="28" fill="#1a120c" />
          <circle cx="52" cy="42" r="6" fill="#e6b54a" />
        </motion.g>
      </g>

      <g transform="translate(1120 558)">
        <rect width="36" height="70" fill="#1a120c" transform="rotate(-12 18 35)" {...ink} />
        <rect x="22" width="36" height="70" fill="#3d4a3a" transform="rotate(8 40 35)" {...ink} />
        <rect x="44" width="36" height="70" fill="#7a1f1f" {...ink} />
      </g>

      <g transform="translate(300 558)">
        <rect width="112" height="62" rx="8" fill="#2c3a4a" {...ink} />
        <rect x="10" y="10" width="92" height="42" fill="#7ea7b8" />
      </g>
      <g transform="translate(420 538)">
        <rect width="70" height="48" rx="10" fill="#d9a25a" {...ink} />
      </g>

      <path d="M430 620c80-40 280-40 360 20v80H430z" fill="#4a2f28" {...ink} />
      <Door x={70} y={220} label="1" />
      <Door x={1420} y={228} label="3" />
      <Plant x={1480} y={470} hue="#2f5a3a" />
      <GrainOverlay />
    </svg>
  );
}

function Attic() {
  return (
    <svg viewBox="0 0 1600 900" className="h-full w-full" role="img" aria-label="Room 5 attic">
      <RoomDefs />
      <rect width="1600" height="900" fill="#c8a878" />
      <path d="M0 220L800 20l800 200v680H0z" fill="#e6d0a8" {...ink} />
      <path d="M0 220L800 20l800 200" fill="none" {...ink} />
      <path d="M0 700h1600v200H0z" fill="url(#attic-plank)" />
      <path d="M180 80v820M1420 80v820" stroke="#8a6238" strokeWidth="18" />

      <rect x="690" y="70" width="160" height="110" fill="url(#dusk-sky)" {...ink} />
      {Array.from({ length: 8 }).map((_, index) => (
        <motion.circle
          key={index}
          cx={220 + index * 150}
          cy={140}
          r="6"
          fill="#f3d27a"
          animate={{ opacity: [0.4, 1, 0.5] }}
          transition={{ duration: 2 + index * 0.2, repeat: Infinity }}
        />
      ))}

      <g transform="translate(900 176)">
        <rect width="124" height="114" fill="#8a5a32" {...ink} />
        <rect x="12" y="12" width="100" height="90" fill="#4a6b66" />
        <path d="M20 70c30-24 60 8 84-16" fill="none" stroke="#f4e8c8" strokeWidth="3" />
      </g>

      <g transform="translate(280 336)">
        <motion.g animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 6, repeat: Infinity }} style={{ transformOrigin: "40px 0px" }}>
          <path d="M8 10l36-16 40 20 8 150-44 12-40-10z" fill="#8a4b2a" {...ink} />
        </motion.g>
      </g>
      <g transform="translate(470 296)">
        <ellipse cx="28" cy="40" rx="28" ry="10" fill="#5a3a2a" {...ink} />
        <path d="M8 38c4-28 36-28 42 0" fill="#3d4a3a" {...ink} />
      </g>
      <g transform="translate(1080 356)">
        <path d="M10 16l28-12 36 16v126c-20 12-52 12-72 0z" fill="#8a5a32" {...ink} />
        <path d="M24 60h20M62 60h20M24 90h20M62 90h20" />
      </g>

      <g transform="translate(560 430)">
        <rect width="280" height="140" fill="#6b4428" {...ink} />
        <g transform="translate(160 8)">
          <motion.g animate={{ opacity: [0.65, 1, 0.75] }} transition={{ duration: 2.2, repeat: Infinity }}>
            <path d="M20 70l16-50 36-8" fill="none" {...ink} />
            <path d="M68 8l32 14-8 18-32-12z" fill="#f3d27a" {...ink} />
          </motion.g>
        </g>
        <rect x="40" y="70" width="90" height="50" fill="#2c3a4a" {...ink} />
        <rect x="56" y="40" width="78" height="18" fill="#7a3b22" {...ink} />
      </g>

      <g transform="translate(60 430)">
        <path d="M0 150h130l-20-150H40z" fill="#8a6238" {...ink} />
        <text x="64" y="80" fill="#f4e8c8" fontSize="16" fontFamily="Pangolin, cursive">
          1
        </text>
      </g>
      <g transform="translate(1310 132)">
        <rect width="46" height="36" fill="#7a1f1f" {...ink} />
      </g>
      <g transform="translate(1240 620)">
        <rect width="90" height="70" fill="#5a3a24" {...ink} />
        <rect x="100" width="70" height="80" fill="#7a4a28" {...ink} />
      </g>
      <GrainOverlay />
    </svg>
  );
}

function Door({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="92" height="258" fill="#6d4a30" {...ink} />
      <rect x="12" y="16" width="68" height="226" fill="#8a6238" {...ink} />
      <circle cx="68" cy="136" r="6" fill="#e6b54a" {...ink} />
      <text x="46" y="132" textAnchor="middle" fill="#f4e8c8" fontSize="20" fontFamily="Pangolin, cursive">
        {label}
      </text>
    </g>
  );
}

function SwayCurtain({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <motion.g
      transform={`translate(${x} ${y})`}
      animate={{ skewX: [-3, 3, -3] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformOrigin: "20px 0px" }}
    >
      <path d="M0 0h46c6 80 4 160-8 250H6z" fill={color} {...ink} />
      <path d="M10 20c10 30-6 60 4 90" fill="none" stroke="#2b1c12" strokeWidth="2" />
    </motion.g>
  );
}

function Plant({ x, y, hue = "#4f7a45" }: { x: number; y: number; hue?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M8 120h54l-8-36H16z" fill="#b85c38" {...ink} />
      <motion.g
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "34px 84px" }}
      >
        <path d="M34 86c-30-70 20-90 2-110 28 20 40 70 8 110z" fill={hue} {...ink} />
        <path d="M34 86c30-60-10-90 16-120-8 40-8 80-16 120z" fill="#6a8f52" {...ink} />
      </motion.g>
    </g>
  );
}
