// SearchBar.js
import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    filterRecipes(); // Trigger filtering when the search term changes
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes by name, ingredients, or prep time..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
