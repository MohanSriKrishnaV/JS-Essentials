const express = require('express'); // Import Express
const app = express(); // Create an Express application
const port = 3000; // Choose a port (3000 is common)

// Define a route (e.g., for the root path "/")
app.get('/', (req, res) => {
  res.send('Hello World!'); // Send a response
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});