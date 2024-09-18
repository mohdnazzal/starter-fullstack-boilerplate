// /src/routes/technologies.js

const express = require('express'); // Import the Express framework
const router = express.Router(); // Create a new router object
const tech = require('../data/technologies'); // Import the technologies data

// Define a route to handle GET requests for technologies data
router.get('/technologies', (req, res) => {
  console.log('Technologies data:', tech); // Log the technologies data to the console (for debugging)
  res.json(tech); // Send the technologies data as a JSON response
});

module.exports = router; // Export the router to be used in the main server file
