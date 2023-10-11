// SearchComponent.jsx
import React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

const StyledSearch = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent:'flex-end',
  backgroundColor: '#F1F1F1',
  padding: '8px',
  borderRadius:'4px',
  width:'362px',
  height:'44px',

});

const SearchWithIcon = () => {
  return (
    <StyledSearch>
      <SearchIcon sx={{color:'#171520'}}/>
      <InputBase
       size='100%'
        placeholder="Search for products or brands....."
        inputProps={{ 'aria-label': 'search' }}
        style={{color:' #626262',fontSize:'0.875rem',width:'100%',}}
      />
    </StyledSearch>
  );
};

export default SearchWithIcon;
