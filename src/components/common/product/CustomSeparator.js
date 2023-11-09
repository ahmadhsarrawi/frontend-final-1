import React, { useEffect, useContext, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import useMediaQuery from "@mui/material/useMediaQuery";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link, useNavigate } from "react-router-dom";
import Context from "../../../store/context";
import fetchData from "../../../services/APIs";

export default function CustomSeparator({ categoryId }) {
  const navigate = useNavigate();
  const ctx = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData(`categories/${categoryId}`);
        ctx.setCategory(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (categoryId) {
      fetchCategoryData();
    }
  }, [categoryId]);

  const linkStyle = {
    textDecoration: 'none',
    color: '#1B4B66',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const handleClick = (event, path) => {
    event.preventDefault();
    navigate(path);
  };

  if (isLoading) {
    return null; // or you can render a loading spinner or message
  }

  if (isMobile) {
    return (
      <Stack spacing={2}>
        <ChevronLeftIcon fontSize="large" color="#13101E"/>
      </Stack>
    );
  }

  const breadcrumbs = [
    <Link
      style={linkStyle}
      to="/"
      onClick={(event) => handleClick(event, "/")}
      key="1"
    >
      Home
    </Link>,
    <Link
      style={linkStyle}
      to={`/categories/${categoryId}`}
      onClick={(event) => handleClick(event, `/categories/${categoryId}`)}
      key="2"
    >
      {ctx.category?.name}
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
