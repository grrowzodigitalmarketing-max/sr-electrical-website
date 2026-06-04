export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="/about.jpg"
              alt="About SR Electrical"
              className="w-full h-[450px] object-cover rounded-3xl shadow-2xl"
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
              Established in 2018, SR Electrical & Contractor is a trusted name
  in the field of electrical infrastructure and government contracting.
  We specialize in HT/LT installations, substation development,
  industrial electrification, street lighting projects and solar EPC
  solutions. With a commitment to quality, safety and timely execution,
  we have successfully delivered projects for government departments,
  industrial facilities and commercial establishments across Madhya Pradesh
            </p>
<div className="grid grid-cols-2 gap-4 mt-8">

  <div className="bg-slate-100 p-4 rounded-xl">
    ✓ Government Projects
  </div>

  <div className="bg-slate-100 p-4 rounded-xl">
    ✓ HT/LT Installations
  </div>

  <div className="bg-slate-100 p-4 rounded-xl">
    ✓ Substation Works
  </div>

  <div className="bg-slate-100 p-4 rounded-xl">
    ✓ Solar EPC Solutions
  </div>

</div>
            <button className="mt-8 bg-[#FF6B00] text-white px-6 py-3 rounded-lg">
              Read More
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}