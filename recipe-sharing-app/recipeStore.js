// recipeStore.js

import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [
    // Sample recipes
    { id: 1, title: 'Spaghetti Bolognese', description: 'A classic Italian pasta dish with meat sauce.' },
    { id: 2, title: 'Chicken Curry', description: 'A spicy and flavorful chicken curry.' }
  ],
  
  // Action to add a new recipe
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe]
  })),

  // Action to update an existing recipe
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),

  // Action to delete a recipe
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id)
  }))
}));
