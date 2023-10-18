import { Button, Typography } from "@mui/material";
import { style } from "@mui/system";
import { hover } from "@testing-library/user-event/dist/hover";
import theme from "./Theme";
import React from "react";

const styles = {
  primary: {
    bgColor: theme.palette.primary.main,
    hoverBgColor: theme.palette.primaryTint.main,
    textColor: theme.palette.bright.main,
    hoverBorder: `2px solid ${theme.palette.accent.main}`,

    border: `2px solid ${theme.palette.primary.main}`,
    hoverTextColor: theme.palette.bright.main,
    focusedBorder: `2px solid ${theme.palette.primaryTint.main}`,
    focusedTextColor: theme.palette.primary.main,

    disabledTextColor: theme.palette.lightText.main,
    disabledBgColor: theme.palette.grey.main,
    disabledBorder: `2px solid ${theme.palette.grey.main}`,
  },
  secondary: {
    bgColor: theme.palette.accent.main,
    hoverBgColor: theme.palette.accent.main,
    textColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.accent.main}`,
    hoverBorder: `2px solid ${theme.palette.accent.main}`,
    hoverTextColor: theme.palette.primaryTint.main,
    focusedBorder: `2px solid ${theme.palette.primary.main}`,
    focusedTextColor: theme.palette.primary.main,
    disabledTextColor: theme.palette.lightText.main,
    disabledBgColor: theme.palette.grey.main,
    disabledBorder: `2px solid ${theme.palette.grey.main}`,
  },
  outlined: {
    bgColor: theme.palette.bright.main,
    hoverBgColor: theme.palette.bright.main,
    textColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    hoverBorder: `2px solid ${theme.palette.primary.main}`,
    hoverTextColor: theme.palette.primaryTint.main,
    focusedBorder: `2px solid ${theme.palette.primaryTint.main}`,
    focusedTextColor: theme.palette.primary.main,
    disabledTextColor: theme.palette.lightText.main,
    disabledBgColor: theme.palette.bright.main,
    disabledBorder: `2px solid ${theme.palette.grey.main}`,
  },
  default: {
    bgColor: theme.palette.bright.main,
    hoverBgColor: theme.palette.bright.main,
    textColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.bright.main}`,
    hoverBorder: `2px solid ${theme.palette.bright.main}`,
    hoverTextColor: theme.palette.primaryTint.main,
    focusedBorder: `2px solid ${theme.palette.accent.main}`,
    focusedTextColor: theme.palette.primary.main,
    disabledTextColor: theme.palette.lightText.main,
    disabledBgColor: theme.palette.bright.main,
    disabledBorder: `2px solid ${theme.palette.bright.main}`,
  },
};

const ButtonWithIcon = ({
  startIcon,
  endIcon,
  type,
  fontSize,
  padding,
  children,
}) => {
  return (
    <Button
      disableRipple
      disableElevation
      variant={type == "outlined" ? "outlined" : "contained"}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "600",
        fontSize: `${fontSize || "14px"}`,
        textTransform: "none",
        color: styles[type].textColor,
        padding: `${padding || "10px 120px"}`,
        bgcolor: `${styles[type].bgColor}`,
        border: `${styles[type].border}`,
        borderRadius: "8px",
        "&:hover": {
          background: `${styles[type].hoverBgColor}`,
          border: `${styles[type].hoverBorder}`,
          color: styles[type].hoverTextColor,
        },
        "&:active": {
          background: `${styles[type].bgColor}`,
          border: `${styles[type].focusedBorder}`,
        },
        // '&:focus': {
        //   bgcolor:'white'
        // },
        "&:disabled": {
          background: `${styles[type].disabledBgColor}`,
          color: `${styles[type].disabledTextColor}`,
          border: `${styles[type].disabledBorder}`,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonWithIcon;
