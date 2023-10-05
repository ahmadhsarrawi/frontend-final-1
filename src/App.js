import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
function App() {
  return (
    <>
    <BrowserRouter basename='frontend-final-1'>
    <Routes>
      <Route path='/' element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
