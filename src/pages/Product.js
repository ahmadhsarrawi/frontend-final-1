import React, { useContext, useEffect } from "react";
import { Container, Grid, Box } from "@mui/material";
import ProductDetails from "../components/common/product/ProductDetails";
import ProductImages from "../components/common/product/ProductImages";
import ProductDescription from "../components/common/product/ProductDescription";
import CustomSeparator from "../components/common/product/CustomSeparator";
import Context from "../store/context";
import fetchData from "../services/APIs";
import { useParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const Product = () => {
  const { id } = useParams();
  const isMobile = useMediaQuery("(max-width:600px)");

  const ctx = useContext(Context);
  useEffect(() => {
    ctx.setProduct([]);
    fetchData(`products/${id}`).then((data) => ctx.setProduct(data));
    ctx.product && ctx.setIsLoading(false);
  }, []);
  return (
    <Container maxWidth="100%" sx={{ marginBottom: "50px" }}>
      <Box sx={{ marginBottom: "15px", marginTop: "20px" }}>
        <CustomSeparator />
      </Box>
      <Grid container spacing={3} sx={{ display: "flex" }}>
        {/* Product image */}
        {ctx.product ? <ProductImages product={ctx.product.image} /> : <></>}
        {ctx.product ? (
          <ProductDetails
            name={ctx.product.name}
            description={ctx.product.description}
            rate={ctx.product.rating}
            discount={ctx.product.discount}
            price={ctx.product.price}
          />
        ) : (
          <></>
        )}
      </Grid>
      {(ctx.product&&!isMobile) ? (
        <ProductDescription longDesc={ctx.product ? ctx.product.longDescription: ""}categoryId={ctx.product ? ctx.product.category_id: ""} />
      ) : (
        <p></p> 
      )}{" "}
    </Container>
  );
};
export default Product;
