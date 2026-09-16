import { LivingMark, type LivingName } from "@/components/art/living-items";

type Props = {
  kind: string;
  accent?: string;
  className?: string;
};

const livingFor: Record<string, LivingName> = {
  hoodie: "hoodie",
  flannel: "shirt",
  henley: "shirt",
  overshirt: "shirt",
  jacket: "shirt",
  pants: "pants",
  shorts: "shorts",
  shoes: "shoes",
  hat: "hat",
  vest: "vest",
  "floor-lamp": "lamp",
  "desk-lamp": "lamp",
  coffee: "coffee",
  speaker: "speaker",
  tv: "tv",
  kettle: "kettle",
  toaster: "toaster",
  "record-player": "turntable",
  radio: "radio",
  book: "book",
  cookbook: "book",
};

export function ProductArt({ kind, className }: Props) {
  const name = livingFor[kind] ?? "shirt";
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-hidden>
      <rect width="100" height="100" rx="14" fill="#f7f3ea" />
      <g transform="translate(8 8) scale(0.84)">
        <LivingMark name={name} />
      </g>
    </svg>
  );
}
