import React from "react";
import GridContainer from "./common/GridContainer";
import Tile from "./common/Tile";
import { Paper, Container } from "@mui/material";
import TitleWithButton from "./common/TitleWithButton";

const HandPickedCollections = () => {
  return (
    <Paper elevation={0} sx={{ width: "100%", py: "32px",bgcolor:'primary.main' ,borderRadius:'0',}}>
          <Container maxWidth='100%' >
              <TitleWithButton title='Handpicked Collections' titleColor={'bright.main'} mb='23px'/>
        <GridContainer
          xsSize={6}
          mdSize={3}
          data={[
            <Tile image={"perfume.png"} title={"Personal Care"} />,
            <Tile image={"bag.png"} title={"Handbags"} />,
            <Tile image={"watch.png"} title={"Wrist Watches"} />,
            <Tile image={"glasses.png"} title={"Sun Glasses"} />,
          ]}
        ></GridContainer>
      </Container>
    </Paper>
  );
};

export default HandPickedCollections;
