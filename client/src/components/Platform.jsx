import React from "react";
import doctor from "../../public/Doctor.png"

function Platform() {
  return (
    <>
      <div className="my-15 mt-40">
        <h1 className="text-4xl  text-center font-semibold">
          How <span className="text-[#54bd95]">our platform</span> works
        </h1>
        <p className="text-center text-xl mt-5 p-2">
          Navigating your healthcare journey with MediLinkPlus is seamless. Our
          platform is designed to provide you with the best healthcare
          experience.You can also see our FAQ for more guidance:
        </p>
      </div>
      <div className="max w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mt-10 md:mt-10 space-y-5 order-2 md:order-1">
          <div class="flex items-center space-x-4">
            <div class="bg-[#1c7856] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
              1
            </div>
            <div class="text-xl font-semibold">Create Your Profile</div>
          </div>
          <p className="mt-3">
            Sign up and fill in your medical history securely.Setting up your
            profile this way would ensure that you stay up-to-date with your
            medical processes.
          </p>
          <div class="flex items-center space-x-4 mt-5">
            <div class="bg-[#1c7856] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
              2
            </div>
            <div class="text-xl font-semibold">Find What You Need</div>
          </div>
          <p className="mt-3">
            Search for existing records and add them to your profile. This would
            help you keep track of your medical history and make it easier for
            your healthcare provider to understand your health needs.
          </p>
          <div class="flex items-center space-x-4 mt-5">
            <div class="bg-[#1c7856] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
              3
            </div>
            <div class="text-xl font-semibold">Manage Medical Processes</div>
          </div>
          <p className="mt-3">
            Write diagonistics tests, book appointments, and get prescriptions
            on your doorstep.
          </p>
        </div>
        <div className=" md:w-1/2 flex items-start justify-center order-1">
          <img src={doctor} alt="doctor" className="h-110  p-10" />
        </div>
      </div>
    </>
  );
}

export default Platform;
