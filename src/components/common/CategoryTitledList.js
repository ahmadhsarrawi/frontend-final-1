import React from "react";
import { List, ListItem, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Link from "@mui/material";

const CategoryTitledList = ({ listTitle, listLinks, links, children }) => {
  return (
    <List
      sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
      subheader={
        <Typography
          sx={{ mb: "4px" }}
          color="bright.main"
          variant="displaySmall"
          fontWeight="500"
        >
          {listTitle}
        </Typography>
      }
    >
      {links &&
        listLinks.map((item) => {
          return (
            <ListItem disablePadding key={item.id}>
              <NavLink
                to={"/categories/" + item.id}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  color="lightText.main"
                  variant="displaySmall"
                  fontWeight={"500"}
                >
                  {item.name}
                </Typography>
              </NavLink>
            </ListItem>
          );
        })}
      
    </List>
  );
};

export default CategoryTitledList;
