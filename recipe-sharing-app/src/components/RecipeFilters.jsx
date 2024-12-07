// src/components/RecipeFilters.jsx
import React from 'react';
import useRecipeStore from '../stores/recipeStore';

const RecipeFilters = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const setFilterCategory = useRecipeStore((state) => state.setFilterCategory);  // You would add these actions in the store
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setFilterCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Appetizer">Appetizer</option>
        <option value="Main Dish">Main Dish</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
};

export default RecipeFilters;
