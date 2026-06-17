import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";
import EditProjectForm from "@/components/admin/EditProjectForm";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function EditProject({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !project) {
    notFound();
  }

  return (
  <div className="max-w-4xl mx-auto p-10">

    <h1 className="text-4xl font-bold mb-8">
      Edit Project
    </h1>

    <EditProjectForm project={project} />

  </div>
);
}