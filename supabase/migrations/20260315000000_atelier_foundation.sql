create table if not exists public.rooms (
  id text primary key,
  number int not null,
  slug text unique not null,
  name text not null,
  subtitle text not null,
  category text not null,
  description text not null,
  connections jsonb not null default '[]'::jsonb
);

create table if not exists public.categories (
  id text primary key,
  name text not null,
  kind text not null check (kind in ('clothing', 'appliance', 'easter-egg'))
);

create table if not exists public.products (
  id text primary key,
  slug text unique not null,
  name text not null,
  kind text not null check (kind in ('clothing', 'appliance')),
  category text not null,
  description text not null,
  story text not null default '',
  price_cents int not null,
  compare_at_cents int,
  images text[] not null default '{}',
  accent text not null default '#8a5a32',
  option_types jsonb not null default '[]'::jsonb,
  featured boolean not null default false,
  active boolean not null default true
);

create table if not exists public.product_variants (
  id text primary key,
  product_id text not null references public.products(id) on delete cascade,
  label text not null,
  options jsonb not null default '{}'::jsonb,
  price_cents int not null,
  sku text unique not null,
  inventory int not null default 0,
  stripe_price_id text
);

create table if not exists public.product_placements (
  id text primary key,
  product_id text not null references public.products(id) on delete cascade,
  room_id text not null references public.rooms(id) on delete cascade,
  x int not null,
  y int not null,
  width int not null,
  height int not null
);

create table if not exists public.interactive_objects (
  id text primary key,
  room_id text not null references public.rooms(id) on delete cascade,
  object_type text not null,
  label text not null,
  x int not null,
  y int not null,
  width int not null,
  height int not null,
  payload jsonb not null default '{}'::jsonb
);

create table if not exists public.easter_eggs (
  id text primary key,
  slug text unique not null,
  title text not null,
  teaser text not null,
  body text not null,
  room_id text not null references public.rooms(id) on delete cascade,
  x int not null,
  y int not null,
  width int not null,
  height int not null,
  kind text not null,
  media_url text,
  extra text
);

create table if not exists public.media (
  id uuid primary key default gen_random_uuid(),
  bucket text not null,
  path text not null,
  alt text,
  created_at timestamptz not null default now()
);

create table if not exists public.music_tracks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  artist text,
  note text,
  storage_path text,
  easter_egg_id text references public.easter_eggs(id) on delete set null
);

create table if not exists public.customers (
  id text primary key,
  email text unique not null,
  name text,
  auth_user_id uuid,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id text primary key,
  email text not null,
  name text not null,
  status text not null default 'draft',
  total_cents int not null,
  stripe_session_id text,
  created_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id text not null references public.orders(id) on delete cascade,
  product_id text not null,
  variant_id text not null,
  name text not null,
  quantity int not null,
  unit_price_cents int not null
);

alter table public.rooms enable row level security;
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.product_variants enable row level security;
alter table public.product_placements enable row level security;
alter table public.interactive_objects enable row level security;
alter table public.easter_eggs enable row level security;
alter table public.media enable row level security;
alter table public.music_tracks enable row level security;
alter table public.customers enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

create policy "public read rooms" on public.rooms for select using (true);
create policy "public read products" on public.products for select using (true);
create policy "public read variants" on public.product_variants for select using (true);
create policy "public read placements" on public.product_placements for select using (true);
create policy "public read objects" on public.interactive_objects for select using (true);
create policy "public read eggs" on public.easter_eggs for select using (true);
create policy "public read media" on public.media for select using (true);
create policy "public read music" on public.music_tracks for select using (true);
