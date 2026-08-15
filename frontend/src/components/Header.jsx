import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="mt-20 flex flex-col md:flex-row bg-blue-600 rounded-xl px-6 md:px-10 lg:px-16">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-8 md:py-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-4 text-white text-sm">
          <img
            className="w-28"
            src={assets.group_profiles}
            alt="Group Profile"
          />

          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white text-gray-600 px-8 py-3 rounded-full hover:scale-105 transition duration-300"
        >
          Book Appointment
          <img
            className="w-3"
            src={assets.arrow_icon}
            alt="Arrow Icon"
          />
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute md:bottom-0 h-auto"
          src={assets.header_img}
          alt="Header"
        />
      </div>
    </div>
  );
};

export default Header;