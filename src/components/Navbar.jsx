import React, { useState } from "react";
import prucho from "../assets/prucho.webp";
import { Zap } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white shadow-md fixed w-full z-50 ">
      <nav className="flex items-center justify-between px-6 lg:px-12 py-6">
        <div className="flex items-center space-x-2">
          <div className="w-50 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg "> 
               <img src={prucho} alt="prucho" height={80} width={160} />
          </div>
       
        </div>
        <div className="hidden md:flex items-center space-x-8 text-white/80">
          <a href="#Products" className="hover:text-white transition-colors">Products</a>
          <a href="#Contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <button className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-all">
            Sign In
          </button>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;
