import { createTheme } from "@mui/material/styles";

const colors = {
  primary: "#1B4B66",
  primaryTint: "#639599",
  error: "#B00020",
  highlight: "#FF8C4B",
  accent: "#F4F4F4",
  dark: "#13101E",
  bright: "#FFFFFF",
  grey: "#F1F1F1",
  lightText: "#B6B6B6",
  typeHighEmphasis: "#171520",
  typeLowEmphasis: "#626262",
  brown: "#97451F",
  transparentBrown: "#97451F24",
  pink: "#A53F64",
  navy: "#17494D29",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    primaryTint: {
      main: colors.primaryTint,
    },
    error: {
      main: colors.error,
    },
    highlight: {
      main: colors.highlight,
    },
    accent: {
      main: colors.accent,
    },
    dark: {
      main: colors.dark,
    },
    bright: {
      main: colors.bright,
    },
    grey: {
      main: colors.grey,
    },
    lightText: {
      main: colors.lightText,
    },
    typeHighEmphasis: {
      main: colors.typeHighEmphasis,
    },
    typeLowEmphasis: {
      main: colors.typeLowEmphasis,
    },
    brown: {
      main: colors.brown,
    },
    transparentBrown: {
      main: colors.transparentBrown,
    },
    pink: {
      main: colors.pink,
    },
    navy: {
      main: colors.navy,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
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