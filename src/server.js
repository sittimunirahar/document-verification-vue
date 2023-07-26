
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import getUserByEmailPassword from './data/users.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json()).use(cors());

app.post('/api/login', (request, response) => {
  const credentials = request.body;
  const userData = getUserByEmailPassword(credentials?.email, credentials?.password);

  if (userData) {
    response.status(200).json({ message: 'User found', user: userData });
  } else {
    response.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
