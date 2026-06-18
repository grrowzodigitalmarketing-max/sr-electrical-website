export default function Clients() {
const clients = [
"/clients/mp-tourism.png",
"/clients/lupin.png",
"/clients/mpbdc.png",
"/clients/elysium.png",
"/clients/alembic.png",
"/clients/cadila.png",
"/clients/baroda-heart.png",
];

return ( <section className="py-20 bg-slate-50">
   <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">
      <span className="text-[#FF6B00] font-semibold">
        TRUSTED CLIENTS
      </span>

      <h2 className="text-4xl font-bold mt-3">
        Organizations We Have Served
      </h2>

      <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
        Delivering reliable electrical infrastructure
        solutions for government departments,
        healthcare institutions, pharmaceutical
        companies and industrial organizations.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
      {clients.map((logo, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition duration-300 flex items-center justify-center h-32"
        >
          <img
            src={logo}
            alt="Client Logo"
            className="max-h-[70px] w-auto object-contain grayscale hover:grayscale-0 transition"
          />
        </div>
      ))}
    </div>

  </div>
</section>

);
}
