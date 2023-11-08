import React,{useContext, useEffect,useState} from 'react'
import TitleWithButton from './common/TitleWithButton'
import { Container } from '@mui/system'
import HorizontalFlexContainer from './common/HorizontalFlexContainer';
import Context from '../store/context';
import fetchData from '../services/APIs';
import SpinLoader from './common/SpinLoader';
import IconTile from './common/IconTile';
import { NavLink } from 'react-router-dom';


const TopCategories = () => {

  const ctx = useContext(Context);
  useEffect(() => {
    fetchData('categories').then(data=>ctx.setCategories(data))
  },[])
console.log(ctx.categories);
  return (
      <Container maxWidth="100%" sx={{display:{sm2:'none'}}}>
          <TitleWithButton title='Top Categories'/>
          <HorizontalFlexContainer title={"Top Categories"} gap="5px" mobileOnly>
              {ctx.categories ? ctx.categories.map((item) => {
                return <IconTile image={item.image} title={item.name} key={item.id} id={ item.id} />
              }):<SpinLoader/>}
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