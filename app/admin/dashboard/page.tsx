import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/admin/LogoutButton";
import EnquiriesTable, { type Enquiry } from "@/components/admin/EnquiriesTable";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const { data: rows } = await supabase
    .from("enquiries")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-sand-100 px-4 pb-20 pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl text-navy-900">Enquiries</h1>
            <p className="mt-1 text-sm text-navy-900/60">
              {rows?.length ?? 0} submission{rows?.length === 1 ? "" : "s"} from the site&apos;s forms.
            </p>
          </div>
          <LogoutButton />
        </div>

        <EnquiriesTable initialRows={(rows as Enquiry[]) ?? []} />
      </div>
    </div>
  );
}
