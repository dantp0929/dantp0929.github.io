import { Box, Card, Divider, Typography } from "@mui/material";
import React from "react";

interface SkillCardProps {
  icons: string[],
  subtitle: string,
  children: React.ReactNode
}

const SkillCard = ({ icons, subtitle, children }: SkillCardProps) => {


  return (
    <Card sx={{ padding: "16px" }}>
      {icons.map((icon) =>
        <Box sx={{ maxHeight: "52px", maxWidth: "52px" }}>
          <img src={icon} />
        </Box>
      )}
      <Divider />
      <Typography variant="h6">{subtitle}</Typography>
      <Typography>
        {children}
      </Typography>
    </Card>
  )
}

export default SkillCard;