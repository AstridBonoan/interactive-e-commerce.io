import type { RoomId } from "@/types/store";

export const CABIN_ART = {
  src: "/apartment/cabin-cutaway.png",
  width: 1536,
  height: 1024,
} as const;

export type CabinViewId = "house" | RoomId;

export type CabinView = {
  x: number;
  y: number;
  width: number;
  height: number;
  fit: "contain" | "cover";
};

export const CABIN_VIEWS: Record<CabinViewId, CabinView> = {
  house: { x: 0, y: 0, width: 1536, height: 1024, fit: "contain" },
  "room-1": { x: 24, y: 16, width: 590, height: 500, fit: "contain" },
  "room-2": { x: 500, y: 10, width: 520, height: 500, fit: "contain" },
  "room-3": { x: 910, y: 10, width: 610, height: 510, fit: "contain" },
  "room-4": { x: 8, y: 490, width: 650, height: 520, fit: "contain" },
  "room-5": { x: 800, y: 478, width: 720, height: 430, fit: "contain" },
};

export const ROOM_SIGNS: Record<RoomId, { x: number; y: number; width: number; height: number }> = {
  "room-1": { x: 40, y: 16, width: 220, height: 40 },
  "room-2": { x: 608, y: 8, width: 180, height: 40 },
  "room-3": { x: 1070, y: 8, width: 172, height: 40 },
  "room-4": { x: 46, y: 530, width: 186, height: 38 },
  "room-5": { x: 1008, y: 510, width: 192, height: 38 },
};

export function isCabinViewId(value: string | null | undefined): value is CabinViewId {
  return value === "house" || value === "room-1" || value === "room-2" || value === "room-3" || value === "room-4" || value === "room-5";
}

export function fitCabinView(
  view: CabinView,
  stage: { width: number; height: number },
) {
  const scaleX = stage.width / view.width;
  const scaleY = stage.height / view.height;
  const scale = view.fit === "cover" ? Math.max(scaleX, scaleY) : Math.min(scaleX, scaleY);
  return {
    scale,
    x: -view.x * scale + (stage.width - view.width * scale) / 2,
    y: -view.y * scale + (stage.height - view.height * scale) / 2,
  };
}
