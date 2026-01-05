import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {navLinks} from "../data/data.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-900/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-white text-2xl font-bold">
          PH Rulo
        </a>
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-6 bg-gray-900/90 backdrop-blur-md px-6 py-8 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block hover:text-purple-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}