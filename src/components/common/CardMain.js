import React from 'react';
import { Link } from 'react-router-dom';

export const CardMain = ({ image, title, summary, mealId }) => {
  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, 20) + "...";
    }
    return text;
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base mb-4">
          Summary: {truncateText(summary, 150)} 
        </p>
        <Link to={`/meal/${mealId}`}>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};
