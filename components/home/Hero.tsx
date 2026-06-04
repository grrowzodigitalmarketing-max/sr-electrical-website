export default function Hero() {
  return (
    <section
  className="relative min-h-screen flex items-center bg-cover bg-center"
  style={{
    backgroundImage: "url('/hero.jpg')",
  }}
>
  <div className="absolute inset-0 bg-[#0B1F3A]/80"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-orange-500 font-semibold mb-4 max-w-xl">
              SR ELECTRICAL & CONTRACTOR
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              POWERING INDIA'S
              <br />
              INFRASTRUCTURE
            </h1>

            <p className="text-gray-300 mt-6 text-lg">
              Government | Industrial | Commercial
              Electrical Solutions
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8 text-white">

              <div>✓ 100+ Projects Completed</div>
              <div>✓ Licensed Contractor</div>

              <div>✓ Safety Compliant</div>
              <div>✓ Timely Delivery</div>

            </div>

            <div className="mt-10 flex gap-4">
              <button className="bg-orange-500 px-6 py-3 rounded-lg text-white">
                Get Free Quote
              </button>

              <button className="border border-white px-6 py-3 rounded-lg text-white">
                Call Now
              </button>
            </div>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">

            <h3 className="text-2xl font-bold mb-4">
              Get A Free Quote
            </h3>

            <input
              placeholder="Full Name"
              className="w-full border p-3 mb-3 rounded"
            />

            <input
              placeholder="Mobile Number"
              className="w-full border p-3 mb-3 rounded"
            />

            <input
              placeholder="Project Type"
              className="w-full border p-3 mb-3 rounded"
            />

            <textarea
              placeholder="Project Details"
              className="w-full border p-3 mb-3 rounded"
              rows={4}
            />

            <button className="bg-orange-500 w-full text-white py-3 rounded">
              Submit Enquiry
            </button>

          </div>

        </div>

      </div>
    </div>
    </section>
  );
}