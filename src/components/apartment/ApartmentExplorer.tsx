"use client";

import { CabinStage } from "@/components/apartment/CabinStage";
import { EggPanel } from "@/components/store/EggPanel";
import { ProductPanel } from "@/components/store/ProductPanel";
import { RoomRail, StoreHeader } from "@/components/store/StoreChrome";
import { ROOM_SIGNS, isCabinViewId, type CabinViewId } from "@/data/cabin";
import { useCatalog } from "@/lib/catalog-context";
import type { EasterEgg, Product, RoomId } from "@/types/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const ROOM_IDS: RoomId[] = ["room-1", "room-2", "room-3", "room-4", "room-5"];

export function ApartmentExplorer({ initialRoom }: { initialRoom?: RoomId }) {
  const params = useSearchParams();
  const router = useRouter();
  const { catalog, productById } = useCatalog();
  const requested = params.get("room") ?? initialRoom ?? "house";
  const viewId: CabinViewId = isCabinViewId(requested) ? requested : "house";
  const roomId = viewId === "house" ? undefined : viewId;

  const [product, setProduct] = useState<Product | null>(null);
  const [egg, setEgg] = useState<EasterEgg | null>(null);
  const [intro, setIntro] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.sessionStorage.getItem("atelier-entered") !== "1";
  });

  const placements = useMemo(() => {
    if (viewId === "house") return catalog.placements;
    return catalog.placements.filter((placement) => placement.roomId === viewId);
  }, [catalog.placements, viewId]);

  const eggs = useMemo(() => {
    if (viewId === "house") return catalog.easterEggs;
    return catalog.easterEggs.filter((entry) => entry.roomId === viewId);
  }, [catalog.easterEggs, viewId]);

  const goTo = (next: CabinViewId) => {
    router.replace(next === "house" ? "/" : `/?room=${next}`, { scroll: false });
  };

  return (
    <div className="apartment-shell">
      <StoreHeader roomId={roomId} caption={viewId === "house" ? "The Cabin" : undefined} />
      <CabinStage viewId={viewId} interactive={!product && !egg}>
        {viewId === "house"
          ? ROOM_IDS.map((id) => {
              const target = catalog.rooms.find((entry) => entry.id === id);
              const box = ROOM_SIGNS[id];
              if (!target) return null;
              return (
                <Hotspot
                  key={`room-${id}`}
                  x={box.x}
                  y={box.y}
                  width={box.width}
                  height={box.height}
                  label={`Enter ${target.subtitle}`}
                  tone="door"
                  interactive={!product && !egg}
                  onClick={() => goTo(id)}
                />
              );
            })
          : null}
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
              interactive={!product && !egg}
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
            interactive={!product && !egg}
            onClick={() => setEgg(entry)}
          />
        ))}
      </CabinStage>
      <RoomRail current={viewId} onSelect={goTo} />
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
          <p className="eyebrow">A store you can walk through</p>
          <h1 className="display-title mt-2 text-4xl">Come in.</h1>
          <p className="mt-3 max-w-md leading-7">
            Five rooms in one cabin. Click a room to step closer, then click anything that looks
            like it might be for sale.
          </p>
          <p className="mt-5 font-semibold">Tap anywhere to enter</p>
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
  interactive,
  onClick,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  tone: "product" | "egg" | "door";
  interactive: boolean;
  onClick: () => void;
}) {
  const radius = Math.min(12, Math.round(Math.min(width, height) / 4));
  return (
    <g
      className={`hotspot hotspot-${tone} ${interactive ? "pointer-events-auto" : "pointer-events-none"}`}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={radius}
        fill="#f4d27a"
        fillOpacity={0.01}
        stroke="transparent"
        pointerEvents="all"
      />
      <title>{label}</title>
      <text
        className="hotspot-label"
        x={x + width / 2}
        y={Math.max(22, y - 10)}
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}
