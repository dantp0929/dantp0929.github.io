import { AppBar, Container, Stack } from "@mui/material";
import WhiteTypographyLink from "./WhiteTypographyLink";

interface PageLink {
  displayText: string;
  link: string;
}

const navBarLinks: PageLink[] = [
  {
    displayText: "Home",
    link: "/home",
  },
  {
    displayText: "About",
    link: "/about",
  },
  {
    displayText: "Contact",
    link: "/contact",
  },
  {
    displayText: "More",
    link: "/more",
  },
];

const NavBar = () => {
  return (
    <AppBar position="absolute" sx={{
      backgroundColor: "#00000072",
      height: "48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "none"
    }}>
      <Container>
        <Stack direction='row' spacing={4}>
          {navBarLinks.map((navBarLink) => (
            <WhiteTypographyLink link={navBarLink.link} display={navBarLink.displayText} />
          ))}
        </Stack>
      </Container>
    </AppBar>
  );
};

export default NavBar;
