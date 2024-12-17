import React from "react";

// RecipeCard Component
const RecipeCard = ({ image, title, description }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg mb-4" // Uniform height
      />
      <h2 className="font-semibold text-xl">{title}</h2>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default RecipeCard;
