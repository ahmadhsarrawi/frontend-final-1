import React from 'react';
import {AppBar,Toolbar, Typography} from '@mui/material';
export default function Header() {
  return (
    <AppBar sx={{backgroundColor:'white'}}>
       <Toolbar>
        <Typography sx={{color:'#17494D'}}>CORA'L</Typography>
       </Toolbar>
    </AppBar>
  );
}

