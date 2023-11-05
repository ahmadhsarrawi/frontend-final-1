import React from "react";
import { Container, Box, Typography } from "@mui/material";
const BannerImageContainer = () => {
  return (
    <Container maxWidth="100%">
      <Box
        sx={{
          width: "100%",
          display: {xs:'none',md:"flex"},
          position: "relative",
          zIndex: "555",
          height: "400px",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "absolute", right: {md:'20px',lg:'300px'},top:'107px' }}>
          <Typography
            sx={{
              typography: { xs: "displayLarge" },
              fontSize: { xs: "72px" },
            }}
          >
            UPTO 70% OFF
          </Typography>
          <Typography
            sx={{
              fontSize:'72px',
              fontWeight: "400",
            }}
          >
            BLACK FRIDAY
          </Typography>
        </Box>
        <img src={require("../../assets/images/blackBag.jfif")} />
        <img
          src={require("../../assets/images/base.jpeg")}
          style={{
            position: "absolute",
            right: "0",
            zIndex: "-2",
            height: "400px",
            width: "100%",
          }}
        />
      </Box>
    </Container>
  );
};

export default BannerImageContainer;
