import React from 'react'
import { Container,Paper } from '@mui/material'
import BrandTile from './common/BrandTile'
import GridContainer from './common/GridContainer'
import TitleWithButton from './common/TitleWithButton'
import brand1 from "../assets/images/block.svg";
import brand2 from "../assets/images/block-1.svg";
import brand3 from "../assets/images/block-2.svg";
import brand4 from "../assets/images/block-3.svg";
import brand5 from "../assets/images/block-4.svg";
import brand6 from "../assets/images/block-5.svg";

const ShopByBrands = () => {
  return (
    <Paper elevation={0} sx={{ width: "100%",borderRadius:'0',overflow:'hidden',py:'32px' }}>
          <Container maxWidth="100%">
              <TitleWithButton title={'Shop by Brands'} titleColor={'dark.main'} mb='24px'/>
        <GridContainer
          mdSize={2}
          xsSize={4}
          data={[
            <BrandTile id={1} image={brand1} />,
            <BrandTile id={13} image={brand2} />,
            <BrandTile id={14} image={brand3} />,
            <BrandTile id={12} image={brand4} />,
            <BrandTile id={121} image={brand5} />,
            <BrandTile id={122} image={brand6} />,
          ]}
        ></GridContainer>
      </Container>
    </Paper>
  );
}

export default ShopByBrands