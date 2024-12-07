import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useRecipeStore } from '../stores/recipeStore'; // Assuming you're using Zustand or any other store for state

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate(); // Initialize the navigate hook
  const { deleteRecipe } = useRecipeStore(); // Get the deleteRecipe function from your store

  // Handle the delete action
  const handleDelete = () => {
    // Call the delete function from your store
    deleteRecipe(recipeId);

    // Navigate back to the recipe list after deletion
    navigate('/');
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
