import React from "react";
import RecipeCard from "../common/RecipeCard";

export const TheBestRecipe = () => {
  return (
    <div className="w-[1200px] mx-auto flex gap-8 pt-4">
      {/* Left Column */}
      <div className="w-1/2">
        <h1 className="text-[50px] font-bold leading-tight">
          The Best Recipe <br /> In{" "}
          <span className="text-[#FFA500]">Your City</span>
        </h1>
        <p className="text-gray-700 mt-4 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>

        <button
          type="button"
          className="mt-10 text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-lg px-8 py-4 text-center"
        >
          See Recipes
        </button>
      </div>

      {/* Right Column */}
      <div className="w-1/2 grid grid-cols-2 gap-4">
        <RecipeCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKqzrE2hZnTGh65h_SlXd8X8V75HXdXC3Eg&s"
          title="Pizza"
          description="Pizza is an Italian dish made from a flat base of leavened wheat dough...."
        />
        <RecipeCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TQazzC9MScRdcBolJMOp_RxsNY5PDFIT9g&s"
          title="محشي كرمب"
          description="Mahshi Kromb, or stuffed cabbage, is a popular dish in Egyptian cuisine..."
        />
        <RecipeCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3i3HmsVHdrpXqSmbVLo_SdxGtbKD8tdd6Q&s"
          title="Nachos "
          description="Nachos are a Tex-Mex dish made from tortilla chips topped with melted cheese and a variety of other ingredients..."
        />
        <RecipeCard
          image="https://www.onceuponachef.com/images/2019/01/shrimp-and-grits-23-760x983.jpg"
          title="shrimp and grits"
          description="Shrimp and grits is a classic Southern dish made with creamy, cheesy grits topped with seasoned shrimp..."
        />
      </div>
    </div>
  );
};
