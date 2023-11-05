import { Box } from "@mui/material";
import React from "react";

const InnerFlexWrapper = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", gap: "40px", flexGrow: "1" ,flexShrink:"1",padding:'0'}}
    >
      {children}
    </Box>
  );
};

export default InnerFlexWrapper;
