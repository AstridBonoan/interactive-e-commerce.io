export const ink = {
  stroke: "#2b241c",
  strokeWidth: 3,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

export const thinInk = {
  stroke: "#2b241c",
  strokeWidth: 1.6,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

export const line = {
  stroke: "#2b241c",
  strokeWidth: 1.15,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

export function RoomDefs() {
  return (
    <defs>
      <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#d7e4f2" />
        <stop offset="100%" stopColor="#eef3f8" />
      </linearGradient>
    </defs>
  );
}

export function CleanRoom({
  wall = "#f4efe6",
  floor = "#7c5a36",
}: {
  wall?: string;
  floor?: string;
}) {
  return (
    <g>
      <rect width="1600" height="900" fill={wall} />
      <rect x="0" y="640" width="1600" height="260" fill={floor} />
    </g>
  );
}

export function QuietDoor({
  x,
  y,
  width = 36,
  height = 280,
}: {
  x: number;
  y: number;
  width?: number;
  height?: number;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={width} height={height} fill="#6b4a32" />
      <rect x="6" y="10" width={Math.max(width - 12, 8)} height={height - 20} fill="#7a553b" />
      <circle cx={width - 10} cy={height / 2} r="3.5" fill="#d8c48a" />
    </g>
  );
}
