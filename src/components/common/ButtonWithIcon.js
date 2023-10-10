import { Button, Typography, } from "@mui/material";

import React from "react";

const ButtonWithIcon = (props) => {
  return (
          
    <Button variant={props.variant} color={props.color} startIcon={props.startIcon} endIcon={props.endicon}  sx={{
      fontSize: '14px',
      padding:'10px 120px'
      }}  >
      <Typography variant={props.textVariant} color={props.textColor}>{props.children}</Typography>
      </Button>

  );
};

export default ButtonWithIcon;
