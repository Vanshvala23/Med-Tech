import React from "react";
import contact from "../assets/Contactus.png"
import { useForm } from "react-hook-form";
function Contact() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    return (
      <>
        <div className="max w-scrren-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
          <div className=" w-full order-2 md:order-1 md:w-1/2 mt-20">
            <h1 className="font-bold text-4xl">
              Contact <span className="text-[#1c7856] font-bold">Us</span>
            </h1>
            <div className="mt-4 space-y-2">
              <span>Name :</span>
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 py-2 px-3 border rounded-md mt-2"
                {...register("name", { required: true })}
              />
            </div>
            <div className="mt-5 space-y-2">
              <span>Email :</span>
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <input
                type="text"
                placeholder="Enter your Email"
                className="w-80 py-2 px-3 border rounded-md mt-2"
                {...register("email", { required: true })}
              />
            </div>
            <div className="mt-5 space-y-2">
              <span>Phone number :</span>
              <br />
              {errors.phone && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <input
                type="text"
                placeholder="Enter your number"
                className="w-80 py-2 px-3 border rounded-md mt-2"
                {...register("phone", { required: true })}
              />
            </div>
            <div className="mt-5 space-y-2">
              <span>Message :</span>
              <br />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <textarea
                placeholder="Message us"
                className="w-80 py-2 px-3 border rounded-md mt-2"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <div className="mt-5 space-y-2 flex ">
              <button
                type="submit"
                className="bg-[#1c7856] w-30 text-white py-2 px-4 rounded-lg hover:bg-green-300 duration-300 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="order-1 w-full md:w-1/2">
            <img src={contact} alt="contact" className="w-150 h-120 mt-45" />
          </div>
        </div>
      </>
    );
  }

export default Contact;
