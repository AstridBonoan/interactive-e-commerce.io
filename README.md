# Cedar & Copper

An illustrated apartment that is also a clothing and appliances store. Visitors walk five rooms, pick up objects that are for sale, and find a few things that are not.

This is not a game. There are no characters, levels, points, or combat. The apartment is the storefront.

Live repository: [AstridBonoan/interactive-e-commerce.io](https://github.com/AstridBonoan/interactive-e-commerce.io)

## Rooms

| Room | Place | Category |
| --- | --- | --- |
| Room 1 | The Sitting Room | Featured finds |
| Room 2 | The Wardrobe | Clothing |
| Room 3 | The Kitchen | Kitchen appliances |
| Room 4 | The Den | Electronics |
| Room 5 | The Attic | Curiosities |

Products sit on sofas, counters, hooks, and desks. Clicking one opens a normal product sheet: art, description, price, variants, quantity, Add to Cart, and Buy Now.

## Stack

- Next.js, React, TypeScript, Tailwind CSS, Framer Motion
- Original SVG room art
- Supabase (PostgreSQL, Storage, Auth)
- Stripe Checkout Sessions
- GitHub Actions deploying a static export to the `gh-pages` branch

GitHub Pages is the primary host. The app is a static export, so there are no Next.js server routes on Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Leave `NEXT_PUBLIC_BASE_PATH` empty locally.

## GitHub Pages

The production workflow is **Deploy from branch → `gh-pages`**.

1. Push to `main`.
2. GitHub Actions builds `output: "export"` and publishes the `out` folder to `gh-pages`.
3. In the repository settings, set Pages to **Deploy from a branch**, branch `gh-pages`, folder `/ (root)`.
4. The project URL will be `https://astridbonoan.github.io/interactive-e-commerce.io/`.

The workflow sets `NEXT_PUBLIC_BASE_PATH=/interactive-e-commerce.io` so asset and route prefixes match a project site. To use a custom domain at the root, set the repository variable `NEXT_PUBLIC_BASE_PATH` to an empty value and add a `CNAME` in Pages settings.

A `.nojekyll` file is written so the `_next` folder is not ignored by GitHub Pages.

## Supabase

SQL for the CMS foundation lives in `supabase/migrations/`. Apply it to a Supabase project, then set:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Create Storage buckets `product-images`, `room-art`, and `easter-eggs` when you are ready to replace the illustrated SVG keys with uploaded files.

Without these values the storefront uses the GitHub-friendly seed catalog in `src/data/catalog.ts` plus a local CMS overlay.

## Stripe

Checkout uses [Checkout Sessions](https://docs.stripe.com/payments/checkout) created by `supabase/functions/create-checkout`. Deploy that function and set:

- `STRIPE_SECRET_KEY` on the function (restricted key preferred)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_CHECKOUT_FUNCTION_URL`

Until those are present, checkout still completes as a local demo order so the path can be tested on GitHub Pages.

## CMS

`/cms` edits products, rooms, Easter eggs, orders, customers, and media notes. It is modular: seed TypeScript, localStorage overlay, then Supabase when configured.

## Scripts

```bash
npm run dev
npm run build   # static export to ./out
npm run lint
```
