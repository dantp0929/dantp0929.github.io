import React from "react";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <div className="Contact">
      <div className="section contact center-centric">
        <Container>
          <div className="boxed item">
            <h1>Contact me & Links:</h1>

            <a href="mailto: phand972@gmail.com">
              <h4 className="bi bi-envelope"> phand972@gmail.com (Preferred)</h4>
            </a>

            <a href="https://www.linkedin.com/in/daniel-phan-006860191/" target="_blank" rel="noreferrer">
              <h4 className="bi bi-linkedin"> LinkedIn</h4>
            </a>

            <h4 className="bi bi-telephone"> (713) 363 - 1944</h4>

          </div>

        </Container>

      </div>
    </div>
  )
}

export default Contact;