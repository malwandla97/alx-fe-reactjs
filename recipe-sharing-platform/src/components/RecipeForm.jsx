import React, { useState } from "react";
import useRecipeStore from "../stores/recipeStore";

const RecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const [newRecipe, setNewRecipe] = useState({
    title: "",
    summary: "",
    image: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedRecipe = {
      ...newRecipe,
      ingredients: newRecipe.ingredients.split(",").map((item) => item.trim()),
    };
    addRecipe(formattedRecipe);
    setNewRecipe({
      title: "",
      summary: "",
      image: "",
      ingredients: "",
      instructions: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a New Recipe</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-600 font-medium mb-2">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={newRecipe.title}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="summary" className="block text-gray-600 font-medium mb-2">
          Summary
        </label>
        <textarea
          name="summary"
          value={newRecipe.summary}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-600 font-medium mb-2">
          Image URL
        </label>
        <input
          type="text"
          name="image"
          value={newRecipe.image}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-gray-600 font-medium mb-2">
          Ingredients (comma-separated)
        </label>
        <input
          type="text"
          name="ingredients"
          value={newRecipe.ingredients}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="instructions" className="block text-gray-600 font-medium mb-2">
          Instructions
        </label>
        <textarea
          name="instructions"
          value={newRecipe.instructions}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default RecipeForm;
