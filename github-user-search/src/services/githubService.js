
import axios from 'axios';

const API_URL = 'https://api.github.com/search/users';

const fetchUserData = async (username, location = '', minRepos = 0) => {
  try {
    let query = `q=${username}`;

    // If location is provided, add it to the query
    if (location) {
      query += `+location:${location}`;
    }

    // If minRepos is provided, add it to the query
    if (minRepos > 0) {
      query += `+repos:>=${minRepos}`;
    }

    // Fetch data from GitHub API with the constructed query
    const response = await axios.get(`${API_URL}?${query}`);

    // Return the data of users
    return response.data.items;
  } catch (error) {
    // Return null in case of an error
    console.error("Error fetching data from GitHub API:", error);
    return null;
  }
};

export default {
  fetchUserData,
};
