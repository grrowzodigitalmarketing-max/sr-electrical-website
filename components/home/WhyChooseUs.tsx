import {
  FaCertificate,
  FaHardHat,
  FaShieldAlt,
  FaUsers,
  FaClock,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCertificate size={35} />,
    title: "Licensed Contractor",
  },
  {
    icon: <FaHardHat size={35} />,
    title: "Government Expertise",
  },
  {
    icon: <FaShieldAlt size={35} />,
    title: "Safety Standards",
  },
  {
    icon: <FaUsers size={35} />,
    title: "Expert Team",
  },
  {
    icon: <FaClock size={35} />,
    title: "Timely Delivery",
  },
  {
    icon: <FaHeadset size={35} />,
    title: "24x7 Support",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="text-[#FF6B00] font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Trusted Electrical Partner
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-[#FF6B00] mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold text-xl">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}