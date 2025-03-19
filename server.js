require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const gemini_api_key = process.env.gemini_api_key;

// Endpoint to generate business name and slogan
app.post('/generate-text', async (req, res) => {
    try {
        const { prompt } = req.body; // Business context prompt
        const response = await axios.post(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateText?key=${GEMINI_API_KEY}`, {
            prompt: { text: prompt }
        });

        res.json({ text: response.data.generatedText });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate text' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
