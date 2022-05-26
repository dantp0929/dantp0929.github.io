import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
      <footer>
        <Container>
          <div className="footer-columns">
            <div className="about">
              <p>Created by Daniel Phan (That's me!) using React and Bootstrap.</p>
            </div>
            <div className="footer-links">
              <p>Find me at:</p>
              <a href="https://github.com/dantp0929" target="_blank" rel="noreferrer">
                <p className="bi bi-github"> Github </p>
              </a>
              <a href="https://www.linkedin.com/in/daniel-phan-006860191/" target="_blank" rel="noreferrer">
                <p className="bi bi-linkedin"> LinkedIn</p>
              </a>
            </div>
            <div className="footer-contact">
              <p>Contact me:</p>
              <a href="mailto:phand972@gmail.com">
                <p className="bi bi-envelope"> phand972@gmail.com (Preferred)</p>
              </a>
              <p className="bi bi-telephone"> (713) 363 - 1944</p>
            </div>
          </div>
        </Container>
      </footer>
  )
}

export default Footer;