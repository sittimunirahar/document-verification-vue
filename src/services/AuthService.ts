import axios from 'axios';

export default {
  async login(credentials: {email:string, password:string}) {
    try {
      const response = await axios.post('http://localhost:3000/api/login', credentials);

      return response.data;
    } catch (error) {
      throw new Error('Login failed. Please check your credentials and try again.');
    }
  },
  async logout() {
    const response = await axios.post('http://localhost:3000/api/logout');
    
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Logout failed. Please try again.');
    }
  }
}
