import React from "react";
import HorizontalFlexContainer from "./common/HorizontalFlexContainer";
import HorizontalCard from "./common/HorizontalCard";
import { Container, Paper } from "@mui/material";
import TitleWithButton from "./common/TitleWithButton";

const NewArrivals = () => {
  return (
    <Container maxWidth="100%">
      <TitleWithButton title={"New Arrivals"} button titleColor={"dark.main"} />
      <HorizontalFlexContainer>
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
      </HorizontalFlexContainer>
    </Container>
  );
};

export default NewArrivals;
