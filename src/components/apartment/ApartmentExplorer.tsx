"use client";

import { RoomScene } from "@/components/apartment/scenes";
import { EggPanel } from "@/components/store/EggPanel";
import { ProductPanel } from "@/components/store/ProductPanel";
import { RoomRail, StoreHeader } from "@/components/store/StoreChrome";
import { useCatalog } from "@/lib/catalog-context";
import type { EasterEgg, Product, RoomId } from "@/types/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const ROOM_IDS: RoomId[] = ["room-1", "room-2", "room-3", "room-4", "room-5"];

export function ApartmentExplorer({ initialRoom }: { initialRoom?: RoomId }) {
  const params = useSearchParams();
  const router = useRouter();
  const { catalog, productById } = useCatalog();
  const requested = (params.get("room") as RoomId | null) ?? initialRoom ?? "room-1";
  const roomId = ROOM_IDS.includes(requested) ? requested : "room-1";
  const room = catalog.rooms.find((entry) => entry.id === roomId) ?? catalog.rooms[0];

  const [product, setProduct] = useState<Product | null>(null);
  const [egg, setEgg] = useState<EasterEgg | null>(null);
  const [intro, setIntro] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.sessionStorage.getItem("atelier-entered") !== "1";
  });

  const placements = useMemo(
    () => catalog.placements.filter((placement) => placement.roomId === room.id),
    [catalog.placements, room.id],
  );
  const eggs = useMemo(
    () => catalog.easterEggs.filter((entry) => entry.roomId === room.id),
    [catalog.easterEggs, room.id],
  );

  const goTo = (next: RoomId) => {
    router.replace(`/?room=${next}`, { scroll: false });
  };

  return (
    <div className="apartment-shell">
      <StoreHeader roomId={room.id} />
      <div className="apartment-stage">
        <RoomScene roomId={room.id} />
        <svg viewBox="0 0 1600 900" className="absolute inset-0 h-full w-full">
          {placements.map((placement) => {
            const item = productById(placement.productId);
            if (!item) return null;
            return (
              <Hotspot
                key={placement.id}
                x={placement.x}
                y={placement.y}
                width={placement.width}
                height={placement.height}
                label={item.name}
                tone="product"
                onClick={() => setProduct(item)}
              />
            );
          })}
          {eggs.map((entry) => (
            <Hotspot
              key={entry.id}
              x={entry.x}
              y={entry.y}
              width={entry.width}
              height={entry.height}
              label={entry.title}
              tone="egg"
              onClick={() => setEgg(entry)}
            />
          ))}
          {room.connections.map((door) => (
            <Hotspot
              key={`${room.id}-${door.to}`}
              x={door.x}
              y={door.y}
              width={door.width}
              height={door.height}
              label={`Enter ${door.label}`}
              tone="door"
              onClick={() => goTo(door.to)}
            />
          ))}
        </svg>
      </div>
      <RoomRail current={room.id} onSelect={goTo} />
      <ProductPanel
        product={product}
        onClose={() => setProduct(null)}
        onBuyNow={() => router.push("/checkout/")}
      />
      <EggPanel egg={egg} onClose={() => setEgg(null)} />
      {intro ? (
        <button
          className="intro-card"
          onClick={() => {
            window.sessionStorage.setItem("atelier-entered", "1");
            setIntro(false);
          }}
        >
          <p className="eyebrow">Not a game · a store you can walk through</p>
          <h1 className="display-title mt-2 text-4xl">Come in. Look around.</h1>
          <p className="mt-3 max-w-md leading-7">
            Five rooms, clothes left on chairs, appliances that already look lived-with, and a few
            objects that are not for sale. Click what you find.
          </p>
          <p className="mt-5 font-semibold">Tap anywhere to enter {room.subtitle}</p>
        </button>
      ) : null}
    </div>
  );
}

function Hotspot({
  x,
  y,
  width,
  height,
  label,
  tone,
  onClick,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  tone: "product" | "egg" | "door";
  onClick: () => void;
}) {
  const stroke = tone === "egg" ? "#7a1f1f" : tone === "door" ? "#2c4a46" : "#2b1c12";
  return (
    <g className="hotspot" onClick={onClick} role="button" tabIndex={0}>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="14"
        fill={tone === "egg" ? "#c45c4a22" : "#f4e8c814"}
        stroke={stroke}
        strokeWidth="2"
        strokeDasharray={tone === "door" ? "8 6" : "0"}
      />
      <title>{label}</title>
    </g>
  );
}
