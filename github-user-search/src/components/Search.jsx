
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');  // To hold the username input value
  const [userData, setUserData] = useState(null); // To store the fetched user data
  const [loading, setLoading] = useState(false);  // To manage loading state
  const [error, setError] = useState('');        // To store error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;  // Don't search if the input is empty

    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data); // Set the user data
    } catch (err) {
      setError('Looks like we can\'t find the user'); // Set error message
    } finally {
      setLoading(false); // Stop loading after request is done
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && !loading && !error && (
        <div>
          <h2>{userData.name}</h2>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
