// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');   // GitHub username
  const [location, setLocation] = useState('');    // GitHub user location
  const [minRepos, setMinRepos] = useState('');    // Minimum repositories count
  const [userData, setUserData] = useState([]);    // Array to store search results
  const [loading, setLoading] = useState(false);   // Loading state
  const [error, setError] = useState('');          // Error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    setUserData([]);

    const query = buildSearchQuery(username, location, minRepos);

    try {
      const data = await fetchUserData(query);   // Fetch data with advanced search criteria
      setUserData(data.items);                   // Save multiple users from GitHub API response
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);  // Reset loading state after request is complete
    }
  };

  // Build the query string for the GitHub Search API
  const buildSearchQuery = (username, location, minRepos) => {
    let query = `user:${username}`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;
    return query;
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            className="w-full p-2 border rounded"
            placeholder="Minimum repositories (optional)"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Search</button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      
      <div className="mt-6">
        {userData.length > 0 && !loading && (
          <ul className="space-y-4">
            {userData.map((user) => (
              <li key={user.id} className="p-4 border-b">
                <h2 className="font-bold text-lg">{user.login}</h2>
                <p>Location: {user.location || 'N/A'}</p>
                <p>Repositories: {user.public_repos}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Profile</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;

