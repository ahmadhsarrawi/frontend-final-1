import React from "react";
import Footer from "../components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/common/Theme";

export default function Landing(props) {
  return (
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  );
}
