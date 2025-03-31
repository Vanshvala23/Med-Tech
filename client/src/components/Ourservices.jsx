import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Appoint from "../assets/Appoint.png";
import Record from "../assets/Record.png";
import QR from "../assets/QR.png";
import Refills from "../assets/Refills.png";
import Login from "./Login";
function Ourservices() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="my-25">
        <h1 className="text-4xl text-center font-semibold">
          Top <span className="text-[#54bd95]">services</span> we offer{" "}
        </h1>
        <div>
          <p className="text-xl text-center mt-5 p-2">
            In our increasingly busy lives, your health demands efficient and
            comprehensive solutions. MediLink Plus offers a collection of
            integrated services to manage your healthcare needs conveniently
            online.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            <div>
              <h3>
                <div className="card bg-base-100 w-96 shadow-sm max w-screen-2xl container mx-auto md:px-20 px-4 mt-10 border border-green-300 hover:border-[#1c7856] duration-200 p-4 cursor-auto">
                  <figure className="px-10 pt-10">
                    <img src={Record} alt="Record" className="w-15 h-15" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Record Management</h2>
                    <p>
                      Effortlessly access your medical records, prescriptions,
                      and lab results from anywhere, anytime.
                    </p>
                    <div className="card-actions">
                      <button
                        className="btn bg-[#1c7856] hover:bg-green-200 cursor-pointer duration-300 rounded-lg"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        Enter
                      </button>
                      <Login />
                    </div>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className="card bg-base-100 w-96 shadow-sm max w-screen-2xl container mx-auto md:px-20 px-4 mt-10 border border-green-300 hover:border-[#1c7856] duration-200 p-4 cursor-auto">
                  <figure className="px-10 pt-10">
                    <img
                      src={Appoint}
                      alt="Appoint management"
                      className="w-15 h-15"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Booking Appointments</h2>
                    <p>
                      Choose your preferred doctor and book an appointment at
                      your convenience.
                    </p>
                    <div className="card-actions">
                      <button
                        className="btn bg-[#1c7856] hover:bg-green-200 cursor-pointer duration-300 rounded-lg"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        Enter
                      </button>
                      <Login />
                    </div>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className="card bg-base-100 w-96 shadow-sm max w-screen-2xl container mx-auto md:px-20 px-4 mt-10 border border-green-300 hover:border-[#1c7856] duration-200 p-4 cursor-auto">
                  <figure className="px-10 pt-10">
                    <img src={Refills} alt="Shoes" className="w-15 h-15" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Medicines Refills</h2>
                    <p>
                      Skip the queue and order your prescription refills online.
                    </p>
                    <div className="card-actions">
                      <button
                        className="btn bg-[#1c7856] hover:bg-green-200 cursor-pointer duration-300 rounded-lg"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        Enter
                      </button>
                      <Login />
                    </div>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className="card bg-base-100 w-96 shadow-sm max w-screen-2xl container mx-auto md:px-20 px-4 mt-10 border border-green-300 hover:border-[#1c7856] duration-200 p-4 cursor-auto">
                  <figure className="px-10 pt-10">
                    <img src={QR} alt="Shoes" className="w-15 h-15" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">QR-Enable Prescriptions</h2>
                    <p>
                      Get your prescriptions in a QR code format for easy access
                      and sharing.
                    </p>
                    <div className="card-actions">
                      <button
                        className="btn bg-[#1c7856] hover:bg-green-200 cursor-pointer duration-300 rounded-lg "
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        Enter
                      </button>
                      <Login />
                    </div>
                  </div>
                </div>
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Ourservices;
