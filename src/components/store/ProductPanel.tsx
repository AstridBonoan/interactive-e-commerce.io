"use client";

import { ProductArt } from "@/components/art/ProductArt";
import { money } from "@/data/catalog";
import { findVariant, useCart } from "@/lib/cart";
import type { Product } from "@/types/store";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";

type Props = {
  product: Product | null;
  onClose: () => void;
  onBuyNow?: (product: Product, variantId: string, quantity: number) => void;
};

export function ProductPanel({ product, onClose, onBuyNow }: Props) {
  return (
    <AnimatePresence>
      {product ? <PanelBody product={product} onClose={onClose} onBuyNow={onBuyNow} /> : null}
    </AnimatePresence>
  );
}

function PanelBody({
  product,
  onClose,
  onBuyNow,
}: {
  product: Product;
  onClose: () => void;
  onBuyNow?: Props["onBuyNow"];
}) {
  const { add } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [choices, setChoices] = useState<Record<string, string>>(() =>
    Object.fromEntries(product.optionTypes.map((option) => [option.name, option.values[0]])),
  );

  const variant = useMemo(() => {
    return (
      product.variants.find((entry) =>
        Object.entries(choices).every(([key, value]) => entry.options[key] === value),
      ) ?? product.variants[0]
    );
  }, [choices, product.variants]);

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-end justify-center bg-[#1a120c]/45 p-3 sm:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.aside
        className="panel-card relative max-h-[92vh] w-full max-w-3xl overflow-auto"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="absolute right-4 top-4 ink-button px-3 py-1 text-sm" onClick={onClose}>
          Close
        </button>
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <ProductArt kind={product.images[0]} accent={product.accent} className="w-full" />
          <div>
            <p className="eyebrow">{product.kind === "clothing" ? "Clothing" : "Appliance"}</p>
            <h2 className="display-title mt-1 text-3xl">{product.name}</h2>
            <p className="mt-2 text-lg text-[var(--ink-soft)]">{money(variant.priceCents)}</p>
            <p className="mt-4 leading-7">{product.description}</p>
            <p className="mt-3 text-sm italic text-[var(--ink-soft)]">{product.story}</p>

            <div className="mt-5 space-y-3">
              {product.optionTypes.map((option) => (
                <label key={option.id} className="block text-sm">
                  <span className="font-semibold">{option.name}</span>
                  <select
                    className="ink-input mt-1 w-full"
                    value={choices[option.name]}
                    onChange={(event) =>
                      setChoices((current) => ({ ...current, [option.name]: event.target.value }))
                    }
                  >
                    {option.values.map((value) => (
                      <option key={value}>{value}</option>
                    ))}
                  </select>
                </label>
              ))}
              <label className="block text-sm">
                <span className="font-semibold">Quantity</span>
                <input
                  className="ink-input mt-1 w-28"
                  type="number"
                  min={1}
                  max={variant.inventory}
                  value={quantity}
                  onChange={(event) => setQuantity(Number(event.target.value))}
                />
              </label>
              <p className="text-xs text-[var(--ink-soft)]">
                {variant.sku} · {variant.inventory} in the apartment
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                className="ink-button-solid"
                onClick={() => add(product.id, variant.id, quantity)}
              >
                Add to Cart
              </button>
              <button
                className="ink-button"
                onClick={() => {
                  add(product.id, variant.id, quantity);
                  onBuyNow?.(product, variant.id, quantity);
                }}
              >
                Buy Now
              </button>
              <Link className="ink-button" href={`/product/${product.slug}/`}>
                Full page
              </Link>
            </div>
          </div>
        </div>
      </motion.aside>
    </motion.div>
  );
}

export function ProductForm({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  const { add } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [choices, setChoices] = useState<Record<string, string>>(() =>
    Object.fromEntries(product.optionTypes.map((option) => [option.name, option.values[0]])),
  );
  const variant = useMemo(() => {
    return (
      product.variants.find((entry) =>
        Object.entries(choices).every(([key, value]) => entry.options[key] === value),
      ) ?? findVariant(product, product.variants[0].id)
    );
  }, [choices, product]);

  return (
    <div className={compact ? "space-y-3" : "space-y-4"}>
      {product.optionTypes.map((option) => (
        <label key={option.id} className="block text-sm">
          <span className="font-semibold">{option.name}</span>
          <select
            className="ink-input mt-1 w-full"
            value={choices[option.name]}
            onChange={(event) =>
              setChoices((current) => ({ ...current, [option.name]: event.target.value }))
            }
          >
            {option.values.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
      ))}
      <label className="block text-sm">
        <span className="font-semibold">Quantity</span>
        <input
          className="ink-input mt-1 w-28"
          type="number"
          min={1}
          max={variant.inventory}
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
        />
      </label>
      <div className="flex flex-wrap gap-3">
        <button className="ink-button-solid" onClick={() => add(product.id, variant.id, quantity)}>
          Add to Cart
        </button>
        <Link className="ink-button" href="/checkout/">
          Buy Now
        </Link>
      </div>
    </div>
  );
}
