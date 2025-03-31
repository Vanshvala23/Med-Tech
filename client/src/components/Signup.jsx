import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, username, email, password } = formData;

    // Validation
    if (!firstName || !lastName || !username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/auth/signup", formData);
      setSuccess(response.data.message || "Signup successful!");
      setFormData({ firstName: "", lastName: "", username: "", email: "", password: "" });

      // Redirect to Login Page After Successful Signup
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div className="border-2 border-[#1c7856] bg-[#d9d9d9] text-black p-10 rounded-md w-[450px]">
          <form onSubmit={handleSubmit}>
            {/* Close Button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
            
            <h3 className="font-bold text-xl">Signup</h3>

            {/* Error and Success Messages */}
            {error && <p className="text-red-500 mt-3">{error}</p>}
            {success && <p className="text-green-500 mt-3">{success}</p>}

            {/* First Name */}
            <div className="mt-5 space-y-2">
              <label>First Name :</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your First Name"
                className="w-full py-2 px-3 border rounded-md outline-none"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            {/* Last Name */}
            <div className="mt-5 space-y-2">
              <label>Last Name :</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your Last Name"
                className="w-full py-2 px-3 border rounded-md outline-none"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            {/* Username */}
            <div className="mt-5 space-y-2">
              <label>Username :</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your Username"
                className="w-full py-2 px-3 border rounded-md outline-none"
                value={formData.username}
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
