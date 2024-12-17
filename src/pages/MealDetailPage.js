import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MealDetailPage = () => {
  const { mealId } = useParams();
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${mealId}/information?apiKey=9c4a217a85354317a9974cc26bf1d132`)
      .then((response) => response.json())
      .then((data) => {
        setMealDetails(data);
      })
      .catch((error) => {
        console.error('Error fetching meal details:', error);
      });
  }, [mealId]);

  if (!mealDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[1200px] mx-auto py-10">
    {/* Title Section */}
    <div className="text-center mb-8">
      <h1 className="text-4xl font-extrabold leading-tight text-gray-800">
        {mealDetails.title}
      </h1>
      <div className="w-24 h-1 bg-[#FFA500] mx-auto mt-3"></div>
    </div>
  
    {/* Image and Content Layout */}
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Left Side - Meal Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={mealDetails.image}
          alt={mealDetails.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        />
      </div>
  
      {/* Right Side - Ingredients and Instructions */}
      <div className="md:w-1/2 w-full bg-white rounded-lg shadow-lg p-6">
        {/* Ingredients */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">Ingredients:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {mealDetails.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id} className="text-lg">
                {ingredient.original}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Instructions */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">Instructions:</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {mealDetails.instructions}
          </p>
        </div>
      </div>
    </div>
  </div>
  
  );
};
