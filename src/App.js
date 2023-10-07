import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import ContextProvider from "./store/context";
import Header from "./components/Header"



function App() {

  return (
    <ContextProvider>
      <BrowserRouter basename="frontend-final-1">
        <Header/>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
