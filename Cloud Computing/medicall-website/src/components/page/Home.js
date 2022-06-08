import React from "react";
import { Link } from "react-router-dom";
import "../css/App.css";
import HeroSec from "../HeroSec";
import Footer from "../Footer";
import About from "../About";
import Feature from "../Feature";

function Home() {
  return (
    <>
      <HeroSec />
      <About />
      <Feature />
      <Footer />
    </>
  );
}

export default Home;
