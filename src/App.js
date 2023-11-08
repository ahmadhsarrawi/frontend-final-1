import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./components/common/Theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
<<<<<<< HEAD
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
=======
import Landing from "./pages/Landing";
import Categories from "./pages/Categories";
import Product from "./pages/Product";
import ContextProvider from "./store/ContextProvider";
import SignIn from "./pages/SignIn"; // Import the SignIn component
import SignUp from "./pages/SignUp";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <BrowserRouter basename="frontend-final-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/product/:id" element={<Product />} />
                  </Routes>
                  <Footer />
                </>
              }
            />
            <Route path="/sign-in" element={<SignIn />} /> {/* Sign-in page without header and footer */}
            <Route path="/sign-up" element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
>>>>>>> aaf90937b6c9a8022c30460cd4f04c20499460f5
      </ContextProvider>
        </BrowserRouter>
          <Footer />
    </ThemeProvider>
  );
}

export default App;

