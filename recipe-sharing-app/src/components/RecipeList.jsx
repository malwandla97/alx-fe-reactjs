// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import useRecipeStore from '../stores/recipeStore';
import SearchBar from './SearchBar'; // Assuming you've created the SearchBar component
import RecipeItem from './RecipeItem'; // Assuming you have a RecipeItem component for individual recipe display

const RecipeList = () => {
  // Accessing both recipes and filteredRecipes from the store
  const { recipes, filteredRecipes, searchTerm, setSearchTerm, filterRecipes } = useRecipeStore((state) => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes,
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
    filterRecipes: state.filterRecipes,
  }));

  // Only trigger filtering if searchTerm changes, not recipes
  useEffect(() => {
    filterRecipes(searchTerm, recipes); // Apply filtering when searchTerm or recipes change
  }, [searchTerm, recipes, filterRecipes]); // Only depend on searchTerm and recipes

  return (
    <div>
      <h2>Recipes</h2>

      {/* Search Bar Component */}
      <SearchBar />

      {/* Display filtered recipes */}
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            {/* Using Link to navigate to individual recipe pages */}
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
