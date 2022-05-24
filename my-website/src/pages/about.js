import React from "react";
import { Container } from "react-bootstrap";
import Snippet from "../components/snippet";

function About() {

  return (
    <div className="About">
      <div className="section green center-centric">
        <Container>
          <h1>My Best Skills</h1>
          <div className="horizontal-groups">
            <div className="stack item boxed">
              <div className="images horizontal-groups">
                <img src={require("../assets/logos/C++ logo.png")} height="100" alt="C++"></img>
                <img src={require("../assets/logos/Java logo.png")} height="100" alt="Java"></img>
                <img src={require("../assets/logos/Python logo.png")} height="100" alt="Python"></img>
              </div>
              <hr></hr>
              <div className="snippet">
                <p>
                  Skilled in conventional object oriented programing languages such as <b>C++</b>, <b>Java</b>, and <b>Python</b>. They are great for compiled programs and neat to know for 
                  more complex ideas. In addition, popular game engines like Unity or Unreal Engine 
                  use C/C++.
                </p>
              </div>
            </div>

            <div className="stack item boxed">
              <div className="images horizontal-groups">
                <img src={require("../assets/logos/JavaScript logo.png")} height="100" alt="JavaScript"></img>
                <img src={require("../assets/logos/React logo.png")} height="100" alt="React"></img>
                <img src={require("../assets/logos/Bootstrap logo.png")} height="100" alt="Bootstrap"></img>
              </div>
              <hr></hr>
              <div className="snippet">
                <p>
                  Experienced with <b>JavaScript</b>, <b>React</b>, and <b>Bootstrap</b>. It's what I used to 
                  make this website! They are well documented and their coding syntaxes 
                  are easy to understand.
                </p>
              </div>
            </div>

            <div className="stack item boxed">
              <div className="images horizontal-groups">
                <img src={require("../assets/logos/MySQL logo.png")} height="100" alt="MySQL"></img>
                <img src={require("../assets/logos/Node logo.png")} height="100" alt="Node"></img>
              </div>
              <hr></hr>
              <div className="snippet">
                <p>
                  Familiar with database management systems (DBMS) such as <b>MySQL</b> and <b>PostgreSQL</b>.
                  I like to use <b>Node.js</b> to send requests and queries to these DBMSs.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="section experience top-left-centric">
        <Container>
          <h1>Experience</h1>
          <br></br>
          <h2>HDL Research Labs <i>(09/2019 - 08/2020)</i></h2>
          <h3>Software Engineer Internship</h3>

          <div className="horizontal-groups center-centric">

            <Snippet
              imagePath="../assets/logos/HDL Research Lab.png"
              imageAlt="HDL Research Lab"
              details={
                <p>
                  Interned at <a href="https://hdlresearchlab.com/" target="_blank" rel="noreferrer">HDL Research Lab</a>. 
                  Responsible for designing and developing a server-client database program using Qt for the front-end and C++ 
                  with Boost libraries for the back-end. The program helped manage the flow of manufactured 
                  parts within the company, assisting and supporting over 100 employees. It was compatible with 
                  Windows XP, Vista, 7, 8, 10, and Linux subsystems and featured a login system with user
                  roles to help manage permissions within the program.
                  <br></br><br></br>
                  In addition, assisted in internal IT networking, and setted up a cross-OS file sharing system on an Ubuntu server with 
                  file access permissions based on roles in the company.
                </p>
              }
            />
          </div>

          <h1>Projects</h1>
          <br></br>
        </Container>
      </div>
    </div>
  )
}

export default About;