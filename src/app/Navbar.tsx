"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-gradient-to-br from-gray-900 via-gray-800 to-black
        text-white
      "
      style={{ borderBottom: "none", boxShadow: "none" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-extrabold text-yellow-400 tracking-wider select-none">
          Manjaka
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
          {open ? (
            <X size={28} className="text-yellow-400" />
          ) : (
            <Menu size={28} className="text-yellow-400" />
          )}
        </div>

        {/* Menu Links */}
        <ul
          className={`md:flex md:items-center md:space-x-8 absolute md:static
            top-16 left-0 w-full md:w-auto transition-all duration-300 ease-in-out
            bg-gradient-to-br from-gray-900 via-gray-800 to-black md:bg-transparent
            ${open ? "block" : "hidden"}
          `}
        >
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="text-center py-4 md:py-0">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-lg text-white hover:text-yellow-400 font-medium transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
