export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-2xl font-bold mb-4">
              SR Electrical
            </h3>

            <p className="text-gray-300">
              Trusted Government & Industrial
              Electrical Contractor Since 2018.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Services
            </h4>

            <ul className="space-y-2 text-gray-300">
              <li>HT/LT Installation</li>
              <li>Substation Installation</li>
              <li>Industrial Works</li>
              <li>AMC Services</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <p>+91 7999998478</p>
            <p>+91 9098001196</p>

            <p className="mt-3">
              office@srelectricalandcontractor.com
            </p>
          </div>

        </div>

      </div>

      <div className="border-t border-white/10 text-center py-5">
        © 2026 SR Electrical & Contractor
      </div>

    </footer>
  );
}