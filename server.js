const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)

app.get('/search', async (req, res) => {
    const query = req.query.query;  // Get the movie title from the frontend
    try {
        const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=a2224cc2`);
        res.json(response.data); // Send the movie data as JSON back to frontend
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movies' }); // Handle errors
    }
});

// Serve the app on the specified port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
