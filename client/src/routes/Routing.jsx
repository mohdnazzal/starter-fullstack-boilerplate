import { Routes, Route, Navigate } from "react-router-dom"; // Importing components for routing
import Layout from "../components/layout/layout"; // Importing the main layout component
import MainPage from "../pages/MainPage"; // Importing the MainPage component
import About from "../pages/About"; // Importing the About page component

import {} from "../assets/styles/global.css"; // Importing global CSS styles (currently unused)

function Routing() {
  return (
    <Routes>
      {/* Define the routing structure */}
      <Route path="/" element={<Layout />}>
        {/* Default route, renders MainPage */}
        <Route index element={<MainPage />} />
        
        {/* Redirect for unmatched routes to a custom "not found" page */}
        <Route path="*" element={<Navigate to="/not-found" replace />} />
        
        {/* Custom "not found" page */}
        <Route path="/not-found" element={<h1 className="error404">Page not found!</h1>} />
        
        {/* About page route */}
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default Routing;
