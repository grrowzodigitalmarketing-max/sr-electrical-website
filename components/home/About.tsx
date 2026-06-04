export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="/about.jpg"
              alt="About SR Electrical"
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <span className="text-[#FF6B00] font-semibold">
              ABOUT US
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              Trusted Electrical Contractor Since 2018
            </h2>

            <p className="text-gray-600 leading-8">
              SR Electrical & Contractor has established itself as a trusted
              partner for government, industrial and commercial electrical
              projects. We deliver quality, safety and innovation in every
              project with complete customer satisfaction.
            </p>

            <button className="mt-8 bg-[#FF6B00] text-white px-6 py-3 rounded-lg">
              Read More
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}