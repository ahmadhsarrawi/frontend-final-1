import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import ContextProvider from "./store/context";
import { ThemeProvider } from "@mui/material";
import theme from "./components/common/Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <BrowserRouter basename="frontend-final-1">
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
