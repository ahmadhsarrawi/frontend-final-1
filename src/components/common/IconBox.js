import React from 'react';
import { Box } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

const IconBox = ({ backgroundColor, iconColor }) => {
  return (
    <Box
      sx={{
        borderRadius: '100%',
        backgroundColor,
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <EastIcon color={iconColor} />
    </Box>
  );
};

export default IconBox;
