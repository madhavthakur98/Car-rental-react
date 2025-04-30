import React from "react";
import { Link } from "react-router-dom";
import heroimg from "../assets/Heroimg.jpg";

const Hero = () => {
  return (
    <div className="relative bg-gray-500">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={heroimg}
          alt="Travel adventure"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Travel in Comfort and Style
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          RK Tour and Travels offers premium car and bus rental services.
          Whether it's a business trip or a family vacation, we've got the
          perfect vehicle for your journey.
        </p>
        <div className="mt-10 flex space-x-4">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
