import axios from 'axios';

export default {
  async getCareerGoal() {
    try {
      const response = await axios.get('http://localhost:3000/api/career-goal', );

      return response.data;
    } catch (error) {
      throw new Error('Career goal retrieval unsuccessful.');
    }
  },
}
