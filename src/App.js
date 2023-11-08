import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./components/common/Theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Product from "./pages/Product";
import ContextProvider from "./store/ContextProvider";
import SignIn from "./pages/SignIn"; // Import the SignIn component
import SignUp from "./pages/SignUp";
import CategoryProducts from "./pages/CategoryProducts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <BrowserRouter basename="frontend-final-1">
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/categories/:id" element={<CategoryProducts />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>

          <Routes>
            <Route path="/sign-in" element={<SignIn />} />{" "}
            {/* Sign-in page without header and footer */}
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
