import React from "react";
import { Typography, List, ListItem } from "@mui/material";
import { HashLink } from "react-router-hash-link";

const ProductTitledList = ({ listTitle, listLinks }) => {
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
      {listLinks.map((item) => {
        return (
          <ListItem disablePadding key={item.id}>
            <HashLink to={"/" + item.id} style={{ textDecoration: "none" }} smooth>
              <Typography
                color="lightText.main"
                variant="displaySmall"
                fontWeight={"500"}
              >
                {item.name}
              </Typography>
            </HashLink>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ProductTitledList;
