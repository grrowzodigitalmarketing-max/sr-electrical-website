import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "A Class Electrical Contractor",
    desc: "Licensed Electrical Contractor for Government & Private Projects",
  },
  {
    title: "GST Registered",
    desc: "Compliant with GST regulations for transparent business operations",
  },
  {
    title: "MSME Registered",
    desc: "Recognized under the Ministry of MSME, Government of India",
  },
  {
    title: "MP PWD Registered",
    desc: "Authorized to execute Public Works Department projects across Madhya Pradesh",
  },
];

export default function Certifications() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <span className="text-[#FF6B00] font-semibold">
  LICENSES & REGISTRATIONS
</span>

<h2 className="text-4xl font-bold mt-3">
  Certified & Government Approved
</h2>

<p className="text-gray-600 mt-4 max-w-2xl mx-auto">
  SR Electrical & Contractor is a licensed and registered
  electrical contracting company authorized to execute
  government, industrial, infrastructure and commercial
  electrical projects across Madhya Pradesh.
</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

         {certifications.map((item, index) => (
  <div
    key={index}
    className="bg-slate-50 p-8 rounded-2xl text-center shadow hover:shadow-xl transition"
  >
    <FaCertificate
      size={40}
      className="mx-auto text-[#FF6B00] mb-4"
    />

    <h3 className="font-semibold text-lg">
      {item.title}
    </h3>

    <p className="text-gray-600 text-sm mt-3">
      {item.desc}
    </p>
  </div>
))}

        </div>

      </div>
    </section>
  );
}