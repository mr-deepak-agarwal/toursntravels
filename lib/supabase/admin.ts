import { createClient as createSupabaseClient } from "@supabase/supabase-js";

// Server-only client using the service role key. This bypasses Row Level
// Security, so it must only ever be used in trusted server code (API
// routes, Server Actions) that validates what it writes — never exposed
// to the browser. Do not import this file from a "use client" component.
export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}
