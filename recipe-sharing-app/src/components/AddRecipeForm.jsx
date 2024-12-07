import React, { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparationSteps, setPreparationSteps] = useState("");
  const [errors, setErrors] = useState({
    title: "",
    ingredients: "",
    preparationSteps: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const newErrors = {};
    if (!title) {
      newErrors.title = "Title is required.";
    }
    if (!ingredients || ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please provide at least two ingredients.";
    }
    if (!preparationSteps) {
      newErrors.preparationSteps = "Preparation steps are required.";
    }

    // Set the error state if there are any errors
    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      const newRecipe = {
        title,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        preparationSteps,
      };
      onAddRecipe(newRecipe);
      // Clear the form after submission
      setTitle("");
      setIngredients("");
      setPreparationSteps("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients (Separate with commas)
          </label>
          <textarea
            id="ingredients"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="preparationSteps" className="block text-sm font-medium text-gray-700">
            Preparation Steps
          </label>
          <textarea
            id="preparationSteps"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={preparationSteps}
            onChange={(e) => setPreparationSteps(e.target.value)}
          ></textarea>
          {errors.preparationSteps && <p className="text-red-500 text-sm">{errors.preparationSteps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
