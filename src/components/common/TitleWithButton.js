import React from 'react'
import { GrNext } from 'react-icons/gr';
import { Box,Typography } from '@mui/material';
import ButtonWithIcon from './ButtonWithIcon';

const TitleWithButton = ({titleColor,title,button,mb}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: mb,
      }}
    >
      <Typography
        sx={{ typography: { sm: "displayLarge", xs: "titleRegular" } }}
        color={titleColor}
      >
        {title}
      </Typography>
      {button && (
        <ButtonWithIcon
          padding={"10px 8px"}
          type={"default"}
          endIcon={<GrNext/>}
        >
          View All
        </ButtonWithIcon>
      )}
    </Box>
  );
}

export default TitleWithButton