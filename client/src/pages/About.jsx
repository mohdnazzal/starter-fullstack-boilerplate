import {} from "../assets/styles/about.css"; // Importing CSS styles for this component
import { Helmet } from 'react-helmet'; // Importing Helmet for managing document head
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'; // Importing MUI email icon
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Importing MUI LinkedIn icon

export default function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" /> {/* Sets the character encoding for the document */}
        <title>Home Page</title> {/* Sets the title of the page */}
      </Helmet>
      <main>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="col-md-3 text-center">
                    {/* Profile image */}
                    <img
                      src="../../src/assets/images/mkn.png"
                      alt="GitHub Logo"
                      className="img-fluid mb-3 mknimage" // Applies image styling
                    />
                  </div>
                  <div className="col-md-9">
                    {/* User's name */}
                    <h1 className="display-4 mb-3">Mohammad K. Nazzal</h1>
                    {/* Brief description about the user */}
                    <p className="lead text-muted">
                      Learner. Software Engineer. Highly energetic entrepreneur with over 6 years of experience and a meticulous eye for detail. Thorough understanding of software trends combined with expertise in various programming languages
                    </p>
                    <div className="about-social">
                      {/* Contact links with icons */}
                      <a href="mailto:contact@mknazzal.com">
                        <EmailRoundedIcon style={{ width: "40px", height: "40px", color: "#222831" }} /> Business Email
                      </a>
                      <a href="mailto:moh.nazzal1@gmail.com">
                        <EmailRoundedIcon style={{ width: "40px", height: "40px", color: "#222831" }} /> Personal Email
                      </a>
                      <a href="https://www.linkedin.com/in/mnazzal01/">
                        <LinkedInIcon style={{ width: "40px", height: "40px", color: "#222831" }} /> LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
