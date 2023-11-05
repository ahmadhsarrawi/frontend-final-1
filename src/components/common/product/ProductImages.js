import React, { useEffect, useState } from "react";
import { Grid, Button, Box, styled, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Carousel from "react-material-ui-carousel";

export default function ProductImages({ product }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  let productImages = [];

  // Check if 'product' is a valid JSON string before attempting to parse it
  if (product) {
    try {
      productImages = JSON.parse(product);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [product]);

  const showNextImage = () => {
    if (selectedImageIndex < productImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const showPreviousImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };
  const StyledImg = styled("img")({
    width: "100%",
    objectFit: "cover",
    borderRadius: "24px",
  });
  return (
    <Grid item xs={12} md={6} width="50%">
      <Box
        sx={{
          display: "none",
          "@media (max-width: 768px)": {
            display: "block",
          },
        }}
      >
        <Carousel indicators={false} duration={1000}>
          {productImages.map((item, index) => (
            <Paper key={index} elevation={0}>
              <StyledImg
                src={item}
                alt={`Slide ${index + 1}`}
                sx={{
                  height: {
                    xs: "140px",
                    sm: "300px",
                    md: "350px",
                    lg: "400px",
                  },
                }}
              />
            </Paper>
          ))}
        </Carousel>
      </Box>
      <Box
        sx={{
          "@media (max-width: 768px)": {
            display: "none",
          },
        }}
      >
        <img
          src={productImages[selectedImageIndex]}
          alt="Product Image"
          height={"320px"}
          width="100%"
          style={{ objectFit: "cover", borderRadius: "16px" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button onClick={showPreviousImage} sx={{ cursor: "pointer" }}>
            <ArrowBackIcon />
          </Button>
          {productImages.map((image, index) => (
            <Button
              onClick={() => setSelectedImageIndex(index)}
              key={index}
              sx={{
                cursor: "pointer",
                border:
                  selectedImageIndex === index ? "2px solid #007bff" : "none",
                borderRadius: "8px",
              }}
            >
              <img
                src={image}
                alt="Product Thumbnail"
                style={{
                  objectFit: "cover",
                  borderRadius: "16px",
                  width: "75px",
                  height: "75px",
                }}
              />
            </Button>
          ))}
          <Button onClick={showNextImage} sx={{ cursor: "pointer" }}>
            <ArrowForwardIcon />
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}
