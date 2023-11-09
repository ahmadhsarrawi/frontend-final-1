import { Button, ListItem, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const FooterScrollLink = ({ children, title, onClick }) => {
  return (
    <ListItem disablePadding onClick={onClick} sx={{ cursor: "pointer" }}>
      <NavLink style={{textDecoration:'none'} } to='/'>
        <Typography
          color="lightText.main"
          variant="displaySmall"
          fontWeight={"500"}
        >
          {title}
        </Typography>
      </NavLink>
    </ListItem>
  );
};

export default FooterScrollLink;
