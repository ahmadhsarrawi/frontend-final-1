import React, { useEffect, useContext } from "react";
import GridContainer from "./common/GridContainer";
import Tile from "./common/Tile";
import { Paper, Container, Grid } from "@mui/material";
import TitleWithButton from "./common/TitleWithButton";
import Context from "../store/context";
import fetchData from "../services/APIs";
import SpinLoader from "./common/SpinLoader";

const HandPickedCollections = React.forwardRef((props,ref)=> {
  const ctx = useContext(Context);
  useEffect(() => {
    ctx.setHandpicked(null);
    fetchData("products/handpicked-collections").then((data) =>
      ctx.setHandpicked(data)
    );
  }, []);
  return (
    <Paper ref={ctx.handpickedRef} id='handpicked'
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
        {ctx.handpicked ? (
          <GridContainer xsSize={6} mdSize={3}>

            {ctx.handpicked?ctx.handpicked.data.map((item,index) => {
              return index<4? <Grid key={item.id} item xs={6} md={3}>
                <Tile image={item.image} id={item.id} title={item.name} />
              </Grid>:''
            }):''}

          </GridContainer>
        ) : (
          <SpinLoader />
        )}
      </Container>
    </Paper>
  );
});

export default HandPickedCollections;
