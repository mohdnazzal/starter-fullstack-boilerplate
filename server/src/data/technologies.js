// data/technologies.js

// Array of technology objects, each representing a technology used in the application
const tech = [
  {
    id: 1, // Unique identifier for the technology
    type: "frontend", // Type of technology (e.g., frontend or backend)
    name: "ReactJS", // Name of the technology
    url: "https://reactjs.org/", // URL to the official website of the technology
    imgurl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // URL to the technology's logo image
  },
  {
    id: 2,
    type: "frontend",
    name: "ViteJS",
    url: "https://vitejs.dev/",
    imgurl: "https://vitejs.dev/logo.svg",
  },
  {
    id: 3,
    type: "backend",
    name: "NodeJS",
    url: "https://nodejs.org/",
    imgurl: "https://nodejs.org/static/images/logo.svg",
  },
  {
    id: 4,
    type: "backend",
    name: "ExpressJS",
    url: "https://expressjs.com/",
    imgurl: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
  },
];

// Export the tech array for use in other parts of the application
module.exports = tech;
