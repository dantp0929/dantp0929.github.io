import { Box, Card, Divider, Typography } from "@mui/material";
import React from "react";

interface SkillCardProps {
  icons: string[],
  subtitle: string,
  children: React.ReactNode
}

const SkillCard = ({ icons, subtitle, children }: SkillCardProps) => {


  return (
    <Card sx={{ p: 3, borderRadius: "16px", boxShadow: 10 }}>
      <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: 'flex-start', gap: "1rem", mb: 1 }}>
        {icons.map((icon) =>
          <img height="64px" src={icon} />
        )}
      </Box>
      <Divider sx={{ mt: 3, mb: 2 }} />
      <Typography variant="h5" sx={{ mb: 2 }}>{<b>{subtitle}</b>}</Typography>
      <Typography>
        {children}
      </Typography>
    </Card>
  )
}

export default SkillCard;