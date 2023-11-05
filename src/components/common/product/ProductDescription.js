import React from 'react'
import {Box}from '@mui/material'
import ProductTabs from './ProductTabs';
export default function ProductDescription({longDesc,categoryId}) {
  return (
   <Box sx={{ marginTop: "32px", marginBottom: "32px" }}>
    <ProductTabs longDesc={longDesc}categoryId={categoryId} />
   </Box>
  );
}
