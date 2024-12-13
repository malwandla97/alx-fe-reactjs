
import axios from 'axios';

// GitHub API search URL for users
const API_URL = 'https://api.github.com/search/users';

// Function to fetch user data based on username, location, and minRepos
const fetchUserData = async (username, location = '', minRepos = 0) => {
  try {
    // Construct the query string for the API request
    let query = `q=${username}`;

    // Add location filter if provided
    if (location) {
      query += `+location:${location}`;
    }

    // Add minRepos filter if provided
    if (minRepos > 0) {
      query += `+repos:>=${minRepos}`;
    }

    // Make the API request with the constructed query
    const response = await axios.get(`${API_URL}?${query}`);

    // Return the list of users from the API response
    return response.data.items;
  } catch (error) {
    // Log and return null if there was an error with the request
    console.error('Error fetching data from GitHub API:', error);
    return null;
  }
};

// Export the function for use in other parts of the app
export default {
  fetchUserData,
};

