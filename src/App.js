import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import { ThemeProvider } from "@mui/material";
import theme from "./components/common/Theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import ContextProvider from "./store/ContextProvider";
import CategoryProducts from "./pages/CategoryProducts";
function App() {
  return (
    <ThemeProvider theme={theme}>
          <Header />
        <BrowserRouter basename="frontend-final-1">
      <ContextProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/categories/:id" element={<CategoryProducts />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
      </ContextProvider>
        </BrowserRouter>
          <Footer />
    </ThemeProvider>
  );
}
export default App;
