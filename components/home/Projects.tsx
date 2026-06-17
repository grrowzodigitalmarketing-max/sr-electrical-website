import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function Projects() {
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(8);

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="text-[#FF6B00] font-semibold">
            FEATURED PROJECTS
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Our Recent Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {projects?.map((project) => (
            <Link
              key={project.id}
              href={`/project/${project.slug}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={
                  project.cover_image ||
                  "https://placehold.co/600x400"
                }
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg">
                  {project.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {project.location}
                </p>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}