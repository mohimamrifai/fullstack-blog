import axios from 'axios';

export async function getPosts (token) {
  try {
    const response = await axios.get('http://localhost:5000/post', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
