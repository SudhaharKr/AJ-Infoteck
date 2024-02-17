import React from "react";
// Router Dom
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Digital from "../Pages/Digital/Digital";
import AdMaking from "../Pages/AdMaking/AdMaking";
import BPO from "../Pages/BPO/bpo";
import Contact from "../Pages/Contact/Contact";



const Router = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Digital />} path="/digital-marketing" />
        <Route element={<AdMaking />} path="/Ad's-making" />
        <Route element={<BPO />} path="/BPO" />
        <Route element={<Contact />} path="/Contact" />
        
      </Routes>
    </div>
  );
};

export default Router;
