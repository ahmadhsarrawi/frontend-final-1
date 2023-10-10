import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import ButtonWithIcon from '../components/common/ButtonWithIcon'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/common/Theme';
import { Typography } from '@mui/material';


export default function Landing(props) {
  return (
    <ThemeProvider theme={theme}>
      <ButtonWithIcon variant='outlined' color='primaryTint'
      textVariant='bodyRegular' textColor='highlight.main'>Hello</ButtonWithIcon>
      <Footer />
    </ThemeProvider>
  );
}
