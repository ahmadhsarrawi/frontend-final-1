import React, { useContext } from "react";
import {
  Box,
  Stack,
  Typography,
  Grid,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logos from "../assets/images/logos.svg";
import CategoryTitledList from "./common/CategoryTitledList";
import LocationIcon from "../assets/images/LocationIcon";
import theme from "./common/Theme";
import Context from "../store/context";
import SpinLoader from "./common/SpinLoader";
import { NavLink, Link } from "react-router-dom";
import FooterScrollLink from "./common/FooterScrollLink";
import { HashLink } from "react-router-hash-link";
import ProductTitledList from "./common/ProductTitledList";

const list1Info = {
  title: "Shop by Category",
  links: [
    "Skincare",
    "Personal Care",
    "Handbags",
    "Apparels",
    "Watches",
    "Eye Wear",
    "Jewellerrry",
  ],
};
const list2Info = {
  title: "Shop by Products",
  links: [<NavLink to={"/#featured"}>Featured</NavLink>, "Trendy", "Brands"],
};

const AccordionContainer = (props) => {
  return (
    <Accordion
      defaultExpanded
      TransitionProps={{ "aria-expanded": "false" }}
      elevation={0}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="titleMedium" color={"lowEmphasis.main"}>
          More about CORA'L
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>{props.children}</AccordionDetails>
    </Accordion>
  );
};

function FooterGrid({ data, refLocation, handleScroll }) {
  return (
    <Grid
      container
      bgcolor="primary.main"
      sx={{
        padding: "32px 60px",
        width: "100%",

        // overflow: "hidden",
        [theme.breakpoints.down("sm")]: { gap: "24px" },
      }}
    >
      {data ? (
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <CategoryTitledList
            links
            listTitle={list1Info.title}
            listLinks={data ? data : list1Info.links}
          />
        </Grid>
      ) : (
        <SpinLoader />
      )}

      <Grid item xs={12} sm={6} md={3} lg={2}>
        <ProductTitledList
          listTitle={"Shop by Product"}
          listLinks={[
            { name: "Featured", id: "#featured" },
            { name: "Trendy", id: "#handpicked" },
            { name: "Brands", id: "#brands" },
          ]}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={8}>
        <Divider
          sx={{
            bgcolor: "primaryTint.main",
            mt: "12px",
            mb: "28px",
            [theme.breakpoints.up("md")]: { display: "none" },
          }}
        />
        <Stack
          spacing={{ xs: 2 }}
          sx={{
            display: "flex",
            alignItems: "flex-end",
            [theme.breakpoints.down("md")]: {
              alignItems: "flex-start",
            },
          }}
        >
          <Box
            sx={{
              mt: "17px",
              // mb: "30px",
            }}
          >
            <img alt="logos" src={logos} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              // mb: "10px",
            }}
          >
            <LocationIcon />
            <Typography variant="titleMedium" color="bright.main">
              United States
            </Typography>
          </Box>
          <Typography variant="titleMedium" color="lightText.main">
            © 2021 | Cora Leviene All Rights Reserved
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

const Footer = () => {
  const ctx = useContext(Context);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          [theme.breakpoints.down("sm")]: { display: "none" },
        }}
      >
        {ctx.categories ? <FooterGrid data={ctx.categories} /> : <SpinLoader />}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          [theme.breakpoints.up("sm")]: { display: "none" },
        }}
      >
        <AccordionContainer>
          {ctx.categories ? (
            <FooterGrid data={ctx.categories} />
          ) : (
            <SpinLoader />
          )}
        </AccordionContainer>
      </Box>
    </>
  );
};

export default Footer;
