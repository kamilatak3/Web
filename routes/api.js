const express = require('express');
const router = express.Router();

// Handle GET request
router.get('/data', (req, res) => {
    const newData = 'new data';
    res.send(newData);
});

// Handle POST request
router.post('/submit', (req, res) => {
    const name = req.body.name;
    res.json({ message: `Hello, ${name}!` });
});

module.exports = router;
