const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the compiled index.js (generated from TypeScript)
app.get('/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.js'));
});

// Serve static files if any (e.g., stylesheets, images)
app.use(express.static(path.join(__dirname)));

// Start the server on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
