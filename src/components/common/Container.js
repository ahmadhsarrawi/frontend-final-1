import { Paper } from "@mui/material";
import theme from "./Theme";
import React from "react";


const Container = ({ children }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: "transparent",
        marginInline: "auto",
        px: "10px",
        width: {
          xs: "380px",
          xs2: theme.breakpoints.values.xs2,
          sm: theme.breakpoints.values.sm,
          sm2: theme.breakpoints.values.sm2,
          md: theme.breakpoints.values.md,
          md2: theme.breakpoints.values.md2,
          lg: theme.breakpoints.values.lg,
          lg2: theme.breakpoints.values.lg2,
          lg3: theme.breakpoints.values.lg3,
          xl: theme.breakpoints.values.xl,
        },

        // xs: 0,
        //xs2:480,
        // sm: 600,
        // sm2: 780,
        // md: 960,
        // md2: 1120,
        // lg: 1280,
        // lg2: 1600,
        // xl: 1920,
      }}
    >
      {children}
    </Paper>
  );
};

export default Container;
