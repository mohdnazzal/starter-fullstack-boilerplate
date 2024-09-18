import { Outlet } from "react-router-dom";
import {} from '../../assets/styles/layout.css'; // Importing CSS file for styling

export default function Layout() {
  return (
    <>
      <header>
        {/* Navigation bar */}
        <nav className="navbar navbar-expand-lg navbar-font-color navbar-bg-color nav-size">
          <div className="container-fluid">
            {/* Button for toggling the navbar on small screens */}
            <button
              className="navbar-toggler"
              type="toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon nv-toggle-icon"></span>
            </button>
            
            {/* Collapsible navbar content */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                {/* Navigation link for Home */}
                <li className="nav-item">
                  <a className="nav-link text-uppercase textdecor" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                {/* Navigation link for About */}
                <li className="nav-item">
                  <a className="nav-link text-uppercase textdecor" href="/about">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Outlet component for rendering nested routes */}
        <Outlet />
      </main>

      <footer className="footer-bg-color text-center text-md-start">
        <div className="text-center p-3">
          {/* Footer text with a copyright notice */}
          <a className="footer-white-color">© 2024 Mohammad K. Nazzal. All rights reserved. Licensed under the MIT License.</a>
        </div>
      </footer>
    </>
  );
}
