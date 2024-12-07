import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";


function App() {
  return (
    <div className="text-blue-500 text-center">
      <h1 className="text-2xl font-bold">Recipe Sharing Platform</h1>
      <p>Welcome to the Recipe Sharing Platform!</p>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
