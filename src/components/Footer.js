import React from "react";

import { Box } from "@mui/material";

import { Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "#1b4b66",
        position: "absolute",
        width: "100vw",
        bottom: 0,
      }}
    >
      <Typography variant="displaySmall"
      color='highlight.main'>hello</Typography>
    </Box>
  );
};

export default Footer;
