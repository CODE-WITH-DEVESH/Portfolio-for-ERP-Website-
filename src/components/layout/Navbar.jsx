import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-gray-800">
            Class<span className="text-indigo-600">Sites</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
            <a href="#" className="hover:text-indigo-600 transition">
              Overview
            </a>

            <a href="#" className="hover:text-indigo-600 transition">
              Who We are
            </a>

            <a href="#" className="hover:text-indigo-600 transition">
              What We Offer
            </a>

            <a href="#" className="hover:text-indigo-600 transition">
              Our Platfrom
            </a>

            <a href="#" className="hover:text-indigo-600 transition">
              Knowledge Hub
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 text-gray-600 hover:text-indigo-600 transition">
              Login
            </button>

            <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition">
              Get a Free Demo
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 gap-4 text-gray-700 font-medium">
            <a href="#" className="hover:text-indigo-600 transition">
              Overview
            </a>

            <a href="#" className="hover:text-indigo-600 transition">
              Who We are
            </a>

            <a href="#" className="hover:text-indigo-600 transition">
              What We Offer
            </a>

            <a href="#" className="hover:text-indigo-600 transition">
              Our Platfrom
            </a>

            <a href="#" className="hover:text-indigo-600 transition">
              Knowledge Hub
            </a>

            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg">
              Get a Free Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
