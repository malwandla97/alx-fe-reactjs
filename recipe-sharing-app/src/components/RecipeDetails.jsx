import useRecipeStore from '../stores/recipeStore.js';
import { useNavigate } from 'react-router-dom';

const RecipeDetails = ({ recipeId }) => {
    const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  navigate('/');  // Navigate back to the homepage or RecipeList

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetails;
