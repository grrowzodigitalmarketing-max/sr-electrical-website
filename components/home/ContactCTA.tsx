export default function ContactCTA() {
  return (
    <section className="bg-[#0B1F3A] py-20 text-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold">
          Let's Build Your Next Electrical Project
        </h2>

        <p className="mt-5 text-gray-300">
          Government, Industrial & Commercial
          Electrical Solutions
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="tel:+917999998478"
            className="bg-[#FF6B00] px-8 py-4 rounded-xl"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/917999998478"
            className="border border-white px-8 py-4 rounded-xl"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}