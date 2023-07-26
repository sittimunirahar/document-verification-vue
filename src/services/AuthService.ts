import axios from 'axios';

export default {
  async login(credentials: {email:string, password:string}) {
    try {
      const response = await axios.post('http://localhost:3000/api/login', credentials);

      return response.data;
    } catch (error) {
      throw new Error('Login failed. Please check your credentials and try again.');
    }
  }
}
