import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import theme from "../Theme";
import { ThemeProvider } from "@mui/material/styles";

export default function ProductTabs() {
  const [tabValue, setTabValue] = useState("1");
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Define descriptions for each tab
  const descriptions = {
    "1": "This is the description for Product Description.",
    "2": "This is the description for Related Products.",
    "3": "This is the description for Ratings and Reviews.",
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Tabs
          sx={{
            backgroundColor: "rgb(243, 246, 249)",
            maxHeight: "48px",
            padding: "8px 16px 8px 16px",
            borderRadius: "12px",
            gap: " 24px",
            alignItems: "center",
            display: "flex",
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
          value={tabValue}
          onChange={handleChange}
        >
          <Tab
            label="Product Description"
            value="1"
            sx={{
              textTransform: "none",
              marginRight: "20px",
              height: "30px",
              fontSize: "16px",
              "&.Mui-selected": {
                backgroundColor: `${theme.palette.primary.main}`,
                minHeight: "0px",
                borderRadius: "8px",
                color: "bright.main",
                alignSelf: "center",
              },
            }}
          />
          <Tab
            label="Related Products"
            value="2"
            sx={{
              textTransform: "none",
              marginRight: "20px",
              height: "30px",
              fontSize: "16px",
              "&.Mui-selected": {
                backgroundColor: `${theme.palette.primary.main}`,
                minHeight: "0px",
                borderRadius: "8px",
                color: "bright.main",
                alignSelf: "center",
              },
            }}
          />
          <Tab
            label="Ratings and Reviews"
            value="3"
            sx={{
              textTransform: "none",
              marginRight: "20px",
              height: "30px",
              fontSize: "16px",
              "&.Mui-selected": {
                backgroundColor: `${theme.palette.primary.main}`,
                minHeight: "0px",
                borderRadius: "8px",
                color: "bright.main",
                alignSelf: "center",
              },
            }}
          />
        </Tabs>

        {/* Description rendering based on the selected tab value */}
        <Box sx={{ margin: "20px 0", textAlign: "center" }}>
          <Typography sx={{textAlign:'left',color:`${theme.palette.lowEmphasis.main}`}}>{descriptions[tabValue]}</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
