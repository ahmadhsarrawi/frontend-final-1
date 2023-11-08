import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
const IconTile = ({ image, title ,id}) => {
  return (
    <NavLink to={'/categories/'+id} style={{textDecoration:'none'}}>
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
            aspectRatio: "1/1",
            borderRadius: "8px",
            bgcolor: "accent.main",
            p: "8px",
            flexGrow: "1",
          }}
        >
          <img
            alt="category"
            src={image}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Typography variant="Link">{title}</Typography>
      </Box>
    </NavLink>
  );
};

export default IconTile;
