import React, {useEffect} from "react";
import { Container } from "react-bootstrap";
import Snippet from "../components/snippet";

function About() {
  useEffect(() => {
    document.title = "Daniel | About"
  }, []);
  
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
              <div className="text">
                <p>
                  Skilled in conventional object oriented programing languages such as <b>C++</b>, <b>Java</b>, and <b>Python</b>. They 
                  are great for compiled programs and neat to know while learning other languages. In addition, 
                  popular game engines like Unity or Unreal Engine use C#/C++.
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
              <div className="text">
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
              <div className="text">
                <p>
                  Familiar with database management systems (DBMS) such as <b>MySQL</b> and <b>PostgreSQL</b>.
                  I like to use <b>Node.js</b> to send requests and queries to these DBMSs.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="section-free-height experience top-left-centric">
        <Container>
          <h1>Experience</h1>
          <br></br>
          <h2>HDL Research Labs <i>(09/2019 - 08/2020)</i></h2>
          <h3>Software Engineer Internship</h3>

          <Snippet
            imageSource={require("../assets/images/HDL Research Lab Building.png")}
            imageAlt={"HDL Research Lab"}
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
            logos={[
              {source: require("../assets/logos/C++ logo.png"), alt: "C++"},
              {source: require("../assets/logos/Qt logo.png"), alt: "Qt"},
              {source: require("../assets/logos/Boost logo.png"), alt: "Boost"}
            ]}
            buttons={[
              {link: "https://hdlresearchlab.com/", text: (<p className="bi bi-globe2" style={{margin: '0px'}}> HDL's Website </p>), variant: "primary"}
            ]}
          />

          <hr></hr>

          <h1>Notable Projects</h1>
          <br></br>
          <h2>Solarbitrage</h2>
          <Snippet
            imageSource={require("../assets/images/Solarbitrage Graphs.png")}
            imageAlt={"Crypto currencies"}
            details={
              <p>
                Solarbitrage was my group's senior capstone project. It is an arbitrage bot that performed trades
                on the Solana blockchain. The front-end was written with React, and the back-end was mainly TypeScript. 
                Firebase's Real Time database and Firestore were used to store persistent data used for back-testing and 
                displaying data on a web based dashboard.
                <br></br><br></br> 
                It traded between two Automated Market Makers, Orca and Raydium, both of which had TypeScript APIs we 
                leveraged to create atomic swaps on the blockchain.
              </p>
            }
            logos={[
              {source: require("../assets/logos/JavaScript logo.png"), alt: "C++"},
              {source: require("../assets/logos/React logo.png"), alt: "React"},
              {source: require("../assets/logos/Firebase logo.png"), alt: "Firebase"}
            ]}
            buttons={[
              {link: "https://github.com/solarbitrage/solarbitrage", text: (<p className="bi bi-github" style={{margin: '0px'}}> GitHub </p>), variant: "primary"},
              {link: "https://www.youtube.com/watch?v=aCBcF_YtlRU", text: (<p className="bi bi-youtube" style={{margin: '0px'}}> Demo </p>), variant: "danger"}
            ]}
          />
          <h2>Subreddit Wallpapers</h2>
          <Snippet
            imageSource={require("../assets/images/wallpaper.jpg")}
            imageAlt={"Reddit Wallpaper"}
            details={
              <p>
                Personal project utilizing Reddit's API to find wallpapers and display them. 
                It is deployed on Wallpaper Engine's Steam Workshop, where users can download the application
                so it can be displayed on their desktops. Very light weight program that purely uses JS, HTML, 
                and CSS.
              </p>
            }
            logos={[
              {source: require("../assets/logos/Reddit logo.png"), alt: "Reddit"},
              {source: require("../assets/logos/Wallpaper Engine logo.png"), alt: "Wallpaper Engine"},
            ]}
            buttons={[
              {link: "https://github.com/dantp0929/subreddit-wallpapers", text: (<p className="bi bi-github" style={{margin: '0px'}}> GitHub </p>), variant: "primary"},
              {link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2813209535", text: (<p className="bi bi-steam" style={{margin: '0px'}}> Steam Workshop Page </p>), variant: "secondary"}
            ]}
          />
        </Container>
      </div>
    </div>
  )
}

export default About;