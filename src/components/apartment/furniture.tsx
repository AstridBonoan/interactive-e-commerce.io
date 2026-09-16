"use client";

import { motion } from "framer-motion";
import { ink, thinInk } from "@/components/apartment/primitives";

export function CartoonDoor({
  x,
  y,
  label,
  width = 210,
  height = 360,
}: {
  x: number;
  y: number;
  label?: string;
  width?: number;
  height?: number;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-18" y="-16" width={width + 36} height={height + 28} fill="#5c3a24" {...ink} />
      <rect width={width} height={height} fill="#6e4528" {...ink} />
      <rect x="14" y="18" width={width - 28} height={height - 36} fill="#7a4c2c" {...thinInk} />
      <rect
        x={width / 2 - 22}
        y="56"
        width="44"
        height="44"
        transform={`rotate(45 ${width / 2} 78)`}
        fill="#f3d27a"
        {...thinInk}
      />
      <rect x={width - 36} y={height / 2 - 4} width="22" height="8" rx="3" fill="#d8b56a" {...thinInk} />
      {label ? (
        <text
          x={width / 2}
          y={height / 2 + 70}
          textAnchor="middle"
          fill="#f4e8c8"
          fontSize="22"
          fontFamily="Pangolin, cursive"
        >
          {label}
        </text>
      ) : null}
      <rect x="-28" y={height - 8} width={width + 56} height="18" fill="#8a5a32" {...ink} />
      <rect x="-40" y={height + 8} width={width + 80} height="16" fill="#7a4a28" {...ink} />
    </g>
  );
}

export function OvalRug({ cx, cy, rx = 260, ry = 58, fill = "#f3ead2" }: { cx: number; cy: number; rx?: number; ry?: number; fill?: string }) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} {...ink} />
      <ellipse cx={cx} cy={cy} rx={rx - 28} ry={ry - 16} fill="none" stroke="#d8c8a4" strokeWidth="3" />
    </g>
  );
}

export function HangingShirt({
  x,
  y,
  fill,
  delay = 0,
}: {
  x: number;
  y: number;
  fill: string;
  delay?: number;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <motion.g
        animate={{ rotate: [-1.6, 1.6, -1.6] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay }}
        style={{ transformOrigin: "40px 8px" }}
      >
        <path d="M18 6h44" stroke="#1c1410" strokeWidth="5" />
        <path d="M40 6v18" {...thinInk} fill="none" />
        <path d="M8 28l22-10 10 8 10-8 22 10-8 16v78H16V44z" fill={fill} {...ink} />
        <path d="M40 26v96" stroke="#1c1410" strokeWidth="2.4" />
      </motion.g>
    </g>
  );
}

export function FoldedStack({ x, y, colors }: { x: number; y: number; colors: string[] }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {colors.map((color, index) => (
        <rect
          key={color + index}
          x={index % 2 === 0 ? 0 : 6}
          y={index * 22}
          width="120"
          height="24"
          rx="4"
          fill={color}
          {...ink}
        />
      ))}
    </g>
  );
}

export function StringLights({ y = 78, count = 10 }: { y?: number; count?: number }) {
  return (
    <g>
      <path
        d={`M80 ${y} ${Array.from({ length: count }, (_, index) => `L${120 + index * 140} ${y + (index % 2 ? 16 : -4)}`).join(" ")}`}
        fill="none"
        stroke="#1c1410"
        strokeWidth="3"
      />
      {Array.from({ length: count }).map((_, index) => (
        <motion.circle
          key={index}
          cx={120 + index * 140}
          cy={y + (index % 2 ? 16 : -4)}
          r="8"
          fill="url(#bulb-glow)"
          {...thinInk}
          animate={{ opacity: [0.55, 1, 0.7] }}
          transition={{ duration: 1.8 + index * 0.15, repeat: Infinity }}
        />
      ))}
    </g>
  );
}

export function HangingBulb({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 0v36" {...thinInk} fill="none" />
      <motion.circle
        cx="0"
        cy="48"
        r="12"
        fill="url(#bulb-glow)"
        {...thinInk}
        animate={{ opacity: [0.7, 1, 0.75] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />
    </g>
  );
}

export function WoodBed({
  x,
  y,
  cover = "#f7f1e4",
  width = 360,
}: {
  x: number;
  y: number;
  cover?: string;
  width?: number;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="18" y="70" width={width} height="120" fill={cover} {...ink} />
      <rect x="18" y="50" width="54" height="40" rx="10" fill={cover} {...ink} />
      <rect x={width - 20} y="8" width="22" height="90" fill="#8a5a32" {...ink} />
      <rect x="8" y="168" width="28" height="46" fill="#7a4a28" {...ink} />
      <rect x={width} y="168" width="28" height="46" fill="#7a4a28" {...ink} />
    </g>
  );
}
