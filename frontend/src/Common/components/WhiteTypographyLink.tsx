import { SvgIconComponent } from "@mui/icons-material";
import { Box, Icon, Typography, TypographyProps } from "@mui/material";
import { NavLink } from "react-router";

interface WhiteTypographyLink extends TypographyProps {
  link: string;
  display: string;
  icon?: SvgIconComponent
}

const WhiteTypographyLink = ({ ...props }: WhiteTypographyLink) => {


  return (
    <NavLink
      to={props.link}
      style={{
        textDecoration: "none",
      }}
    >
      <Typography
        component="a"
        sx={{
          color: "#e1e1e1",
          "&:hover": {
            color: "#ffffff",
          },
          "transition": "0.2s",
        }}
        {...props}
      >
        <Box sx={{ display: "flex", alignContent: "center" }}>
          {props.icon ? (
            <Icon component={props.icon} sx={{ marginRight: "4px" }} />
          ) : (
            null
          )}
          {props.display}
        </Box>
      </Typography>
    </NavLink>
  )
}

export default WhiteTypographyLink;