
//"Looks like we cant find the user"]
import { useState } from 'react';
import githubService from '../services/githubService'; // Make sure you import your service for API calls

const Search = () => {
  // States to handle the search input, user data, loading, and error
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle the form submission and make the API request
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true while waiting for the API response
    setError(null);   // Reset any previous errors
    setUserData(null); // Reset previous user data

    try {
      const result = await githubService.fetchUserData(username);
      if (result && result.length > 0) {
        setUserData(result[0]); // Assuming we show the first user if multiple are found
      } else {
        setError("Looks like we can't find the user");
      }
    } catch (err) {
      setError("An error occurred while fetching the user data.");
    } finally {
      setLoading(false); // Set loading state to false once the request is complete
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

      {loading && <p>Loading...</p>}  {/* Display loading state */}

      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

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

