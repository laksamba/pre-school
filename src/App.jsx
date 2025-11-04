import { useState } from "react";


import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import LandingPage from "./layout/LandingPage";

import NavBar from './components/NavBar'
import Spage from "./pages/spage";
import Detail from "./pages/Detail";
import About from "./pages/About";
import ScrollToTop from "./helper/ScrollToTop";



function App() {
  return (
    <div className="px-8 bg-gray-100">
      <BrowserRouter>
      <NavBar/>
      <ScrollToTop/>
      
        <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/sp" element={<Spage />} />
        <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
