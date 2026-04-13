import { Box, Container, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Box
      className="animated-gradient"
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Container>
        <Box>
          <Typography align="left" variant="h3">
            Daniel Phan
          </Typography>
          <Typography variant="h4">Full stack software developer</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
