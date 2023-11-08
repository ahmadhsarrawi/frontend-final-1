import React, { useContext, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Stack,
  IconButton,
  Typography,
  useMediaQuery,
  Container,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import SearchWithIcon from "./common/SearchWithIcon";
import logo from "../assets/images/logo.svg";
import wishlist from "../assets/images/wishlist.svg";
import profile from "../assets/images/profile.svg";
import bag from "../assets/images/bag.svg";
import addToHome from "../assets/images/add-to-homescreen.svg";
import search from "../assets/images/search.svg";
import notification from "../assets/images/notification.svg";
import menu from "../assets/images/menu.svg";
import theme from "./common/Theme";
<<<<<<< HEAD
import Context from "../store/context";
import fetchData from "../services/APIs";

const HeaderTabs = ({ value, handleChange, categories }) => (
=======
import { Link } from "react-router-dom";
const HeaderTabs = ({ value, handleChange }) => (
>>>>>>> aaf90937b6c9a8022c30460cd4f04c20499460f5
  <Tabs
    value={value}
    onChange={handleChange}
    classes={{ indicator: "indicator-class" }}
  >
    {categories?.map((category, index) => (
      index <5 && (
        <Tab key={index} label={category.name} sx={tabStyles} />
      )
    ))}
  </Tabs>
);
const tabStyles = {
  textTransform: "capitalize",
  fontSize: "14px",
  color: "#171520",
};

const Header = () => {
  const ctx = useContext(Context);
  const [value, setValue] = React.useState(0);
  const isMobile = useMediaQuery(
    `(max-width: ${theme.breakpoints.values.sm}px)`
  );
  const isTablet = useMediaQuery(
    `(max-width:${theme.breakpoints.values.md1}px)`
  );

  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const data = await fetchData("categories/");
        ctx.setCategories(data);
        ctx.setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchDataAsync();
  }, [ctx]); 
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const iconsData = [
    { icon: wishlist, alt: "heart icon" },
    { icon: profile, alt: "profile icon" ,linkPage:"/sign-in"},
    { icon: bag, alt: "bag icon" },
  ];

  const mobileIconsData = [
    { icon: addToHome, alt: "heart icon" },
    { icon: search, alt: "profile icon" },
    { icon: notification, alt: "bag icon" },
  ];

  const iconSet = isMobile ? mobileIconsData : iconsData;

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="100%">
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: theme.palette.bright.main,
            boxShadow: "none",
            width: "100%",
            padding: "30px 0px",
          }}
        >
          <Toolbar
            style={{ padding: 0, minHeight: 0 }}
            sx={{ height: "20px", width: "100%" }}
          >
            <Stack
              direction="row"
              alignItems="center"
              width="100%"
              spacing={{ xs: 0, md: 4 }}
            >
              {(isMobile || isTablet) && (
                <>
                  <IconButton
                    size="large"
                    sx={{ color: theme.palette.primary.main, pl: "0" }}
                    aria-label="menu"
                  >
                    <img src={menu} alt="menu" />
                  </IconButton>
                  <Typography
                    variant="h6"
                    sx={{
                      marginLeft: "8px",
                      ...theme.typography.displaySmall,
                      color: theme.palette.primary.main,
                    }}
                  >
                    Home
                  </Typography>
                </>
              )}
              {!isMobile && !isTablet && (
                <>
                  <img
                    style={{ width: "108px", height: "22px" }}
                    src={logo}
                    alt="logo"
                  />
                  <HeaderTabs value={value} handleChange={handleChange} categories={ctx.categories||[]}/>
                </>
              )}
              <Stack
                direction="row"
                spacing={0.5}
                style={{ marginLeft: "auto" }}
              >
              
              {!isMobile && <SearchWithIcon />}
                {iconSet.map((data, index) => (
                  <Link to={data.linkPage} key={index}> {/* Use data.linkPage as the path */}
                    <IconButton>
                      <img src={data.icon} alt={data.alt} />
                    </IconButton>
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
      </Container>
    </ThemeProvider>
  );
};

export default Header;
