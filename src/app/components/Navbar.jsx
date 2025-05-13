"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] border-b border-[#33353F]">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:py-6">
        
        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center w-full">
          <ul className="flex space-x-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {navbarOpen && (
        <div className="md:hidden bg-[#121212] px-4 pb-4">
          <ul className="space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  onClick={() => {
                    setNavbarOpen(false);
                    document.querySelector(link.path)?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
