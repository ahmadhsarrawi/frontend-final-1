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
import BrandsPage from "./pages/BrandsPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <BrowserRouter basename="frontend-final-1">
          <Routes>
            {/* Sign In and Sign Up pages without Header and Footer */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            {/* Routes with Header and Footer */}
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <Routes>
                    <Route index element={<Landing />} />
                    <Route
                      path="/categories/:id"
                      element={<CategoryProducts />}
                    />
                    <Route path="/brands/:id" element={<BrandsPage />} />
                    <Route path="/product/:id" element={<Product />} />
                  </Routes>
                  <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
