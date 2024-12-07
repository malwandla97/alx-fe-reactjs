import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import ErrorBoundary from './components/ErrorBoundary';  // Import ErrorBoundary
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <h1>Recipe Sharing Application</h1>
      <ErrorBoundary>
      <AddRecipeForm />
      <RecipeList />
      </ErrorBoundary>

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/edit-recipe/:id" element={<EditRecipeForm />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </Router>
  );
}

export default App;
