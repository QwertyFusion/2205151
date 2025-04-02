const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 9876; // Given in question example, so I have used it
const WINDOW_SIZE = 10; // Given in question
const API_BASE_URL = "http://20.244.56.144/evaluation-service";

// Define valid types for number generation
const validTypes = {
    p: "primes",
    f: "fibo",
    e: "even",
    r: "rand",
};

const BEARER_TOKEN = "Put access_token here"; // I have removed my access token for security reasons

let windowNumbers = [];

app.get("/numbers/:type", async (req, res) => {
    const { type } = req.params;

    // Validate number type
    if (!validTypes[type]) {
        return res.status(400).json({ error: "Invalid number type" });
    }

    const apiUrl = `${API_BASE_URL}/${validTypes[type]}`;
    let newNumbers = [];

    try {
        // Fetch data with a timeout of 500ms
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`,
            },
            timeout: 500,
        });
        newNumbers = response.data.numbers || [];
    } catch (error) {
        console.error("API Request failed or timed out", error.message);
        return res
            .status(500)
            .json({ error: "Failed to fetch numbers from API" });
    }

    // Remove duplicates & maintain unique numbers
    newNumbers = newNumbers.filter((num) => !windowNumbers.includes(num));

    // Store previous state
    const windowPrevState = [...windowNumbers];

    // Maintain window size
    windowNumbers = [...windowNumbers, ...newNumbers].slice(-WINDOW_SIZE);

    // Calculate the average
    const avg =
        windowNumbers.length > 0
            ? (
                  windowNumbers.reduce((sum, num) => sum + num, 0) /
                  windowNumbers.length
              ).toFixed(2)
            : 0.0;

    res.json({
        windowPrevState,
        windowCurrState: windowNumbers,
        numbers: newNumbers,
        avg: parseFloat(avg),
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
