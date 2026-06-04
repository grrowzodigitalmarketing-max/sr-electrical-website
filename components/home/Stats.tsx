export default function Stats() {
  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Satisfied Clients" },
    { number: "8+", label: "Years Experience" },
    { number: "24x7", label: "Support Available" },
  ];

  return (
    <section className="bg-[#0B1F3A] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-4xl font-bold text-[#FF6B00]">
                {item.number}
              </h3>
              <p className="text-white mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}