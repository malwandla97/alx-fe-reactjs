
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users/';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}${username}`);
    return response.data;  // Return the user data
  } catch (error) {
    throw new Error('User not found');  // Throw an error if something goes wrong
  }
};
