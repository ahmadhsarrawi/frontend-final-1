import React, { useContext, useEffect, useMemo } from "react";
import { Box, Container, Typography, IconButton, Grid } from "@mui/material";
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
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
  const ctx = useContext(Context);
  let { id } =useParams()
  console.log(id);
  useEffect(() => {
    fetchData("categories/"+id).then((data) => ctx.setCategory(data));
    fetchData(`categories/${3}/products`).then((data) =>
      ctx.setCategoryProducts(data)
    );
  }, [id]);

  return (
    <>
      {!ctx.category || !ctx.categoryProducts ? (
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
              <GridContainer >
                {ctx.categoryProducts.data.map(item => {
                  return <Grid item md2={3} key={item.id} xs={6} sm={4} lg={3}>
                    <HorizontalCard price={item.price} discount={item.discount} rating={item.rating} id={item.id}/>
                  </Grid>;
                })}
                
            </GridContainer>
            <CustomPagination />
          </Container>
        </>
      )}
    </>
  );
};

export default CategoryProducts;
