export const ink = {
  stroke: "#2b1c12",
  strokeWidth: 3,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

export function RoomDefs() {
  return (
    <defs>
      <pattern id="wood-floor" width="48" height="18" patternUnits="userSpaceOnUse">
        <rect width="48" height="18" fill="#c9a06a" />
        <path d="M0 17.5h48" stroke="#8b6232" strokeWidth="1.2" />
        <path d="M12 2c8 2 10 8 4 12" stroke="#b88848" strokeWidth="0.8" fill="none" />
      </pattern>
      <pattern id="wall-paper" width="36" height="42" patternUnits="userSpaceOnUse">
        <rect width="36" height="42" fill="#e6d2ad" />
        <circle cx="18" cy="16" r="4" fill="#d7b88a" />
        <path d="M18 22c6 6-6 10 0 16" stroke="#d2b48c" strokeWidth="1.2" fill="none" />
      </pattern>
      <pattern id="sage-wall" width="28" height="28" patternUnits="userSpaceOnUse">
        <rect width="28" height="28" fill="#9aaa7c" />
        <path d="M0 27h28" stroke="#7e8f62" strokeWidth="1" />
      </pattern>
      <pattern id="den-panel" width="40" height="80" patternUnits="userSpaceOnUse">
        <rect width="40" height="80" fill="#6b4a32" />
        <path d="M2 2h36v76H2z" fill="none" stroke="#4a2f1e" strokeWidth="1.4" />
        <path d="M8 18h24" stroke="#8a6240" strokeWidth="1" />
      </pattern>
      <pattern id="attic-plank" width="80" height="16" patternUnits="userSpaceOnUse">
        <rect width="80" height="16" fill="#c4a074" />
        <path d="M0 15h80" stroke="#8a6238" />
      </pattern>
      <filter id="paper-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" result="n" />
        <feColorMatrix
          in="n"
          type="matrix"
          values="0 0 0 0 0.15  0 0 0 0 0.1  0 0 0 0 0.06  0 0 0 0.12 0"
        />
      </filter>
      <linearGradient id="dusk-sky" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#7ea7b8" />
        <stop offset="100%" stopColor="#f0c48a" />
      </linearGradient>
      <linearGradient id="night-sky" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#1d2a3a" />
        <stop offset="100%" stopColor="#4a5d72" />
      </linearGradient>
    </defs>
  );
}

export function GrainOverlay() {
  return <rect width="1600" height="900" filter="url(#paper-grain)" opacity="0.18" />;
}
