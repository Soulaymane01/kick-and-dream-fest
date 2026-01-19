import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img
            src="/favicon.png"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="font-bold text-lg text-gray-800">
            African cup kids
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
          <li><a href="#shop" className="hover:text-primary transition-colors">Shop</a></li>
           {/*<li><a href="#competition" className="hover:text-primary transition-colors">Competition</a></li>
          <li><a href="#schools" className="hover:text-primary transition-colors">Schools & Registration</a></li>
          <li><a href="#sponsors" className="hover:text-primary transition-colors">Sponsors & Partner Benefits</a></li>
          <li><a href="#volunteers" className="hover:text-primary transition-colors">Volunteers</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>*/}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col py-4 font-medium text-gray-700">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="block py-3 px-6 hover:bg-gray-100 hover:text-primary">Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-3 px-6 hover:bg-gray-100 hover:text-primary">About</a></li>
            <li><a href="#competition" onClick={() => setIsMenuOpen(false)} className="block py-3 px-6 hover:bg-gray-100 hover:text-primary">Competition</a></li>
            <li><a href="#schools" onClick={() => setIsMenuOpen(false)} className="block py-3 px-6 hover:bg-gray-100 hover:text-primary">Schools & Registration</a></li>
            <li><a href="#sponsors" onClick={() => setIsMenuOpen(false)} className="block py-3 px-6 hover:bg-gray-100 hover:text-primary">Sponsors & Partner Benefits</a></li>
            <li><a href="#volunteers" onClick={() => setIsMenuOpen(false)} className="block py-3 px-6 hover:bg-gray-100 hover:text-primary">Volunteers</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-3 px-6 hover:bg-gray-100 hover:text-primary">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
