import React from 'react';
import { Box, styled, Stack, Typography } from '@mui/material';
import IconBox from "./IconBox";


const BannerItem = ({
  image,
  topic,
  topicWidth,
  color,
  imgdescription,
  iconBg,
  iconColor,
}) => {
  const StyledImg = styled("img")({
    width: "100%",
    objectFit: "cover",
    borderRadius: "16px",
  });
  console.log(iconColor)

  return (
    
        <Box position="relative">
      <StyledImg
        src={image}
        alt={imgdescription}
        sx={{
            height: {
              xs: "100px",
              sm: "120px",
              md: "150px",
              lg: "230px",
            },
          }}
      />
      <Stack
        gap={{ xs: 1, sm: 1.5, lg: 3 }}
        alignItems="end"
        sx={{
          position: "absolute",
          top: "50%",
          right: "5%",
          transform: "translateY(-50%)",
        }}
        width={topicWidth}
      >
        <Typography
          fontSize={{
            xs: "0.8rem",
            sm: "1.1rem",
            md: "1.9rem",
            lg: "2.3rem",
          }}
          fontWeight="700"
          lineHeight="16px"
          sx={{
            color:{color},
            lineHeight: { xs: "18px", md: "40px", lg: "52px" },
            textAlign: "right",
          }}
        >
          {topic}
        </Typography>
        <IconBox
                  backgroundColor={iconBg}
                  iconColor={iconColor}
                />
      </Stack>
    </Box>
    
  );
};

export default BannerItem;

