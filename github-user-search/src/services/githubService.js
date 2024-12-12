
import axios from 'axios';

const GITHUB_SEARCH_URL = 'https://api.github.com/search/users?q=';

export const fetchUserData = async (query) => {
  try {
    const response = await axios.get(`${GITHUB_SEARCH_URL}${query}`);
    return response.data; // Return the response with search results
  } catch (error) {
    throw new Error('Error fetching data from GitHub');
  }
};
