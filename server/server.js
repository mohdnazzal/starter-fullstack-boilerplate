const express = require('express'); // Import the Express framework
const cors = require('cors'); // Import the CORS middleware (npm install cors)
const port = 5000; // Define the port number for the server
const app = express(); // Create an Express application instance

// Use CORS middleware to allow cross-origin requests
app.use(cors()); 

// Import the technologies route
const technologiesRoute = require('./src/routes/technologies'); 

// Use the technologies route for requests starting with /api
app.use('/api', technologiesRoute); 

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Log a message when the server is running
});
