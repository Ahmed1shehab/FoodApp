import React from "react";

export const Services = () => {
  return (
    <div className="w-[1200px] mx-auto gap-8 py-10">
      <div className="text-center mb-8">
        <h2 className="text-lg text-yellow-500 font-bold leading-tight">
          Services
        </h2>
        <h1 className="text-3xl font-bold leading-tight">
          Why Choose Our Favourite Recipes
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="border border-gray-300 shadow-lg rounded-lg p-6 text-center">
          <span className="text-3xl text-orange-500 mb-4 block">🍴</span>
          <span className="text-xl font-semibold mb-2 block">Quality food</span>
          <span className="text-gray-600">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born.
          </span>
        </div>

        <div className="border border-gray-300 shadow-lg rounded-lg p-6 text-center">
          <span className="text-3xl text-orange-500 mb-4 block">🥗</span>
          <span className="text-xl font-semibold mb-2 block">Healthy food</span>
          <span className="text-gray-600">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born.
          </span>
        </div>

        <div className="border border-gray-300 shadow-lg rounded-lg p-6 text-center">
          <span className="text-3xl text-orange-500 mb-4 block">🚚</span>
          <span className="text-xl font-semibold mb-2 block">
            Fast Delivery
          </span>
          <span className="text-gray-600">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born.
          </span>
        </div>
      </div>
    </div>
  );
};
