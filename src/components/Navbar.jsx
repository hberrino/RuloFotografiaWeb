import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../data/data.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 shadow-2xl backdrop-blur-md"
          : "bg-gray-900/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="text-white text-2xl font-bold tracking-wider hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
        >
          PH Rulo
        </a>
        <ul className="hidden md:flex gap-10 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-blue-400 transition-all duration-300 transform hover:translate-y-[-2px] relative"
              >
                {link.label}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-white text-3xl p-2 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 hover:rotate-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-md flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col gap-12 text-white text-2xl font-semibold text-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:translate-y-[-2px] inline-block"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="mt-12 text-gray-400 text-sm tracking-widest">
          Desliza o toca un link para navegar
        </span>
      </div>
    </nav>
  );
}
