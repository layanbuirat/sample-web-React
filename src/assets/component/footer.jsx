import React from "react";
import "./Footer.css"; // Link to the CSS file

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Location</h4>
            <p>
              2215 John Daniel Drive
              <br />
              Clark, MO 65243
            </p>
          </div>

          <div className="col-md-4">
            <h4>Around the Web</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <h4>Contact</h4>
            <p>
              If you have any questions,
              <br />
              feel free to reach out to us.
              <br />
              We're here to help!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
