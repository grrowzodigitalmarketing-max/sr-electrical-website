import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="
      sticky top-0
      z-50
      bg-[#0B1F3A]/80
      backdrop-blur-xl
      border-b border-white/10
      shadow-2xl
      "
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">

        <Link href="/">
          <Image
            src="/logo.png"
            alt="SR Electrical"
            width={170}
            height={70}
          />
        </Link>

        <ul className="hidden md:flex gap-10 font-medium text-white items-center">

          <li>
            <Link
              href="/"
              className="hover:text-[#FF6B00] transition"
            >
              Home
            </Link>
          </li>

          <li>
  <a href="#about" className="hover:text-[#FF6B00] transition">
    About
  </a>
</li>

          <li>
  <a href="#services" className="hover:text-[#FF6B00] transition">
    Services
  </a>
</li>

          <li>
            <Link
              href="/projects"
              className="hover:text-[#FF6B00] transition"
            >
              Projects
            </Link>
          </li>

         <li>
  <a href="#contact" className="hover:text-[#FF6B00] transition">
    Contact
  </a>
</li>

        </ul>

        <a
        href="https://wa.me/919099800196"
  target="_blank"
          
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
        </a>

      </div>
    </nav>
  );
}