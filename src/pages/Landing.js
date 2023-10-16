import React from "react";
import Banner from "../components/Banner";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/common/Theme";



export default function Landing(props) {
  return (
    <ThemeProvider theme={theme}>
      <Banner/>
      
    </ThemeProvider>
  );
}
