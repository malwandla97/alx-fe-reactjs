import React from 'react';
import useRecipeStore from '../stores/recipeStore.js';

const SearchBar = () => {
    const setSearchTerm = useRecipeStore((state) => StaticRange.setSearchTerm);

    return (
        <div>
        <input type="text" placeholder="Search recipes..." onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
    );
};
export default SearchBar;