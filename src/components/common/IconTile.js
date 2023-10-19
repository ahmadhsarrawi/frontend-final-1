import { Box, Typography } from "@mui/material";
import React from "react";

const IconTile = ({ image, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: "14px",
        gap: "5px",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "58px",
          height: "58px",
          aspectRatio:'1/1',
          borderRadius: "8px",
          bgcolor: "accent.main",
          p: "8px",
          flexGrow:'1'
        }}
      >
        <img
          src={require(`../../assets/icons/${image}`)}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Typography variant="Link">{title}</Typography>
    </Box>
  );
};

export default IconTile;
