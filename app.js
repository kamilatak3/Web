const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
