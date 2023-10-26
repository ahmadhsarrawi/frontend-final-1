import React from "react";
import { Container, Grid } from "@mui/material";
import BrandTile from "./BrandTile";

const GridContainer = ({id, data, mdSize, xsSize,smSize,md2Size,mt }) => {
   
  return (
    
      <Grid id={id} container spacing={{ xs: '16px', md: '40px' }}mt={mt}>
        {data.map((item) => (
          <Grid  key={id} item xs={xsSize} md={mdSize} md2={md2Size} sm={smSize}> 
            {item}
          </Grid>
        ))}
      </Grid>
   
  );
};

export default GridContainer;
