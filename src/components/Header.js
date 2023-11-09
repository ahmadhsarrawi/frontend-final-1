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
  Menu,
  MenuItem,
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
import Context from "../store/context";
import fetchData from "../services/APIs";
import { Link } from "react-router-dom";
import axios from "axios";
const HeaderTabs = ({ value, handleChange, categories }) => (
  <Tabs value={value} onChange={handleChange} classes={{ indicator: "indicator-class" }}>
    {categories?.slice(0, 5).map((category) => (
      <Tab
        label={category.name}
        sx={tabStyles}
        key={category.id}
        component={Link}
        to={`/categories/${category.id}`}
      />
    ))}
  </Tabs>
);

const tabStyles = {
  textTransform: "capitalize",
  fontSize: "14px",
  color: "#171520",
};
const linkStyles = {
  color: "#171520", // Change link color
  textDecoration: "none", // Remove underline
};
// ... (other imports)

const Header = () => {
  const ctx = useContext(Context);
  const [value, setValue] = React.useState(0);
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.values.sm}px)`);
  const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.values.md1}px)`);

  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };
  const handleSignOut = async () => {
    try {
      // You can add any necessary logic here before or after the sign-out request
      // For example, clearing local storage, updating context, etc.
      localStorage.removeItem('token'); // Remove the token from local storage

      await axios.post('https://e-store-comerce.onrender.com/auth/signout');
      ctx.setIsSignedIn(false);
      handleMenuClose();
    } catch (error) {
      console.error('Sign-out error', error);
    }
  };
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
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const iconsData = [
    { icon: wishlist, alt: "heart icon" },
    { icon: profile, alt: "profile icon" },
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
              {(isMobile ) && (
                <>
                  <IconButton
                    size="large"
                    sx={{ color: theme.palette.primary.main, pl: "0" }}
                    aria-label="menu"
                    onClick={handleMenuOpen}
                  >
                    <img src={menu} alt="menu" />
                  </IconButton>
                  {isMobile && (
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
                  )}
                </>
              )}
              {isTablet&&!isMobile&&(<Link to="/">
                  <img style={{ width: "108px", height: "22px" }} src={logo} alt="logo" />
                </Link>)}
              {(!isMobile && !isTablet) && (
                <Link to="/">
                  <img style={{ width: "108px", height: "22px" }} src={logo} alt="logo" />
                </Link>
              )}
              {(!isMobile && !isTablet) && (
                <HeaderTabs value={value} handleChange={handleChange} categories={ctx.categories || []} />
              )}
              <Stack
                direction="row"
                spacing={0.5}
                style={{ marginLeft: "auto" }}
              >
                {!isMobile && <SearchWithIcon />}
                {iconSet.map((data, index) => (
                  <IconButton     onClick={data.alt === "profile icon" ? handleMenuOpen : null}
                  key={index}>
                    <img src={data.icon} alt={data.alt} /> {/* Open menu on clicking icon */}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
        <Menu
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={handleMenuClose}
        >
          {ctx.isSignedIn ? (
            <div>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/your-profile" style={linkStyles}>
                  Your Profile
                </Link>
              </MenuItem>
              <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
            </div>
          ) : (
            <div>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/sign-in" style={linkStyles}>
                  Sign In
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/sign-up" style={linkStyles}>
                  Sign Up
                </Link>
              </MenuItem>
            </div>
          )}
        </Menu>
      </Container>
    </ThemeProvider>
  );
};

export default Header;
