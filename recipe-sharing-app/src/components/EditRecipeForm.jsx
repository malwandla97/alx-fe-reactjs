import { useState } from 'react';
import useRecipeStore from '../stores/recipeStore';
import { useNavigate } from 'react-router-dom';


const EditRecipeForm = ({ recipeId }) => {
    const navigate = useNavigate(); // Initialize the navigate hook
  const { recipes, updateRecipe } = useRecipeStore((state) => ({
    recipes: state.recipes,
    updateRecipe: state.updateRecipe,
  }));
  const recipe = recipes.find((recipe) => recipe.id === recipeId);
  const [title, setTitle] = useState(recipe ? recipe.title : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ id: recipeId, title, description });
    navigate(`/recipe/${recipeId}`);  // Navigate to the recipe details after editing
  };

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="title">Title:</label>
    <input
      type="text"
      id="title"
      name="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Title"
    />
    
    <label htmlFor="description">Description:</label>
    <textarea
      id="description"
      name="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Description"
    />
    
    <button type="submit">Update Recipe</button>
  </form>
  
  );
};

export default EditRecipeForm;
