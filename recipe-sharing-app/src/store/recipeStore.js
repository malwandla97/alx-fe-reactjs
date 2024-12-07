import { create } from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],  // This will store the filtered recipes
    favorites: [],
    recommendations: [],

    setSearchTerm: (term) => set({ searchTerm: term }),

    filterRecipes: () => set((state) => ({
        recipes: state.recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
    })),
    

    addRecipe: (newRecipe) => set((state) => ({
        recipes: [...state.recipes, newRecipe]
    })),

    setRecipes: (recipes) => set({ recipes }),

    deleteRecipe: (recipeId) => set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)
    })),

    updateRecipe: (updatedRecipe) => set((state) => ({
        recipes: state.recipes.map((recipe) => 
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        )
    })),
     // Add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  
  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  // Generate recommendations based on favorite recipes
  generateRecommendations: () => set(state => {
    // Simple mock-up: Recommend recipes that share some common tags or are in the favorites list
    const recommended = state.recipes.filter(recipe => 
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
    
}));


export default useRecipeStore;
