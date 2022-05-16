import React from "react";
import { Button, Container } from "react-bootstrap";

function Home() {
  return (
    <div className="Home">
      <div className="section center-centric animated-gradient">
        <Container>
          <div className="introduction">
            <div className="text">
              <h1>Daniel Phan</h1>
              <h2>Full stack software developer</h2>
              <p>Graduate from Texas A&M, loves design, cooperation, and creating.</p>
            </div>
            <div className="buttons">
              <Button variant="primary">More About Me</Button>
              <Button variant="secondary">Projects</Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Home;