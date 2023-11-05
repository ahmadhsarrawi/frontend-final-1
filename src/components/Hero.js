import React from "react";
import {
  Container,
  Paper,
  styled,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./common/Theme";
import Carousel from "react-material-ui-carousel";
import trendyBags from "../assets/images/heroSecImg/trendyBags.svg";
import ButtonWithIcon from "./common/ButtonWithIcon";
import EastIcon from "@mui/icons-material/East";


export default function Hero() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const StyledImg = styled("img")({
    width: "100%",
    objectFit: "cover",
    borderRadius: "24px",
  });
  const items = [
    {
      image: trendyBags,
      headingtext: "Carry your Funk",
      paraText: "Trendy handbags collection for your party animal",
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="100%"
        sx={{
          marginBottom: { xs: "30px", sm: "50px", md: "70px" },
          marginTop: { xs: "8px", sm: "16px", md: "22px", lg: "24px" },
        }}
      >
        <Carousel indicators={false} duration={1000}>
          {items.map((item, index) => (
            <Paper key={index} elevation={0}>
              <StyledImg
                src={item.image}
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
              {index === 0 && (
                <Box
                  sx={{
                    boxSizing: "border-box",
                    position: "absolute",
                    right: "0px",
                    width: { xs: "70%", sm: "56%" },
                    top: { xs: "12px", sm: "26px", lg: "50px" },
                    height: {
                      xs: "116px",
                      sm: "214px",
                      md: "270px",
                      lg: "316px",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: "4px", sm: "5px", lg: "15px" },
                    alignItems: "flex-start",
                    backgroundColor: "#DEDEDEB2",
                    backdropFilter: "blur(2px)",
                    borderRadius: {
                      xs: "8px 0px 0px 8px",
                      sm: "15px 0px 0px 15px",
                      md: "20px 0px 0px 20px",
                      lg: "24px 0px 0px 24px",
                    },
                    paddingLeft: { xs: "11px", sm: "25px", lg: "47px" },
                    paddingTop: { xs: "7px", sm: "8px", lg: "25px" },
                  }}
                >
                  <Box marginBottom={2}>
                    <Typography
                      fontSize={{ xs: "1.7rem", md: "3.1rem", lg: "3.75rem" }}
                      sx={{
                        color: `${theme.palette.primary.main}`,
                        maxWidth: "490px",
                      }}
                      fontWeight={800}
                    >
                      Carry your Funk
                    </Typography>
                    <Typography
                      sx={{ color: `${theme.palette.primary.main}` }}
                      fontSize={{
                        xs: "0.9rem",
                        sm: "1.4rem",
                        md: "1.75rem",
                        lg: "2.2rem",
                      }}
                      lineHeight={{ xs: "20px", md: "38px" }}
                    >
                      Trendy handbags collection for your party animal
                    </Typography>
                  </Box>
                  {!isMobile && (
                    <ButtonWithIcon
                      padding="10px 65px"
                      type="primary"
                      startIcon={<EastIcon />}
                      fontSize="1rem"
                    >
                      See more
                    </ButtonWithIcon>
                  )}
                </Box>
              )}
            </Paper>
          ))}
        </Carousel>
      </Container>
    </ThemeProvider>
  );
}
