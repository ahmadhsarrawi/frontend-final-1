import React from "react";
import Banner from "../components/Banner";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/common/Theme";
import NewArrivals from "../components/NewArrivals";
import HandPickedCollections from "../components/HandPickedCollections";
import ShopByBrands from "../components/ShopByBrands";
import Hero from "../components/Hero";
import TopCategories from "../components/TopCategories";

export default function Landing(props) {
  return (
    <ThemeProvider theme={theme}>
      <Hero />
      <TopCategories />
      <NewArrivals />
      <HandPickedCollections />
      <ShopByBrands />
      <Banner />
    </ThemeProvider>
  );
}
