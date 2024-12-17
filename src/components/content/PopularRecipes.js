import React from "react";
import { CardMain } from "../common/CardMain"; // Assuming you have a CardMain component
import useFetch from "../hooks/useFetch"; // Import the custom useFetch hook

export const PopularRecipes = () => {
  // Use the custom useFetch hook to fetch popular recipes data
  const { data, loading, error } = useFetch(
    "https://api.spoonacular.com/recipes/random?apiKey=9c4a217a85354317a9974cc26bf1d132&number=6"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-[1200px] mx-auto gap-8 py-10">
      <div className="text-center mb-8">
        <h2 className="text-lg text-yellow-500 font-bold leading-tight">Product</h2>
        <h1 className="text-3xl font-bold leading-tight">Most Popular Recipes</h1>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {data.map((meal) => (
          <CardMain
            key={meal.id}
            image={meal.image}
            title={meal.title}
            summary={meal.summary}
            mealId={meal.id}
          />
        ))}
      </div>
    </div>
  );
};
