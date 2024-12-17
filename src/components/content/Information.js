import React from "react";
import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";

export const Information = () => {
  return (
    <div className="w-[1200px] mx-auto flex gap-8 text-center items-center pt-10">
      {/* Working Time */}
      <div className="w-1/3 flex flex-col items-center justify-center gap-4">
        <div className="bg-orange-500 p-4 rounded-full text-white text-2xl">
          <FiClock />
        </div>
        <div>
          <span className="block font-bold">Today 10:00am - 11:00pm</span>
          <span className="text-gray-600">Working Time</span>
        </div>
      </div>

      <div className="h-16 w-[2px] bg-gray-300"></div>

      {/* Location */}
      <div className="w-1/3 flex flex-col items-center justify-center gap-4">
        <div className="bg-orange-500 p-4 rounded-full text-white text-2xl">
          <FiMapPin />
        </div>
        <div>
          <span className="block font-bold">Mansoura, DK, Egypt</span>
          <span className="text-gray-600">Our Location</span>
        </div>
      </div>

      <div className="h-16 w-[2px] bg-gray-300"></div>

      {/* Phone Number */}
      <div className="w-1/3 flex flex-col items-center justify-center gap-4">
        <div className="bg-orange-500 p-4 rounded-full text-white text-2xl">
          <FiPhone />
        </div>
        <div>
          <span className="block font-bold">+0150427589</span>
          <span className="text-gray-600">Phone Number</span>
        </div>
      </div>
    </div>
  );
};
