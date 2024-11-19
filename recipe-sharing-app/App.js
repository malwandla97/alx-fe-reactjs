// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './RecipeList';
import SearchBar from './SearchBar';

function App() {
  return (
    <Router>
      <div>
        <SearchBar />  {/* Search bar is always at the top */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          {/* You can add additional routes like RecipeDetails here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
