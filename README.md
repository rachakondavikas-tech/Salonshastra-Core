# ShastraCore CRM MVP

Next.js + Supabase CRM for Salon Shastra's full ecosystem.

## Modules
- Dashboard
- Contacts
- Businesses
- Opportunities
- Activities & Follow-ups
- Services Attached
- Team Assignment
- Basic Reports

## Stack
- Next.js 14 (App Router)
- React 18
- Supabase Auth + PostgreSQL

## Setup
1. Copy `.env.example` to `.env.local` and fill values.
2. Install dependencies: `npm install`
3. Run app: `npm run dev`
4. Apply SQL migration in Supabase SQL Editor from `supabase/migrations/20260523_init_crm.sql`.

## Data Model Highlights
- contact_businesses allows many-to-many between contacts and businesses.
- businesses to opportunities is one-to-many.
- business_services stores multiple active services per business.
- activities table centralizes call/meeting/whatsapp/follow-up logs with next action.
