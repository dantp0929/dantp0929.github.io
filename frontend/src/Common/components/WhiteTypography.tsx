import { Typography, TypographyProps } from "@mui/material";
import React from "react";

const WhiteTypography = ({...props}: TypographyProps) => {


  return (
    <Typography {...props} sx={{color: "white"}}>
      {props.children}
    </Typography>
  )
}

export default WhiteTypography;