import React,{useState} from 'react';
import { Grid, Typography,Box,Button,Divider } from '@mui/material';
import theme from '../Theme';
import { ThemeProvider } from "@mui/material/styles";
import Rating from '../Rating';
import ButtonWithIcon from '../ButtonWithIcon';
import { ReactComponent as BagIcon } from '../../../assets/icons/bag.svg';
import {ReactComponent as Wishlist} from '../../../assets/images/wishlist.svg';
import { margin } from '@mui/system';
export default function ProductDetails() {
    const [counter, setCounter] = useState(1);

    const incCounter= () => {
        setCounter((prevCount) => prevCount + 1);
      };
      const decCounter = () => {
        if (counter > 1) {
          setCounter((prevCount) => prevCount - 1);
        }
      };
  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} md={6} width="50%">
        <Grid container direction={"column"}>
          <Box>
            <Typography variant="h1" fontWeight="600" sx={{ fontSize: "34px" }}>
              Coach
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                color: `${theme.palette.lowEmphasis.main}`,
              }}
            >
              Leather Coach Bag with adjustable straps.
            </Typography>
          </Box>
        </Grid>
        <Box sx={{ marginTop: "32px", marginBottom: "32px" }}>
          <Rating
            rating="4"
            number="250"
            gap="14px"
            color={theme.palette.lightText.main}
          />
        </Box>
        <Box sx={{ marginTop: "32px", marginBottom: "10px" }}>Price</Box>
        <Divider />
        {/* quantity section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            marginBottom: "32px",
            marginTop: "10px",
          }}
        >
          <Typography color="#13101E" fontWeight="600">
            Quantity:
          </Typography>
          <Box
            sx={{
              width: "73px",
              height: "30px",
              display: "flex",
              flexDirection: "row",
              border: "1px solid",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "4px",
              borderColor: "primary.main",
            }}
          >
            <Button
              sx={{ padding: "0", minWidth: "24px" }}
              onClick={decCounter}
              color="highEmphasis"
            >
              -
            </Button>
            <Typography color="highEmphasis.main" fontSize="14px">
              {counter}
            </Typography>
            <Button
              sx={{ padding: "0", minWidth: "24px" }}
              onClick={incCounter}
              color="highEmphasis"
            >
              +
            </Button>
          </Box>
        </Box>
        {/* buttons */}
        <Grid container>
          <Grid item xs={12} md={7} >
            <ButtonWithIcon
              padding="10px 120px"
              type="primary"
              startIcon={<BagIcon />}
              fontSize="0.7rem"
            >
              Add to bag
            </ButtonWithIcon>
          </Grid>
          <Grid item xs={12} md={5} >
            <ButtonWithIcon
              padding="10px 50px"
              type="outlined"
              startIcon={<Wishlist />}
              fontSize="0.7rem"
            >
              Add to Wishlist
            </ButtonWithIcon>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
