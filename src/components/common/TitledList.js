import React from 'react'
import { List, ListItem,Typography } from '@mui/material';





const TitledList = ({listTitle,listLinks}) => {
  return (
    <List 
      sx={{ display: "flex", flexDirection: "column", gap: "8px", }}
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
    >{listLinks.map(item => {
      return (
        <ListItem disablePadding>
          <Typography
            color="lightText.main"
            variant="displaySmall"
            fontWeight={"500"}
          >
            {item}
          </Typography>
        </ListItem>
      );
    })}
      
    </List>
  );
}

export default TitledList