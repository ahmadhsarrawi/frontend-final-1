import React,{useContext, useEffect,useState} from 'react'
import TitleWithButton from './common/TitleWithButton'
import { Container } from '@mui/system'
import HorizontalFlexContainer from './common/HorizontalFlexContainer';
import Context from '../store/context';
import fetchData from '../services/APIs';


const TopCategories = () => {

    const ctx = useContext(Context);

    
  return (
      <Container maxWidth="100%">
          <TitleWithButton title='Top Categories'/>
      <HorizontalFlexContainer title={"Top Categories"} gap="5px" mobileOnly>
        {/* <IconTile image="icon-fill-cream.svg" title={"Skincare"} />
        <IconTile image="icon-fill-ring.svg" title={"Jewellery"} />
        <IconTile image="icon-fill-bag.svg" title={"Handbags"} />
        <IconTile image="icon-fill-watch.svg" title={"Watches"} />
        <IconTile image="icon-fill-cream.svg" title={"Eyewear"} /> */}
      </HorizontalFlexContainer>
    </Container>
  );
}

export default TopCategories