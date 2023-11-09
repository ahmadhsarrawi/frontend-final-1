import React from "react";
import { Typography, Paper, Card } from "@mui/material";
import { NavLink } from "react-router-dom";

const Tile = ({ image, title,id,brandId,categoryId }) => {
  
  return (
    <NavLink to={`/categories/${categoryId}`}>

      <Card
        elevation={0}
        sx={{
          position: "relative",
          aspectRatio: "1/1",
          borderRadius: "8px",
          overflow: "hidden",
          minWidth: { xs: "125px" },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            position: "absolute",
            bottom: "0",
            height: "33%",
            display: "flex",
            alignItems: "flex-end",
            width: "100%",
            padding: "16px",
            background:
              "linear-gradient(180deg, rgba(196, 196, 196, 0.00) 0%, rgba(3, 24, 26, 0.46) 100%)",
            borderRadius: "0",
          }}
        >
          <Typography
            sx={{ typography: { xs: "titleMedium", sm: "displaySmall" } }}
            color={"highEmphasis.main"}
          >
            {title}
          </Typography>
        </Paper>
        <img
          src={image}
          width={"100%"}
          height={"100%"}
        />
      </Card>
    </NavLink>
  );
};

export default Tile;
