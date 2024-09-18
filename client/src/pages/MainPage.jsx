// import React from 'react'; // Uncomment if necessary for your setup
import { Helmet } from 'react-helmet'; // Importing Helmet to manage the document head
import Technology from '../components/common/technology'; // Importing the Technology component

export default function MainPage() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" /> {/* Sets the character encoding for the document */}
          <title>Home Page</title> {/* Sets the title of the page */}
        </Helmet>
        <main style={{ width: "100%" }}> {/* Main content area with full width */}
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className="container py-5">
                    <div className="row align-items-center">
                      <div className="col-md-3 text-center">
                        {/* Logo image */}
                        <img
                          src="../../src/assets/images/github.png"
                          alt="GitHub Logo"
                          className="img-fluid mb-3"
                        />
                      </div>
                      <div className="col-md-9">
                        {/* Main heading and description */}
                        <h1 className="display-4 mb-3">Full-Stack Boilerplate for Freshers</h1>
                        <p className="lead text-muted">
                          Accelerate your fullstack development with our comprehensive ReactJS & NodeJS boilerplate, designed for learners who want to build modern, scalable applications from scratch. Perfect for aspiring developers, this template provides a ready-to-use setup, allowing you to focus on learning and mastering key development skills.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technology component to display technologies used */}
                <div className='d-flex col-12 md-m'>
                  <Technology />
                </div>
                
                {/* Additional information */}
                <div className='d-flex col-12 md-m'>
                  <h6>Please read the read.me file for more information!</h6>
                </div>
              </div>
            </div>
        </main>
      </>
    );
}
