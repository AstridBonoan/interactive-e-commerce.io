"use client";

import { StoreHeader } from "@/components/store/StoreChrome";
import { money } from "@/data/catalog";
import { useAuth } from "@/lib/auth-context";
import { useCatalog } from "@/lib/catalog-context";
import Link from "next/link";

export default function AccountPage() {
  const { user, enabled } = useAuth();
  const { catalog } = useCatalog();
  const orders = catalog.orders.filter((order) => !user || order.email === user.email);

  return (
    <main className="page-shell">
      <StoreHeader />
      <h1 className="display-title text-4xl">Account</h1>
      <p className="mt-2 text-[var(--ink-soft)]">
        {enabled && user ? `Hello, ${user.email}` : "Local orders from this browser appear here."}
      </p>
      <div className="mt-6 space-y-3">
        {orders.length === 0 ? (
          <div className="panel-card">
            <p>No orders yet.</p>
            <Link className="ink-button mt-4 inline-block" href="/shop/">
              Browse
            </Link>
          </div>
        ) : (
          orders.map((order) => (
            <article key={order.id} className="panel-card">
              <p className="eyebrow">{order.status}</p>
              <h2 className="display-title text-2xl">{order.id}</h2>
              <p>{money(order.totalCents)}</p>
              <p className="text-sm text-[var(--ink-soft)]">{order.items.map((item) => item.name).join(", ")}</p>
            </article>
          ))
        )}
      </div>
    </main>
  );
}
