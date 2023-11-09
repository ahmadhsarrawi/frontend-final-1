import React, { useEffect, useContext } from "react";
import { Container, Grid, Paper } from "@mui/material";
import BrandTile from "./common/BrandTile";
import GridContainer from "./common/GridContainer";
import TitleWithButton from "./common/TitleWithButton";

import Context from "../store/context";
import fetchData from "../services/APIs";
import SpinLoader from "../components/common/SpinLoader";
import { react } from "@babel/types";

const ShopByBrands = React.forwardRef((props,ref)=> {
  const ctx = useContext(Context);

  useEffect(() => {
    ctx.setBrands(null);
    fetchData("brands").then((data) => ctx.setBrands(data));
  }, []);
  return (
    <Paper
      elevation={0}
      sx={{ width: "100%", borderRadius: "0", overflow: "hidden", py: "32px" }}
      ref={ctx.brandsRef} id='brands'
    >
      <Container maxWidth="100%">
        <TitleWithButton
          title={"Shop by Brands"}
          titleColor={"dark.main"}
          mb="24px"
        />
        {ctx.brands ? (
          <GridContainer>
            {ctx.brands
              ? ctx.brands.map((item) => {
                  return (
                    <Grid key={item.id} item xs={4} md={2}>
                      <BrandTile image={item.image} id={item.id} />
                    </Grid>
                  );
                })
              : ""}
          </GridContainer>
        ) : (
          <SpinLoader />
        )}
      </Container>
    </Paper>
  );
});

export default ShopByBrands;
