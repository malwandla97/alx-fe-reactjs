// RecipeList.js
import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import RecipeCard from './RecipeCard'; // Assuming you have a RecipeCard component to display each recipe

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  useEffect(() => {
    // Initial filtering when the component mounts
    useRecipeStore.getState().filterRecipes();
  }, []);

  return (
    <div>
      <h1>Recipe List</h1>
      <div>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
