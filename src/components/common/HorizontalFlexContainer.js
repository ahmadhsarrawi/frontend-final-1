import { Box, Paper } from "@mui/material";
import React from "react";
import theme from "./Theme";

const HorizontalFlexContainer = ({ children, bgColor, mobileOnly }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        mb: "0px",
        bgcolor: `${bgColor}`,
        borderRadius: "0",
        py: "18px",
        [theme.breakpoints.up("sm")]: {
          display: `${mobileOnly && "none"}`,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent:'flex-start',
          overflowX: "scroll",
          gap: { xs: "16px", md: "40px" },
          flexWrap: "nowrap",
          width:"100%"
        }}
      >
        {children}
      </Box>
    </Paper>
  );
};

export default HorizontalFlexContainer;
