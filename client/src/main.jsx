import { StrictMode } from 'react'; // Importing StrictMode to enable additional checks and warnings
import { createRoot } from 'react-dom/client'; // Importing createRoot for rendering the app
import App from './App.jsx'; // Importing the main App component
import './assets/styles/index.css'; // Importing global CSS styles

// Render the App component into the root element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Render the App component within StrictMode */}
  </StrictMode>,
);
