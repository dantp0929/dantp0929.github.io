import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router";

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
    <AppBar position="absolute">
      <Container>
        <Toolbar disableGutters>
          {navBarLinks.map((navBarLink) => (
            <NavLink
              to={navBarLink.link}
              style={{
                color: "inherit",
                textDecoration: "none",
                marginRight: "32px",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {navBarLink.displayText}
              </Typography>
            </NavLink>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
