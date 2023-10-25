import React, { useContext, useEffect } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import BreadCrumbs from "../components/common/BreadCrumbs";
import { BsChevronLeft } from "react-icons/bs";
import theme from "../components/common/Theme";
import TitleWithButton from "../components/common/TitleWithButton";
import GridContainer from "../components/common/GridContainer";
import HorizontalCard from "../components/common/HorizontalCard";
import BannerImageContainer from "../components/common/BannerImageContainer";
import CustomPagination from "../components/common/CustomPagination";
import fetchData from "../services/APIs";
import Context from "../store/context";
import SpinLoader from "../components/common/SpinLoader";

const Categories = () => {
  const ctx = useContext(Context);

  useEffect(() => {
    fetchData("categories/1").then(data=>ctx.setCategory(data));



  }, []);

  useEffect(() => {

    ctx.category&&console.log(ctx.category.name);
  },[ctx.category])

  return (
    <>
      {!ctx.category ? (
        <SpinLoader />
      ) : (
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
              <IconButton sx={{ padding: "0" }}>
                <BsChevronLeft
                  style={{
                    fontSize: "24px",
                    color: theme.palette.primary.main,
                  }}
                />
              </IconButton>
              <TitleWithButton
                title={ctx.category.name}
                titleColor={"primary.main"}
              />
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
            <CustomPagination />
          </Container>
        </>
      )}
    </>
  );
};

export default Categories;
