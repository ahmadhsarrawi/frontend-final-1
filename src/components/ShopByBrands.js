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
            <BrandTile image={brand1} />,
            <BrandTile image={brand2} />,
            <BrandTile image={brand3} />,
            <BrandTile image={brand4} />,
            <BrandTile image={brand5} />,
            <BrandTile image={brand6} />,
          ]}
        ></GridContainer>
      </Container>
    </Paper>
  );
}

export default ShopByBrands