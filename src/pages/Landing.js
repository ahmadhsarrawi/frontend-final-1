import React from "react";
import Banner from "../components/Banner";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/common/Theme";
import HorizontalFlexContainer from "../components/common/HorizontalFlexContainer";
import IconTile from "../components/common/IconTile";
import NewArrivals from "../components/NewArrivals";
import HandPickedCollections from "../components/HandPickedCollections";
import ShopByBrands from "../components/ShopByBrands";
import Hero from "../components/Hero";

export default function Landing(props) {
  return (
    <ThemeProvider theme={theme}>
      <Hero />
      <HorizontalFlexContainer title={"Top Categories"} gap="5px" mobileOnly>
        <IconTile image="icon-fill-cream.svg" title={"Skincare"} />
        <IconTile image="icon-fill-ring.svg" title={"Jewellery"} />
        <IconTile image="icon-fill-bag.svg" title={"Handbags"} />
        <IconTile image="icon-fill-watch.svg" title={"Watches"} />
        <IconTile image="icon-fill-cream.svg" title={"Eyewear"} />
      </HorizontalFlexContainer>
      <NewArrivals />
      <HandPickedCollections />
      <ShopByBrands />
      <Banner />
    </ThemeProvider>
  );
}
