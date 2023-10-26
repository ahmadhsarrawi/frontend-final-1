import React from "react";
import { Box } from "@mui/material";

const BrandTile = ({ image }) => {
  return (
      <Box sx={{
      overflow: 'hidden',
        flexGrow:'1',
      minWidth: {
        xs: '100px'
      },
      // width:{xs:'100px'}
    }}>
      <img alt="brand" src={image} width={'100%'} height={'100%'}/>
    </Box>
  );
};

export default BrandTile;
