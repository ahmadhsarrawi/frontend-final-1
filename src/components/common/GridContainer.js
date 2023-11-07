import React from "react";
import { Container, Grid } from "@mui/material";
import BrandTile from "./BrandTile";

const GridContainer = ({children,id, data, mdSize, xsSize,smSize,md2Size,mt }) => {
   
  return (
    
      <Grid  container spacing={{ xs: '16px', md: '40px' }}mt={mt}>
        {children}
      </Grid>
   
  );
};

export default GridContainer;
