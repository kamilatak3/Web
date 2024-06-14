const express = require('express');
const router = express.Router();

// Handle GET request
router.get('/data', (req, res) => {
    res.json({ message: 'This is a GET request' });
});

// Handle POST request
router.post('/submit', (req, res) => {
    const name = req.body.name;
    res.json({ message: `Hello, ${name}!` });
});

module.exports = router;
