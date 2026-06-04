import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

        <Image
          src="/logo.png"
          alt="SR Electrical"
          width={140}
          height={50}
        />

        <ul className="hidden md:flex gap-8 font-medium">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
          Get Quote
        </button>

      </div>
    </nav>
  );
}