import express from 'express';
import axios from 'axios';

const app = express();
const port = 3001;

app.use(express.json());

app.get('/movies', async (req, res) => {
  const apiKey = 'd59f0303'; // Your OMDB API key
  const apiUrl = `http://www.omdbapi.com/?s=movie&type=movie&apikey=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching movie data from OMDB:', error);
    res.status(500).json({ error: 'Failed to fetch data from OMDB API' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
