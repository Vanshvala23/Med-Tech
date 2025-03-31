import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear errors when typing
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    // Validation
    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }

    alert("Signup Successful! (This is just a frontend test)");
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div
          id="my_modal_3"
          className="border-2 border-[#1c7856] bg-[#d9d9d9] text-black p-10 rounded-md w-[450px]"
        >
          <form onSubmit={handleSubmit}>
            {/* Close Button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
            
            <h3 className="font-bold text-xl">Signup</h3>

            {/* Error Message */}
            {error && <p className="text-red-500 mt-3">{error}</p>}

            {/* Name */}
            <div className="mt-5 space-y-2">
              <label>Name :</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="w-full py-2 px-3 border rounded-md outline-none"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="mt-5 space-y-2">
              <label>Email :</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="w-full py-2 px-3 border rounded-md outline-none"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="mt-5 space-y-2">
              <label>Password :</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="w-full py-2 px-3 border rounded-md outline-none"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <div className="mt-10 space-y-2 flex justify-around">
              <button
                type="submit"
                className="bg-[#1c7856] text-white py-2 px-4 rounded-md hover:bg-green-300 duration-300 cursor-pointer"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
