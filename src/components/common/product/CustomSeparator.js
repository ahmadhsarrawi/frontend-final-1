import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import useMediaQuery from "@mui/material/useMediaQuery";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CustomSeparator() {
  const isMobile = useMediaQuery("(max-width:600px)");

  if (isMobile) {
    return (
      // Mobile design with only icon
      <Stack spacing={2}>
        <ChevronLeftIcon fontSize="large" color="#13101E"/>
      </Stack>
    );
  }

  // Default design with labels for larger screens
  const breadcrumbs = [
    <Link
      underline="hover"
      fontSize="16px"
      key="1"
      color="#1B4B66"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      color="#1B4B66"
      fontSize="16px"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Handbag
    </Link>,
    <Typography key="3" color="#626262">
      Label
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        color="#171520"
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
