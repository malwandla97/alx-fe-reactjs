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

  // Validation function
  const validate = () => {
    const newErrors = {};

    // Title validation (ensure it's not empty)
    if (!title) {
      newErrors.title = "Title is required.";
    }

    // Ingredients validation (ensure it's not empty and contains at least 2 items)
    if (!ingredients) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please provide at least two ingredients.";
    }

    // Preparation steps validation (ensure it's not empty)
    if (!preparationSteps) {
      newErrors.preparationSteps = "Preparation steps are required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const newErrors = validate();
    setErrors(newErrors);

    // If there are no errors, call the onAddRecipe function and reset the form
    if (Object.keys(newErrors).length === 0) {
      const newRecipe = {
        title,
        ingredients: ingredients.split(",").map((item) => item.trim()), // Split ingredients by commas and trim spaces
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
        {/* Title Field */}
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

        {/* Ingredients Field */}
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

        {/* Preparation Steps Field */}
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

        {/* Submit Button */}
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
