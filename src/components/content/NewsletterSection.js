import React from "react";
import burger from "../../assets/burger/burger-removebg-preview.png";

export const NewsletterSection = () => {
  return (
    <div className="relative bg-black text-white rounded-xl w-[1200px] mx-auto p-8 flex items-center my-20">

     
      <div className="absolute top-[-100px] left-[-20px] w-[400px] sm:w-[500px] md:w-[600px]">
        <img
          src={burger} 
          alt="Delicious Burger"
          className="w-11/12 h-full object-cover rounded-lg"
        />
      </div>

    
      <div className="w-1/2 px-6 ml-auto">
        <h2 className="text-4xl font-bold mb-4">Subscribe To Our Newsletter</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus mauris
          sem sed urna venenatis viverra. Egestas in velit nulla viverra turpis
          id ac. Armet faucibus tempus.
        </p>

        <div className="flex items-center gap-0">
          <input
            type="email"
            placeholder="Type your email..."
            className="flex-1 p-3 rounded-l-lg text-gray-800 focus:outline-none"
          />
          <button className="bg-[#FFA500] text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-[#e69500]">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};
