import axios from 'axios';

export async function getDataUser(token) {
  try {
    const response = await axios.get('http://localhost:5000/profil', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data.user;
  } catch (error) {
    throw error;
  }
}
