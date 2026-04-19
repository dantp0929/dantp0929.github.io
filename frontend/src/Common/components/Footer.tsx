import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";
import { Box, Container, Stack } from "@mui/material";
import WhiteTypography from "./WhiteTypography";
import WhiteTypographyLink from "./WhiteTypographyLink";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignContent: 'center',
        alignItems: 'center',
        height: "256px",
        backgroundColor: "#354734",
      }}
    >
      <Container>
        <Stack direction='row' spacing={6}>
          <WhiteTypography>Created by Daniel Phan using Vite + React Typescript. Uses Material UI.</WhiteTypography>
          <Stack spacing={2}>
            <WhiteTypography>Find me at:</WhiteTypography>
            <WhiteTypographyLink link="https://github.com/dantp0929" icon={GitHub} display="GitHub" />
            <WhiteTypographyLink link="https://www.linkedin.com/in/daniel-phan-006860191" icon={LinkedIn} display="LinkedIn" />
          </Stack>
          <Stack spacing={2}>
            <WhiteTypography>Contact Me:</WhiteTypography>
            <WhiteTypographyLink link="mailto:phand972@gmail.com" icon={Email} display="phand972@gmail.com (preferred)" />
            <WhiteTypographyLink link="tel:713-363-1944" icon={Phone} display="(713) 363 - 1944" />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
