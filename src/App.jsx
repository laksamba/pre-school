import { useState } from "react";


import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import LandingPage from "./layout/LandingPage";

import NavBar from './components/NavBar'
import Spage from "./pages/spage";
import Detail from "./pages/Detail";



function App() {
  return (
    <div className="px-8 bg-gray-100">
      <BrowserRouter>
      <NavBar/>
      
        <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/sp" element={<Spage />} />
        <Route path="/about" element={<Detail />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
