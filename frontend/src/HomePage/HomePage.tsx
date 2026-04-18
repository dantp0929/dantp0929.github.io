import { Box, Button, Container, Stack, Typography } from "@mui/material";

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
            <Button variant="contained">More about me</Button>
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
