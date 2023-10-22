import React from "react";
import { Container, Grid } from "@mui/material";
import BrandTile from "./BrandTile";

const GridContainer = ({ data, mdSize, xsSize,smSize,md2Size,mt }) => {
   
  return (
    
      <Grid  container spacing={{ xs: '16px', md: '40px' }}mt={mt}>
        {data.map((item) => (
          <Grid  key={item.value} item xs={xsSize} md={mdSize} md2={md2Size} sm={smSize}> 
            {item}
          </Grid>
        ))}
      </Grid>
   
  );
};

export default GridContainer;
