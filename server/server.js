// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Express backend!' });
});

app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
});