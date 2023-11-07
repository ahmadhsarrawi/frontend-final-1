import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Container, Box, Link, Typography } from "@mui/material";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BreadCrumbs = ({ path }) => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="primary.main"
      href="/frontend-final-1"
      //   onClick={handleClick}
    >
      Home
    </Link>,

    <Typography key="3" color="lowEmphasis.main">
      Categories
    </Typography>,
  ];
  return (
    
      <Box sx={{display:{xs:'none',md:'block'},mt:'70px',fontSize:'16px',fontWeight:'500',lineHeight:'18px'}}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small"  />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Box>
    
  );
};

export default BreadCrumbs;
