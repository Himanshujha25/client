import React, { useState } from "react";
import prucho from "../assets/prucho.webp";
import { Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white shadow-md fixed w-full z-50">
      <nav className="flex items-center justify-between px-6 lg:px-12 py-6">
        <div className="flex items-center space-x-2">
          <div className="w-50 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
            <img src={prucho} alt="prucho" height={80} width={160} />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white/80">
          <a href="#Products" className="hover:text-white transition-colors">
            Products
          </a>
          <a href="#Contact" className="hover:text-white transition-colors">
            Contact
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <button className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-all">
            Sign In
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-6 py-4 space-y-4 text-white/80 shadow-md">
          <a href="#Products" onClick={() => setMenuOpen(false)} className="hover:text-white">
            Products
          </a>
          <a href="#Contact" onClick={() => setMenuOpen(false)} className="hover:text-white">
            Contact
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-white">
            About
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-all"
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
