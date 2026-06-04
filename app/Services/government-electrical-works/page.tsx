export default function GovernmentElectricalWorks() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-[#0B1F3A] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Government Electrical Works
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Professional electrical contracting services
            for government departments, public sector
            organizations and infrastructure projects.
          </p>

        </div>
      </section>

      {/* Content */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Our Expertise
          </h2>

          <p className="text-gray-600 leading-8">
            SR Electrical & Contractor provides complete
            government electrical project execution including
            electrical installations, substations, street
            lighting systems, industrial electrification,
            maintenance and testing services.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            <div className="bg-slate-50 p-6 rounded-xl">
              ✔ Electrical Infrastructure
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              ✔ Government Buildings
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              ✔ Street Lighting Projects
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              ✔ Maintenance Contracts
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}