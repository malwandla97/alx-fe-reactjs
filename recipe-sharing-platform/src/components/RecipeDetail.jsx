import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 hover:underline">
        ← Back to Home
      </Link>

      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-4 shadow-md"
        />
        <p className="text-gray-600 mb-4">{recipe.summary}</p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Ingredients</h2>
        <ul className="list-disc pl-6 mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-600">
              {ingredient}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Instructions</h2>
        <p className="text-gray-600">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
