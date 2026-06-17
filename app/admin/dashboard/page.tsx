import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import DeleteProjectButton from "@/components/admin/DeleteProjectButton";
import LogoutButton from "@/components/admin/LogoutButton";
import { redirect } from "next/navigation";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function Dashboard() {
const {
  data: { session },
} = await supabase.auth.getSession();

if (!session) {
  redirect("/admin/login");
}
  const { data: projects } = await supabase
    .from("projects")
    .select("*");

  const totalProjects = projects?.length || 0;

  const industrialProjects =
    projects?.filter(
      (p) => p.category === "Industrial Projects"
    ).length || 0;

  const hospitalProjects =
    projects?.filter(
      (p) => p.category === "Hospital Projects"
    ).length || 0;

  const ongoingProjects =
    projects?.filter(
      (p) => p.category === "Ongoing Projects"
    ).length || 0;

  return (
    <div className="p-10">

      <div className="flex justify-between items-center">

  <div>
    <h1 className="text-4xl font-bold">
      SR Electrical Admin
    </h1>

    <p className="text-gray-500 mt-2">
      Manage Projects & Portfolio
    </p>
  </div>

  <div className="flex gap-3">
    <Link
      href="/admin/project/add"
      className="bg-[#FF6B00] text-white px-6 py-3 rounded-lg"
    >
      + Add Project
    </Link>

    <LogoutButton />
  </div>

</div>
      

      <div className="grid md:grid-cols-4 gap-6 mt-10">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Total Projects
          </h3>

          <p className="text-4xl font-bold mt-3">
            {totalProjects}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Industrial Projects
          </h3>

          <p className="text-4xl font-bold mt-3">
            {industrialProjects}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Hospital Projects
          </h3>

          <p className="text-4xl font-bold mt-3">
            {hospitalProjects}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Ongoing Projects
          </h3>

          <p className="text-4xl font-bold mt-3">
            {ongoingProjects}
          </p>
        </div>

      </div>

      {/* Project List */}

      <div className="bg-white rounded-xl shadow mt-10 p-6">

        <h2 className="text-2xl font-bold mb-6">
          Recent Projects
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="text-left py-3">
                Title
              </th>

              <th className="text-left py-3">
                Location
              </th>

              <th className="text-left py-3">
                Category
              </th>

              <th className="text-left py-3">
                Status
              </th>

              <th className="text-left py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>

            {projects?.map((project) => (
              <tr
                key={project.id}
                className="border-b"
              >
                <td className="py-3">
                  {project.title}
                </td>

                <td>
                  {project.location}
                </td>

                <td>
                  {project.category}
                </td>

                <td>
                  {project.status}
                </td>

                <td className="flex gap-4 py-3">

  <a
    href={`/project/${project.slug}`}
    target="_blank"
    className="text-green-600 font-medium"
  >
    View
  </a>

  <a
    href={`/admin/project/edit/${project.id}`}
    className="text-blue-600 font-medium"
  >
    Edit
  </a>

  <DeleteProjectButton
  id={project.id}
/>

</td>

              </tr>


            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}