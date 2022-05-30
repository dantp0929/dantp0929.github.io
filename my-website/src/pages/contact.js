import React, {useEffect} from "react";
import { Container } from "react-bootstrap";

import resume from '../assets/resume/Daniel_Phan_Resume.pdf'

function Contact() {
  useEffect(() => {
    document.title = "Daniel | Contact"
  }, []);

  return (
    <div className="Contact">
      <div className="section-free-height contact center-centric">
        <Container>
          <div className="boxed item">
            <h1>Contact me:</h1>
            <a href="mailto:phand972@gmail.com">
              <h4 className="bi bi-envelope"> phand972@gmail.com (Preferred)</h4>
            </a>
            <h4 className="bi bi-telephone"> (713) 363 - 1944</h4>

            <hr></hr>

            <h1>Links:</h1>
            <a href="https://github.com/dantp0929" target="_blank" rel="noreferrer">
              <h4 className="bi bi-github"> Github</h4>
            </a>
            <a href="https://www.linkedin.com/in/daniel-phan-006860191/" target="_blank" rel="noreferrer">
              <h4 className="bi bi-linkedin"> LinkedIn</h4>
            </a>

            <hr></hr>

            <h1>Resume</h1>
            <a href={resume} target="_blank" rel="noreferrer">Open in a new window</a>
            <div className="pdf-viewer">
              <embed className="resume-viewer" src={resume} type="application/pdf"></embed>
            </div>

          </div>
        </Container>

      </div>
    </div>
  )
}

export default Contact;