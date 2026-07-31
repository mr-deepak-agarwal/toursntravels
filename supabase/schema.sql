-- Run this in the Supabase SQL editor (Project -> SQL Editor -> New query)
-- Creates one unified table that all three site forms write into:
--   ContactForm, TaxiBookingForm, and the "Plan your Goa story" enquiry modal.
-- The `source` column tells you which form a row came from.

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- which form this came from: 'contact' | 'taxi_booking' | 'enquiry'
  source text not null check (source in ('contact', 'taxi_booking', 'enquiry')),

  -- shared fields
  full_name text,
  phone text not null,
  email text,
  message text,

  -- enquiry modal fields
  destination text,
  travel_date date,
  service text,
  passengers int,

  -- taxi booking fields
  trip_type text,
  pickup_location text,
  drop_location text,
  pickup_date date,
  pickup_time text,
  vehicle_type text,

  -- admin workflow
  status text not null default 'new' check (status in ('new', 'contacted', 'closed'))
);

create index if not exists enquiries_created_at_idx on public.enquiries (created_at desc);
create index if not exists enquiries_source_idx on public.enquiries (source);

-- Row Level Security: public site can only INSERT (submit a form).
-- Only logged-in admin users can SELECT/UPDATE/DELETE (view/manage the inbox).
alter table public.enquiries enable row level security;

drop policy if exists "Anyone can submit an enquiry" on public.enquiries;
create policy "Anyone can submit an enquiry"
  on public.enquiries
  for insert
  to anon
  with check (true);

drop policy if exists "Authenticated users can view enquiries" on public.enquiries;
create policy "Authenticated users can view enquiries"
  on public.enquiries
  for select
  to authenticated
  using (true);

drop policy if exists "Authenticated users can update enquiries" on public.enquiries;
create policy "Authenticated users can update enquiries"
  on public.enquiries
  for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Authenticated users can delete enquiries" on public.enquiries;
create policy "Authenticated users can delete enquiries"
  on public.enquiries
  for delete
  to authenticated
  using (true);

-- After running this, create your admin login in:
-- Supabase Dashboard -> Authentication -> Users -> Add user
-- (Use "Auto Confirm User" so you don't need email verification.)
-- That email + password is what you'll log in with on /admin/login.
