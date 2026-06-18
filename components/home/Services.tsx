import {
  FaBolt,
  FaIndustry,
  FaSolarPanel,
} from "react-icons/fa";
import Link from "next/link";

export default function Services() {
  const services = [
  {
    title: "Government Electrical Works",
    description: "Electrical infrastructure projects for government departments and public sector organizations.",
  },
  {
    title: "HT/LT Installation",
    description: "Professional HT and LT electrical installations with complete safety compliance.",
  },
  {
    title: "Substation Installation",
    description: "Design, erection and commissioning of substations for industrial and commercial projects.",
  },
  {
    title: "Industrial Electrical Works",
    description: "Comprehensive industrial electrification and maintenance solutions.",
  },
  {
    title: "Street Lighting Projects",
    description: "LED street lighting systems for urban and rural infrastructure projects.",
  },
  {
    title: "Solar EPC Solutions",
    description: "End-to-end solar engineering, procurement and construction services.",
  },
  {
    title: "AMC Services",
    description: "Annual maintenance contracts for uninterrupted electrical operations.",
  },
];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="text-[#FF6B00] font-semibold">
            OUR SERVICES
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Our Professional Electrical Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
  We provide end-to-end electrical contracting solutions for
  government, industrial and commercial projects with a focus
  on safety, quality and timely execution.
</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
  <div
    key={index}
    className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-slate-100"
  >
    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
      <FaBolt
        size={30}
        className="text-[#FF6B00]"
      />
    </div>

    <h3 className="font-bold text-xl mb-4">
      {service.title}
    </h3>

    <p className="text-gray-600 leading-7">
      {service.description}
    </p>

    <button className="mt-6 text-[#FF6B00] font-semibold">
      Learn More →
    </button>
  </div>
))}

        </div>

      </div>
    </section>
  );
}