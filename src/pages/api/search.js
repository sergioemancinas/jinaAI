import axios from 'axios';

export default async function handler(req, res) {
  const { query } = req.query;

  try {
    const response = await axios.get(`https://api.deezer.com/search?q=${query}&apikey=${process.env.NEXT_PUBLIC_DEEZER_API_KEY}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data from Deezer API.' });
  }
}

