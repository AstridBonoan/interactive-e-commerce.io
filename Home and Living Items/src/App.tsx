import { useState } from "react";

// ── SVG ILLUSTRATIONS ──────────────────────────────────────────────

function ShirtSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M30 20 L18 35 L28 38 L28 80 L72 80 L72 38 L82 35 L70 20 L60 26 C57 30 43 30 40 26 Z" fill="#2a2a3e" stroke="#7c3aed" strokeWidth="1.5"/>
      <path d="M40 26 C43 22 50 20 50 20 C50 20 57 22 60 26" stroke="#7c3aed" strokeWidth="1.5" fill="none"/>
      <path d="M18 35 L28 38" stroke="#5b21b6" strokeWidth="1" />
      <path d="M82 35 L72 38" stroke="#5b21b6" strokeWidth="1" />
      <line x1="28" y1="50" x2="72" y2="50" stroke="#3d2a5a" strokeWidth="0.8"/>
      <line x1="28" y1="62" x2="72" y2="62" stroke="#3d2a5a" strokeWidth="0.8"/>
    </svg>
  );
}

function PantsSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M20 20 L80 20 L80 28 L20 28 Z" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.2"/>
      <path d="M20 28 L20 90 L47 90 L50 55 L53 90 L80 90 L80 28 Z" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5"/>
      <line x1="50" y1="28" x2="50" y2="90" stroke="#2563eb" strokeWidth="1.5"/>
      <line x1="20" y1="35" x2="80" y2="35" stroke="#1d4ed8" strokeWidth="0.8"/>
      <circle cx="34" cy="24" r="3" fill="#3b82f6" opacity="0.6"/>
      <rect x="42" y="20" width="16" height="8" rx="1" fill="#1d4ed8" stroke="#3b82f6" strokeWidth="0.8"/>
    </svg>
  );
}

function HoodieSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M35 18 L20 30 L14 50 L26 52 L26 82 L74 82 L74 52 L86 50 L80 30 L65 18 L58 24 C55 28 50 30 50 30 C50 30 45 28 42 24 Z" fill="#1c1c1c" stroke="#e8e4dc" strokeWidth="1.5"/>
      <path d="M42 24 C45 20 47 16 50 16 C53 16 55 20 58 24" fill="#252525" stroke="#e8e4dc" strokeWidth="1.2"/>
      <line x1="50" y1="30" x2="50" y2="82" stroke="#333" strokeWidth="1.2"/>
      <rect x="43" y="45" width="14" height="10" rx="2" fill="#252525" stroke="#555" strokeWidth="0.8"/>
      <path d="M14 50 L26 52" stroke="#444" strokeWidth="1"/>
      <path d="M86 50 L74 52" stroke="#444" strokeWidth="1"/>
      <path d="M42 24 Q38 28 38 35" stroke="#555" strokeWidth="1" fill="none"/>
      <path d="M58 24 Q62 28 62 35" stroke="#555" strokeWidth="1" fill="none"/>
    </svg>
  );
}

function ShortsSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M15 22 L85 22 L85 32 L15 32 Z" fill="#c2410c" stroke="#f97316" strokeWidth="1.2"/>
      <path d="M15 32 L15 72 L46 72 L50 52 L54 72 L85 72 L85 32 Z" fill="#c2410c" stroke="#f97316" strokeWidth="1.5"/>
      <line x1="50" y1="32" x2="50" y2="72" stroke="#ea580c" strokeWidth="1.5"/>
      <line x1="15" y1="40" x2="85" y2="40" stroke="#9a3412" strokeWidth="0.8"/>
      <rect x="44" y="22" width="12" height="10" rx="1" fill="#9a3412" stroke="#f97316" strokeWidth="0.8"/>
      <circle cx="76" cy="27" r="2.5" fill="#f97316" opacity="0.7"/>
    </svg>
  );
}

function LampSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="50" cy="88" rx="20" ry="4" fill="#2a2a2e"/>
      <rect x="48" y="52" width="4" height="36" fill="#888" rx="2"/>
      <path d="M50 52 L50 30" stroke="#888" strokeWidth="3" strokeLinecap="round"/>
      <path d="M50 30 Q70 32 72 18" stroke="#888" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M60 18 Q72 10 84 20" fill="#d4a012" stroke="#f59e0b" strokeWidth="1.5"/>
      <ellipse cx="74" cy="20" rx="10" ry="6" fill="#fbbf24" opacity="0.9"/>
      <ellipse cx="74" cy="20" rx="6" ry="4" fill="#fef3c7"/>
      <radialGradient id="lampGlow" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
      </radialGradient>
      <ellipse cx="74" cy="22" rx="18" ry="14" fill="url(#lampGlow)"/>
      <rect x="36" y="85" width="28" height="4" rx="2" fill="#555"/>
    </svg>
  );
}

function ClosetSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="10" y="8" width="80" height="88" rx="2" fill="#2d2410" stroke="#a16207" strokeWidth="1.5"/>
      <line x1="50" y1="8" x2="50" y2="96" stroke="#a16207" strokeWidth="1.5"/>
      <rect x="10" y="8" width="80" height="12" rx="2" fill="#3d300a" stroke="#a16207" strokeWidth="1.5"/>
      <circle cx="36" cy="52" r="3" fill="#ca8a04" stroke="#fbbf24" strokeWidth="1"/>
      <circle cx="64" cy="52" r="3" fill="#ca8a04" stroke="#fbbf24" strokeWidth="1"/>
      <line x1="36" y1="26" x2="36" y2="26" stroke="#92400e" strokeWidth="1"/>
      <path d="M25 28 L45 28" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M55 28 L75 28" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M28 28 L28 70" stroke="#78350f" strokeWidth="1" opacity="0.5"/>
      <path d="M58 28 L58 70" stroke="#78350f" strokeWidth="1" opacity="0.5"/>
      <rect x="12" y="75" width="36" height="18" rx="1" fill="#1a1008" stroke="#78350f" strokeWidth="0.8"/>
      <rect x="52" y="75" width="36" height="18" rx="1" fill="#1a1008" stroke="#78350f" strokeWidth="0.8"/>
    </svg>
  );
}

function DoorSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="12" y="6" width="76" height="92" rx="2" fill="#1a1008" stroke="#92400e" strokeWidth="1.5"/>
      <rect x="18" y="12" width="64" height="82" rx="2" fill="#2d1f0a" stroke="#a16207" strokeWidth="1.2"/>
      <rect x="22" y="16" width="26" height="32" rx="1" fill="#1a1008" stroke="#78350f" strokeWidth="0.8"/>
      <rect x="52" y="16" width="26" height="32" rx="1" fill="#1a1008" stroke="#78350f" strokeWidth="0.8"/>
      <rect x="22" y="54" width="56" height="34" rx="1" fill="#1a1008" stroke="#78350f" strokeWidth="0.8"/>
      <circle cx="74" cy="52" r="4" fill="#ca8a04" stroke="#fbbf24" strokeWidth="1"/>
      <circle cx="74" cy="52" r="2" fill="#fbbf24"/>
      <rect x="8" y="6" width="6" height="92" rx="1" fill="#3d300a" stroke="#a16207" strokeWidth="1"/>
    </svg>
  );
}

function BedSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="8" y="60" width="84" height="28" rx="3" fill="#1e1e22" stroke="#4b5563" strokeWidth="1.5"/>
      <rect x="8" y="62" width="84" height="14" rx="2" fill="#e8e4dc" stroke="#d1c9be" strokeWidth="1"/>
      <rect x="30" y="55" width="55" height="18" rx="3" fill="#e8e4dc" stroke="#d1c9be" strokeWidth="1"/>
      <rect x="32" y="57" width="51" height="14" rx="2" fill="#fff8f0" stroke="#e5d8c8" strokeWidth="0.8"/>
      <rect x="8" y="30" width="18" height="38" rx="2" fill="#2d2410" stroke="#a16207" strokeWidth="1.2"/>
      <rect x="74" y="30" width="18" height="38" rx="2" fill="#2d2410" stroke="#a16207" strokeWidth="1.2"/>
      <ellipse cx="26" cy="64" rx="12" ry="8" fill="#f0ece4" stroke="#d1c9be" strokeWidth="1"/>
      <rect x="8" y="82" width="8" height="12" rx="1" fill="#1c1c1e" stroke="#374151" strokeWidth="0.8"/>
      <rect x="84" y="82" width="8" height="12" rx="1" fill="#1c1c1e" stroke="#374151" strokeWidth="0.8"/>
    </svg>
  );
}

function MicrophoneSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="38" y="8" width="24" height="42" rx="12" fill="#1c1c1e" stroke="#6b7280" strokeWidth="1.5"/>
      <rect x="40" y="10" width="20" height="38" rx="10" fill="#252528"/>
      <line x1="40" y1="18" x2="60" y2="18" stroke="#374151" strokeWidth="1"/>
      <line x1="40" y1="25" x2="60" y2="25" stroke="#374151" strokeWidth="1"/>
      <line x1="40" y1="32" x2="60" y2="32" stroke="#374151" strokeWidth="1"/>
      <line x1="40" y1="39" x2="60" y2="39" stroke="#374151" strokeWidth="1"/>
      <path d="M28 38 Q28 62 50 62 Q72 62 72 38" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <line x1="50" y1="62" x2="50" y2="80" stroke="#9ca3af" strokeWidth="2"/>
      <line x1="30" y1="80" x2="70" y2="80" stroke="#9ca3af" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="50" cy="28" r="4" fill="#ff2d55" opacity="0.8"/>
    </svg>
  );
}

function HeadphonesSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M20 52 Q20 18 50 18 Q80 18 80 52" stroke="#374151" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <rect x="12" y="48" width="16" height="26" rx="6" fill="#1c1c1e" stroke="#7c3aed" strokeWidth="1.5"/>
      <rect x="14" y="50" width="12" height="22" rx="5" fill="#252528"/>
      <rect x="72" y="48" width="16" height="26" rx="6" fill="#1c1c1e" stroke="#7c3aed" strokeWidth="1.5"/>
      <rect x="74" y="50" width="12" height="22" rx="5" fill="#252528"/>
      <circle cx="20" cy="61" r="5" fill="#7c3aed" opacity="0.5"/>
      <circle cx="80" cy="61" r="5" fill="#7c3aed" opacity="0.5"/>
      <path d="M22 40 Q25 32 35 28" stroke="#4b5563" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M78 40 Q75 32 65 28" stroke="#4b5563" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function TurntableSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="6" y="12" width="88" height="76" rx="4" fill="#141416" stroke="#374151" strokeWidth="1.5"/>
      <circle cx="44" cy="52" r="32" fill="#0a0a0b" stroke="#1f2937" strokeWidth="1"/>
      <circle cx="44" cy="52" r="28" fill="#111113"/>
      <circle cx="44" cy="52" r="22" fill="#1a1a1e" stroke="#374151" strokeWidth="0.5"/>
      <circle cx="44" cy="52" r="14" fill="#0f0f11" stroke="#374151" strokeWidth="0.5"/>
      <circle cx="44" cy="52" r="6" fill="#ff2d55"/>
      <circle cx="44" cy="52" r="3" fill="#1c1c1e"/>
      <circle cx="44" cy="52" r="1" fill="#ff2d55"/>
      <line x1="44" y1="20" x2="44" y2="26" stroke="#374151" strokeWidth="0.8" opacity="0.6"/>
      <line x1="44" y1="78" x2="44" y2="84" stroke="#374151" strokeWidth="0.8" opacity="0.6"/>
      <line x1="12" y1="52" x2="18" y2="52" stroke="#374151" strokeWidth="0.8" opacity="0.6"/>
      <path d="M78 30 L90 38 L82 52" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="82" cy="52" r="3" fill="#e8e4dc"/>
      <rect x="78" y="16" width="14" height="8" rx="2" fill="#1f2937" stroke="#374151" strokeWidth="1"/>
      <circle cx="82" cy="20" r="2" fill="#ff2d55" opacity="0.8"/>
      <circle cx="88" cy="20" r="2" fill="#22c55e" opacity="0.8"/>
    </svg>
  );
}

function LaptopSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="14" y="18" width="72" height="48" rx="3" fill="#1c1c1e" stroke="#374151" strokeWidth="1.5"/>
      <rect x="16" y="20" width="68" height="44" rx="2" fill="#0a0a0f"/>
      <rect x="18" y="22" width="64" height="40" rx="1" fill="#0d0d12"/>
      <circle cx="50" cy="42" r="12" fill="#7c3aed" opacity="0.15"/>
      <circle cx="50" cy="42" r="6" fill="#7c3aed" opacity="0.4"/>
      <circle cx="50" cy="42" r="2" fill="#a78bfa"/>
      <rect x="18" y="28" width="20" height="8" rx="1" fill="#111827" stroke="#1f2937" strokeWidth="0.5"/>
      <line x1="20" y1="30" x2="36" y2="30" stroke="#374151" strokeWidth="0.6"/>
      <line x1="20" y1="32" x2="30" y2="32" stroke="#374151" strokeWidth="0.6"/>
      <line x1="20" y1="34" x2="34" y2="34" stroke="#374151" strokeWidth="0.6"/>
      <rect x="6" y="66" width="88" height="8" rx="2" fill="#252528" stroke="#374151" strokeWidth="1.2"/>
      <rect x="30" y="68" width="40" height="4" rx="2" fill="#1a1a1e"/>
      <circle cx="14" cy="70" r="2" fill="#374151"/>
    </svg>
  );
}

function RecordingSignSVG() {
  return (
    <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full pulse-glow">
      <rect x="2" y="2" width="196" height="56" rx="6" fill="#0a0a0b" stroke="#ff2d55" strokeWidth="2"/>
      <circle cx="20" cy="30" r="8" fill="#ff2d55" opacity="0.9"/>
      <circle cx="20" cy="30" r="5" fill="#ff6b83"/>
      <circle cx="20" cy="30" r="2" fill="#ffffff"/>
      <text x="38" y="40" fontFamily="'Oswald', sans-serif" fontSize="28" fontWeight="700" fill="#ff2d55" letterSpacing="4">
        RECORDING
      </text>
    </svg>
  );
}

