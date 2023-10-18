import React from "react";
import { Container, Grid } from "@mui/material";
import BrandTile from "./BrandTile";

const GridContainer = ({ data, mdSize, xsSize }) => {
    console.log(mdSize,xsSize);
  return (
    
      <Grid  container spacing={{ xs: '16px', md: '40px' }}>
        {data.map((item) => (
          <Grid  key={item.value} item xs={xsSize} md={mdSize}>
            {item}
          </Grid>
        ))}
      </Grid>
   
  );
};

export default GridContainer;
