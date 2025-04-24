import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.jpg";
import Login from "./Login";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full ${
          sticky ? "bg-[#d9d9d9] shadow-lg" : "bg-[#d9d9d9]"
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="/">
            <img src={Logo} alt="Logo" className="h-12 w-auto object-contain" />
          </a>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isMobileMenuOpen ? "✖" : "☰"}
            </button>
          </div>
          <ul
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex space-x-6 text-lg text-gray-800 absolute md:static bg-white md:bg-transparent w-full md:w-auto top-full left-0 md:top-auto md:left-auto`}
          >
            <li><a href="/" className="block px-4 py-2 hover:text-gray-600">Home</a></li>
            <li><a href="/contact" className="block px-4 py-2 hover:text-gray-600">Contact Us</a></li>
            <li><a href="/about" className="block px-4 py-2 hover:text-gray-600">About Us</a></li>
            <li><a href="#" className="block px-4 py-2 hover:text-gray-600">Consult Doctor</a></li>
            <li><a href="/faq" className="block px-4 py-2 hover:text-gray-600">FAQ</a></li>
          </ul>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block font-black text-black">
              <input
                type="search"
                placeholder="Search"
                className="px-3 py-2 border rounded-md outline-black border-black"
              />
            </div>
            <button
              className="bg-green-800 text-white px-4 py-2 rounded-lg cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button>
            <Login />
          </div>
        </div>
      </nav>
      <div className="pt-20 md:pt-24"></div>
    </>
  );
}

export default Navbar;