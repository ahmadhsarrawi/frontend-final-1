import React,{useEffect,useContext} from "react";
import GridContainer from "./common/GridContainer";
import Tile from "./common/Tile";
import { Paper, Container } from "@mui/material";
import TitleWithButton from "./common/TitleWithButton";
import Context from "../store/context";
import fetchData from "../services/APIs";


const HandPickedCollections = () => {
  const ctx = useContext(Context);
  
  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        py: "32px",
        bgcolor: "primary.main",
        borderRadius: "0",
      }}
    >
      <Container maxWidth="100%">
        <TitleWithButton
          title="Handpicked Collections"
          titleColor={"bright.main"}
          mb="23px"
        />
        <GridContainer
          xsSize={6}
          mdSize={3}
          data={[
            <Tile id={2} image={"perfume.png"} title={"Personal Care"} />,
            <Tile id={21} image={"bag.png"} title={"Handbags"} />,
            <Tile id={23} image={"watch.png"} title={"Wrist Watches"} />,
            <Tile id={24} image={"glasses.png"} title={"Sun Glasses"} />,
          ]}
        ></GridContainer>
      </Container>
    </Paper>
  );
};

export default HandPickedCollections;
