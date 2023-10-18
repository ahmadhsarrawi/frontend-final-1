import React from "react";
import { Grid, Container, Typography, Stack, Box, styled } from "@mui/material";
import limitedEdition from "../assets/images/bannerPic/limitedEdition.svg";
import discount from "../assets/images/bannerPic/discoount.svg";
import highRating from "../assets/images/bannerPic/highRating.svg";
import theme from "./common/Theme";
import { ThemeProvider } from "@mui/material/styles";
import BannerItem from "./common/BannerItem";
const Banner = () => {
  const StyledImg = styled("img")({
    width: "100%",
    objectFit: "cover",
    borderRadius: "16px",
  });
  const banners = [
    {
      image: discount,
      topic: "15% off and more!",
      topicWidth: { xs: "100px", sm: "150px", md: "251px" },
      color: theme.palette.pink.main,
      imgdescription: "discount",
      iconBg: "#FFFFFF80",
      iconColor: "pink",
    },
    {
      image: highRating,
      topic: "Popular in the community!",
      topicWidth: { xs: "100px", sm: "150px", md: "251px" },
      color: theme.palette.primary.main,
      imgdescription: "High rating products",
      iconBg: theme.palette.navy.main,
      iconColor: theme.palette.primary.main,
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="100%"
        sx={{
          marginBottom: { xs: "30px", sm: "50px", md: "70px" },
          marginTop: { xs: "30px", sm: "50px", md: "70px" },
        }}
      >
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12}>
            <Box position="relative">
              <StyledImg
                src={limitedEdition}
                alt="Limited Edition Products"
                sx={{
                  height: {
                    xs: "140px",
                    sm: "200px",
                    md: "300px",
                    lg: "400px",
                  },
                }}
              />
              <Box
                gap={{ xs: 1, sm: 1.5, lg: 3 }}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "59px",
                  transform: "translateY(-50%)",
                }}
                width={{ xs: "100px", sm: "200px", md: "600px" }}
              >
                <Typography
                  fontSize={{
                    xs: "1rem",
                    sm: "1.5rem",
                    md: "2.3rem",
                  }}
                  fontWeight="700"
                  color={theme.palette.brown.main}
                >
                  Limited Edition Products
                </Typography>
              </Box>
            </Box>
          </Grid>
          {banners.map((item, index) => (
            <Grid item xs={6} key={index}>
              <BannerItem {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Banner;
