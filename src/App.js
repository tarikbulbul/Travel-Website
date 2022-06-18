import * as React from "react";
import Navbar from "./components/Navbar"
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./components/pages/Home"
import Services from "./components/pages/Services"
import Products from "./components/pages/Products"
import SignUp from "./components/pages/SignUp"
import HeroSection from "./components/HeroSection";








function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" element={<Services /> } />
        <Route path="/products" element={<Products /> } />
        <Route path="/sign-up" element={<SignUp /> } />
      </Routes>
    </div>
  );
}

export default App