// ── ITEM DATA ──────────────────────────────────────────────────────

interface Item {
  id: string;
  label: string;
  category: string;
  color: string;
  SVG: () => JSX.Element;
}

const items: Item[] = [
  { id: "shirt", label: "T-Shirt", category: "Clothing", color: "#7c3aed", SVG: ShirtSVG },
  { id: "pants", label: "Pants", category: "Clothing", color: "#3b82f6", SVG: PantsSVG },
  { id: "hoodie", label: "Hoodie", category: "Clothing", color: "#e8e4dc", SVG: HoodieSVG },
  { id: "shorts", label: "Shorts", category: "Clothing", color: "#f97316", SVG: ShortsSVG },
  { id: "lamp", label: "Floor Lamp", category: "Home", color: "#fbbf24", SVG: LampSVG },
  { id: "closet", label: "Closet", category: "Home", color: "#a16207", SVG: ClosetSVG },
  { id: "door", label: "Door", category: "Home", color: "#92400e", SVG: DoorSVG },
  { id: "bed", label: "Bed", category: "Home", color: "#6b7280", SVG: BedSVG },
  { id: "mic", label: "Microphone", category: "Studio", color: "#ff2d55", SVG: MicrophoneSVG },
  { id: "headphones", label: "Headphones", category: "Studio", color: "#7c3aed", SVG: HeadphonesSVG },
  { id: "turntable", label: "Turntable", category: "Studio", color: "#ff2d55", SVG: TurntableSVG },
  { id: "laptop", label: "Laptop", category: "Studio", color: "#a78bfa", SVG: LaptopSVG },
];

const categories = ["All", "Clothing", "Home", "Studio"];

// ── MAIN APP ───────────────────────────────────────────────────────

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? items
    : items.filter((i) => i.category === activeCategory);

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, #0a0a0b 0%, #0f0a1a 50%, #0a0a0b 100%)", fontFamily: "var(--font-body)" }}
    >
      {/* Header */}
      <header className="border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p
                className="text-xs tracking-widest uppercase mb-1"
                style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
              >
                Studio Catalog — Vol. 01
              </p>
              <h1
                className="text-5xl font-bold tracking-tight leading-none"
                style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
              >
                THE <span style={{ color: "var(--primary)" }}>ROOM</span>
              </h1>
            </div>
            {/* Recording Sign */}
            <div className="w-48 h-14 flicker">
              <RecordingSignSVG />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 text-xs tracking-widest uppercase transition-all duration-200"
                style={{
                  fontFamily: "var(--font-mono)",
                  border: "1px solid",
                  borderRadius: "var(--radius)",
                  borderColor: activeCategory === cat ? "var(--primary)" : "var(--border)",
                  background: activeCategory === cat ? "var(--primary)" : "transparent",
                  color: activeCategory === cat ? "var(--primary-foreground)" : "var(--muted-foreground)",
                  boxShadow: activeCategory === cat ? "0 0 10px #ff2d5550" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          }}
        >
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer transition-all duration-300"
              style={{
                background: "var(--card)",
                border: "1px solid",
                borderColor: hoveredItem === item.id ? item.color : "var(--border)",
                borderRadius: "var(--radius)",
                boxShadow: hoveredItem === item.id
                  ? `0 0 20px ${item.color}30, 0 4px 20px rgba(0,0,0,0.5)`
                  : "0 2px 8px rgba(0,0,0,0.3)",
                transform: hoveredItem === item.id ? "translateY(-4px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Category badge */}
              <div className="absolute top-2 right-2 z-10">
                <span
                  className="text-xs px-1.5 py-0.5 tracking-widest uppercase"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    color: item.color,
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}40`,
                    borderRadius: "2px",
                  }}
                >
                  {item.category}
                </span>
              </div>

              {/* Illustration */}
              <div className="p-6 pb-2" style={{ height: "140px" }}>
                <item.SVG />
              </div>

              {/* Label */}
              <div className="px-4 pb-4 pt-1">
                <p
                  className="text-sm font-semibold tracking-wide"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: hoveredItem === item.id ? item.color : "var(--foreground)",
                    transition: "color 0.2s",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.label}
                </p>
                <div
                  className="mt-2 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: item.color }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer count */}
        <div className="mt-10 pt-6 border-t flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
          <p
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--muted-foreground)" }}
          >
            {filtered.length} items — {activeCategory === "All" ? "full catalog" : activeCategory.toLowerCase()}
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "var(--muted-foreground)" }}
          >
            ◉ ON AIR
          </p>
        </div>
      </main>
    </div>
  );
}
