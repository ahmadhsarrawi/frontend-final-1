import { Box } from "@mui/system";
import React from "react";

import { PiStarFill } from "react-icons/pi";
import theme from "./Theme";
import { Typography } from "@mui/material";

function ratingHandler(rating) {
  const ratingArray = [];
  const roundedRating = Math.round(rating);
  for (let i = 0; i < 5; i++) {
    i < roundedRating
      ? ratingArray.push(
          <PiStarFill
            size={"24px"}
            color={theme.palette.highlight.main}
            key={i}
          />
        )
      : ratingArray.push(
          <PiStarFill
            size={"24px"}
            style={{ borderRadius: "14px" }}
            color={theme.palette.grey.main}
            key={i}
          />
        );
  }
  return [...ratingArray];
}

const Rating = ({ rating, number }) => {
  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <Box>{ratingHandler(rating)}</Box>
          <Typography variant="titleMedium" color='primary.main' sx={{display:{xs:'none',sm:"inline"}}}>{number} Ratings</Typography>
    </Box>
  );
};

export default Rating;
