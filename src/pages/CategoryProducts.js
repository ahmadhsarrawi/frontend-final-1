import React, { useContext, useEffect, useState } from "react";
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
  let { id } = useParams();

  const [page, setPage] = useState(1);
  const ctx = useContext(Context);
  
  useEffect(() => {
    ctx.setCategory(null);
    fetchData(`categories/${id}`).then((data) => ctx.setCategory(data));
    fetchData(`categories/${id}/products?page=${page}&perPage=4`).then((data) =>
      ctx.setCategoryProducts(data)
    );
  }, [id,page]);

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
            <GridContainer>
              {ctx.categoryProducts.data.map((item) => {
                return (
                  <Grid item md2={3} key={item.id} xs={6} sm={4} lg={3}>
                    <HorizontalCard
                      key={item.id}
                      image={item.image}
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      rating={item.rating}
                      discount={item.discount}
                      color={item.color}
                      category_id={item.category_id}
                      brand_id={item.brand_id}
                      longDescription={item.longDescription}
                    />
                  </Grid>
                );
              })}
            </GridContainer>
            <CustomPagination
              page={page ? page : 1}
              setPage={setPage}
              numOfPages={ctx.categoryProducts.pagination.totalPages}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default CategoryProducts;
