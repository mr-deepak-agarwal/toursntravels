"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-full border border-navy-900/15 px-4 py-2 text-xs font-semibold text-navy-900/70 transition hover:bg-navy-900/5"
    >
      Sign out
    </button>
  );
}
