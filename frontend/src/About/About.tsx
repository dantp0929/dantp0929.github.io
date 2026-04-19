import { Box, Card, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import SkillCard from "../Common/components/SkillCard";

const About = () => {
  useEffect(() => {
    document.title = "Daniel | About"
  });

  return (
    <Box
      className="about-skills-background"
      sx={{
        display: "flex",
        minHeight: "512px",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Container>
        <Typography variant="h4">My Best Skills</Typography>
        <Box sx={{ display: "flex", justifyContent: 'center', flexWrap: 'wrap' }}>
          <SkillCard icons={["public/favicon.svg"]} subtitle="Front End">
            hello
          </SkillCard>
        </Box>
      </Container>
    </Box>
  )
}

export default About;