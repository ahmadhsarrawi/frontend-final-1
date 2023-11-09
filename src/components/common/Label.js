import React from 'react'
import { Button } from '@mui/material'
const Label = ({children,padding,setPage,page,pageNum}) => {
  return (
      <Button sx={{borderRadius:'8px',bgcolor:page==pageNum?'primary.main':'grey.main',color:page==pageNum?'white':'lowEmphasis.main',fontSize:'12px',fontWeight:'500',lineHeight:'16px',padding:'6px 18px',height:'40px',width:"52px",display:"inline-block"}} onClick={()=>setPage(pageNum)} >{children}</Button>
  )
}

export default Label