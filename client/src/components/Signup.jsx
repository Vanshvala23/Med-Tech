import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Signup() {
  return (
  <>
    <Navbar/>
    <div className="flex h-screen items-center justify-center ">
      <div
        id="my_modal_3"
        className="border-[2px] border-[#1c7856] bg-white p-10 rounded-md w-100 h-120"
      >
        <div className="">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-xl">Signup</h3>
          <div className="mt-5 space-y-2">
            <span>Name :</span>
            <br />
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-80 py-2 px-3 border rounded-md outline-none mt-1"
            />
          </div>
          <div className="mt-5 space-y-2">
            <span>Email :</span>
            <br />
            <input
              type="text"
              placeholder="Enter your Email"
              className="w-80 py-2 px-3 border rounded-md outline-none mt-1"
            />
          </div>
          <div className="mt-5 space-y-2">
            <span>Password :</span>
            <br />
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-80 py-2 px-3 border rounded-md outline-none mt-1"
            />
          </div>
          <div className="mt-10 space-y-2 flex justify-around">
            <button className="bg-[#1c7856] text-white py-2 px-4 rounded-md hover:bg-green-300 duration-300 cursor-pointer">
              Signup
            </button>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
      </>
  );
}

export default Signup;
