import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="
sticky top-0
z-50
bg-[#0B1F3A]/80
backdrop-blur-xl
border-b border-white/10
shadow-2xl
">
  <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">

    <Image
      src="/logo.png"
      alt="SR Electrical"
      width={170}
      height={70}
    />

    <ul className="hidden md:flex gap-10 font-medium text-white">

      <li className="hover:text-[#FF6B00] transition cursor-pointer">
        Home
      </li>

      <li className="hover:text-[#FF6B00] transition cursor-pointer">
        About
      </li>

      <li className="hover:text-[#FF6B00] transition cursor-pointer">
        Services
      </li>

      <li className="hover:text-[#FF6B00] transition cursor-pointer">
        Projects
      </li>

      <li className="hover:text-[#FF6B00] transition cursor-pointer">
        Contact
      </li>

    </ul>

    <button
      className="
      bg-[#FF6B00]
      text-white
      px-7
      py-3
      rounded-xl
      font-semibold
      hover:scale-105
      hover:shadow-[0_0_25px_rgba(255,107,0,0.5)]
      transition-all
      duration-300
      "
    >
      Get Free Consultation
    </button>

  </div>
</nav>
  );
}