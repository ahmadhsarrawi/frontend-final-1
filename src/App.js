import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

import { ThemeProvider } from "@mui/material";
import theme from "./components/common/Theme";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Categories from "./pages/Categories";
import ContextProvider from "./store/ContextProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Header />
        <BrowserRouter basename="/frontend-final-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="categories" element={<Categories />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
