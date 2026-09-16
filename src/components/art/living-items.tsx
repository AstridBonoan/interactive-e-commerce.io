export type LivingName =
  | "shirt"
  | "pants"
  | "hoodie"
  | "shorts"
  | "lamp"
  | "closet"
  | "door"
  | "bed"
  | "mic"
  | "headphones"
  | "turntable"
  | "laptop"
  | "recording"
  | "shoes"
  | "hat"
  | "vest"
  | "coffee"
  | "speaker"
  | "tv"
  | "kettle"
  | "toaster"
  | "radio"
  | "book";

const boxes: Record<LivingName, string> = {
  shirt: "0 0 100 100",
  pants: "0 0 100 100",
  hoodie: "0 0 100 100",
  shorts: "0 0 100 100",
  lamp: "0 0 100 100",
  closet: "0 0 100 100",
  door: "0 0 100 100",
  bed: "0 0 100 100",
  mic: "0 0 100 100",
  headphones: "0 0 100 100",
  turntable: "0 0 100 100",
  laptop: "0 0 100 100",
  recording: "0 0 200 60",
  shoes: "0 0 100 100",
  hat: "0 0 100 100",
  vest: "0 0 100 100",
  coffee: "0 0 100 100",
  speaker: "0 0 100 100",
  tv: "0 0 100 100",
  kettle: "0 0 100 100",
  toaster: "0 0 100 100",
  radio: "0 0 100 100",
  book: "0 0 100 100",
};

export function LivingItem({
  name,
  x,
  y,
  width,
  height,
}: {
  name: LivingName;
  x: number;
  y: number;
  width: number;
  height: number;
}) {
  return (
    <svg x={x} y={y} width={width} height={height} viewBox={boxes[name]} fill="none" overflow="visible">
      <LivingMark name={name} />
    </svg>
  );
}

