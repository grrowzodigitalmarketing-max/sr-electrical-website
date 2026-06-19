"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);
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
        <button
  onClick={() => setIsOpen(!isOpen)}
  className="lg:hidden text-white"
>
  {isOpen ? <X size={30} /> : <Menu size={30} />}
</button>

        <a
  href="tel:+919099800196"
  className="
  hidden lg:block
  bg-[#FF6B00]
  text-white
  px-7
  py-3
  rounded-xl
  font-semibold
  hover:scale-105
  transition-all
  "
>
  Get Free Consultation
</a>
      </div>
      {isOpen && (
  <div
    className="
    lg:hidden
    bg-[#0B1F3A]
    border-t border-white/10
    "
  >
    <div className="flex flex-col p-6 space-y-5 text-white">

      <Link
        href="/"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>

      <Link
        href="/#about"
        onClick={() => setIsOpen(false)}
      >
        About
      </Link>

      <Link
        href="/#services"
        onClick={() => setIsOpen(false)}
      >
        Services
      </Link>

      <Link
        href="/projects"
        onClick={() => setIsOpen(false)}
      >
        Projects
      </Link>

      <Link
        href="/#contact"
        onClick={() => setIsOpen(false)}
      >
        Contact
      </Link>

      <a
        href="tel:+919099800196"
        className="
        bg-[#FF6B00]
        text-center
        py-3
        rounded-lg
        font-semibold
        "
      >
        Get Free Consultation
      </a>

    </div>
  </div>
)}
    </nav>
  );
}