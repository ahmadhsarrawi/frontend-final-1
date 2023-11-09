import React from "react";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
const BrandTile = ({ image,id }) => {
  return (
    <NavLink style={{ textDecoration: 'none' } }to={`/brands/${id}`}>

      <Box sx={{
        overflow: 'hidden',
        flexGrow: '1',
        aspectRatio:'1/1',
        minWidth: {
          xs: '100px'
        },
        // width:{xs:'100px'}
      }}>
      <img alt="brand" src={image} width={'100%'} height={'100%'}/>
    </Box>
      </NavLink>
  );
};

export default BrandTile;
