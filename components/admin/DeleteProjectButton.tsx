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

    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

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