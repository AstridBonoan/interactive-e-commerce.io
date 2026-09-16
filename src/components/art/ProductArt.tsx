import { ink } from "@/components/apartment/primitives";

type Props = {
  kind: string;
  accent?: string;
  className?: string;
};

export function ProductArt({ kind, accent = "#8a5a32", className }: Props) {
  return (
    <svg viewBox="0 0 320 320" className={className} role="img" aria-hidden>
      <rect width="320" height="320" rx="28" fill="#f3e4c4" />
      <path d="M18 40c40-18 80 10 110-6 40-20 90 8 140-8v40H18z" fill="#ead4a6" />
      {artFor(kind, accent)}
    </svg>
  );
}

function artFor(kind: string, accent: string) {
  switch (kind) {
    case "hoodie":
      return (
        <g {...ink} fill={accent}>
          <path d="M110 86c20-28 80-28 100 0l24 28-18 12-16-10v96c0 16-60 16-76 0V116l-16 10-18-12z" />
          <path d="M132 88c18-16 38-16 56 0v22c-18 12-38 12-56 0z" fill="#2b1c12" opacity="0.25" />
          <path d="M148 150h24v36h-24z" fill="#d7b88a" />
        </g>
      );
    case "flannel":
      return (
        <g {...ink}>
          <path
            d="M96 92l28-18 36 16 36-16 28 18 18 28-22 8v96H100V128l-22-8z"
            fill={accent}
          />
          <path d="M160 90v126" stroke="#f3e4c4" strokeWidth="6" />
          <path d="M118 130h84M118 160h84M118 190h84" stroke="#f3e4c4" strokeWidth="4" />
        </g>
      );
    case "jacket":
      return (
        <g {...ink} fill={accent}>
          <path d="M90 96l30-22 40 14 40-14 30 22 20 30-24 10v100H94V136L70 126z" />
          <path d="M160 88v132" />
          <circle cx="128" cy="150" r="5" fill="#e6b54a" />
          <circle cx="128" cy="176" r="5" fill="#e6b54a" />
        </g>
      );
    case "pants":
      return (
        <g {...ink} fill={accent}>
          <path d="M118 80h84l10 30-18 130h-30l-4-90-8 90h-30L104 110z" />
        </g>
      );
    case "shoes":
      return (
        <g {...ink}>
          <path d="M70 190c40-40 90-30 140-8 26 12 50 8 60 20-30 24-150 30-200-12z" fill={accent} />
          <path d="M92 176c20-8 40-6 58 4" fill="none" stroke="#f3e4c4" />
        </g>
      );
    case "hat":
      return (
        <g {...ink} fill={accent}>
          <ellipse cx="160" cy="196" rx="86" ry="18" />
          <path d="M104 190c8-70 104-70 112 0" />
        </g>
      );
    case "henley":
      return (
        <g {...ink} fill={accent}>
          <path d="M108 96l24-16 28 14 28-14 24 16 16 24-20 8v108H112V128l-20-8z" />
          <circle cx="160" cy="130" r="4" fill="#f3e4c4" />
          <circle cx="160" cy="148" r="4" fill="#f3e4c4" />
        </g>
      );
    case "vest":
      return (
        <g {...ink} fill={accent}>
          <path d="M112 92l20-14 28 20 28-20 20 14v140c-24 16-72 16-96 0z" />
          <path d="M128 130h20M172 130h20M128 160h20M172 160h20M128 190h20M172 190h20" />
        </g>
      );
    case "overshirt":
      return (
        <g {...ink} fill={accent}>
          <path d="M94 100l28-20 38 16 38-16 28 20 14 26-18 8v108H98V134l-18-8z" />
          <path d="M118 150h28v50h-28zM174 150h28v50h-28z" fill="#d7b88a" />
        </g>
      );
    case "floor-lamp":
      return (
        <g {...ink}>
          <path d="M150 86h20l30 46H120z" fill="#f3d27a" />
          <path d="M156 132v110" />
          <ellipse cx="160" cy="248" rx="36" ry="8" fill={accent} />
        </g>
      );
    case "coffee":
      return (
        <g {...ink} fill={accent}>
          <rect x="108" y="120" width="104" height="90" rx="8" />
          <rect x="122" y="86" width="50" height="34" fill="#d7b88a" />
          <path d="M150 150h20v40h-20z" fill="#7a3b22" />
        </g>
      );
    case "speaker":
      return (
        <g {...ink} fill={accent}>
          <rect x="118" y="70" width="84" height="180" rx="10" />
          <circle cx="160" cy="130" r="22" fill="#2b1c12" />
          <circle cx="160" cy="196" r="16" fill="#2b1c12" />
        </g>
      );
    case "tv":
      return (
        <g {...ink}>
          <rect x="60" y="90" width="200" height="130" rx="8" fill="#2c3a4a" />
          <rect x="76" y="104" width="168" height="96" fill="#7ea7b8" />
          <rect x="110" y="220" width="100" height="18" fill={accent} />
        </g>
      );
    case "kettle":
      return (
        <g {...ink} fill={accent}>
          <path d="M120 150c0-40 80-40 80 8v40H120z" />
          <path d="M200 168c24 0 28 24 8 28" fill="none" />
          <rect x="148" y="118" width="20" height="20" fill="#2b1c12" />
        </g>
      );
    case "desk-lamp":
      return (
        <g {...ink}>
          <path d="M150 210h40" />
          <path d="M160 210l20-70 40-10" fill="none" />
          <path d="M210 116l40 18-10 22-40-16z" fill="#f3d27a" />
        </g>
      );
    case "toaster":
      return (
        <g {...ink} fill={accent}>
          <rect x="90" y="150" width="140" height="70" rx="12" />
          <rect x="108" y="136" width="36" height="20" fill="#7a3b22" />
          <rect x="156" y="136" width="36" height="20" fill="#7a3b22" />
          <path d="M210 176h18" />
        </g>
      );
    case "record-player":
      return (
        <g {...ink}>
          <rect x="70" y="120" width="180" height="110" rx="10" fill={accent} />
          <circle cx="150" cy="176" r="36" fill="#1a120c" />
          <circle cx="150" cy="176" r="8" fill="#e6b54a" />
          <path d="M186 140l40 20-8 14-40-18z" fill="#d7b88a" />
        </g>
      );
    case "radio":
      return (
        <g {...ink} fill={accent}>
          <rect x="86" y="130" width="148" height="80" rx="16" />
          <circle cx="196" cy="170" r="16" fill="#f3e4c4" />
          <path d="M108 156h60M108 176h48" />
        </g>
      );
    default:
      return <circle cx="160" cy="160" r="50" fill={accent} {...ink} />;
  }
}
