export default function Clients() {
  const clients = [
    "Government Projects",
    "Industrial Clients",
    "Commercial Clients",
    "Infrastructure Projects",
    "Private Sector",
  ];

  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <span className="text-[#FF6B00] font-semibold">
            OUR CLIENTS
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Trusted By Leading Organizations
          </h2>

        </div>

        <div className="grid md:grid-cols-5 gap-6">

          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow"
            >
              <h3 className="font-semibold">
                {client}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}