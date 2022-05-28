import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import resume from '../assets/resume/Daniel_Phan_Resume.pdf'

function Home() {
  return (
    <div className="Home">
      <div className="section center-centric animated-gradient">
        <Container>
          <div className="introduction vertical-groups">
            <div className="text">
              <h1>Daniel Phan</h1>
              <h2>Full stack software developer</h2>
              <p>Graduate from Texas A&M, loves design, cooperation, and creating.</p>
            </div>
            <div className="buttons">
              <Link to="/about">
                <Button variant="primary">More About Me</Button>
              </Link>
              <a href={resume} target="_blank" rel="noreferrer">
                <Button variant="secondary">Resume</Button>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Home;