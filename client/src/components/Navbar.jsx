import React, { useEffect, useState } from "react";
import Logo from "../../public/Logo.jpg";
import Login from "./Login";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = (
    <>
      <li>
        <a href="/" className="text-lg">
          Home
        </a>
      </li>
      <li>
        <a href="/contact" className="text-lg">
          Contact Us
        </a>
      </li>
      <li>
        <a href="/about" className="text-lg">
          About Us
        </a>
      </li>
      <li>
        <a className="text-lg">Consult Doctor</a>
      </li>
      <li>
        <a href="/faq" className="text-lg">
          FAQ
        </a>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`max-w-screen container-auto mx:auto fixed top-0 left-0 right-0  ${
          sticky
            ? "sticky-navbar shadow-md bg-base-400 duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="navbar bg-[#d9d9d9] shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
            <img src={Logo} className="h-25 w-40 object-cover" alt="" />
          </div>
          <div className="navbar-end space-x-2">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="hidden md:block">
              <label className=" px-3 py-2 border rounded-md input">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" required placeholder="Search" />
              </label>
            </div>
            <div className="">
              <a
                className="bg-[#1c7856] text-black px-3 py-2 rounded-lg hover:bg-green-200 cursor-pointer duration-300"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </a>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
