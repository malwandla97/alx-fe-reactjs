

import { useState } from 'react';
import githubService from '../services/githubService';

const Search = () => {
  // Define states for the search term, user data, and loading/error states
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission and API call
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);  // Reset previous search results

    try {
      const result = await githubService.fetchUserData(username);
      if (result && result.length > 0) {
        setUserData(result[0]); // Assuming you are displaying the first result
      } else {
        setError("Looks like we can't find the user");
      }
    } catch (err) {
      setError("An error occurred while fetching the user data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border px-4 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-2"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {userData && !loading && !error && (
        <div className="user-info">
          <img src={userData.avatar_url} alt={userData.login} className="w-32 h-32 rounded-full" />
          <h2>{userData.login}</h2>
          <p>{userData.name}</p>
          <p>{userData.location}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;


