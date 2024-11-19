// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const HomePage = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
