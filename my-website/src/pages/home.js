import React from "react";
import { Button, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <Link to="/about#projects">
                <Button variant="secondary">Projects</Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="section maroon">
        <Container>
          <h1>Texas A&M Graduate</h1>
        </Container>
      </div>

    </div>
  )
}

export default Home;