import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1B4B66" },
    primaryTint: { main: "#639599" },
    error: { main: "#B00020" },
    highlight: { main: "#FF8C4B" },
    accent: { main: "#F4F4F4" },
    dark: { main: "#13101E" },
    bright: { main: "#FFFFFF" },
    grey: { main: "#F1F1F1" },
    lightText: { main: "#B6B6B6" },
    highEmphasis: { main: "#171520" },
    lowEmphasis: { main: "#626262" },
    text: {
      primary: "#1B4B66",
      primaryTint: "#639599",
      error: "#B00020",
      highlight: "#FF8C4B",
      accent: "#F4F4F4",
      dark: "#13101E",
      bright: "#FFFFFF",
      grey: "#F1F1F1",
      lightText: "#B6B6B6",
      highEmphasis: "#171520",
      lowEmphasis: "#626262",
    
    }
  },
  breakpoints: {
    values: {
      xs:"",
    }
  },
    typography: {
      displayLarge: {
        fontSize: "40px",
        fontWeight: "700",
        lineHeight: "52px",
      },
      displayMedium: {
        fontSize: "34px",
        fontWeight: "600",
        lineHeight: "44px",
      },
      displaySmall: {
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "26px",
      },
      titleMedium: {
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "18px",
      },
      titleRegular: {
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "16px",
      },
      bodyMedium: {
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "20px",
      },
      bodyRegular: {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "20px",
      },
      labelLarge: {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "20px",
      },
      labelMedium: {
        fontSize: "12px",
        fontWeight: "500",
        lineHeight: "16px",
      },
      labelSmall: {
        fontSize: "12px",
        fontWeight: "600",
        lineHeight: "16px",
      },
      Link: {
        fontSize: "12px",
        fontWeight: "500",
        lineHeight: "18px",
      },
    },
  
});

export default theme;
