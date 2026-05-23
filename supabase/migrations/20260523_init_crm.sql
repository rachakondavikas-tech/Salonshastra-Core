create extension if not exists pgcrypto;

create table if not exists contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  created_at timestamptz not null default now()
);

create table if not exists businesses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  business_type text not null,
  city text,
  created_at timestamptz not null default now()
);

create table if not exists contact_businesses (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references contacts(id) on delete cascade,
  business_id uuid not null references businesses(id) on delete cascade,
  role text,
  created_at timestamptz not null default now(),
  unique(contact_id, business_id)
);

create table if not exists opportunities (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete cascade,
  title text not null,
  vertical text not null,
  status text not null default 'Open',
  amount numeric,
  created_at timestamptz not null default now()
);

create table if not exists activities (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete cascade,
  contact_id uuid references contacts(id) on delete set null,
  opportunity_id uuid references opportunities(id) on delete set null,
  activity_type text not null,
  note text,
  next_action text,
  due_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists business_services (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete cascade,
  service_name text not null,
  status text not null default 'Active',
  created_at timestamptz not null default now()
);

create table if not exists team_assignments (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete cascade,
  opportunity_id uuid references opportunities(id) on delete cascade,
  team_member text not null,
  role text not null,
  created_at timestamptz not null default now()
);
