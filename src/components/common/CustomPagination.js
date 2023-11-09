import React from "react";
import { Pagination, Box, Tabs, Tab, Button } from "@mui/material";
import Label from "./Label";
import ButtonWithIcon from "./ButtonWithIcon";

const CustomPagination = ({ page, numOfPages, setPage }) => {
  const pagesArray = []; //[1,2,3,4,5,6,7,8,9,10]
  // numOfPages = 7;
  // page = 1;
  for (let i = 0; i < numOfPages ; i++) {
    if (i == 0 || i == numOfPages-1) {
      pagesArray.push(i+1)
      
    }
    if ((i+1 == page || i+2 == page  || i == page) &&i!==0&&i!==numOfPages-1) {
      pagesArray.push(i+1)
    }
    
  }
  for (let i = 0; i < pagesArray.length; i++){
    if ((pagesArray[i + 1] - pagesArray[i]) > 1) {
      pagesArray.splice(i+1,0,'dots')
      i++
    }
  }

  console.log(pagesArray);

  return (
    <Box sx={{ display: "flex", gap: "8px", mt: "24px", alignItems: "center" }}>
      <Box
        sx={{
          borderRadius: "12px",
          bgcolor: "grey.main",
          display: "flex",
          flexDirection: "row",
          gap: "4px",
          padding: "4px",
          alignItems: "center",
        }}
      >
        {pagesArray.map((item,index) => {
          if (item == 'dots') {
            return <Box key={index} sx={{color:'lowEmphasis.main'}}>...</Box>
          } else {
            return <Label key={index} setPage={setPage} page={page} pageNum={item}>{item}</Label>
          }

        })}
      </Box>
      <Button sx={{textTransform:'none',color:'lowEmphasis.main'}} onClick={()=>setPage(page=>page+1)} disabled={page==numOfPages&&true}>Next</Button>
    </Box>
  );
};

export default CustomPagination;
