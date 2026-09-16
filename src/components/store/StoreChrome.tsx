"use client";

import type { CabinViewId } from "@/data/cabin";
import { useAuth } from "@/lib/auth-context";
import { useCart } from "@/lib/cart";
import { useCatalog } from "@/lib/catalog-context";
import type { RoomId } from "@/types/store";
import Link from "next/link";

export function StoreHeader({ roomId, caption }: { roomId?: RoomId; caption?: string }) {
  const { count } = useCart();
  const { catalog } = useCatalog();
  const { user } = useAuth();
  const room = roomId ? catalog.rooms.find((entry) => entry.id === roomId) : null;
  const subtitle = room?.subtitle ?? caption;

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-3 p-4">
      <Link href="/" className="pointer-events-auto rounded-2xl bg-white/70 px-3 py-2 backdrop-blur">
        <p className="display-title text-base">Cedar & Copper</p>
        {subtitle ? <p className="text-xs text-[var(--ink-soft)]">{subtitle}</p> : null}
      </Link>
      <nav className="pointer-events-auto flex flex-wrap justify-end gap-2">
        <Link className="ink-button" href="/shop/">
          Shop
        </Link>
        <Link className="ink-button" href="/discover/">
          Discover
        </Link>
        <Link className="ink-button" href={user ? "/account/" : "/login/"}>
          {user ? "Account" : "Sign in"}
        </Link>
        <Link className="ink-button-solid" href="/cart/">
          Cart {count}
        </Link>
      </nav>
    </header>
  );
}

export function RoomRail({
  current,
  onSelect,
}: {
  current: CabinViewId;
  onSelect: (viewId: CabinViewId) => void;
}) {
  const { catalog } = useCatalog();

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-4">
      <div className="pointer-events-auto mx-auto flex max-w-3xl flex-col items-center gap-2">
        <p className="rounded-full bg-[#2b241c]/90 px-4 py-2 text-center text-sm text-[#f6f2ea]">
          ✦ Explore the cabin — click a room, then click anything interesting
        </p>
        <div className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#f6f2ea]/80 px-2 py-1 text-sm text-[#2b241c]/55 backdrop-blur">
          <button
            onClick={() => onSelect("house")}
            className={`rounded-full px-2.5 py-1 ${
              current === "house" ? "bg-[#2b241c] text-[#f6f2ea]" : "hover:text-[#2b241c]"
            }`}
          >
            House
          </button>
          {catalog.rooms.map((room) => {
            const active = room.id === current;
            return (
              <button
                key={room.id}
                onClick={() => onSelect(room.id)}
                className={`rounded-full px-2.5 py-1 ${
                  active ? "bg-[#2b241c] text-[#f6f2ea]" : "hover:text-[#2b241c]"
                }`}
              >
                {room.subtitle.replace("The ", "")}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
