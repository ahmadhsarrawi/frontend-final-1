import React, { useEffect, useState } from "react";
import { Grid, Button, Box } from "@mui/material";
import pinkBagImage from "../../../assets/images/pinkBag.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import watchImage from "../../../assets/images/watch.png";
export default function ProductImages() {
    const productImages = [pinkBagImage, pinkBagImage, watchImage];
    const [selectedImage, setSelectedImage] = useState(productImages[0]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
    useEffect(() => {
      setSelectedImage(productImages[0]);
    }, []);
  
    const displayImage = (imageSrc, index) => {
      setSelectedImage(imageSrc);
      setSelectedImageIndex(index);
    };
  
    const showNextImage = () => {
      if (selectedImageIndex < productImages.length - 1) {
        setSelectedImage(productImages[selectedImageIndex + 1]);
        setSelectedImageIndex(selectedImageIndex + 1);
      }
    };
  
    const showPreviousImage = () => {
      if (selectedImageIndex > 0) {
        setSelectedImage(productImages[selectedImageIndex - 1]);
        setSelectedImageIndex(selectedImageIndex - 1);
      }
    };
  
  return (
    <Grid item xs={12} md={6} width="50%">
          <img
            src={selectedImage}
            alt="Product Image"
            height={"320px"}
            width="100%"
            style={{ objectFit: "cover", borderRadius: "16px" }}
          />
          <Box
            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <Button onClick={showPreviousImage} sx={{ cursor: "pointer" }}>
              <ArrowBackIcon />
            </Button>
            {productImages.map((image, index) => (
              <Button
                onClick={() => displayImage(image, index)}
                key={index}
                sx={{
                  cursor: "pointer",
                  border: selectedImageIndex === index ? "2px solid #007bff" : "none",
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
        </Grid>
  )
}

