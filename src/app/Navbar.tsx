"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const links = [
    { name: "Home", href: "#", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Skills", href: "#skills", icon: <FaTools /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-yellow-400 tracking-wider select-none">
          Manjaka
        </div>

        {/* Burger Icon */}
        <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
          {open ? (
            <X size={28} className="text-yellow-400" />
          ) : (
            <Menu size={28} className="text-yellow-400" />
          )}
        </div>

        {/* Links */}
        <ul
          className={`md:flex md:items-center md:space-x-8 absolute md:static top-20 left-0 w-full md:w-auto transition-all duration-500 ease-in-out
          bg-gradient-to-br from-gray-900 via-gray-800 to-black md:bg-transparent
          ${open ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"}
        `}
        >
          {links.map(({ name, href, icon }) => (
            <li key={name} className="text-center py-4 md:py-0">
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 text-lg text-white hover:text-yellow-400 font-medium transition duration-300"
              >
                {icon} {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
