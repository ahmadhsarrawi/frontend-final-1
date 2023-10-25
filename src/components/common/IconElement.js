import { Icon } from "@mui/material";
import React from "react";

const IconElement = ({ icon }) => {
  return (
    <Icon sx={{display:'flex', alignItems:'center',justifyContent:'center'}}>
      <img className='iconImage' src={icon} />
    </Icon>
  );
};

export default IconElement;
