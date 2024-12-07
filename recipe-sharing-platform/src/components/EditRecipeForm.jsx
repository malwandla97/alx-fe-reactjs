import React, { useState } from "react";
import useRecipeStore from "../stores/recipeStore";

const EditRecipeForm = ({ recipe, onClose }) => {
  const [formData, setFormData] = useState(recipe);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, formData);
    onClose();
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Ingredients</label>
          <textarea
            name="ingredients"
            value={formData.ingredients.join(", ")}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                ingredients: e.target.value.split(",").map((item) => item.trim()),
              }))
            }
            className="w-full p-2 border rounded-lg"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Instructions</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          ></textarea>
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg"
          >
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipeForm;
