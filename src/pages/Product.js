import React from "react";
import { Container, Grid,Box} from "@mui/material";
import ProductDetails from "../components/common/product/ProductDetails";
import ProductImages from "../components/common/product/ProductImages";
import ProductDescription from "../components/common/product/ProductDescription";
import CustomSeparator from "../components/common/product/CustomSeparator"
const Product = () => {
 
  return (
    <Container maxWidth="100%" sx={{ marginBottom: "50px" }}>
      <Box sx={{marginBottom:"15px",marginTop:"20px"}}>
      <CustomSeparator/>
      </Box>
      <Grid container spacing={3} sx={{ display: "flex" }}>
        {/* Product image */}
        <ProductImages/>
        <ProductDetails />
      </Grid>
      <ProductDescription/>
    </Container>
  );
};

export default Product;
