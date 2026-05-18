import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import SkillCard from "../Common/components/SkillCard";

const About = () => {
  useEffect(() => {
    document.title = "Daniel | About"
  });

  return (
    <>
      <Box
        className="about-skills-background"
        sx={{
          display: "flex",
          minHeight: "100vh",
          width: "100%",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Container sx={{
          pt: 7,
          pb: 5
        }}>
          <Typography variant="h4" sx={{ mb: 2 }}>My Best Skills</Typography>
          <Box sx={{ width: "100%", display: "flex", justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <SkillCard icons={["/php logo.svg", "/aspnet logo.svg", "/react logo.svg", "/typescript logo.svg", "/mysql logo.svg"]} subtitle="Full Stack">
              Skilled in conventional object oriented programming and quick to learn new concepts and programming languages. I can grasp design decisions and
              understand where to make changes to safely implement features or maintain them.
              <br></br>
              <br></br>
              Experienced in backend work using <b>PHP Laminas + Mezzio</b> for controller routing and middleware services.
              Also utilized <b>ASP.NET</b> for more performant focused use cases that required multi-threading. Across all projects, heavily used <b>React</b> and <b>Typescript</b> for front end work.
              Though more comfortable with client side rendering, I am also familiar with server side rendering using <b>HTMX</b> and <b>Alpine.js</b>.
              Frequently used <b>MySQL</b> databases, wrote and reviewed many queries to ensure that they are performant at scale.
            </SkillCard>
            <SkillCard icons={["/gitlab logo.svg", "/helm charts logo.svg", "/hashicorp vault logo.svg", "docker logo.svg"]} subtitle="Deployment and Configuration Work">
              Familiar with CI/CD concepts in <b>GitLab</b> that ran automatic tests and deployments. Additionally wrote <b>Helm Charts</b> to handle and provide testing and production environment configurations. <b>HashiCorp Vault</b> was
              also used to handle secrets that could not be committed to code repositories. Converted existing projects to be usable in <b>Docker Containers</b> so that projects could easily scale up or down depending on how much
              containers are spun up.
            </SkillCard>
            <SkillCard icons={["/claude logo.svg", "/opencode logo.svg"]} subtitle="Agentic Coding">
              Have utilized <b>Claude</b> and <b>OpenCode</b> (with company provided models) to orchestrate agents to write code. The tools have made it easier to iterate on
              prototypes and mocks, self diagnose problems, and quickly perform research on the existing code base.
            </SkillCard>
          </Box>
          <Box sx={{ display: "flex", textAlign: 'center', justifyContent: 'center', mt: 6 }}>
            <Typography variant="h4" sx={{ color: "gray" }}>More below!</Typography>
          </Box>
        </Container>
      </Box>
      <Box
        className="about-experience-background"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Container sx={{ mt: 10, mb: 20 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>Experience</Typography>
          <Box sx={{ display: "flex", justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <SkillCard icons={["public/favicon.svg"]} subtitle="Full Stack">
              Experienced in front and back end work.
            </SkillCard>
            <SkillCard icons={["public/favicon.svg"]} subtitle="Full Stack">
              Experienced in front and back end work.
            </SkillCard>
            <SkillCard icons={["public/favicon.svg"]} subtitle="Full Stack">
              Experienced in front and back end work.
            </SkillCard>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default About;