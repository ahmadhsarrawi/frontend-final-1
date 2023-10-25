import React from "react";
import Rating from "./Rating";
import ButtonWithIcon from "./ButtonWithIcon";
import { PiHandbagSimple } from "react-icons/pi";
import { TbHeart } from "react-icons/tb";
import { Paper, Typography, IconButton, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
const HorizontalCard = () => {
  return (
    <NavLink to="/product">
      <Box
        sx={{
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flexShrink: "1",
          minWidth: { xs: "150px", md: "240px" },
          flexGrow: "1",
          mb: "16px",
        }}
      >
        <Box
          sx={{ borderRadius: "8px", overflow: "hidden", position: "relative" }}
        >
          <Paper
            elevation={0}
            sx={{
              position: "absolute",
              borderRadius: "4px",
              padding: "9px 20px",
              bgcolor: "highlight.main",
              color: "bright.main",
              top: "15px",
              right: "15px",
            }}
          >
            <Typography variant="titleMedium">Trending</Typography>
          </Paper>
          <img
            src={require("../../assets/images/pinkBag.png")}
            width={"100%"}
            height={"100%"}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="bodyMedium" color={"highEmphasis.main"}>
            Grande
          </Typography>
          <IconButton>
            <TbHeart size={"24px"} />
          </IconButton>
        </Box>
        <Typography variant="bodyRegular" color={"lowEmphasis.main"}>
          Blossom Pouch
        </Typography>
        <Rating rating={4} number={43} />
        <Box sx={{ display: "flex", gap: "6px" }}>
          <Typography variant="bodyMedium" color={"highEmphasis.main"}>
            $39.49
          </Typography>
          <Typography
            variant="labelLarge"
            color={"lowEmphasis.main"}
            sx={{ textDecoration: "line-through" }}
          >
            $78.66
          </Typography>
          <Typography variant="bodyRegular" color={"red.main"}>
            50% OFF
          </Typography>
        </Box>
        <ButtonWithIcon
          padding={"2px 20px"}
          startIcon={<PiHandbagSimple />}
          type={"outlined"}
        >
          Add to bag
        </ButtonWithIcon>
      </Box>
    </NavLink>
  );
};

export default HorizontalCard;
