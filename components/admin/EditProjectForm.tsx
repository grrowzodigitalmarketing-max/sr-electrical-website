"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function EditProjectForm({
  project,
}: {
  project: any;
}) {
  const [form, setForm] = useState(project);

  const handleUpdate = async () => {
    const { error } = await supabase
      .from("projects")
      .update({
        title: form.title,
        location: form.location,
        state: form.state,
        client: form.client,
        short_description: form.short_description,
        highlights: form.highlights,
      })
      .eq("id", project.id);

    if (error) {
      alert(error.message);
    } else {
      alert("Project Updated Successfully");
    }
  };

  return (
    <div className="space-y-5">

      <input
        value={form.title}
        onChange={(e) =>
          setForm({
            ...form,
            title: e.target.value,
          })
        }
        className="w-full border p-3 rounded"
      />

      <input
        value={form.location}
        onChange={(e) =>
          setForm({
            ...form,
            location: e.target.value,
          })
        }
        className="w-full border p-3 rounded"
      />

      <input
        value={form.state}
        onChange={(e) =>
          setForm({
            ...form,
            state: e.target.value,
          })
        }
        className="w-full border p-3 rounded"
      />

      <input
        value={form.client}
        onChange={(e) =>
          setForm({
            ...form,
            client: e.target.value,
          })
        }
        className="w-full border p-3 rounded"
      />

      <textarea
        value={form.short_description}
        onChange={(e) =>
          setForm({
            ...form,
            short_description: e.target.value,
          })
        }
        rows={4}
        className="w-full border p-3 rounded"
      />

      <textarea
        value={form.highlights}
        onChange={(e) =>
          setForm({
            ...form,
            highlights: e.target.value,
          })
        }
        rows={5}
        className="w-full border p-3 rounded"
      />

      <button
        onClick={handleUpdate}
        className="bg-[#FF6B00] text-white px-8 py-3 rounded-lg"
      >
        Update Project
      </button>

    </div>
  );
}