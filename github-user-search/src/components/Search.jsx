// src/components/Search.jsx
import React, { useState } from 'react';
import githubService from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    // Reset errors before new search
    setError('');
    setUsers([]);
    setLoading(true);

    // Fetch user data with filters
    const fetchedUsers = await githubService.fetchUserData(username, location, minRepos);

    if (fetchedUsers) {
      setUsers(fetchedUsers);
    } else {
      setError("Looks like we can't find the user.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <form className="space-y-4" onSubmit={handleSearch}>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        
        <input
          type="number"
          className="w-full p-2 border rounded"
          placeholder="Minimum repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}

      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      <div className="mt-4">
        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li key={user.id} className="border-b py-2">
                <div className="flex items-center">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">{user.login}</p>
                    <p className="text-gray-600">
                      <a
                        href={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        View Profile
                      </a>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;


