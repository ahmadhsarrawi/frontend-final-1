import React from "react";
import { Pagination, Box, Tabs, Tab } from "@mui/material";
import Label from "./Label";

const CustomPagination = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where each tab needs to be selected manually"
        className="tabs"
        sx={{ borderRadius: "12px",padding:'4px' }}
      >
        <Tab
          label="Item One"
          className="tab"
          sx={{
            mx: "2px",
            borderRadius: "8px",
            bgcolor: "grey.main",
            color: "lowEmphasis.main",
            fontSize: "12px",
            fontWeight: "500",
            lineHeight: "16px",
            padding: "6px 18px",
          }}
        />
        <Tab
          label="Item One"
          className="tab"
          sx={{
            mx: "2px",

            borderRadius: "8px",
            bgcolor: "grey.main",
            color: "lowEmphasis.main",
            fontSize: "12px",
            fontWeight: "500",
            lineHeight: "16px",
            padding: "6px 18px",
          }}
        />
        <Tab
          label="Item One"
          className="tab"
          sx={{
            mx: "2px",

            borderRadius: "8px",
            bgcolor: "grey.main",
            color: "lowEmphasis.main",
            fontSize: "12px",
            fontWeight: "500",
            lineHeight: "16px",
            padding: "6px 18px",
          }}
        />
      </Tabs>
    </Box>
  );
};

export default CustomPagination;
