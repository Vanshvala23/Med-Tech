import React from "react";
import male from "../assets/Male.png";
import female from "../assets/Female.png";
import bot from "../assets/Bot.png";
function Review() {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-[#54bd95] text-center text-3xl font-semibold">Testimonials: </h1>
        <h2 className="text-center text-xl font-semibold mt-3">
          Hear from Those We've <span className="text-[#54bd95c]">Cared</span>{" "}
          For
        </h2>
      </div>
      <div className="mt-15 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-20">
        <div className="w-full md:w-1/ ">
          <div className="card bg-base-100 image-full w-100 h-40 shadow-sm">
            <figure>
              <img src={male} alt="joshua" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">-Joshua T.</h2>
              <p>
                "I can now access my prescriptions and text results directly
                from my phone."
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="card bg-base-100 image-full w-100 h-40 shadow-sm">
            <figure>
              <img src={female} alt="samantha" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">-Samantha K.</h2>
              <p>
                "This software has made my clinic operations faster and more
                organized."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-20">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-semibold mt-4">Got Questions?</h1>
          <h4 className="mt-3">Our AI Assistant is here to help 24/7</h4>
          <button className="btn bg-[#1c7856] hover:bg-green-200 mt-3 duration-300">Try AI Assistant</button>
        </div>
        <div>
          <img src={ bot} className="p-4" alt="bot" />
        </div>
      </div>
    </>
  );
}

export default Review;
