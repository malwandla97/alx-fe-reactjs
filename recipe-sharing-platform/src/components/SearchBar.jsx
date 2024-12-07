import React from "react";
import useRecipeStore from "../stores/recipeStore";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useRecipeStore((state) => ({
    searchQuery: state.searchQuery,
    setSearchQuery: state.setSearchQuery,
  }));

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg mb-4">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search recipes by title or ingredients..."
        className="w-full p-2 border rounded-lg"
      />
    </div>
  );
};

export default SearchBar;
