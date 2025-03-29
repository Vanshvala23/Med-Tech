import React from "react";
import phone from "../../public/phone.png";
import email from "../../public/email.png";
import location from "../../public/location.png";

function Get() {
  return (
    <>
      <div className="max w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-30">
        <div className="w-full md:w-1/2 mt-10">
          <h1 className="text-3xl font-semibold">Get in Touch</h1>
          <h4 className="mt-2">Have questions? We'd love to hear from you.</h4>
          <div className="flex items-center space-x-4 mt-5">
            <img src={phone} alt="" />
            <h1>+91 9867839223</h1>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <img src={email} alt="" /> <h1>medilinkplus@gmail.com</h1>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <img src={location} alt="" />
            <h1>12,Shreejidham,Ellisbridge Ahmedabad</h1>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-10">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border rounded mt-0"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded mt-3"
          />
          <textarea
            placeholder="Enter your message"
            className="w-full p-2 border rounded mt-3 h-20"
          ></textarea>
          <button
            type="submit"
            className=" w-full bg-[#1c7856] hover:bg-green-300 duration-300 text-black font-bold py-2 px-4 rounded-lg mt-4 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Get;
