import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About"
import "./App.css"
import Contact from "./pages/Contact";

function App() {


  return (
      <div className='root'>
      <Navbar />
<Routes>     
       <Route path="/about" element= {<About />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />} />
</Routes>

<Footer />
      </div>
  );
}

export default App;