import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // List of all recipes
  searchTerm: '', // Search term entered by user
  setSearchTerm: (term) => set({ searchTerm: term }), // Update the search term
  filteredRecipes: [], // List of filtered recipes based on the search term
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    )
  })),
}));

export { useRecipeStore };
