import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
      <footer>
        <Container>
          <div className="footer-columns">
            <div className="about">
              <p>Daniel Phan</p>
              <p>This website was created with React and Bootstrap!</p>
            </div>
            <div className="links">
              <p>Find me at:</p>
              <a href="https://github.com/dantp0929" target="_blank" rel="noreferrer">
                <i class="bi bi-github"> GitHub </i>
              </a>
              <a href="https://www.linkedin.com/in/daniel-phan-006860191/" target="_blank" rel="noreferrer">
                <i class="bi bi-linkedin"> LinkedIn</i>
              </a>
            </div>
            <div className="contact">
              <p>Contact me:</p>
              <a href="mailto: phand972@gmail.com">
                <i class="bi bi-envelope"> phand972@gmail.com</i>
              </a>
            </div>
          </div>
        </Container>
      </footer>
  )
}

export default Footer;