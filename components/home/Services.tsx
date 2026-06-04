import {
  FaBolt,
  FaIndustry,
  FaSolarPanel,
} from "react-icons/fa";
import Link from "next/link";

export default function Services() {
  const services = [
    "Government Electrical Works",
    "HT/LT Installation",
    "Substation Installation",
    "Industrial Electrical Works",
    "Street Lighting Projects",
    "Solar EPC Solutions",
    "AMC Services",
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="text-[#FF6B00] font-semibold">
            OUR SERVICES
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Comprehensive Electrical Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:-translate-y-2 transition duration-300"
            >
              <FaBolt
                size={40}
                className="text-[#FF6B00] mb-4"
              />

              <Link
  href="/services/government-electrical-works"
  className="font-semibold text-lg"
>
  Government Electrical Works
</Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}