export const dynamic = "force-dynamic";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import { notFound } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();
    console.log("SLUG:", slug);

console.log("PROJECT:", project);

console.log("ERROR:", error);


  if (error || !project) {
    notFound();
  }

  return (
    <div className="bg-white">

      {/* Hero */}
<section className="relative h-[500px]">

  {project.cover_image && (
    <img
      src={project.cover_image}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover"
    />
  )}

  <div className="absolute inset-0 bg-black/60" />

  <div className="absolute bottom-10 left-10 text-white z-10">
    <h1 className="text-5xl font-bold">
      {project.title}
    </h1>

    <p className="mt-3 text-xl">
      {project.location}, {project.state}
    </p>
  </div>

</section>


      {/* Details */}

      <section className="max-w-7xl mx-auto py-16 px-6">

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2">

            <h2 className="text-3xl font-bold mb-6">
  Project Overview
</h2>



<p className="text-gray-700 leading-8">
  {project.short_description}
</p>

            <h3 className="text-2xl font-bold mt-10 mb-4">
              Highlights
            </h3>

            <p className="text-gray-700 whitespace-pre-wrap">
              {project.highlights}
            </p>

          </div>

          <div className="bg-slate-50 p-6 rounded-xl">

            <h3 className="text-xl font-bold mb-6">
              Project Details
            </h3>

            <div className="space-y-4">

              <div>
                <span className="font-semibold">
                  Client:
                </span>
                <br />
                {project.client}
              </div>

              <div>
                <span className="font-semibold">
                  Category:
                </span>
                <br />
                {project.category}
              </div>

              <div>
                <span className="font-semibold">
                  Status:
                </span>
                <br />
                {project.status}
              </div>

              <div>
                <span className="font-semibold">
                  Project Value:
                </span>
                <br />
                ₹ {project.project_value}
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Gallery */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-8">
          Project Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {Array.isArray(project.gallery_images) &&
  project.gallery_images.map(
            (image: string, index: number) => (
              <div
                key={index}
                className="relative h-72 rounded-xl overflow-hidden"
              >
                <Image
                  src={image}
                  alt="Project Image"
                  fill
                  className="object-cover"
                />
              </div>
            )
          )}

        </div>

      </section>

    </div>
  );
}