export function LivingMark({ name }: { name: LivingName }) {
  switch (name) {
    case "shirt":
      return (
        <g>
          <path d="M30 20 L18 35 L28 38 L28 80 L72 80 L72 38 L82 35 L70 20 L60 26 C57 30 43 30 40 26 Z" fill="#2a2a3e" stroke="#7c3aed" strokeWidth="1.5" />
          <path d="M40 26 C43 22 50 20 50 20 C50 20 57 22 60 26" stroke="#7c3aed" strokeWidth="1.5" fill="none" />
          <path d="M18 35 L28 38" stroke="#5b21b6" strokeWidth="1" />
          <path d="M82 35 L72 38" stroke="#5b21b6" strokeWidth="1" />
          <line x1="28" y1="50" x2="72" y2="50" stroke="#3d2a5a" strokeWidth="0.8" />
          <line x1="28" y1="62" x2="72" y2="62" stroke="#3d2a5a" strokeWidth="0.8" />
        </g>
      );
    case "pants":
      return (
        <g>
          <path d="M20 20 L80 20 L80 28 L20 28 Z" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.2" />
          <path d="M20 28 L20 90 L47 90 L50 55 L53 90 L80 90 L80 28 Z" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" />
          <line x1="50" y1="28" x2="50" y2="90" stroke="#2563eb" strokeWidth="1.5" />
          <line x1="20" y1="35" x2="80" y2="35" stroke="#1d4ed8" strokeWidth="0.8" />
          <circle cx="34" cy="24" r="3" fill="#3b82f6" opacity="0.6" />
          <rect x="42" y="20" width="16" height="8" rx="1" fill="#1d4ed8" stroke="#3b82f6" strokeWidth="0.8" />
        </g>
      );
    case "hoodie":
      return (
        <g>
          <path d="M35 18 L20 30 L14 50 L26 52 L26 82 L74 82 L74 52 L86 50 L80 30 L65 18 L58 24 C55 28 50 30 50 30 C50 30 45 28 42 24 Z" fill="#1c1c1c" stroke="#e8e4dc" strokeWidth="1.5" />
          <path d="M42 24 C45 20 47 16 50 16 C53 16 55 20 58 24" fill="#252525" stroke="#e8e4dc" strokeWidth="1.2" />
          <line x1="50" y1="30" x2="50" y2="82" stroke="#333" strokeWidth="1.2" />
          <rect x="43" y="45" width="14" height="10" rx="2" fill="#252525" stroke="#555" strokeWidth="0.8" />
          <path d="M14 50 L26 52" stroke="#444" strokeWidth="1" />
          <path d="M86 50 L74 52" stroke="#444" strokeWidth="1" />
          <path d="M42 24 Q38 28 38 35" stroke="#555" strokeWidth="1" fill="none" />
          <path d="M58 24 Q62 28 62 35" stroke="#555" strokeWidth="1" fill="none" />
        </g>
      );
    case "shorts":
      return (
        <g>
          <path d="M15 22 L85 22 L85 32 L15 32 Z" fill="#c2410c" stroke="#f97316" strokeWidth="1.2" />
          <path d="M15 32 L15 72 L46 72 L50 52 L54 72 L85 72 L85 32 Z" fill="#c2410c" stroke="#f97316" strokeWidth="1.5" />
          <line x1="50" y1="32" x2="50" y2="72" stroke="#ea580c" strokeWidth="1.5" />
          <line x1="15" y1="40" x2="85" y2="40" stroke="#9a3412" strokeWidth="0.8" />
          <rect x="44" y="22" width="12" height="10" rx="1" fill="#9a3412" stroke="#f97316" strokeWidth="0.8" />
          <circle cx="76" cy="27" r="2.5" fill="#f97316" opacity="0.7" />
        </g>
      );
    case "lamp":
      return (
        <g>
          <ellipse cx="50" cy="88" rx="20" ry="4" fill="#2a2a2e" />
          <rect x="48" y="52" width="4" height="36" fill="#888" rx="2" />
          <path d="M50 52 L50 30" stroke="#888" strokeWidth="3" strokeLinecap="round" />
          <path d="M50 30 Q70 32 72 18" stroke="#888" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M60 18 Q72 10 84 20" fill="#d4a012" stroke="#f59e0b" strokeWidth="1.5" />
          <ellipse cx="74" cy="20" rx="10" ry="6" fill="#fbbf24" opacity="0.9" />
          <ellipse cx="74" cy="20" rx="6" ry="4" fill="#fef3c7" />
          <ellipse cx="74" cy="22" rx="18" ry="14" fill="#fbbf24" opacity="0.25" />
          <rect x="36" y="85" width="28" height="4" rx="2" fill="#555" />
        </g>
      );
    case "closet":
      return (
        <g>
          <rect x="10" y="8" width="80" height="88" rx="2" fill="#2d2410" stroke="#a16207" strokeWidth="1.5" />
          <line x1="50" y1="8" x2="50" y2="96" stroke="#a16207" strokeWidth="1.5" />
          <rect x="10" y="8" width="80" height="12" rx="2" fill="#3d300a" stroke="#a16207" strokeWidth="1.5" />
          <circle cx="36" cy="52" r="3" fill="#ca8a04" stroke="#fbbf24" strokeWidth="1" />
          <circle cx="64" cy="52" r="3" fill="#ca8a04" stroke="#fbbf24" strokeWidth="1" />
          <path d="M25 28 L45 28" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M55 28 L75 28" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M28 28 L28 70" stroke="#78350f" strokeWidth="1" opacity="0.5" />
          <path d="M58 28 L58 70" stroke="#78350f" strokeWidth="1" opacity="0.5" />
          <rect x="12" y="75" width="36" height="18" rx="1" fill="#1a1008" stroke="#78350f" strokeWidth="0.8" />
          <rect x="52" y="75" width="36" height="18" rx="1" fill="#1a1008" stroke="#78350f" strokeWidth="0.8" />
        </g>
      );
    case "door":
      return (
        <g>
          <rect x="12" y="6" width="76" height="92" rx="2" fill="#1a1008" stroke="#92400e" strokeWidth="1.5" />
          <rect x="18" y="12" width="64" height="82" rx="2" fill="#2d1f0a" stroke="#a16207" strokeWidth="1.2" />
          <rect x="22" y="16" width="26" height="32" rx="1" fill="#1a1008" stroke="#78350f" strokeWidth="0.8" />
          <rect x="52" y="16" width="26" height="32" rx="1" fill="#1a1008" stroke="#78350f" strokeWidth="0.8" />
          <rect x="22" y="54" width="56" height="34" rx="1" fill="#1a1008" stroke="#78350f" strokeWidth="0.8" />
          <circle cx="74" cy="52" r="4" fill="#ca8a04" stroke="#fbbf24" strokeWidth="1" />
          <circle cx="74" cy="52" r="2" fill="#fbbf24" />
          <rect x="8" y="6" width="6" height="92" rx="1" fill="#3d300a" stroke="#a16207" strokeWidth="1" />
        </g>
      );
    case "bed":
      return (
        <g>
          <rect x="8" y="60" width="84" height="28" rx="3" fill="#1e1e22" stroke="#4b5563" strokeWidth="1.5" />
          <rect x="8" y="62" width="84" height="14" rx="2" fill="#e8e4dc" stroke="#d1c9be" strokeWidth="1" />
          <rect x="30" y="55" width="55" height="18" rx="3" fill="#e8e4dc" stroke="#d1c9be" strokeWidth="1" />
          <rect x="32" y="57" width="51" height="14" rx="2" fill="#fff8f0" stroke="#e5d8c8" strokeWidth="0.8" />
          <rect x="8" y="30" width="18" height="38" rx="2" fill="#2d2410" stroke="#a16207" strokeWidth="1.2" />
          <rect x="74" y="30" width="18" height="38" rx="2" fill="#2d2410" stroke="#a16207" strokeWidth="1.2" />
          <ellipse cx="26" cy="64" rx="12" ry="8" fill="#f0ece4" stroke="#d1c9be" strokeWidth="1" />
          <rect x="8" y="82" width="8" height="12" rx="1" fill="#1c1c1e" stroke="#374151" strokeWidth="0.8" />
          <rect x="84" y="82" width="8" height="12" rx="1" fill="#1c1c1e" stroke="#374151" strokeWidth="0.8" />
        </g>
      );
    case "mic":
      return (
        <g>
          <rect x="38" y="8" width="24" height="42" rx="12" fill="#1c1c1e" stroke="#6b7280" strokeWidth="1.5" />
          <rect x="40" y="10" width="20" height="38" rx="10" fill="#252528" />
          <line x1="40" y1="18" x2="60" y2="18" stroke="#374151" strokeWidth="1" />
          <line x1="40" y1="25" x2="60" y2="25" stroke="#374151" strokeWidth="1" />
          <line x1="40" y1="32" x2="60" y2="32" stroke="#374151" strokeWidth="1" />
          <line x1="40" y1="39" x2="60" y2="39" stroke="#374151" strokeWidth="1" />
          <path d="M28 38 Q28 62 50 62 Q72 62 72 38" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" />
          <line x1="50" y1="62" x2="50" y2="80" stroke="#9ca3af" strokeWidth="2" />
          <line x1="30" y1="80" x2="70" y2="80" stroke="#9ca3af" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="28" r="4" fill="#ff2d55" opacity="0.8" />
        </g>
      );
    case "headphones":
      return (
        <g>
          <path d="M20 52 Q20 18 50 18 Q80 18 80 52" stroke="#374151" strokeWidth="4" fill="none" strokeLinecap="round" />
          <rect x="12" y="48" width="16" height="26" rx="6" fill="#1c1c1e" stroke="#7c3aed" strokeWidth="1.5" />
          <rect x="14" y="50" width="12" height="22" rx="5" fill="#252528" />
          <rect x="72" y="48" width="16" height="26" rx="6" fill="#1c1c1e" stroke="#7c3aed" strokeWidth="1.5" />
          <rect x="74" y="50" width="12" height="22" rx="5" fill="#252528" />
          <circle cx="20" cy="61" r="5" fill="#7c3aed" opacity="0.5" />
          <circle cx="80" cy="61" r="5" fill="#7c3aed" opacity="0.5" />
          <path d="M22 40 Q25 32 35 28" stroke="#4b5563" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M78 40 Q75 32 65 28" stroke="#4b5563" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
      );
    case "turntable":
      return (
        <g>
          <rect x="6" y="12" width="88" height="76" rx="4" fill="#141416" stroke="#374151" strokeWidth="1.5" />
          <circle cx="44" cy="52" r="32" fill="#0a0a0b" stroke="#1f2937" strokeWidth="1" />
          <circle cx="44" cy="52" r="28" fill="#111113" />
          <circle cx="44" cy="52" r="22" fill="#1a1a1e" stroke="#374151" strokeWidth="0.5" />
          <circle cx="44" cy="52" r="14" fill="#0f0f11" stroke="#374151" strokeWidth="0.5" />
          <circle cx="44" cy="52" r="6" fill="#ff2d55" />
          <circle cx="44" cy="52" r="3" fill="#1c1c1e" />
          <circle cx="44" cy="52" r="1" fill="#ff2d55" />
          <path d="M78 30 L90 38 L82 52" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="82" cy="52" r="3" fill="#e8e4dc" />
          <rect x="78" y="16" width="14" height="8" rx="2" fill="#1f2937" stroke="#374151" strokeWidth="1" />
          <circle cx="82" cy="20" r="2" fill="#ff2d55" opacity="0.8" />
          <circle cx="88" cy="20" r="2" fill="#22c55e" opacity="0.8" />
        </g>
      );
    case "laptop":
      return (
        <g>
          <rect x="14" y="18" width="72" height="48" rx="3" fill="#1c1c1e" stroke="#374151" strokeWidth="1.5" />
          <rect x="16" y="20" width="68" height="44" rx="2" fill="#0a0a0f" />
          <rect x="18" y="22" width="64" height="40" rx="1" fill="#0d0d12" />
          <circle cx="50" cy="42" r="12" fill="#7c3aed" opacity="0.15" />
          <circle cx="50" cy="42" r="6" fill="#7c3aed" opacity="0.4" />
          <circle cx="50" cy="42" r="2" fill="#a78bfa" />
          <rect x="18" y="28" width="20" height="8" rx="1" fill="#111827" stroke="#1f2937" strokeWidth="0.5" />
          <rect x="6" y="66" width="88" height="8" rx="2" fill="#252528" stroke="#374151" strokeWidth="1.2" />
          <rect x="30" y="68" width="40" height="4" rx="2" fill="#1a1a1e" />
        </g>
      );
    case "recording":
      return (
        <g>
          <rect x="2" y="2" width="196" height="56" rx="6" fill="#0a0a0b" stroke="#ff2d55" strokeWidth="2" />
          <circle cx="20" cy="30" r="8" fill="#ff2d55" opacity="0.9" />
          <circle cx="20" cy="30" r="5" fill="#ff6b83" />
          <circle cx="20" cy="30" r="2" fill="#ffffff" />
          <text x="38" y="40" fontFamily="Nunito, sans-serif" fontSize="28" fontWeight="700" fill="#ff2d55">
            RECORDING
          </text>
        </g>
      );
    case "shoes":
      return (
        <g>
          <path d="M12 62 C28 42 52 46 78 58 C90 64 92 72 78 78 C48 86 22 80 12 70 Z" fill="#e8e4dc" stroke="#a16207" strokeWidth="1.5" />
          <path d="M22 58 C36 52 50 54 62 60" stroke="#ca8a04" strokeWidth="1.2" fill="none" />
          <circle cx="30" cy="58" r="2" fill="#92400e" />
          <circle cx="40" cy="56" r="2" fill="#92400e" />
        </g>
      );
    case "hat":
      return (
        <g>
          <ellipse cx="50" cy="68" rx="32" ry="8" fill="#5a3a2a" stroke="#a16207" strokeWidth="1.2" />
          <path d="M28 66 C32 38 68 38 72 66" fill="#3d2410" stroke="#a16207" strokeWidth="1.5" />
        </g>
      );
    case "vest":
      return (
        <g>
          <path d="M32 22 L22 34 L26 82 L74 82 L78 34 L68 22 L58 30 C55 34 45 34 42 30 Z" fill="#8a5a32" stroke="#ca8a04" strokeWidth="1.5" />
          <path d="M42 30 L50 82 M58 30 L50 82" stroke="#92400e" strokeWidth="1" />
          <rect x="30" y="48" width="12" height="10" rx="1" fill="#3d2410" />
          <rect x="58" y="48" width="12" height="10" rx="1" fill="#3d2410" />
        </g>
      );
    case "coffee":
      return (
        <g>
          <rect x="28" y="38" width="44" height="42" rx="4" fill="#2d2410" stroke="#a16207" strokeWidth="1.5" />
          <rect x="34" y="22" width="18" height="16" fill="#d7b88a" stroke="#ca8a04" strokeWidth="1" />
          <rect x="44" y="48" width="12" height="18" fill="#7a3b22" />
          <circle cx="62" cy="56" r="4" fill="#f59e0b" />
        </g>
      );
    case "speaker":
      return (
        <g>
          <rect x="30" y="12" width="40" height="76" rx="4" fill="#1c1c1e" stroke="#6b7280" strokeWidth="1.5" />
          <circle cx="50" cy="38" r="12" fill="#111" stroke="#9ca3af" strokeWidth="1" />
          <circle cx="50" cy="66" r="8" fill="#111" stroke="#9ca3af" strokeWidth="1" />
        </g>
      );
    case "tv":
      return (
        <g>
          <rect x="8" y="22" width="84" height="52" rx="4" fill="#16181d" stroke="#374151" strokeWidth="1.5" />
          <rect x="14" y="28" width="72" height="40" fill="#0a0a0f" />
          <circle cx="50" cy="48" r="8" fill="#7c3aed" opacity="0.45" />
          <rect x="46" y="74" width="8" height="8" fill="#16181d" />
        </g>
      );
    case "kettle":
      return (
        <g>
          <path d="M28 48 C28 30 72 30 72 50 L72 72 L28 72 Z" fill="#c4783a" stroke="#ea580c" strokeWidth="1.5" />
          <path d="M72 54 C86 54 88 70 72 70" stroke="#ea580c" strokeWidth="2" fill="none" />
          <rect x="44" y="28" width="12" height="12" fill="#2d2410" />
        </g>
      );
    case "toaster":
      return (
        <g>
          <rect x="18" y="42" width="64" height="32" rx="6" fill="#d4a574" stroke="#ca8a04" strokeWidth="1.5" />
          <rect x="28" y="34" width="14" height="10" fill="#7a3b22" />
          <rect x="48" y="34" width="14" height="10" fill="#7a3b22" />
          <path d="M76 54h8" stroke="#92400e" strokeWidth="2" />
        </g>
      );
    case "radio":
      return (
        <g>
          <rect x="16" y="34" width="68" height="36" rx="8" fill="#d9a25a" stroke="#ca8a04" strokeWidth="1.5" />
          <circle cx="70" cy="52" r="8" fill="#f3ead2" stroke="#92400e" strokeWidth="1" />
          <path d="M24 46h28 M24 56h20" stroke="#92400e" strokeWidth="1.2" />
        </g>
      );
    case "book":
      return (
        <g>
          <rect x="28" y="18" width="48" height="64" fill="#3d6aa5" stroke="#60a5fa" strokeWidth="1.5" />
          <rect x="28" y="18" width="8" height="64" fill="#1e3a5f" />
          <rect x="42" y="28" width="26" height="4" fill="#dbeafe" />
          <rect x="42" y="36" width="20" height="3" fill="#93c5fd" />
        </g>
      );
    default:
      return null;
  }
}
