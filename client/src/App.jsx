import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter for routing
import Routing from './routes/Routing'; // Importing the Routing component

function App() {
  return (
    <>
      {/* Wrap the Routing component with BrowserRouter for routing functionality */}
      <BrowserRouter>
        <Routing /> {/* Render the Routing component which defines app routes */}
      </BrowserRouter>
    </>
  );
}

export default App;
