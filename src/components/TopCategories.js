import React,{useContext} from 'react'
import TitleWithButton from './common/TitleWithButton'
import { Container } from '@mui/system'
import HorizontalFlexContainer from './common/HorizontalFlexContainer';
import Context from '../store/context';
import SpinLoader from './common/SpinLoader';
import IconTile from './common/IconTile';


const TopCategories = () => {

  const ctx = useContext(Context);
 
  return (
      <Container maxWidth="100%" sx={{display:{sm2:'none'}}}>
          <TitleWithButton title='Top Categories'/>
          <HorizontalFlexContainer title={"Top Categories"} gap="5px" mobileOnly>
              {ctx.categories ? ctx.categories.map((item) => {
                return <IconTile image={item.image} title={item.name} key={item.id} id={ item.id} />
              }):<SpinLoader/>}
       
      </HorizontalFlexContainer>
    </Container>
  );
}

export default TopCategories