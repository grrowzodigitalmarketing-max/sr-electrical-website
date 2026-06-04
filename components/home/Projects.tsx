export default function Projects() {
  const projects = [
    {
      title: "Substation Installation",
      location: "Indore",
      image: "/projects/project1.jpg",
    },
    {
      title: "Industrial Electrification",
      location: "Bhopal",
      image: "/projects/project2.jpg",
    },
    {
      title: "Street Lighting Project",
      location: "Ujjain",
      image: "/projects/project3.jpg",
    },
    {
      title: "Solar EPC Project",
      location: "Dewas",
      image: "/projects/project4.jpg",
    },
  ];

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

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.image}
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
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}