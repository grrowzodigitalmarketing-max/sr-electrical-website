import { FaCertificate } from "react-icons/fa";

const certifications = [
  "Electrical License",
  "GST Registration",
  "MSME Registration",
  "ISO Certification",
];

export default function Certifications() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="text-[#FF6B00] font-semibold">
            CERTIFICATIONS
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Licensed & Certified
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {certifications.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl text-center shadow"
            >
              <FaCertificate
                size={40}
                className="mx-auto text-[#FF6B00] mb-4"
              />

              <h3 className="font-semibold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}