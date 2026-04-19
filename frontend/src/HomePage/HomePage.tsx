import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Daniel | Home"
  });

  const handleMoreAboutMeClicked = () => {
    navigate("/about");
  }

  return (
    <Box
      className="home-background"
      sx={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Container>
        <Stack spacing={2}>
          <Box>
            <Typography align="left" variant="h3" sx={{ color: "white" }}>
              Daniel Phan
            </Typography>
            <Typography variant="h4" sx={{ color: "white" }}>
              Full stack software developer
            </Typography>
            <Typography sx={{ color: "white" }}>
              Graduate from Texas A&M, loves design, cooperation, and creating
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleMoreAboutMeClicked}>More about me</Button>
            <Button variant="contained" color="secondary">
              Resume
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomePage;
