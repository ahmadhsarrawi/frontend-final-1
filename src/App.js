import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

import { ThemeProvider } from "@mui/material";
import theme from "./components/common/Theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product";

import Categories from "./pages/Categories";
import ContextProvider from "./store/ContextProvider";

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <BrowserRouter basename="frontend-final-1">
          
            <Header />
            <Routes>
              <Route path="/" element={<Landing />} />
            </Routes>
            <Footer />
         
        </BrowserRouter>
      </ContextProvider> 
    </ThemeProvider>
  );
}

export default App;
