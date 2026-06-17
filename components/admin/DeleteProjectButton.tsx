"use client";

import { supabase } from "@/lib/supabase";

export default function DeleteProjectButton({
  id,
}: {
  id: string;
}) {

  const handleDelete = async () => {

    const confirmDelete = confirm(
      "Delete this project?"
    );

    if (!confirmDelete) return;

    const { data, error } = await supabase
  .from("projects")
  .delete()
  .eq("id", id)
  .select();

console.log("DELETE DATA:", data);
console.log("DELETE ERROR:", error);

    if (error) {
      alert(error.message);
    } else {
      alert("Project Deleted");
      location.reload();
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 font-medium"
    >
      Delete
    </button>
  );
}