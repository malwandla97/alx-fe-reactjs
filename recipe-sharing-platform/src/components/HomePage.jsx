import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom"; // Added Link from react-router-dom
import useRecipeStore from "../stores/recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import recipeData from "../data.json";
import AddRecipeForm from "./AddRecipeForm"; // Import AddRecipeForm

const HomePage = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const setRecipes = useRecipeStore((state) => state.setRecipes);
  const filterCriteria = useRecipeStore((state) => state.filterCriteria);
  const searchQuery = useRecipeStore((state) => state.searchQuery);
  const setSearchQuery = useRecipeStore((state) => state.setSearchQuery);
  const setFilterCriteria = useRecipeStore((state) => state.setFilterCriteria);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const [editingRecipe, setEditingRecipe] = useState(null);

  // Load recipes from JSON file into Zustand store
  useEffect(() => {
    setRecipes(recipeData);
  }, [setRecipes]);

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesCategory =
        !filterCriteria || recipe.category === filterCriteria;
      const matchesSearch =
        !searchQuery ||
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [recipes, filterCriteria, searchQuery]);

  const addNewRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]); // Add new recipe to the store
  };

  return (
    <div className="p-4 md:p-8">
      {editingRecipe && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <EditRecipeForm
            recipe={editingRecipe}
            onClose={() => setEditingRecipe(null)}
          />
        </div>
      )}

      <AddRecipeForm onAddRecipe={addNewRecipe} /> {/* Add the form here */}

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
        <input
          type="text"
          placeholder="Search by title..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full md:w-1/2"
        />
        <select
          onChange={(e) => setFilterCriteria(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full md:w-1/4"
        >
          <option value="">All Categories</option>
          <option value="dessert">Dessert</option>
          <option value="main">Main Course</option>
          <option value="appetizer">Appetizer</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {recipe.title}
                </Link>
              </h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => setEditingRecipe(recipe)}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteRecipe(recipe.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
