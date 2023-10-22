import React from "react";
import { Box, Container, Typography, IconButton,Pagination } from "@mui/material";
import BreadCrumbs from "../components/common/BreadCrumbs";
import { BsChevronLeft } from "react-icons/bs";
import theme from "../components/common/Theme";
import TitleWithButton from "../components/common/TitleWithButton";
import GridContainer from "../components/common/GridContainer";
import HorizontalCard from "../components/common/HorizontalCard";
import BannerImageContainer from "../components/common/BannerImageContainer";

const Categories = () => {
  return (
    <>
      <BannerImageContainer />
      <Container maxWidth="100%">
        <BreadCrumbs />
        <Box
          pt={"24px"}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <IconButton sx={{padding:'0'}}>
            <BsChevronLeft
              style={{ fontSize: "24px", color: theme.palette.primary.main }}
            />
          </IconButton>
          <TitleWithButton title="Handbags" titleColor={"primary.main"} />
        </Box>
        <Typography
          variant="titleRegular"
          color={"lowEmphasis.main"}
          display={"block"}
          mt={"16px"}
          mb={"8px"}
        >
          255 Products
        </Typography>
        <GridContainer
          xsSize={6}
          smSize={4}
          md2Size={3}
          data={[
            <HorizontalCard />,
            <HorizontalCard />,
            <HorizontalCard />,
            <HorizontalCard />,
            <HorizontalCard />,
            <HorizontalCard />,
            <HorizontalCard />,
            <HorizontalCard />,
            <HorizontalCard />,
            <HorizontalCard />,
            <HorizontalCard />,
            <HorizontalCard />,
            <HorizontalCard />,
            <HorizontalCard />,
            <HorizontalCard />,
            <HorizontalCard />,
            <HorizontalCard />,
          ]}
        />
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Container>
    </>
  );
};

export default Categories;
