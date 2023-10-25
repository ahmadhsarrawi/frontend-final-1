import React from 'react'
import { Box,Button } from '@mui/material'
const Label = ({children,padding}) => {
  return (
      <Button sx={{borderRadius:'8px',bgcolor:'grey.main',color:'lowEmphasis.main',fontSize:'12px',fontWeight:'500',lineHeight:'16px',padding:'6px 18px',}}>{children}</Button>
  )
}

export default Label