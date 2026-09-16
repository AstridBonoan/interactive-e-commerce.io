"use client";

import { useAuth } from "@/lib/auth-context";
import { useCart } from "@/lib/cart";
import { useCatalog } from "@/lib/catalog-context";
import type { RoomId } from "@/types/store";
import Link from "next/link";

export function StoreHeader({ roomId }: { roomId?: RoomId }) {
  const { count } = useCart();
  const { catalog } = useCatalog();
  const { user } = useAuth();
  const room = roomId ? catalog.rooms.find((entry) => entry.id === roomId) : null;

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-3 p-3 sm:p-4">
      <Link href="/" className="pointer-events-auto panel-card px-4 py-3">
        <p className="eyebrow">The Apartment</p>
        <p className="display-title text-xl leading-none">Cedar & Copper</p>
        {room ? (
          <p className="mt-1 text-sm text-[var(--ink-soft)]">
            {room.name} · {room.subtitle}
          </p>
        ) : null}
      </Link>
      <nav className="pointer-events-auto flex flex-wrap justify-end gap-2">
        <Link className="ink-button" href="/shop/">
          Shop list
        </Link>
        <Link className="ink-button" href="/discover/">
          Discoveries
        </Link>
        <Link className="ink-button" href={user ? "/account/" : "/login/"}>
          {user ? "Account" : "Sign in"}
        </Link>
        <Link className="ink-button" href="/cms/">
          CMS
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
  current: RoomId;
  onSelect: (roomId: RoomId) => void;
}) {
  const { catalog } = useCatalog();

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-3 sm:p-4">
      <div className="pointer-events-auto mx-auto flex max-w-5xl gap-2 overflow-auto rounded-[28px] bg-[#f4e8c8]/92 p-2 shadow-[0_10px_0_#2b1c12] ring-3 ring-[#2b1c12]">
        {catalog.rooms.map((room) => {
          const active = room.id === current;
          return (
            <button
              key={room.id}
              onClick={() => onSelect(room.id)}
              className={`min-w-[9.5rem] flex-1 rounded-2xl px-3 py-2 text-left ${
                active ? "bg-[#2b1c12] text-[#f4e8c8]" : "bg-[#ead8b0] text-[#2b1c12]"
              }`}
            >
              <p className="text-[11px] uppercase tracking-[0.18em] opacity-80">{room.name}</p>
              <p className="display-title text-lg leading-tight">{room.subtitle}</p>
              <p className="text-xs opacity-80">{room.category}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
