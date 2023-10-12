import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import logos from "../assets/images/logos.svg";
import TitledList from "./common/TitledList";
import LocationIcon from "../assets/images/LocationIcon";

const list1Info = {
  title: "Shop by Category",
  links: [
    "Skincare",
    "Personal Care",
    "Handbags",
    "Apparels",
    "Watches",
    "Eye Wear",
    "Jewellery",
  ],
};
const list2Info = {
  title: "Shop by Products",
  links: ["Featured", "Trendy", "Brands"],
};

const Footer = () => {
  return (
    <Box 
      bgcolor="primary.main"
      component="footer"
      sx={{
        padding: "32px 60px",
        position: "absolute",
        width: "100%",
        bottom: 0,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", gap: "68px" }}>
        <TitledList listTitle={list1Info.title} listLinks={list1Info.links} />
        <TitledList listTitle={list2Info.title} listLinks={list2Info.links} />
      </Box>
      <Stack>
        <Box
          sx={{
            mt: "17px",
            mb: "30px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img alt="logos" src={logos} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            justifyContent: "flex-end",
            mb: "10px",
          }}
        >
          <LocationIcon />
          <Typography variant="titleMedium" color="bright.main">
            United States
          </Typography>
        </Box>
        <Typography variant="titleMedium" color="lightText.main" sx={{}}>
          © 2021 | Cora Leviene All Rights Reserved
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
