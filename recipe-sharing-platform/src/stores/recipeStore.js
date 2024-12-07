import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [], // Initially empty
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
  searchQuery: "",
  filterCriteria: "",
  
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilterCriteria: (criteria) => set({ filterCriteria: criteria }),

  // Computed filtered recipes
  get filteredRecipes() {
    const { recipes, searchQuery, filterCriteria } = get();
    return recipes.filter((recipe) => {
      const matchesSearch =
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        !filterCriteria || recipe.category === filterCriteria;
      return matchesSearch && matchesCategory;
    });
  },

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  editRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));

export default useRecipeStore;
