import React from "react";
import Bodybanner from "../assets/Bodybanner.png";
import Login from "./Login";

function Body() {
  return (
    <>
      <div className="max w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-35">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-30 ">
          <div className="space-y-6">
            <h1 className="text-5xl">
              Transforming <span className="text-[#54bd95]">Healthcare</span>{" "}
            <br />
              Through <span className="text-[#54bd95]">Technology</span>
            </h1>
            <p className="text-2xl">
              Seamless.Secure.Smarter <br /> Healthcare for Everyone
            </p>
            <label className="input validator ">
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
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="Enter"
                placeholder="Enter Email to get Started"
                required
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn mt-3 bg-[#1c7856] text-black-bold rounded-md cursor-pointer hover:bg-green-100 duration-300" onClick={()=>document.getElementById("my_modal_3").showModal()}>
            Get Started
          </button>
          <Login/>
        </div>
        <div className=" order-1 w-full md:w-1/2 ">
          <img
            src={Bodybanner}
            className="w-150 h-120 mt-20 rounded-md "
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Body;
