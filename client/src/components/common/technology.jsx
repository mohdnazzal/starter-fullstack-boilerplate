import { useEffect, useState } from 'react';
import axios from 'axios';

const Technologies = () => {
  // State to hold the list of technologies
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    // Fetch the technologies from the backend API when the component mounts
    axios.get('http://localhost:5000/api/technologies')
      .then((response) => {
        // Update the state with the fetched technologies
        setTechnologies(response.data);
      })
      .catch((error) => {
        // Log any errors to the console
        console.error('Error fetching technologies:', error);
      });
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className="container my-5">
      <h2 className="text-center">Technologies Used</h2>
      <hr /> {/* Horizontal line separator */}
      <div className="row justify-content-center">
        {technologies.map((tech) => (
          <div key={tech.id} className="col-6 col-md-3 text-center mb-4">
            <a href={tech.url} target="_blank" rel="noopener noreferrer">
              <img
                src={tech.imgurl}
                alt={tech.name}
                className="img-fluid"
                style={{ width: '50px', height: '50px' }} // Inline style for image size
              />
            </a>
            <h5 className="mt-3">{tech.name}</h5> {/* Display technology name */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
