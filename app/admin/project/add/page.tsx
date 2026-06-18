"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AddProject() {

  const [form, setForm] = useState({
    title: "",
    category: "",
    location: "",
    state: "",
    client: "",
    status: "",
    project_value: "",
    short_description: "",
    highlights: "",
  });
  const [coverImage, setCoverImage] = useState<File | null>(null);
const [galleryImages, setGalleryImages] = useState<FileList | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

   const slug = form.title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, "")
  .replace(/\s+/g, "-");
      let coverUrl = "";
let galleryUrls: string[] = [];
// COVER IMAGE UPLOAD
  if (coverImage) {
    const fileName = `${Date.now()}-${coverImage.name}`;

    const { error } = await supabase.storage
      .from("projects")
      .upload(fileName, coverImage);

    if (error) {
  console.log(error);
} else {
      const { data } = supabase.storage
        .from("projects")
        .getPublicUrl(fileName);

      coverUrl = data.publicUrl;
    }
  }
 // 2️⃣ Gallery Images Upload
  if (galleryImages) {
    for (const file of Array.from(galleryImages)) {
      const fileName = `${Date.now()}-${file.name}`;

      const { error } = await supabase.storage
        .from("projects")
        .upload(fileName, file);

      if (error) {
  console.log(error);
} else {
        const { data } = supabase.storage
          .from("projects")
          .getPublicUrl(fileName);

        galleryUrls.push(data.publicUrl);
      }
    }
  }
  console.log("Cover URL:", coverUrl);
console.log("Gallery URLs:", galleryUrls);
    const { data, error } = await supabase
  .from("projects")
  .insert([
    {
      ...form,
      slug,
      cover_image: coverUrl,
      gallery_images: galleryUrls,
    },
  ])
  .select();

console.log("INSERT DATA:", data);
console.log("INSERT ERROR:", error);

    if (error) {
  console.log(error);
  alert(error.message);
} else {
  console.log(data);

  alert("Project Added Successfully");

  window.location.href =
    "/admin/dashboard";
}
  };

  return (
    <div className="max-w-4xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        Add New Project
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <input
          placeholder="Project Title"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />

        <select
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
        >
          <option>Select Category</option>

          <option>
            Completed Key Projects
          </option>

          <option>
            Industrial Projects
          </option>

          <option>
            Hospital Projects
          </option>

          <option>
            Ongoing Projects
          </option>

          <option>
            Hotel Ongoing Projects
          </option>

        </select>

        <input
          placeholder="Location"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              location: e.target.value,
            })
          }
        />

        <input
          placeholder="State"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              state: e.target.value,
            })
          }
        />

        <input
          placeholder="Client Name"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              client: e.target.value,
            })
          }
        />

        <input
          placeholder="Project Value"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              project_value: e.target.value,
            })
          }
        />

        <input
          placeholder="Status"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              status: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Short Description"
          className="w-full border p-3 rounded"
          rows={4}
          onChange={(e) =>
            setForm({
              ...form,
              short_description: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Highlights"
          className="w-full border p-3 rounded"
          rows={5}
          onChange={(e) =>
            setForm({
              ...form,
              highlights: e.target.value,
            })
          }
        />
<div>
  <label className="font-medium">
    Cover Image
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={(e) =>
      setCoverImage(e.target.files?.[0] || null)
    }
  />
</div>

<div>
  <label className="font-medium">
    Gallery Images
  </label>

  <input
    type="file"
    multiple
    accept="image/*"
    onChange={(e) =>
      setGalleryImages(e.target.files)
    }
  />
</div>

        <button
          className="
          bg-[#FF6B00]
          text-white
          px-8
          py-3
          rounded-lg
          "
        >
          Publish Project
        </button>

      </form>
    </div>
  );
}