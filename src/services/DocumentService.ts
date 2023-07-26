import axios from 'axios';

export default {
  async getRecentDocument() {
    try {
      const response = await axios.post('http://localhost:3000/api/document/recent', );

      return response.data;
    } catch (error) {
      throw new Error('Document retrieval unsuccessful.');
    }
  },
}
