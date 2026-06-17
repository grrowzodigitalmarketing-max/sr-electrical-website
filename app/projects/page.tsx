
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
export const metadata = {
  title: "Projects | SR Electrical & Contractor",
  description:
    "Industrial, Government, Hospital & Infrastructure Electrical Projects completed by SR Electrical & Contractor.",
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function ProjectsPage() {

  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  const categories = [
    "Completed Key Projects",
    "Industrial Projects",
    "Hospital Projects",
    "Ongoing Projects",
    "Hotel Ongoing Projects",
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}

      <section className="bg-[#0B1F3A] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Our Projects
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            Government, Industrial, Hospital &
            Infrastructure Electrical Projects
          </p>

        </div>
      </section>

      {/* Categories */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        {categories.map((category) => {

         const categoryProjects =
  projects?.filter(
    (project) =>
      project.category === category
  ) || [];
          if (categoryProjects.length === 0)
            return null;

          return (
            <div
              key={category}
              className="mb-16"
            >

              <div className="flex items-center gap-3 mb-8">

  <h2 className="text-3xl font-bold">
    {category}
  </h2>

  <span className="bg-[#FF6B00] text-white px-3 py-1 rounded-full text-sm">
    {categoryProjects.length}
  </span>

</div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {categoryProjects.map(
                  (project) => (
                    <Link
                      key={project.id}
                      href={`/project/${project.slug}`}
                      className="
bg-white
rounded-2xl
overflow-hidden
shadow-lg
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
"
                    >

                      <img
                        src={
                          project.cover_image ||
                          "/project-placeholder.jpg"
                        }
                        alt={project.title}
                        className="h-64 w-full object-cover"
                      />

                      <div className="p-6">

                        <h3 className="font-bold text-xl">
                          {project.title}
                        </h3>

                        <p className="text-gray-500 mt-2">
                          {project.location}
                        </p>

                        <p className="mt-4 text-[#FF6B00] font-semibold">
                          View Project →
                        </p>

                      </div>

                    </Link>
                  )
                )}

              </div>

            </div>
          );
        })}

      </section>

    </div>
  );
}