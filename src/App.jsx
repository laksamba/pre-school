import { useState } from "react";


import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import LandingPage from "./layout/LandingPage";

import NavBar from './components/NavBar'

import Detail from "./pages/Detail";
import About from "./pages/About";
import ScrollToTop from "./helper/ScrollToTop";
import TestimoialPage from "./pages/TestimoialPage";
import Resources from "./pages/Resources";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="px-18">
      <BrowserRouter>
      <NavBar/>
      <ScrollToTop/>
      
        <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/testimonial" element={<TestimoialPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/resource" element={<Resources/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
