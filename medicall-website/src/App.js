import React from "react";
import "./components/css/App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/page/Home";
import Hospilocate from "./components/page/Hospilocate";
import AboutUs from "./components/page/AboutUs";
import Download from "./components/page/Downloadpage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/hospilocate" element={<Hospilocate />} />
          <Route path="/Download" element={<Download />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
