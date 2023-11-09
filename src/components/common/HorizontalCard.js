import React from "react";
import Rating from "./Rating";
import ButtonWithIcon from "./ButtonWithIcon";
import { PiHandbagSimple } from "react-icons/pi";
import { TbHeart } from "react-icons/tb";
import { Paper, Typography, IconButton, Box } from "@mui/material";
import { Link } from "react-router-dom";
const HorizontalCard = ({button,
  id,
  name,
  description,
  color,
  price,
  discount,
  rating,
  isLimited,
  stock,
  category_id,
  brand_id,
  image,
  longDescription
}) => {
  let productImages = [];

  // Check if 'product' is a valid JSON string before attempting to parse it
  if (image) {
    try {
      productImages = JSON.parse(image);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }
  return (
    <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flexShrink: "1",
          minWidth: { xs: "150px", md: "240px" },
          maxWidth:'284px',
          
          maxHeight:'448px',
          flexGrow: "1",
          mb: "16px",
        }}
      >
        <Box
          sx={{ borderRadius: "8px", overflow: "hidden", position: "relative" }}
        >
          {rating >= 4.5 ? (
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
          ) : (
            ""
          )}
          <img
            src={
              productImages[0]
            }
            width={"100%"}
            style={{aspectRatio:1/1}}
            // height={"100%"}
            alt="a bag"
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
            {name}
          </Typography>
          <IconButton>
            <TbHeart size={"24px"} />
          </IconButton>
        </Box>
        <Typography variant="bodyRegular" color={"lowEmphasis.main"}>
          {description}
        </Typography>
        <Rating rating={rating} number={43} gap={'30px'}/>
        <Box sx={{ display: "flex", gap: "6px" }}>
          <Typography variant="bodyMedium" color={"highEmphasis.main"}>
            {`$${discount ? price - discount : price}`}
          </Typography>
          <Typography
            variant="labelLarge"
            color={"lowEmphasis.main"}
            sx={{ textDecoration: "line-through" }}
          >
            {discount ? "$" + price : ""}
          </Typography>
          <Typography variant="bodyRegular" color={"red.main"}>
            {`${
              discount ? ((discount * 100) / price).toFixed(0) + "% OFF" : ""
            }`}
          </Typography>
        </Box>
        {button && (
          <ButtonWithIcon
            padding={"2px 20px"}
            startIcon={<PiHandbagSimple />}
            type={"outlined"}
          >
            Add to bag
          </ButtonWithIcon>
        )}
      </Box>
    </Link>
  );
};
export default HorizontalCard;
